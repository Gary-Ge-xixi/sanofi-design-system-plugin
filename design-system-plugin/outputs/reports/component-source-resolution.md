# Component Source Resolution

Suite: `oneorbit-approval-suite`

该报告在生成页面前统一判定组件来源，输出 runtime / adapter / compound / fallback 决策。

| Target | Decision | Output State | Remote Hits | Local Hits | Adapter Hits | Reason |
| --- | --- | --- | --- | --- | --- | --- |
| table | explicit-fallback | explicit-fallback | 8 | 18 | 0 | No official Table/DataGrid component entry is exposed in Storybook and no local Table/DataGrid primitive is registered. |
| date-range | local-adapter-via-date-picker-range | local-atomic-runtime | 20 | 10 | 1 | DatePicker range stories and a local date-picker range adapter are available; DateRange must render through runtime.datePicker({ mode: "range" }). |
| message-list | compound-block | compound-block | 6 | 22 | 0 | No MessageList component entry is exposed; messages must compose Card, Button, and Icon instead of claiming a real MessageList runtime. |
| chart | contract-backed-business-chart | contract-backed-module | 0 | 4 | 0 | BarChart may be used only through business-chart and data-visualization contracts; unsupported chart types remain explicit fallback. |
| select | local-atomic-runtime | local-atomic-runtime | 16 | 10 | 1 | select is a first-round runtime component and must render through local atomic runtime when official runtime is unavailable. |
| search-input | local-atomic-runtime | local-atomic-runtime | 10 | 10 | 1 | search-input is a first-round runtime component and must render through local atomic runtime when official runtime is unavailable. |
| button | local-atomic-runtime | local-atomic-runtime | 20 | 10 | 1 | button is a first-round runtime component and must render through local atomic runtime when official runtime is unavailable. |
| tabs | local-atomic-runtime | local-atomic-runtime | 11 | 10 | 1 | tabs is a first-round runtime component and must render through local atomic runtime when official runtime is unavailable. |
| sidebar | local-atomic-runtime | local-atomic-runtime | 0 | 20 | 1 | sidebar is a first-round runtime component and must render through local atomic runtime when official runtime is unavailable. |
| menu | local-atomic-runtime | local-atomic-runtime | 20 | 10 | 1 | menu is a first-round runtime component and must render through local atomic runtime when official runtime is unavailable. |
| card | local-atomic-runtime | local-atomic-runtime | 20 | 10 | 1 | card is a first-round runtime component and must render through local atomic runtime when official runtime is unavailable. |
| icon | local-atomic-runtime | local-atomic-runtime | 20 | 10 | 1 | icon is a first-round runtime component and must render through local atomic runtime when official runtime is unavailable. |

## Source Notes

- Storybook index: https://elements.prod.accelerator.sanofi/index.json
- Storybook stories: https://elements.prod.accelerator.sanofi/stories.json
- Local index: outputs/reports/web-research/component-sources/storybook-index.json
- Local stories: outputs/reports/web-research/component-sources/storybook-stories.json
- Adapter registry: design-system/adapters/components/adapter-registry.json
- Runtime contract: component-runtime/component-runtime.contract.json

Fetch warnings: none
