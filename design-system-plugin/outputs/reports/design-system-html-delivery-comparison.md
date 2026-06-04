# 设计规范到 HTML 交付研发对比

样本：`OneCommercial CDC库存查询填报后台`

## 结论

Ant Design 和 shadcn 都适合研发工程内继续实现 UI，但它们的天然交付物不是“可验证的 standalone HTML”。如果目标是把品牌设计规范转成 HTML 给研发，并且要求来源、规则、组件状态、fallback 都可追溯，本地 Sanofi Elements 链路更贴近这个场景。

## 三方定位

| 项目 | 主要模型 | 更适合什么 | 对 standalone HTML 的适配 |
| --- | --- | --- | --- |
| Ant Design | 企业级 React 组件库 + 主题 token | 快速搭建成熟后台应用 | 需要额外静态化，容易丢失组件合同和交互语义 |
| shadcn | 组件源码分发 + registry + Tailwind/Radix | 把组件源码纳入产品工程后长期改造 | 比 AntD 更开放，但仍偏工程源码交付 |
| 本地 Sanofi Elements | registry + resolver + template + contracts + tokens + validators | 设计规范到 HTML 交付研发 | 目标就是静态 HTML，并内置追溯与验证 |

## 可视化产物

- Ant Design 静态模拟：`outputs/html/admin-query-panel.antdesign.static.html`
- shadcn 静态模拟：`outputs/html/admin-query-panel.shadcn.static.html`
- 本地真实输出：`outputs/html/admin-query-panel.resolved.html`
- 三方并列报告页：`outputs/html/design-system-delivery-comparison.html`
- 概览截图：`outputs/reports/design-system-delivery-comparison-full.png`
- Ant Design 截图：`outputs/reports/design-system-delivery-antdesign-full.png`
- shadcn 截图：`outputs/reports/design-system-delivery-shadcn-full.png`
- 本地真实输出截图：`outputs/reports/design-system-delivery-sanofi-local-full.png`

## 本地验证结果

本次重新执行并通过：

- `scripts/validate-token-usage outputs/html/admin-query-panel.resolved.html`
- `scripts/validate-primitive-usage outputs/html/admin-query-panel.resolved.html`
- `scripts/validate-page-pattern outputs/html/admin-query-panel.resolved.html`
- `scripts/validate-layout-rule-usage outputs/html/admin-query-panel.resolved.html`
- `scripts/validate-typography-rule-usage outputs/html/admin-query-panel.resolved.html`
- `scripts/validate-admin-template-navigation outputs/html/admin-query-panel.resolved.html`
- `scripts/validate-admin-query-panel-template outputs/html/admin-query-panel.resolved.html`
- `scripts/validate-provenance outputs/html/admin-query-panel.resolved.html`
- `scripts/validate-pattern-resolver`

## 判断

如果你的目标是“把设计规范交付成研发可读、可追溯、可检查的 HTML”，本地方案的价值不在于单个页面更快，而在于它把规范资产变成了可执行门禁。Ant Design 和 shadcn 可以作为研发实现层或参考视觉层，但不能直接替代本地 resolver/validator 链路。

## 风险

本次截图显示：本地真实输出在 1280 宽桌面截图下，表格需要横向滚动才能看到右侧“数量”列。也就是说，当前验证链路能证明 token、primitive、pattern、layout、typography、navigation、provenance 合规，但还不能替代视觉截图验收。后续如果把这套链路作为研发交付标准，建议增加桌面和移动 viewport 的截图门禁。
