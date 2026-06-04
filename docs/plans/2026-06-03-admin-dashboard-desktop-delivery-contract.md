# Admin Dashboard Desktop Delivery Contract Implementation Plan

**Goal:** Make Sanofi admin HTML generation default to desktop backend delivery, and make asset usage such as icons verifiable through primitives, story provenance, and validators.

**Architecture:** Keep the registry -> pattern -> resolver -> renderer -> validator chain as the source of truth. Add a delivery contract for admin dashboard output instead of relying on ad hoc screenshot choices. Validators should fail when the renderer introduces mobile breakpoints or text-glyph icon fallbacks without the Icon primitive.

**Tech Stack:** Node.js scripts, static HTML/CSS, Sanofi Elements local tokens, local registry JSON, pattern resolver JSON, validator reports.

---

## Dependency Map

| Layer | Current File | Role | Change Dependency |
|---|---|---|---|
| Interface rules | `design-system-plugin/design-system/DESIGN.md` | Tells AI how to generate and verify HTML | Must state admin pages default to desktop delivery and mobile is explicit-only |
| Pattern contract | `design-system-plugin/design-system/patterns/admin-dashboard/admin-dashboard.pattern.json` | Declares required sections/primitives/rules | Needs explicit delivery contract and required asset primitives |
| Pattern index | `design-system-plugin/design-system/patterns/pattern-index.json` | Resolver discovery surface | Must mirror pattern delivery status and primitive requirements |
| Registry builder | `design-system-plugin/scripts/build-local-registry` | Publishes pattern/rules/scripts as callable registry items | Must include new rule/validator in workflow and admin dashboard item |
| Resolver runtime | `design-system-plugin/scripts/resolve-pattern-runtime` | Converts prompt to `latest-resolution.json` | Must carry delivery contract into resolution output |
| Renderer router | `design-system-plugin/scripts/render-template-html` | Routes `admin-dashboard` to dashboard renderer | Must remain the only dashboard render path |
| Dashboard renderer | `design-system-plugin/scripts/render-dashboard-template-html` | Writes dashboard HTML and renderer report | Must consume delivery contract, avoid responsive branches, and emit icon primitive refs |
| Pattern validator | `design-system-plugin/scripts/validate-pattern-resolver-runtime` | Checks resolver output against pattern | Must verify icon and delivery contract for dashboard |
| Primitive/provenance validators | `validate-primitive-usage`, `validate-provenance` | Checks known primitives/stories/provenance | Must catch icon glyph fallback and missing icon story refs |
| New delivery validator | `validate-admin-delivery-contract` | Proposed gate for desktop-only admin output | Must fail on mobile breakpoints, mobile story refs, hidden sidebar breakpoint logic |
| Visual gate | screenshot script / manual browser preview | Confirms first viewport | Must default to desktop screenshot only for admin dashboard |

## Stage 1: Contract And Rule Surface

**Goal:** Make the desired behavior explicit before changing renderer logic.

**Success Criteria:**
- `admin-dashboard.pattern.json` declares `delivery_contract.viewport_policy = "desktop-only"`.
- The delivery contract lists forbidden responsive fragments such as `@media`, mobile grid/navigation story refs, and breakpoint-based sidebar hiding.
- The contract lists required asset primitives, including `icon`.
- `DESIGN.md` says admin page outputs use desktop screenshots by default and mobile only when explicitly requested.

**Tests:**
- `design-system-plugin/scripts/validate-design-md`
- JSON parse check for `admin-dashboard.pattern.json` and `pattern-index.json`
- `design-system-plugin/scripts/resolve-pattern "Sanofi 管理驾驶舱 dashboard 数据看板 运营概览"` and inspect `latest-resolution.json` for the delivery contract

**Status:** Completed

## Stage 2: Resolver And Registry Propagation

**Goal:** Ensure the contract is not just documentation; it must travel through registry and resolver output.

