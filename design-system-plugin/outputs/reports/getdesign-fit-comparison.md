# getdesign / DESIGN.md 与本地 Sanofi HTML 生成方案对比

## 结论

`getdesign` 适合放在“参考风格抽取 / reference-fit 输入”这一层，不适合替代本地 Sanofi 规范到 HTML 的主生产链路。

它能帮助解决当前本地方案的一个短板：从参考页面里抽出视觉主题、颜色、字体、组件风格、布局、响应式和 prompt guide。但它的目标产物是 `design.md`，不是可交付业务 HTML；它也不维护 Sanofi 的官方 token、Storybook provenance、component contract、page pattern、validator。

## getdesign 当前做什么

| 项 | 观察 |
| --- | --- |
| 目标 | 给一个公开 URL，提取真实 CSS、截图和视觉模式，生成 9 段式 `design.md`。 |
| 输出 | Markdown 设计规范，不是 HTML，不是 React，不是 Figma。 |
| 方法 | 真实浏览器渲染、抓 CSS / computed styles、聚类 tokens、截图，再综合成结构化设计文档。 |
| 入口 | 官方 docs 提到 Web、API、CLI、SDK、Skill；GitHub README 显示当前 repo 主要实现 web 和 skill，CLI/SDK 仍有 placeholder 痕迹。 |
| 适合 | 从公开网站快速抽参考风格，给 AI 生成 UI 时当 prompt/context。 |
| 不适合 | 直接生成 Sanofi 业务后台 HTML；处理 localhost、私有 IP、auth-gated 内网页；替代官方设计系统合同。 |

## 与本地 design.md / design-system-plugin 方案对比

| 维度 | getdesign / DESIGN.md | 本地 Sanofi 方案 | 判断 |
| --- | --- | --- | --- |
| 核心目标 | 从任意公开 URL 抽出视觉规范文档。 | 从本地 Sanofi 规范资产生成可验证 HTML。 | 两者目标不同。 |
| 输入 | 公共网站 URL。 | registry item、Storybook docs、contracts、tokens、patterns、templates、rules。 | getdesign 更适合作参考输入。 |
| 输出 | `design.md`，9 sections。 | `outputs/html/*.html` + reports。 | 你需要的是 HTML，不能只停在 markdown。 |
| 规范来源 | 公开页面的 computed style / CSS / screenshot。 | Sanofi 官方/本地化 docs、tokens、component contracts、Storybook provenance。 | 本地更适合品牌合规。 |
| 页面像不像参考 | 强于本地现状，因为它显式抽参考页面视觉。 | 当前弱，validator 过但 reference-fit 不够。 | 可以借 getdesign 的抽取层。 |
| 业务页面结构 | 不维护业务模板。 | 有 admin-query-panel pattern/template。 | 本地更适合业务后台。 |
| list/table | 可描述参考页面 table/list 观感，但不形成可执行 contract。 | 当前 table 是 fallback，缺标准。 | 最优是用 getdesign 抽参数，再写成本地 table fallback contract。 |
| 验证闭环 | 验证 grounding 和 section order。 | token、primitive、page-pattern、layout、typography、navigation、provenance validators。 | 本地验证更接近交付。 |
| 法务/合规 | 公开目录是独立分析，不是官方设计系统；不能复制品牌资产/商标/图片。 | 面向你自己的 Sanofi 规范资产。 | 用 getdesign 做参考时要避免直接复刻第三方品牌。 |

## 对你业务场景的适配度

| 用法 | 适配度 | 原因 |
| --- | --- | --- |
| 直接替代本地 renderer，生成业务 HTML | 低 | 它输出 design.md，不输出可验证 Sanofi HTML。 |
| 替代 Sanofi token / contract / validator | 低 | 它抽公开页面，不维护你的官方规范证据。 |
| 抽取参考页面视觉参数 | 高 | 正好能补本地方案缺的 reference-fit 输入。 |
| 沉淀 page profile / density / table 参数 | 中高 | 需要二次转换，把 design.md 变成本地 JSON rules。 |
| 做竞品/参考页分析 | 高 | 很适合快速从公开 URL 生成设计观察。 |
| 内部后台页 / 登录后页面 | 低到中 | 官方 skill 明确不适合 auth-gated、localhost；除非你自己扩展本地浏览器采集流程。 |

## 推荐融合方式

不要把 `getdesign` 当作最终生产系统，而是做成一个前置输入层：

```text
公开参考 URL
  -> getdesign-style extraction
  -> reference.design.md
  -> convert to local reference-fit JSON
  -> Sanofi page profile
  -> Sanofi renderer
  -> developer HTML + audit report + screenshot gate
```

建议新增本地资产：

| 新资产 | 作用 |
| --- | --- |
| `reference-design-md/` | 存放从公开参考页抽取的 `*.design.md`。 |
| `scripts/convert-design-md-to-reference-fit` | 把 9-section markdown 转成 renderer 可用参数。 |
| `design-system/reference-fit/admin-query-list.rules.json` | 页面级参考还原规则。 |
| `design-system/rules/admin-density.json` | 后台密度参数。 |
| `design-system/contracts/page-modules/data-table-fallback.contract.json` | list/table fallback 的执行合同。 |

## 最终判断

`getdesign` 值得借鉴，但不适合作为你“基于规范快速生产 HTML”的主链路。

它最适合补你现在最缺的东西：参考页面视觉参数化。你的主链路仍应该是本地 Sanofi registry -> resolver -> renderer -> validators，只是在 resolver 前面增加一个 `reference-fit` 输入，让页面更像参考图。

一句话：`getdesign` 负责“看懂参考”，本地 Sanofi 负责“按规范交付”。
