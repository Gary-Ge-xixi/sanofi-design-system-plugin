# Sanofi Elements 本地插件流程与架构报告

生成时间：2026-06-04  
对象：`design-system-plugin`  
范围：本地 Sanofi Elements 设计系统插件、HTML 生成 skill、registry/resolver/renderer/validator 链路、component package 与后台页面 profile。

## 1. 核心结论

这个插件当前已经不是“读一堆 Markdown 然后让 AI 猜页面”的结构，而是一个本地优先的设计系统执行包：

```text
本地知识库 / tokens / contracts / registry
  -> registry search
  -> resolver
  -> page profile / pattern / template / module contract
  -> renderer
  -> HTML output
  -> validators
  -> reports / screenshots
```

当前稳定主链路是 **local static HTML renderer**。它的目标是生成可交付、可追溯、可验证的静态 HTML 原型，而不是直接输出 React/Figma/v0 block。

新增的 `component-runtime/` 是下一阶段方向：当 `@sanofi-accelerator/elements` 官方包可安装并通过 preflight 时，页面 renderer 应输出 component specs，由 runtime 转成官方 React 组件并完成 hydration。它目前是 `preflight-required` 状态，不应被当作当前主链路。

## 2. 当前规模

| 模块 | 当前数量 / 状态 | 来源 |
|---|---:|---|
| Local registry items | 623 | `design-system/registry/registry.json` |
| 本地 docs | 111 | `design-system/knowledge/storybook-pages.json` |
| Storybook stories | 429 | `design-system/knowledge/storybook-pages.json` |
| Component docs | 95 | `design-system/knowledge/components.json` |
| Component contracts | 95 | `design-system/contracts/components/component-contract-index.json` |
| Primitive coverage | 96 | `design-system/contracts/components/component-contract-index.json` |
| Atomic component matrix | 95 | `design-system/atomic/component-coverage-matrix.json` |
| Rules | 37 | `design-system/rules/rules-index.json` |
| Patterns | 4 | `design-system/patterns/pattern-index.json` |
| Templates | 2 | `design-system/templates/template-index.json` |
| Scripts | 67 | `scripts/` |

## 3. 插件入口

### 3.1 Plugin manifest

入口文件：

```text
.codex-plugin/plugin.json
```

它声明了插件名称、显示名称、skill 目录和能力：

- 插件名：`design-system-plugin`
- 显示名：`Design System Prototype Generator`
- 能力：`Read` / `Write`
- Skill 目录：`skills/`
- 目标：从本地 Elements assets 生成并验证 HTML prototypes。

### 3.2 Skill 入口

入口文件：

```text
skills/design-prototype-generator/SKILL.md
```

这个 skill 是 AI 调用插件时的行为说明。它规定了几个关键原则：

1. 先查 local registry，不先扫全部 Markdown。
2. 命中 registry item 后，只读取 item 声明的依赖文件。
3. HTML 生成必须消费 resolver 输出。
4. 视觉样式必须使用 `tokens.css`。
5. 页面必须携带 `data-primitive`、`data-pattern`、`data-story-id`、`data-source-doc-id`、`data-token-source` 等 provenance marker。
6. 生成后必须跑 token、primitive、page pattern、layout、typography、navigation、profile、reference-fit、provenance 等 validator。

## 4. 目录架构

```text
design-system-plugin/
├── .codex-plugin/
│   └── plugin.json
├── skills/
│   └── design-prototype-generator/
│       └── SKILL.md
├── design-system/
│   ├── DESIGN.md
│   ├── knowledge/
│   ├── tokens/
│   ├── contracts/
│   ├── atomic/
│   ├── primitives/
│   ├── registry/
│   ├── patterns/
│   ├── templates/
│   ├── page-profiles/
│   ├── reference-fit/
│   ├── rules/
│   └── policies/
├── component-runtime/
├── scripts/
└── outputs/
    ├── html/
    └── reports/
```

### 4.1 `design-system/DESIGN.md`

这是 AI-readable 的上游接口文档，负责解释本地设计系统“应该怎么被使用”。

它不是执行文件，但它定义了：

- local-first source contract
- color / typography / layout / radius / elevation / motion 规则
- component 使用原则
- page pattern 原则
- Table/List fallback 规则
- validator 作为最终门禁

### 4.2 `knowledge/`

本地化文档层，承接 Storybook / Zeroheight 抽取结果。

关键文件：

```text
knowledge/docs-index.json
knowledge/source-index.json
knowledge/components.json
knowledge/storybook-pages.json
knowledge/tokens.json
knowledge/coverage.json
knowledge/docs/*.md
```

它的职责是保存来源事实，不直接决定页面怎么生成。

### 4.3 `tokens/`

可执行 token 层。

关键文件：

