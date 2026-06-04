# Sanofi Elements 本地设计系统插件说明书

生成时间：2026-06-04  
适用对象：产品设计师、Design System Owner、设计运营、前端协作方、AI 原型生成维护人  
项目路径：`/Users/wanshuiwanqigaozhishang/Downloads/sainofi/design-system-plugin`

## 1. 这是什么项目

这是一个 **本地 Sanofi Elements 设计系统插件包**。它的目标不是简单保存设计文档，而是把 Sanofi Elements 的 token、组件文档、Storybook stories、页面模式、模板、规则和验证脚本组织成一套 AI 可以稳定调用的本地知识库。

它解决的问题是：

```text
业务需求 / 页面描述
  -> 命中本地设计系统资产
  -> 规划页面结构
  -> 调用本地 token / component contract / pattern / template
  -> 生成 HTML 原型
  -> 自动校验是否偏离设计系统
  -> 输出报告和截图证据
```

因此，这个项目的核心价值不是“让 AI 读文档”，而是让 AI 在生成页面之前必须先命中本地 registry、resolver、page profile 和 validator，减少颜色、字体、组件、布局、表格密度、导航结构等细节漂移。

## 2. 产品定位

### 2.1 当前定位

当前版本是：

```text
Sanofi Elements local-first static HTML prototype generator
```

也就是 **本地优先的静态 HTML 原型生成器**。

它适合：

- 根据 Sanofi Elements 规范快速生成静态 HTML 页面。
- 把设计系统规范转成可打开、可验证、可交付研发讨论的 HTML。
- 在设计规范、组件 contract、页面 pattern、token 和截图验收之间建立闭环。
- 给后台页、查询页、表单页、列表页等业务页面做结构化原型。

它暂时不等于：

- 官方 Sanofi Elements React 组件库。
- Figma 自动排版工具。
- v0 / Builder registry block。
- 可上线生产系统。
- 完整可交互前端应用。

### 2.2 未来定位

项目里已经预留了 `component-runtime/`，它的方向是：

```text
component specs
  -> @sanofi-accelerator/elements
  -> hydrated HTML / React component runtime
```

这条路线需要官方包 `@sanofi-accelerator/elements` 可安装，并通过 runtime preflight。当前它是下一阶段，不是现在的稳定主线。

## 3. 一句话理解架构

这个项目的稳定架构是：

```text
registry-first 负责命中
contracts 负责约束
resolver 负责规划
pattern/template/profile 负责页面结构
renderer 负责输出
validators/reference-fit 负责防漂移
reports/screenshots 负责验收证据
```

设计师维护时不要只看 `outputs/html/*.html`。HTML 是结果，不是规范源头。真正需要维护的是 registry、contracts、tokens、patterns、templates、page profiles、reference-fit rules 和 validation reports。

## 4. 当前本地资产规模

| 模块 | 当前规模 |
|---|---:|
| Local registry items | 623 |
| 本地 docs | 111 |
| Storybook stories | 429 |
| Component docs | 95 |
| Component contracts | 95 |
| Primitive coverage | 96 |
| Atomic component matrix | 95 |
| Rules | 37 |
| Patterns | 4 |
| Templates | 2 |
| Scripts | 67 |

这说明项目已经有一套可运行的本地设计系统资产，但并不意味着所有组件都已经达到“官方可交互组件”的完成状态。当前主要完成的是静态 HTML 生成和验证闭环。

## 5. 设计师需要知道的目录

### 5.1 高层目录

```text
design-system-plugin/
├── .codex-plugin/
├── skills/
├── design-system/
├── component-runtime/
├── scripts/
└── outputs/
```

### 5.2 设计师主要关心的目录