**Success Criteria:**
- `build-local-registry` writes the dashboard delivery contract into `sanofi-admin-dashboard.json`.
- `resolve-pattern-runtime` copies `pattern.delivery_contract` into `latest-resolution.json`.
- `validate-pattern-resolver-runtime` checks dashboard required primitives from the pattern, including `icon`, and fails if delivery contract is missing.

**Tests:**
- `design-system-plugin/scripts/build-local-registry`
- `design-system-plugin/scripts/validate-local-registry`
- `design-system-plugin/scripts/resolve-pattern "Sanofi 管理驾驶舱 dashboard 数据看板 运营概览"`
- `design-system-plugin/scripts/validate-pattern-resolver`

**Status:** Completed

## Stage 3: Renderer Compliance

**Goal:** Make dashboard renderer consume the contract and keep desktop backend layout stable.

**Success Criteria:**
- `render-dashboard-template-html` has no responsive breakpoint branches for dashboard output.
- Renderer report includes `delivery_contract.viewport_policy`, `responsive_branch_count`, `icon_refs`, and `mobile_story_refs`.
- All visible navigation/action icons are rendered through `data-primitive="icon"` and `components-icon--gallery`.
- The generated dashboard HTML has no text-glyph icon fallbacks in the sidebar/topbar.

**Tests:**
- `design-system-plugin/scripts/render-resolved-html`
- `rg -n '@media|max-width|min-width|components-grid--mobile|components-navigationheader--mobile-view' design-system-plugin/outputs/html/admin-dashboard.resolved.html` should return no matches
- A Node/DOM check should report `iconPrimitiveRefs >= 1`, `iconStoryRefs >= 1`, `hasTextFallback = false`

**Status:** Completed

## Stage 4: Validator Gates

**Goal:** Prevent future regressions where output looks acceptable but violates the delivery contract.

**Success Criteria:**
- Add `design-system-plugin/design-system/rules/admin-delivery-contract.json`.
- Add `design-system-plugin/scripts/validate-admin-delivery-contract`.
- The validator fails when dashboard HTML contains mobile breakpoints, mobile story refs, or sidebar-hidden breakpoint logic.
- The validator fails when dashboard HTML contains sidebar/topbar icon glyph fallbacks without Icon primitive provenance.
- `rules-index.json`, `DESIGN.md`, and registry workflow include this validator.

**Tests:**
- Positive: run validator on `outputs/html/admin-dashboard.resolved.html` and expect pass.
- Negative: run validator on a temporary invalid fixture with `@media` or glyph icon fallback and expect fail.
- Full chain:
  - `validate-token-usage`
  - `validate-primitive-usage`
  - `validate-page-pattern`
  - `validate-layout-rule-usage`
  - `validate-typography-rule-usage`
  - `validate-admin-template-navigation`
  - `validate-admin-delivery-contract`
  - `validate-provenance`
  - `validate-design-md`

**Status:** Completed

## Stage 5: Desktop Visual Gate And Cleanup

**Goal:** Verify the generated page as a desktop backend handoff artifact only.

**Success Criteria:**
- Regenerated output is `design-system-plugin/outputs/html/admin-dashboard.resolved.html`.
- Desktop screenshot is refreshed at `design-system-plugin/outputs/screenshots/admin-dashboard-desktop-1440.png`.
- No new mobile screenshot is required or used for acceptance.
- If stale mobile screenshots remain from older runs, they are not cited as current acceptance evidence unless deletion is approved separately.

**Tests:**
- Use a local HTTP preview and Playwright desktop viewport `1440x900`.
- Browser check: `scrollWidth === 1440`, `hasMediaQuery === false`, `hasMobileStoryRef === false`, `hasTextFallback === false`.
- Stop local preview service before reporting.

**Status:** Completed

## Execution Notes

- Current workspace is not a git repository, so commit steps are not available here.
- Do not delete stale screenshots without user confirmation.
- Do not remove mobile Storybook atoms from the component library; they are valid source assets. Only prevent the admin dashboard delivery path from using them by default.
- Keep `meta name="viewport"` because `validate-page-pattern` treats it as a page completeness marker, not as mobile adaptation logic.