```text
tokens/tokens.css
tokens/token-manifest.json
tokens/token-allowlist.txt
```

生成 HTML 时必须使用 `var(--elements-...)`，不能硬编码 raw hex / rgb / px。

### 4.4 `contracts/`

AI 可执行契约层。

关键文件：

```text
contracts/components/component-contract-index.json
contracts/semantic-token-map.json
contracts/resolvers/latest-resolution.json
contracts/resolvers/admin-query-panel.resolution.json
contracts/page-modules/select-filter.contract.json
contracts/page-modules/data-table-fallback.contract.json
```

这里负责把 docs/story/token 从“参考资料”转成“生成前必须遵守的协议”。

### 4.5 `atomic/`

组件完整包和 story atom 层。

关键文件：

```text
atomic/component-package-standard.json
atomic/component-coverage-matrix.json
atomic/atomic-component-index.json
atomic/components/*/*.package.json
atomic/components/*/stories/*.story.json
```

Button 是当前完整标准包样例。它证明了单组件可以形成：

```text
docs contract
  -> all stories
  -> component.atomic.json
  -> package.json
  -> complete HTML
  -> registry item
  -> DOM / token / primitive / provenance validators
```

### 4.6 `registry/`

本地发现层，对标 shadcn-like registry 思路。

执行原则：

```text
search-local-registry "<prompt>"
  -> 命中 registry item
  -> 读取 item.files
  -> 只加载声明的 pattern/template/rule/contract/token/policy
```

关键文件：

```text
registry/registry.json
registry/items/*.json
```

后台查询页的核心 registry item：

```text
registry/items/sanofi-admin-query-panel.json
```

### 4.7 `patterns/` 与 `templates/`

Pattern 决定页面由哪些 section / primitive / fallback 组成。  
Template 决定具体业务页面数据和结构。

后台查询页：

```text
patterns/admin-query-panel/admin-query-panel.pattern.json
templates/onecommercial-admin-query-panel.template.json
```

`admin-query-panel` 是 OneCommercial CDC 库存查询/填报页面的正式 pattern。

### 4.8 `page-profiles/` 与 `reference-fit/`

这是最近补上的页面级控制层，专门解决“validator 通过但页面细节不像参考图”的问题。

关键文件：

```text
page-profiles/admin-data-entry-table.profile.json
reference-fit/admin-data-entry-table.rules.json
```

它们约束：

- 后台页结构优先级
- 4 个筛选控件 + 3 个操作按钮
- table fallback 的列数、行数和顺序
- sidebar / toolbar / table / save bar 的静态布局信号
- 1440 / 2048 / tablet review 截图门禁

### 4.9 `rules/`

validator 使用的规则索引层。

关键文件：

```text
rules/rules-index.json
rules/token-usage.json
rules/primitive-usage.json
rules/page-pattern.json
rules/layout-grid-container.json
rules/typography-font-stack.json
rules/admin-template-navigation.json
rules/admin-query-panel-template.json
rules/admin-density.json
rules/admin-delivery-contract.json
```

`rules-index.json` 是规则和脚本的连接表。

### 4.10 `component-runtime/`

这是未来的官方组件运行时边界。

当前状态：

```text
component-runtime/component-runtime.contract.json
status: preflight-required
renderer_target: html-with-hydrated-js
```

它要求：

- 使用 `@sanofi-accelerator/elements`
- 配置 GitHub npm registry
- 设置 `NPM_TOKEN`
- 通过 `npm run preflight`

这条链路的原则是：如果官方包不可用，不能用手写 DOM 冒充官方 React 组件。

## 5. 主执行链路

### 5.1 生成前：registry-first

用户输入业务需求后，第一步不是读所有文档，而是：

```bash
scripts/search-local-registry "OneCommercial CDC库存查询填报后台"
```

目标是命中：

```text
sanofi-admin-query-panel
```

命中后读取：

```text
design-system/registry/items/sanofi-admin-query-panel.json
```

该 item 声明后续需要加载的 pattern、template、rules、fallback policy、page profile、module contracts 等文件。

### 5.2 规划阶段：resolver

执行：

```bash
scripts/resolve-pattern "<prompt>"
```

核心脚本：

```text
scripts/resolve-pattern
scripts/resolve-pattern-runtime
```

Resolver 输出：

```text
design-system/contracts/resolvers/latest-resolution.json
design-system/contracts/resolvers/<pattern-id>.resolution.json
```

注意：`latest-resolution.json` 是最近一次运行态输出，不是固定规范文件。  
例如当前 `latest-resolution.json` 可能指向 `admin-dashboard`，而 `admin-query-panel.resolution.json` 保留了 OneCommercial query panel 的 resolution。

Resolver 负责确定：

- `registry_item`
- `pattern_id`
- `template_id`
- `page_subtype`
- `renderer_target`
- `sections`
- `required_primitives`
- `fallbacks`
- `page_profile`
- `required_rules`
- `source_provenance`