| 目录 | 作用 | 设计师是否需要维护 |
|---|---|---|
| `design-system/DESIGN.md` | AI 读取设计系统的总接口说明 | 需要参与维护 |
| `design-system/knowledge/` | 本地化文档、source index、组件和 token 索引 | 需要核对来源 |
| `design-system/tokens/` | 可执行 token，尤其 `tokens.css` | 需要确认来源，不建议手改 |
| `design-system/contracts/` | 组件、语义 token、页面模块契约 | 需要参与定义 |
| `design-system/atomic/` | 组件完整包、story atoms、coverage matrix | 需要确认组件覆盖 |
| `design-system/registry/` | AI 第一层命中入口 | 需要维护命名和用途 |
| `design-system/patterns/` | 页面模式 | 需要参与维护 |
| `design-system/templates/` | 业务页面模板数据 | 需要参与维护 |
| `design-system/page-profiles/` | 页面类型标准，如后台查询录入页 | 需要重点维护 |
| `design-system/reference-fit/` | 像参考图的规则 | 需要重点维护 |
| `design-system/rules/` | 校验规则 | 需要与工程共同维护 |
| `outputs/html/` | 生成出来的 HTML | 只看结果，不作为源头 |
| `outputs/reports/` | 校验报告、截图、说明文档 | 用于验收 |

### 5.3 设计师不要直接维护的目录

| 目录 / 文件 | 原因 |
|---|---|
| `scripts/` | 执行逻辑，建议工程维护 |
| `component-runtime/` | 涉及官方 npm 包、JS hydration、preflight |
| `outputs/html/*.html` | 这是生成结果，手改会破坏追溯 |
| `outputs/reports/*.json` | 这是校验结果，不是规范输入 |
| `contracts/resolvers/latest-resolution.json` | 运行态输出，会被最后一次 resolver 覆盖 |

## 6. 项目如何生成一个页面

以 OneCommercial CDC 库存查询/填报后台为例：

```text
用户需求
  -> search-local-registry
  -> sanofi-admin-query-panel
  -> resolve-pattern
  -> admin-query-panel.pattern.json
  -> onecommercial-admin-query-panel.template.json
  -> admin-data-entry-table.profile.json
  -> select-filter.contract.json
  -> data-table-fallback.contract.json
  -> admin-density.json
  -> admin-data-entry-table.rules.json
  -> render-resolved-html
  -> outputs/html/admin-query-panel.resolved.html
  -> validators
  -> outputs/reports/
```

关键页面文件：

```text
outputs/html/admin-query-panel.resolved.html
```

关键截图：

```text
outputs/reports/admin-query-panel-desktop-1440.png
```

关键报告：

```text
outputs/reports/admin-page-profile.report.json
outputs/reports/reference-fit.report.json
outputs/reports/admin-query-panel-template.report.json
outputs/reports/provenance-validation.report.json
```

## 7. 设计师如何使用这个产品

### 7.1 请求一个新 HTML 原型

设计师给 AI 的需求应该包含：

- 页面类型：后台首页、查询列表页、表单页、审批页、详情页。
- 业务场景：例如 CDC 库存填报、供应商审批、药材库存预警。
- 关键模块：导航、筛选、表格、卡片、状态标签、分页、保存栏。
- 是否有参考截图。
- 是否需要移动端。
- 是否允许 fallback。

推荐表达：

```text
基于 Sanofi Elements 本地插件，生成一个 OneCommercial 风格的 CDC 库存查询填报后台页。
页面需要左侧导航、顶部品牌栏、面包屑、标题、4 个筛选项、3 个筛选动作、主操作区、可编辑表格、分页、底部保存栏。
必须走 admin-data-entry-table page profile，并通过 reference-fit 校验。
```

不推荐表达：

```text
做一个好看的后台页面。
```

原因是后一种不会强制命中 page profile 和业务规则，容易漂移。

### 7.2 查看生成结果

HTML 输出通常在：

```text
outputs/html/
```

当前后台查询页：

```text
outputs/html/admin-query-panel.resolved.html
```

如果本地服务已启动，可以浏览：

```text
http://127.0.0.1:8799/outputs/html/admin-query-panel.resolved.html
```

### 7.3 判断结果能不能算完成

不能只看 HTML 打开了没有。必须看三层：

1. **结构是否正确**  
   页面是否命中了正确 registry item、pattern、template、page profile。

2. **设计系统是否正确**  
   token、字体、组件 provenance、fallback、语义颜色是否合规。

3. **截图是否接近业务参考图**  
   筛选区、表格列、导航宽度、保存栏、密度、首屏信息是否符合参考。

如果只通过 token / primitive validator，但截图明显不像，不能算完成。

## 8. 设计师如何维护知识库

