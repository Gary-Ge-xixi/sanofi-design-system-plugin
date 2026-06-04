# 基于设计规范快速生产 HTML 的 CLI 路径比较

## 结论

最优解不是单独选 Ant Design、shadcn 或当前本地链路，而是组合三者的强项：

- 用 shadcn 的 registry/CLI 思路做本地规范资产分发和查找。
- 用 Ant Design 的后台页面范式沉淀 admin page profile、list/table density、form/table/layout 经验。
- 保留当前 Sanofi 本地链路的 token、contract、provenance、validator，保证交付可追溯。

目标路径应是：

```text
业务需求 / 参考图
  -> registry search
  -> page profile
  -> reference-fit params
  -> template renderer
  -> developer HTML
  -> audit report
  -> screenshot gate
```

## 本地 design 文件做了什么

| 文件 | 已经做了什么 | 对快速产出 HTML 的价值 | 还缺什么 |
| --- | --- | --- | --- |
| `2026-06-02-design-system-plugin-design.md` | 定义第一版本地插件：tokens、primitives、patterns、templates、rules、validators，目标是生成可验证静态 HTML。 | 奠定了“规范到 HTML”的底层链路。 | 范围很早期，只到 Checkbox，不包含后台参考图还原。 |
| `2026-06-02-local-registry-layer-design.md` | 把本地知识库做成 shadcn-like private registry：`registry.json`、`items/*.json`、`components.json`、build/validate/search 脚本。 | 这是当前最接近 shadcn CLI 的部分，能让 AI 先查本地规范资产。 | registry 只解决“找什么”，还不解决“页面怎么像参考图”。 |
| `2026-06-02-story-atomic-library-design.md` | 从 Storybook story 抽取本地 story atom，先做 Button Primary pilot。 | 把组件示例从文档猜测变成可调用原子。 | 更适合组件，不够解决复杂后台页面。 |
| `2026-06-02-button-atomic-v2-design.md` | 把 Button 从单 story 升级成完整 component contract：variant、size、state、spacing、token、anatomy、accessibility。 | 证明组件可以做成标准包。 | 仍是组件级，不是页面级；不能解决 list/table 还原。 |
| `2026-06-03-button-complete-standard-package-implementation-plan.md` | Button 完整包已经覆盖 docs + 13 个 stories + package JSON + registry + validators。 | 这是“组件完整标准包”的样板。 | 不应继续只补组件，下一步应补页面 profile 和 DataTable/List contract。 |
| `2026-06-03-plugin-execution-chain.md` | 为 OneCommercial CDC 后台页建立 registry block、pattern、template、resolver、renderer、validator。 | 这是当前最接近“基于规范生产页面 HTML”的链路。 | 缺 reference-fit、density、table/list 标准、截图门禁。 |

## 三种外部/本地路径对比

| 路径 | CLI / 执行模型 | 维护的核心内容 | 产物 | 优点 | 短板 |
| --- | --- | --- | --- | --- | --- |
| Ant Design | React 组件库，主题通过 `ConfigProvider` / theme token；可用 static style extraction 抽样式。 | 成熟后台组件、企业级页面范式、主题 token、组件 API。 | React 页面为主，HTML 需要 SSR/静态渲染。 | 后台页面像、Table/Form/Layout/Menu 成熟。 | 不天然维护 Sanofi provenance；不是 standalone HTML 交付链路。 |
| shadcn | `npx shadcn add/list/search/view/registry validate`，支持 namespace/private registry。 | 组件源码、registry item、依赖、CSS variables、Tailwind/Radix 组合。 | 可复制进工程的源码。 | registry 思路很适合私有设计系统分发。 | 默认不是页面规范 renderer；复杂后台范式要自建。 |
| 当前本地 Sanofi | `search-local-registry` -> `resolve-pattern` -> `render-resolved-html` -> validators。 | Sanofi tokens、contracts、registry items、patterns、templates、rules、provenance、validators。 | standalone HTML + reports。 | 最符合“规范到 HTML 交付研发”的审计链路。 | 页面还原弱，缺 reference-fit 和 list/table density；命令还不是统一 CLI。 |
| 本地 atomic/component package | `materialize-story-atom` -> `build-atomic-library` -> `render-component-package` -> component validators。 | Storybook story atoms、docs contract、component package、coverage matrix。 | 组件 reference HTML。 | 适合组件标准化。 | 对业务页面生产帮助间接，不能替代表格页模板。 |

## 当前本地最快可用路径

```bash
cd /Users/wanshuiwanqigaozhishang/Downloads/sainofi/design-system-plugin

scripts/search-local-registry "OneCommercial CDC库存查询填报后台"
scripts/resolve-pattern "OneCommercial CDC库存查询填报后台"
scripts/render-resolved-html

scripts/validate-token-usage outputs/html/admin-query-panel.resolved.html
scripts/validate-primitive-usage outputs/html/admin-query-panel.resolved.html
scripts/validate-page-pattern outputs/html/admin-query-panel.resolved.html
scripts/validate-layout-rule-usage outputs/html/admin-query-panel.resolved.html
scripts/validate-typography-rule-usage outputs/html/admin-query-panel.resolved.html
scripts/validate-admin-template-navigation outputs/html/admin-query-panel.resolved.html
scripts/validate-admin-query-panel-template outputs/html/admin-query-panel.resolved.html
scripts/validate-provenance outputs/html/admin-query-panel.resolved.html
```

这条路径能产出可验证 HTML，但还不是最优，因为它没有把“参考图还原”作为一等输入。

## 最优路径应该补什么

| 缺口 | 建议资产 | 作用 |
| --- | --- | --- |
| 统一 CLI | `sanofi-html render "<prompt>" --profile admin-query-list --reference-fit strict` | 把多脚本串成一个命令，减少人工步骤。 |
| 页面优先级模板 | `design-system/page-profiles/admin-query-list.profile.json` | 明确后台列表页优先级：结构、密度、表格、分页、保存栏。 |
| Reference-fit 参数 | `reference-fit/admin-query-list.rules.json` | 约束像参考图：导航宽度、筛选区高度、表格首屏列可见、按钮权重。 |
| DataTable/List contract | `contracts/page-modules/data-table-fallback.contract.json` | 即使没有官方 Table primitive，也有稳定 fallback 标准。 |
| Density tokens | `rules/admin-density.json` | 控制后台页 compact/default/spacious，而不是默认 Sanofi 展示型间距。 |
| 双输出模式 | `developer.html` + `audit.html` | 研发拿干净 HTML，审计报告保留 provenance。 |
| 截图门禁 | desktop 1280/1440 + mobile screenshots | 防止 validator pass 但肉眼不对。 |

## 推荐执行策略

第一优先级不是继续补更多组件，而是补页面生成的“参考还原层”：

1. 建 `admin-query-list` / `admin-data-entry-table` 两个 page profile。
2. 建 `data-table fallback contract`，专门解决 list/table 还原。
3. 把当前多脚本封成一个本地 CLI：`sanofi-html render`。
4. 输出分成 `developer HTML` 和 `audit report`。
5. 加截图门禁，形成最后验收。

这样才能同时具备：

- shadcn 的 registry 查找效率；
- Ant Design 的后台页面经验；
- 本地 Sanofi 的规范追溯和验证闭环。
