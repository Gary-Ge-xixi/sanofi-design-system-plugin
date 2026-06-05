# Sanofi Elements 插件冲突 Review 与 Cursor 使用说明

生成时间：2026-06-04
项目根目录：`<repo-root>`
插件目录：`<repo-root>/design-system-plugin`

## 1. Review 结论

当前项目可以继续作为迭代依据。`skill`、`.cursor/rules`、`sanofi-ds` 统一入口、底层 scripts、rules index、registry 之间没有发现会导致执行链断裂的结构性冲突。

本次 review 发现并修正了两个口径问题：

| 问题 | 风险 | 处理 |
|---|---|---|
| `.codex-plugin/plugin.json` 默认提示仍偏向 Checkbox 早期样例 | 插件被调用时可能误导 AI 只做组件 demo，而不是业务/admin 页面 | 已更新为 registry-first、page profile、`sanofi-ds` 验证工作流 |
| Cursor rule 同时要求跑 `sanofi-ds business standards` 和旧 wrapper `business-standards` | 两者实际指向同一验证链，重复且容易让使用者误解入口 | 已保留 `sanofi-ds business standards`，去掉重复 wrapper 调用 |

当前需要注意的不是“冲突”，而是“分层角色要清楚”：设计师和 Cursor 默认使用 `design-system-plugin/scripts/sanofi-ds`；底层 scripts 保留给工程维护和故障排查。

## 2. 当前本地规模

| 模块 | 当前数量 / 状态 |
|---|---:|
| scripts | 67 |
| registry items | 623 |
| docs | 111 |
| Storybook stories | 429 |
| component docs | 95 |
| component contracts | 95 |
| atomic components | 93 |
| completed components | 93 |
| unsupported components | 2 |
| rules | 37 |
| fallback gaps | 8 |
| Cursor project rule | `.cursor/rules/sanofi-design-system.mdc` 已存在 |
| Codex plugin manifest | `.codex-plugin/plugin.json` 必填字段检查通过 |

## 3. 各模块职责

| 层级 | 文件 / 入口 | 职责 | 使用者 |
|---|---|---|---|
| Codex plugin manifest | `design-system-plugin/.codex-plugin/plugin.json` | 描述插件能力、默认提示、Codex 插件元数据 | Codex / 插件安装方 |
| Skill | `design-system-plugin/skills/design-prototype-generator/SKILL.md` | 定义 AI 生成 HTML 时必须遵守的读取、解析、验证顺序 | Codex / AI agent |
| Cursor rule | `.cursor/rules/sanofi-design-system.mdc` | 让 Cursor 在本项目中使用同一套设计系统规则 | Cursor / 设计师 / 研发 |
| Unified toolkit | `design-system-plugin/scripts/sanofi-ds` | 对外统一维护入口，编排 inspect、render、validate、report | 设计师、设计系统维护人 |
| 底层 scripts | `design-system-plugin/scripts/*` | build、materialize、resolve、render、validate 的原子能力 | 工程维护 |
| Registry | `design-system-plugin/design-system/registry/registry.json` | AI 第一层命中入口 | 设计系统维护人 |
| Rules | `design-system-plugin/design-system/rules/rules-index.json` | validator 可执行规则索引 | 设计系统维护人 / 工程 |
| Page profiles | `design-system-plugin/design-system/page-profiles/` | 页面类型标准 | 设计师重点维护 |
| Reports | `design-system-plugin/outputs/reports/` | 验证报告、截图、dashboard | 所有人验收 |

## 4. 是否存在冲突

### 4.1 Skill 与 `sanofi-ds`

没有冲突。`SKILL.md` 已明确推荐先使用：

```bash
scripts/sanofi-ds render "<request>" --profile <profile-id> --validate --screenshot
```

同时保留底层 scripts 清单作为 troubleshooting fallback。这个结构是合理的：`sanofi-ds` 是日常入口，底层 scripts 是调试入口。