### 8.1 维护原则

设计师维护这个项目时，要遵守一个原则：

```text
先维护来源，再维护契约，再维护规则，最后才看生成结果。
```

不要直接改 HTML 结果。直接改 HTML 会让页面看起来短期正确，但下一次生成会丢失修改。

### 8.2 维护顺序

```text
上游文档 / Storybook / token 更新
  -> 本地 Markdown / token refresh
  -> knowledge index 更新
  -> component contract 更新
  -> registry item 更新
  -> pattern / template / page profile 更新
  -> validator 更新
  -> 重新生成 HTML
  -> reports / screenshot 验收
```

## 9. 设计师维护什么内容

### 9.1 维护 token

相关文件：

```text
design-system/tokens/tokens.css
design-system/tokens/token-manifest.json
design-system/contracts/semantic-token-map.json
design-system/knowledge/docs/foundations-colors--docs.md
```

设计师需要维护的是 token 的语义角色：

| 角色 | 应该确认什么 |
|---|---|
| Brand | Sanofi 紫色是否是主品牌色 |
| Text | 主文本、副文本、反色文本是否正确 |
| Surface | 页面背景、卡片背景、muted surface 是否正确 |
| Border | 表格边框、控件边框是否正确 |
| Action | 主按钮、次按钮、link button 是否正确 |
| Status | success/warning/error 是否只用于语义状态 |
| Data viz | 数据图颜色是否有明确用途 |

维护规则：

- 不要用绿色当品牌主视觉。
- 不要在 HTML 里写 raw hex / rgb。
- 不要直接用 core color token 做产品页面。
- 如果 token 不存在，记录 gap，不要 invent。

### 9.2 维护 typography

相关文件：

```text
design-system/DESIGN.md
design-system/rules/typography-font-stack.json
design-system/knowledge/docs/foundations-typography--docs.md
```

当前原则：

```text
Latin: Sanofi Sans
CJK: Noto Sans SC
```

设计师验收时重点看：

- 中文是否落在 Noto Sans SC。
- 英文和品牌是否保持 Sanofi Sans。
- 后台页标题不要过大。
- 表格和列表文本要紧凑、可扫描。

### 9.3 维护组件 contract

相关文件：

```text
design-system/contracts/components/component-contract-index.json
design-system/atomic/components/*/
design-system/atomic/component-coverage-matrix.json
```

每个组件 contract 至少应该说清楚：

- 组件 id
- docs id
- story id
- variants
- states
- slots
- anatomy
- token bindings
- accessibility
- when-to-use
- when-not-to-use
- fallback policy
- source provenance

设计师需要做的不是写代码，而是确认：

- 组件有哪些类型。
- 哪些状态是设计系统支持的。
- 哪些场景不应该用这个组件。
- 哪些故事可以作为 AI 生成时的来源。

### 9.4 维护组件完整包

Button 是样板：

```text
design-system/atomic/components/button/button.package.json
outputs/html/button-complete.atomic.html
```

一个完整 component package 应该包含：

```text
docs contract
story atoms
atomic contract
complete package HTML
registry item
validators/report
```

设计师验收组件完整包时看：

- 是否覆盖 docs tab 和所有 story tabs。
- 是否列出 variants、sizes、states。
- 是否有 usage / not usage。
- 是否能渲染完整 package HTML。
- 是否通过 DOM / token / primitive / package validator。

### 9.5 维护 page pattern

相关文件：

```text
design-system/patterns/pattern-index.json
design-system/patterns/*/*.pattern.json
```

Pattern 决定页面由哪些模块组成。

例如 `admin-query-panel` 包含：

- admin shell
- navigation
- breadcrumb
- query toolbar
- primary actions
- editable data table fallback
- pagination
- save bar

设计师维护 pattern 时要确认：

- 页面是否属于这个 pattern。
- 哪些模块必需。
- 哪些模块禁止。
- 哪些组件必须使用。
- 哪些区域是 fallback。

### 9.6 维护 template

相关文件：

```text
design-system/templates/onecommercial-admin-query-panel.template.json
```

Template 是具体业务页面数据。

它包含：

- app 名称
- 导航项目
- 面包屑
- 页面标题
- 筛选项
- 操作按钮
- 表格字段
- 表格样例数据
- 分页
- 保存栏