### 5.3 渲染阶段：renderer

执行：

```bash
scripts/render-resolved-html
```

入口关系：

```text
render-resolved-html
  -> render-template-html
  -> outputs/html/admin-query-panel.resolved.html
```

当 resolver 输出 `template_id = onecommercial-admin-query-panel` 时，renderer 消费：

```text
templates/onecommercial-admin-query-panel.template.json
patterns/admin-query-panel/admin-query-panel.pattern.json
page-profiles/admin-data-entry-table.profile.json
contracts/page-modules/select-filter.contract.json
contracts/page-modules/data-table-fallback.contract.json
rules/admin-density.json
reference-fit/admin-data-entry-table.rules.json
```

最终 HTML 必须包含：

- `data-design-system="sanofi-elements"`
- `data-registry-item`
- `data-template-id`
- `data-page-subtype`
- `data-page-profile`
- `data-density`
- `data-reference-fit`
- `data-pattern`
- `data-primitive`
- `data-story-id`
- `data-source-doc-id`
- `data-token-source`
- `data-module-contract`

### 5.4 验证阶段：validators

当前关键验证命令：

```bash
scripts/validate-token-usage outputs/html/admin-query-panel.resolved.html
scripts/validate-primitive-usage outputs/html/admin-query-panel.resolved.html
scripts/validate-page-pattern outputs/html/admin-query-panel.resolved.html
scripts/validate-layout-rule-usage outputs/html/admin-query-panel.resolved.html
scripts/validate-typography-rule-usage outputs/html/admin-query-panel.resolved.html
scripts/validate-admin-template-navigation outputs/html/admin-query-panel.resolved.html
scripts/validate-admin-query-panel-template outputs/html/admin-query-panel.resolved.html
scripts/validate-admin-page-profile outputs/html/admin-query-panel.resolved.html
scripts/validate-reference-fit outputs/html/admin-query-panel.resolved.html
scripts/validate-provenance outputs/html/admin-query-panel.resolved.html
scripts/validate-pattern-resolver
scripts/validate-local-registry
```

最近一次核对的关键报告状态：

| Report | Status |
|---|---|
| `admin-page-profile.report.json` | pass |
| `reference-fit.report.json` | pass |
| `admin-query-panel-template.report.json` | pass |
| `provenance-validation.report.json` | pass |
| `pattern-resolver-validation.report.json` | pass |
| `local-registry-validation.report.json` | pass |
| `token-usage.report.json` | pass |
| `primitive-usage.report.json` | pass |
| `page-pattern.report.json` | pass |

### 5.5 视觉验收阶段：screenshot gate

`reference-fit` 不替代 token/contract/provenance，而是补充截图级还原度门禁。

当前 OneCommercial query panel 的桌面截图：

```text
outputs/reports/admin-query-panel-desktop-1440.png
```

它用于检查：

- 1440 桌面下筛选区是否一行排列
- `Select` 是否不是裸原生控件
- table fallback 是否露出核心列
- sticky save bar 是否遮挡核心数据
- sidebar 是否保持后台页结构

## 6. 后台查询页链路实例

以 OneCommercial CDC 库存查询/填报页为例：

```text
prompt: "OneCommercial CDC库存查询填报后台"
  -> search-local-registry
  -> sanofi-admin-query-panel
  -> admin-query-panel.pattern.json
  -> onecommercial-admin-query-panel.template.json
  -> admin-data-entry-table.profile.json
  -> select-filter.contract.json
  -> data-table-fallback.contract.json
  -> admin-density.json
  -> admin-data-entry-table.rules.json
  -> render-template-html
  -> outputs/html/admin-query-panel.resolved.html
  -> validators
  -> reports + screenshot
```

关键策略：

- 左侧导航不是 Tabs，必须走 Sidebar/Menu/Icon。
- 筛选控件不是可见 native select，必须走 Select shell + combobox。
- Table 没有官方 primitive 时，只能走 `token-only fallback`，不能声明 `data-primitive="table"`。
- 页面必须使用 `Sanofi Sans` + `Noto Sans SC`。
- 紫色是品牌/主操作，绿色只能用于 success/status 或明确数据序列。

## 7. Component package 链路

组件链路和页面链路是两条不同层级：

```text
Storybook docs/stories
  -> materialize-story-atom
  -> build-component-contracts
  -> build-component-package-factory
  -> render-component-package
  -> validate-component-package-dom
  -> atomic HTML outputs
```

Button 是当前标准样板：

```text
button.docs.contract.json
  -> 13/13 story atoms
  -> component.atomic.json
  -> button.package.json
  -> button-complete.atomic.html
  -> registry item
  -> validators
```