### 4.2 Cursor rule 与 `sanofi-ds`

已修正为不重复调用旧 wrapper。Cursor 规则现在把 `sanofi-ds doctor` 和 `sanofi-ds business standards` 放在交付检查前面，符合统一入口策略。

### 4.3 `business-standards` 与 `sanofi-ds business standards`

没有执行冲突。`business-standards` 现在只是 wrapper，内部调用 `sanofi-ds business standards`；真正的验证由 `validate-business-standards` 完成。

推荐使用：

```bash
design-system-plugin/scripts/sanofi-ds business standards
```

不推荐设计师直接使用：

```bash
design-system-plugin/scripts/business-standards
```

### 4.4 Rules index 与 scripts

没有缺失或重复。`rules-index.json` 中 37 条 rule 没有重复 id，也没有缺失 rule 文件或 script 文件。

### 4.5 Codex plugin 与 Cursor

这两者不是同一种安装体系，不应该互相冒充：

- Codex 使用 `.codex-plugin/plugin.json` 和 `skills/`。
- Cursor 当前使用 `.cursor/rules/*.mdc` 作为项目规则。
- 当前项目没有实现 Cursor MCP server，所以 Cursor 里不是“安装一个 Codex plugin”，而是“打开项目 + 使用 project rule + 调用本地 scripts”。

## 5. 设计师后续如何使用

### 5.1 日常只记一个入口

从项目根目录运行：

```bash
cd <repo-root>
design-system-plugin/scripts/sanofi-ds help
```

核心命令：

```bash
design-system-plugin/scripts/sanofi-ds doctor
design-system-plugin/scripts/sanofi-ds business standards
design-system-plugin/scripts/sanofi-ds component inspect button
design-system-plugin/scripts/sanofi-ds token diff
design-system-plugin/scripts/sanofi-ds profile inspect admin-data-entry-table
design-system-plugin/scripts/sanofi-ds rule list
design-system-plugin/scripts/sanofi-ds gap list
design-system-plugin/scripts/sanofi-ds report dashboard
```

### 5.2 生成一个后台页面

推荐输入：

```bash
design-system-plugin/scripts/sanofi-ds render "OneCommercial CDC库存查询填报后台" --profile admin-data-entry-table --validate --screenshot
```

生成后重点看：

```text
design-system-plugin/outputs/html/admin-query-panel.resolved.html
design-system-plugin/outputs/reports/render.report.md
design-system-plugin/outputs/reports/admin-query-panel.resolved-desktop-1440.png
```

### 5.3 判断是否可以交付

设计师不要只看 HTML。至少看四件事：

1. `render.report.md` 是否是 `Status: pass`。
2. 截图是否符合页面参考和业务密度。
3. `data-page-profile` 是否命中正确 profile，例如 `admin-data-entry-table`。
4. fallback 是否被明确标记，尤其 Table / Chart。

### 5.4 维护组件

检查组件：

```bash
design-system-plugin/scripts/sanofi-ds component inspect button
```

如果组件要进入正式生成候选，必须具备：

- docs contract
- story atoms
- component atomic package
- complete HTML reference
- registry item
- DOM validator report
- source provenance

### 5.5 维护 token

检查 token 是否漂移：

```bash
design-system-plugin/scripts/sanofi-ds token diff
```

设计师只维护语义角色和用法判断，不直接手改 `tokens.css`。`tokens.css` 应来自抽取流程。

### 5.6 维护 page profile

检查 profile：

```bash
design-system-plugin/scripts/sanofi-ds profile inspect admin-data-entry-table
```

设计师重点看：

- required sections
- forbidden sections
- required rules
- required module contracts
- fallback policy
- reference-fit rule

### 5.7 维护 fallback gap

查看当前缺口：

```bash
design-system-plugin/scripts/sanofi-ds gap list
```

当前 Table / Chart 等仍需要按 contract 或 fallback policy 处理，不能伪装成官方 Elements primitive。