设计师维护 template 时要确认：

- 文案是否真实。
- 导航是否符合业务信息架构。
- 表格列是否符合业务优先级。
- 操作按钮权重是否正确。
- 是否符合页面 profile 的结构要求。

### 9.7 维护 page profile

相关文件：

```text
design-system/page-profiles/admin-data-entry-table.profile.json
```

Page profile 是页面级标准。它比 pattern 更具体，解决“这个页面应该像什么”的问题。

当前 `admin-data-entry-table` 约束：

- 页面类型：后台查询/填报页。
- 必须有 4 个筛选项。
- 必须有 3 个筛选动作。
- 必须有主操作区。
- 必须有 6 列表格。
- 必须有至少 6 行数据。
- 必须有分页。
- 必须有 sticky save bar。
- 禁止 KPI、chart、work queue。

设计师如果要新增页面类型，应该新增新的 page profile，而不是把所有页面都塞进 `admin-data-entry-table`。

### 9.8 维护 reference-fit

相关文件：

```text
design-system/reference-fit/admin-data-entry-table.rules.json
```

Reference-fit 是“像参考图”的规则。它不是 token 规则，而是视觉还原门禁。

当前检查：

- body 是否带 `data-page-profile`
- body 是否带 `data-density`
- body 是否带 `data-reference-fit`
- toolbar 是否是 4 个筛选 + 3 个操作
- table 是否有 6 列
- table body 是否有足够行数
- sidebar 顶级导航是否足够
- 关键 section 顺序是否正确
- 不允许旧的 90rem breakpoint 把桌面筛选区过早折行

设计师提供参考图后，应该把可量化要求转成 reference-fit：

| 参考图问题 | 应转成的规则 |
|---|---|
| 筛选区变两列 | toolbar desktop 单行规则 |
| 表格列被切掉 | table min width / column visibility |
| 保存栏遮挡内容 | sticky save bar 规则 |
| 侧栏宽度不对 | sidebar width / breakpoint rule |
| 颜色不对 | semantic token / no raw color |
| 字体不对 | typography rule |

## 10. 设计师如何维护 registry

Registry 是 AI 的第一层搜索入口。

相关文件：

```text
design-system/registry/registry.json
design-system/registry/items/*.json
```

设计师维护 registry 时主要看：

- item 名称是否清晰。
- prompt keywords 是否能命中真实需求。
- files 是否声明了正确依赖。
- registryDependencies 是否完整。
- fallback 是否声明清楚。
- when_to_use / unsupported_behavior 是否准确。

后台查询页 item：

```text
design-system/registry/items/sanofi-admin-query-panel.json
```

如果设计师发现 AI 老是命中错页面，优先检查 registry keywords 和 item 描述，而不是先改 renderer。

## 11. 设计师如何验收一次生成

### 11.1 必看文件

```text
outputs/html/<page>.html
outputs/reports/*.report.json
outputs/reports/*.png
```

### 11.2 必看报告

后台查询/列表/录入页至少看：

```text
admin-page-profile.report.json
reference-fit.report.json
admin-query-panel-template.report.json
provenance-validation.report.json
token-usage.report.json
primitive-usage.report.json
page-pattern.report.json
```

如果这些报告不是 `pass`，不能进入设计验收。

### 11.3 必看截图

当前建议至少看：

```text
desktop 1440 x 900
wide 2048 x 1152
tablet 919 x 862
```

不是所有页面都必须移动端。后台交付如果是 desktop-only，要明确写在规则里。

### 11.4 设计师验收清单

#### 品牌和视觉

- Sanofi 品牌色是否是紫色体系。
- 没有绿色主视觉误用。
- 页面背景、卡片、边框、按钮使用语义 token。
- 没有 raw hex / rgb。

#### 字体

- 中文使用 Noto Sans SC fallback。
- 英文使用 Sanofi Sans。
- 后台页字号紧凑。
- 表格文字可扫描。

#### 布局

- 左侧导航宽度合理。
- 顶部品牌栏不挤压。
- 主内容区不贴边。
- 栅格和容器符合 Layout / Grid / Container 规则。

#### 组件