这个链路适合沉淀原子组件和 story variants；但后台页面能否像参考图，不能只靠组件包解决，还必须依赖 page profile、density 和 reference-fit。

## 8. 两条渲染路线的边界

### 8.1 当前主线：Static HTML

当前主线适合：

- 静态 HTML 原型
- 研发交付前的结构验证
- token / primitive / provenance 审计
- 本地可打开预览

优点：

- 本地可执行
- 不依赖官方 npm 包权限
- 规则和 report 可追踪
- 适合快速验证页面结构

限制：

- 交互只是静态模拟
- 不能证明真实 React component behavior
- Select / DatePicker / Modal 等复杂交互需要 runtime 才能真正闭环

### 8.2 下一阶段：Component runtime

`component-runtime/` 定义的路线适合：

- 官方 Elements React 组件可安装后
- 需要真实交互行为
- 需要 JS/CSS bundle handoff
- 需要避免手写 DOM 冒充官方组件

当前必须先通过：

```bash
cd design-system-plugin/component-runtime
npm run preflight
```

如果官方包解析失败，runtime 不能进入正式生成链路。

## 9. 当前风险与缺口

### 9.1 `latest-resolution.json` 是运行态，不是规范态

`latest-resolution.json` 会被最后一次 `resolve-pattern` 覆盖。  
因此报告和验证时必须区分：

- 运行态最新输出：`contracts/resolvers/latest-resolution.json`
- 固定页面 resolution：`contracts/resolvers/admin-query-panel.resolution.json`

否则容易误判“当前插件只会生成 dashboard”或“query panel resolution 丢了”。

### 9.2 Static HTML 仍不能替代官方组件运行时

当前 HTML 有 provenance marker，但 marker 不是官方 React 组件实例。  
如果目标升级成“真实组件调用”，必须转到 `component-runtime` 并通过官方包 preflight。

### 9.3 Table / Chart 仍是 fallback

当前没有官方 Table/DataTable/DataGrid primitive。  
所以 table 只能是 token-only fallback，不能作为 Elements 官方 Table 组件声明。

### 9.4 Screenshot gate 目前是 manual-first-pass

`reference-fit` 已经能检查 DOM/CSS 静态信号，但像素级截图比对还不是自动化评分。  
下一步可以把 `admin-query-panel-desktop-1440.png` 和 reference 截图做结构化 diff 或 layout metric gate。

### 9.5 Component package 与 page profile 需要继续打通

Button package 是完整样板，但页面 renderer 目前还不是逐个从 component package 组装页面。  
理想状态是：

```text
page profile
  -> module contract
  -> component package / story atom
  -> renderer
```

而不是 renderer 内部维护大量组件片段。

## 10. 建议的下一轮迭代

### 优先级 1：固定 query panel resolution

为 `admin-query-panel` 增加固定 render 命令或参数：

```bash
scripts/render-resolved-html design-system/contracts/resolvers/admin-query-panel.resolution.json outputs/html/admin-query-panel.resolved.html
```

避免 `latest-resolution.json` 被其他页面覆盖后影响后台查询页重渲染。

### 优先级 2：把 reference-fit 从静态检查升级成截图指标

建议新增：

```text
scripts/validate-reference-screenshot
outputs/reports/reference-fit-screenshot.report.json
```

检查项：

- toolbar 是否单行
- table 关键列是否可见
- save bar 是否遮挡 pagination
- sidebar 宽度是否在阈值内
- body scrollWidth 是否异常

### 优先级 3：把 Select 从静态 shell 升级成 runtime proof

当前已经禁止裸原生 Select，但还没有真实打开 listbox 的行为证明。  
如果要证明“调用正确组件”，必须进入 component-runtime。

### 优先级 4：补 Table fallback 的更细 density contract

当前已经能控制最小宽度和列数，但还可以继续补：

- column priority
- numeric column alignment
- editable input width
- summary row style
- pagination/table adjacency

### 优先级 5：统一 CLI

最终命令建议收敛成：

```bash
design-system-plugin/scripts/sanofi-ds render "OneCommercial CDC库存查询填报后台" --profile admin-data-entry-table --validate --screenshot
```

内部串起：

```text
search-local-registry
  -> resolve-pattern
  -> render-resolved-html
  -> validators
  -> screenshot gate
  -> report
```

## 11. 一句话架构判断

当前插件的可用架构已经成立：**registry-first 负责命中，contracts 负责约束，resolver 负责规划，template/profile 负责页面结构，renderer 负责输出，validators/reference-fit 负责防漂移，reports/screenshots 负责验收证据。**

但它仍处在 **static HTML validated prototype** 阶段。要升级成“真实调用 Sanofi Elements 官方组件”的产品级链路，必须完成 component-runtime preflight，并把 renderer 从“生成 DOM”改成“生成 component specs + hydration output”。