## 6. Cursor 中如何安装 / 使用

### 6.1 当前推荐方式

当前推荐方式不是“在 Cursor 里安装 Codex plugin”，而是：

```text
打开项目目录
  -> Cursor 自动读取 .cursor/rules/sanofi-design-system.mdc
  -> 让 Cursor 按 rule 使用本地 design-system-plugin
  -> 在 Cursor terminal 运行 sanofi-ds
```

项目规则文件已经存在：

```text
<repo-root>/.cursor/rules/sanofi-design-system.mdc
```

### 6.2 安装步骤

1. 在 Cursor 里打开项目目录：

```text
<repo-root>
```

2. 确认项目规则文件存在：

```bash
ls .cursor/rules/sanofi-design-system.mdc
```

3. 在 Cursor terminal 里跑健康检查：

```bash
design-system-plugin/scripts/sanofi-ds doctor
```

4. 跑业务规则检查：

```bash
design-system-plugin/scripts/sanofi-ds business standards
```

5. 生成并验证页面：

```bash
design-system-plugin/scripts/sanofi-ds render "OneCommercial CDC库存查询填报后台" --profile admin-data-entry-table --validate --screenshot
```

6. 打开维护 dashboard：

```text
<repo-root>/design-system-plugin/outputs/reports/design-system-maintenance-dashboard.html
```

### 6.3 在 Cursor Chat 里怎么要求 AI

推荐说法：

```text
请使用 .cursor/rules/sanofi-design-system.mdc 的 Sanofi Elements Business Page Workflow。
基于 design-system-plugin 的本地 registry、page profile、business standards 和 sanofi-ds，生成一个 OneCommercial CDC 库存查询填报后台页。
必须运行 sanofi-ds doctor、business standards、render --validate --screenshot，并给出 outputs/reports 下的报告路径。
```

不要只说：

```text
帮我做一个好看的后台页。
```

### 6.4 Cursor 的边界

Cursor project rule 可以约束 AI 读取哪些文件、遵守哪些规则、运行哪些命令；但它不会自动把 `design-system-plugin` 变成 Cursor 原生插件。

如果后续要做 Cursor 工具化，可以新增一个 MCP server，把 `sanofi-ds` 暴露成 Cursor 可调用工具。当前版本还没有 MCP server，因此第一版安装方式就是 project rule + terminal command。

参考：

- Cursor Rules 官方文档：`https://cursor.com/docs/rules`
- Cursor MCP 官方文档：`https://cursor.com/docs/context/model-context-protocol`

## 7. 推荐维护节奏

### 每次更新设计系统资料后

```bash
design-system-plugin/scripts/sanofi-ds doctor
design-system-plugin/scripts/sanofi-ds token diff
design-system-plugin/scripts/sanofi-ds rule list
design-system-plugin/scripts/sanofi-ds gap list
```

### 每次新增业务页面 profile 后

```bash
design-system-plugin/scripts/sanofi-ds profile inspect <profile-id>
design-system-plugin/scripts/sanofi-ds business standards
design-system-plugin/scripts/sanofi-ds report dashboard
```

### 每次交付 HTML 页面前

```bash
design-system-plugin/scripts/sanofi-ds render "<业务页面需求>" --profile <profile-id> --validate --screenshot
```

交付时附：

- HTML
- render report
- screenshot
- fallback gap report
- dashboard

## 8. 本次验证

已验证：

```bash
design-system-plugin/scripts/sanofi-ds business standards
design-system-plugin/scripts/business-standards
node -e "<check design-system-plugin/.codex-plugin/plugin.json required fields>"
```

结果：

```text
Business standards: pass
Codex plugin manifest required fields: pass
```

后续建议把 Cursor MCP server 作为第二阶段做，不要和当前 `.cursor/rules` 方案混在一起。当前方案已经足够支持设计师在 Cursor 里用本地知识库和本地验证链生成 HTML 原型。