- 组件不是“看起来像”，而是有 `data-primitive` 和 `data-story-id` provenance。
- Select 不是裸原生 select。
- Button variants 权重正确。
- Sidebar/Menu/Icon 用在左侧导航，不把左侧导航误当 Tabs。

#### 表格和列表

- Table 当前是 fallback，不声称官方 primitive。
- 关键列首屏可见。
- 行高和密度适合后台页面。
- 分页与表格关系清楚。
- sticky save bar 不遮挡核心数据。

#### 追溯

- 主要区块有 docs id。
- 有 story id。
- 有 token source。
- fallback 有 reason。
- report 能说明来源。

## 12. 常见维护场景

### 场景 A：上游 Storybook 更新了颜色

设计师要做：

1. 确认上游 Foundations / Colors 的变化。
2. 刷新本地 Markdown 和 token extraction。
3. 更新 `tokens.css` / `token-manifest.json`。
4. 更新 `semantic-token-map.json`。
5. 跑 token 相关验证。
6. 用一个代表性页面重新截图验收。

不要做：

- 直接在 HTML 里写新颜色。
- 用 raw hex 临时修页面。

### 场景 B：上游新增了一个组件 story

设计师要做：

1. 确认 story id。
2. materialize story atom。
3. 更新 component contract。
4. 更新 component coverage matrix。
5. 如果组件要进入常用生成，补 registry item。
6. 跑 component package DOM validator。

如果 story 只是 demo，不一定要进入默认页面生成。

### 场景 C：要新增一个后台列表页

设计师要做：

1. 判断是否复用 `admin-data-entry-table`。
2. 如果结构不同，新建 page profile。
3. 新建或复用 pattern。
4. 新建 template。
5. 明确 table/list fallback。
6. 写 reference-fit 规则。
7. 补 registry item keywords。
8. 生成 HTML 并跑 validators。
9. 截图验收。

### 场景 D：AI 命中了错误页面

优先排查：

1. `search-local-registry` 结果。
2. registry item keywords。
3. item.files 是否指向正确 pattern/template。
4. resolver 输出的 `pattern_id` 和 `template_id`。
5. `latest-resolution.json` 是否被别的请求覆盖。

不要先改 HTML。

### 场景 E：页面看起来不像参考图，但 validator 都通过

说明 token/primitive/provenance 通过了，但视觉目标函数还不够。

应该补：

```text
page profile
reference-fit
admin-density
module contract
screenshot gate
```

不要只说“已经遵守 token”。

### 场景 F：要证明用了官方组件

当前 static HTML 只能证明：

- 使用了本地 contract。
- 使用了 story provenance。
- 没有违反 token / primitive / page pattern。

如果要证明真实调用官方 React 组件，需要走：

```text
component-runtime/
```

并先通过官方包 preflight。

## 13. 角色分工

### 13.1 设计师

负责：

- 维护设计意图。
- 确认页面 profile。
- 确认组件使用场景。
- 提供参考截图。
- 确认视觉差异是否可接受。
- 定义 when-to-use / when-not-to-use。
- 参与验收报告。

不建议设计师独立负责：

- 修改 renderer 脚本。
- 修改 validator 脚本。
- 修改 component-runtime。
- 处理官方 npm 包权限。

### 13.2 Design System Owner

负责：

- 决定哪些组件进入默认生成候选。
- 管理 token semantic map。
- 管理 fallback policy。
- 管理 naming standard。
- 审核 component contract 和 page profile。
- 决定 reference-fit 是否成为硬门禁。

### 13.3 前端工程

负责：

- 维护 scripts。
- 维护 renderer。
- 维护 validators。
- 维护 component-runtime。
- 接入官方 Elements package。
- 处理 CI / CLI / npm 权限。

### 13.4 AI 原型维护人

负责：

- 确认 AI 调用顺序。
- 确认 registry-first。
- 确认输出 HTML 和 reports。
- 发现 drift 后补 rules/profile，而不是只调页面。

## 14. 维护节奏建议

### 每次生成页面后

必须完成：

- 查看 HTML。
- 查看 pass/fail reports。
- 查看截图。
- 记录发现的 drift。
- drift 能规则化的，补 rule 或 reference-fit。

### 每周

建议检查：

- 最近新增页面是否都通过 validators。
- 是否有重复 pattern。
- 是否有 fallback 被误当官方 primitive。
- 是否有 raw token 或 raw color。
- 是否有 registry item 命中混乱。

### 每次上游 Elements 更新后

建议流程：

```text
refresh docs/token/story
  -> rebuild knowledge
  -> rebuild component contracts
  -> rebuild registry
  -> rerun benchmark
  -> rerender representative pages
  -> screenshot review
```

### 每月

建议做：

- Component coverage review。
- Page profile review。
- Fallback list review。
- Reference-fit rules review。
- Design system owner sign-off。

## 15. 关键命令速查

### 推荐统一入口

日常维护优先使用统一入口，不要让设计师直接记 67 个底层脚本：

```bash
cd /Users/wanshuiwanqigaozhishang/Downloads/sainofi/design-system-plugin
scripts/sanofi-ds doctor
scripts/sanofi-ds component inspect button
scripts/sanofi-ds token diff
scripts/sanofi-ds profile inspect admin-data-entry-table
scripts/sanofi-ds rule list
scripts/sanofi-ds gap list
scripts/sanofi-ds render "OneCommercial CDC库存查询填报后台" --profile admin-data-entry-table --validate --screenshot
scripts/sanofi-ds report dashboard
```

`scripts/sanofi-ds` 是维护工具包的产品化入口；它内部会调用现有 `search`、`resolve`、`render`、`validate`、`report` 脚本。底层脚本仍然保留，但主要给工程维护和故障排查使用。

### 查 registry 命中

```bash
cd /Users/wanshuiwanqigaozhishang/Downloads/sainofi/design-system-plugin
scripts/search-local-registry "OneCommercial CDC库存查询填报后台"
```

### 解析页面

```bash
scripts/resolve-pattern "OneCommercial CDC库存查询填报后台"
```

### 渲染 HTML

```bash
scripts/render-resolved-html
```

### 验证后台查询页

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
```

### 验证 registry

```bash
scripts/validate-local-registry
```

### 验证 Button component package

```bash
scripts/validate-component-package-dom button
scripts/validate-component-package-html-batch
```

## 16. 文件是否可以手改

| 文件类型 | 是否建议手改 | 说明 |
|---|---:|---|
| `DESIGN.md` | 可以 | 设计系统总说明，需要人工维护 |
| `page-profiles/*.json` | 可以 | 设计师可参与定义 |
| `reference-fit/*.json` | 可以 | 设计师可参与定义 |
| `templates/*.json` | 可以 | 业务内容和页面结构可维护 |
| `patterns/*.json` | 谨慎 | 影响页面生成结构 |
| `registry/items/*.json` | 谨慎 | 影响 AI 命中 |
| `contracts/page-modules/*.json` | 谨慎 | 影响模块结构 |
| `contracts/components/*.json` | 谨慎 | 影响组件使用 |
| `tokens/tokens.css` | 不建议 | 应由抽取流程生成 |
| `scripts/*` | 不建议 | 工程维护 |
| `outputs/html/*` | 不建议 | 生成结果 |
| `outputs/reports/*` | 不建议 | 校验结果 |

## 17. 设计师交付输入模板

当设计师希望生成或维护一个页面，可以给 AI/维护人这份输入：

```text
页面名称：
业务场景：
用户角色：
页面类型：
参考截图：
必须包含模块：
禁止出现模块：
使用的组件：
缺失组件是否允许 fallback：
桌面 / 移动端要求：
关键视觉要求：
表格/list 密度要求：
验收截图尺寸：
备注：
```

示例：

```text
页面名称：CDC 库存填报
业务场景：OneCommercial 后台数据填报
用户角色：运营 / 数据管理员
页面类型：admin-data-entry-table
必须包含模块：左侧导航、顶部品牌栏、面包屑、标题、4 个筛选项、3 个筛选动作、主操作区、表格、分页、保存栏
禁止出现模块：KPI 卡片、图表、工作队列
缺失组件是否允许 fallback：Table 允许 token-only fallback
桌面 / 移动端要求：默认桌面，1440 必须可验收
关键视觉要求：筛选区桌面单行，数量列首屏可见，保存栏不遮挡分页
```

## 18. 常见误区

### 误区 1：HTML 看起来对，就算完成

不对。必须通过 validators，并且有 provenance 和 screenshot evidence。

### 误区 2：validator 通过，就一定像参考图

也不对。token/primitive/provenance 通过只能说明没有明显违反设计系统，不代表截图级还原。像参考图需要 reference-fit 和截图验收。

### 误区 3：有 `data-primitive="select"` 就是真实 Elements Select

不对。当前 static HTML 只能证明本地 contract 使用正确。真实组件调用需要 component-runtime。

### 误区 4：Table 可以当官方组件用

当前不可以。Table/DataTable/DataGrid 没有注册官方 primitive 时，只能 fallback。

### 误区 5：直接改 `outputs/html` 最快

短期最快，长期最坏。下一次 renderer 会覆盖，且没有规则追溯。

## 19. 当前项目的成熟度判断

| 能力 | 当前状态 | 说明 |
|---|---|---|
| 本地知识库 | 可用 | 111 docs、95 components、429 stories |
| Registry-first | 可用 | 623 registry items |
| Token 验证 | 可用 | 禁 raw color / raw token drift |
| Component contracts | 可用 | 95 contracts |
| Button 完整包 | 可用 | 当前标准样板 |
| 页面 pattern | 可用 | admin-query-panel 等 |
| Page profile | 初步可用 | admin-data-entry-table 已建立 |
| Reference-fit | 初步可用 | 当前是 static + manual screenshot gate |
| Static HTML renderer | 可用 | 当前主线 |
| Official component runtime | 未完成 | preflight-required |
| 自动截图评分 | 未完成 | 当前仍需人工视觉复核 |

## 20. 后续产品化路线

### Phase 1：稳定本地 HTML 交付

目标：

- 统一 CLI。
- 固定 page profile。
- 固定 reference-fit。
- 每个页面生成 HTML + report + screenshot。

建议命令形态：

```bash
design-system-plugin/scripts/sanofi-ds render "OneCommercial CDC库存查询填报后台" --profile admin-data-entry-table --validate --screenshot
```

### Phase 2：扩展页面 profile

建议新增：

- `admin-dashboard-overview`
- `admin-query-list`
- `admin-data-entry-table`
- `admin-approval-queue`
- `admin-form-detail`
- `admin-settings`
- `admin-empty-state`
- `admin-error-state`

### Phase 3：组件 package 扩展

优先组件：

- Select
- TextInput
- SearchInput
- Checkbox
- Radio
- Switch
- Tabs
- Tag
- Card
- Pagination
- Modal
- Drawer
- Toast
- Tooltip

每个组件都要按 Button 标准包处理。

### Phase 4：component-runtime

目标：

- 官方 Elements React 包 preflight 通过。
- renderer 输出 component specs。
- runtime 输出 hydrated HTML。
- Select / Modal / Drawer / DatePicker 等复杂组件具备真实交互。

### Phase 5：自动视觉评分

目标：

- 自动截图。
- 自动对比布局指标。
- 输出 scorecard。
- reference-fit 不再只依赖人工看图。

## 21. 维护红线

以下情况必须停下来，不要继续让 AI 猜：

1. 找不到对应 registry item。
2. resolver 命中错误 pattern。
3. token 缺失，需要 raw color 才能实现。
4. 官方组件没有 contract，却被当作 primitive 使用。
5. Table / Chart 被声明为官方组件。
6. validator pass 但截图明显不像。
7. 页面需要真实交互，但 component-runtime 没通过 preflight。
8. `latest-resolution.json` 被其他任务覆盖，导致页面重渲染错乱。

遇到这些问题，应该补 registry、contract、profile、reference-fit 或 runtime，而不是直接补 prompt。

## 22. 最终维护原则

设计师维护这套产品时，可以记住三句话：

1. **HTML 是输出，不是源头。**
2. **Reference-fit 是让页面像参考图的门禁，不是 token validator 的替代品。**
3. **真实组件调用要等 component-runtime，静态 contract marker 不能冒充官方 React 组件。**

只要按这个原则维护，这套本地设计系统插件就能持续从“AI 读文档猜页面”进化成“AI 调用本地设计系统协议生成页面”。
