const runtimeName = "sanofi-local-atomic-components";
const renderSource = "local-atomic-component-package";
const defaultComponentSize = "medium";
const brandLogoPath = "../../design-system/assets/brand/sanofi-logo-full.svg";

const storyIds = {
  button: "components-button--primary",
  icon: "components-icon--gallery",
  sidebar: "components-sidebar--default",
  menu: "components-menu--default",
  container: "components-container--fixed",
  grid: "components-grid--desktop",
  "search-input": "components-searchinput--default",
  select: "components-select--default",
  "date-picker": "components-datepicker--default",
  card: "components-card--default",
  tag: "components-tag--semantic",
  "progress-bar": "components-progressbar--all-states",
  tabs: "components-tabs--default"
};

const docsIds = {
  button: "components-button--docs",
  icon: "components-icon--docs",
  sidebar: "components-sidebar--docs",
  menu: "components-menu--docs",
  container: "components-container--docs",
  grid: "components-grid--docs",
  "search-input": "components-searchinput--docs",
  select: "components-select--docs",
  "date-picker": "components-datepicker--docs",
  card: "components-card--docs",
  tag: "components-tag--docs",
  "progress-bar": "components-progressbar--docs",
  tabs: "components-tabs--docs"
};

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function attrsFor(values) {
  return Object.entries(values)
    .filter(([, value]) => value !== undefined && value !== null && value !== false)
    .map(([key, value]) => {
      if (value === true) return key;
      return `${key}="${escapeHtml(value)}"`;
    })
    .join(" ");
}

function createRuntime(resolution) {
  const tokenSource = resolution.source_provenance?.token_source || "foundations-colors--docs";

  function primitive(componentId) {
    return (resolution.primitive_refs || []).find((item) => item.primitive_id === componentId) || {
      docs_id: docsIds[componentId] || "unknown",
      story_id: storyIds[componentId] || "unknown"
    };
  }

  function componentAttrs(componentId, patternId, instance, extra = {}) {
    const ref = primitive(componentId);
    const storyId = storyIds[componentId] || ref.story_id;
    const docsId = docsIds[componentId] || ref.docs_id;
    return attrsFor({
      "data-component-runtime": runtimeName,
      "data-render-source": renderSource,
      "data-component-instance": instance,
      "data-component-id": componentId,
      "data-primitive": componentId,
      "data-source-component": componentId,
      "data-story-id": storyId,
      "data-source-doc-id": docsId,
      "data-pattern": patternId,
      "data-token-source": tokenSource,
      ...extra
    });
  }

  const iconPaths = {
    overview: '<rect x="4" y="4" width="7" height="7" rx="1.25"></rect><rect x="13" y="4" width="7" height="7" rx="1.25"></rect><rect x="4" y="13" width="7" height="7" rx="1.25"></rect><rect x="13" y="13" width="7" height="7" rx="1.25"></rect>',
    data: '<rect x="3" y="5" width="18" height="16" rx="1.5"></rect><path d="M3 10h18"></path><path d="M8 5v16"></path>',
    approval: '<rect x="5" y="4" width="14" height="18" rx="1.5"></rect><path d="M8 9h8"></path><path d="M8 13h8"></path><path d="M8 17h5"></path>',
    balance: '<path d="M4 19V5"></path><path d="M4 19h17"></path><rect x="7" y="10" width="3" height="6" rx=".5"></rect><rect x="12" y="7" width="3" height="9" rx=".5"></rect><rect x="17" y="12" width="3" height="4" rx=".5"></rect>',
    system: '<rect x="4" y="5" width="16" height="14" rx="1.5"></rect><path d="M8 9h8"></path><path d="M8 13h8"></path>',
    chevronDown: '<path d="m7 10 5 5 5-5"></path>',
    chevronRight: '<path d="m9 6 6 6-6 6"></path>',
    arrowRight: '<path d="M5 12h14"></path><path d="m13 6 6 6-6 6"></path>',
    download: '<path d="M12 3v11"></path><path d="m8 10 4 4 4-4"></path><path d="M4 20h16"></path>',
    filter: '<path d="M4 5h16"></path><path d="M7 12h10"></path><path d="M10 19h4"></path>',
    search: '<circle cx="11" cy="11" r="7"></circle><path d="m16 16 4 4"></path>',
    bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 7h18s-3 0-3-7"></path><path d="M10 19a2 2 0 0 0 4 0"></path>',
    pending: '<path d="M6 8a6 6 0 0 1 12 0v5l2 3H4l2-3Z"></path><path d="M9 20h6"></path>',
    inbox: '<path d="M4 12 7 5h10l3 7v7H4Z"></path><path d="M4 12h5l2 3h2l2-3h5"></path>',
    apps: '<rect x="4" y="4" width="6" height="6" rx="1"></rect><rect x="14" y="4" width="6" height="6" rx="1"></rect><rect x="4" y="14" width="6" height="6" rx="1"></rect><rect x="14" y="14" width="6" height="6" rx="1"></rect>',
    policy: '<path d="M7 3h8l4 4v14H7Z"></path><path d="M15 3v5h5"></path><path d="M10 13h6"></path><path d="M10 17h4"></path>',
    user: '<circle cx="12" cy="8" r="4"></circle><path d="M4 21a8 8 0 0 1 16 0"></path>',
    calendar: '<rect x="4" y="5" width="16" height="17" rx="2"></rect><path d="M8 3v4"></path><path d="M16 3v4"></path><path d="M4 10h16"></path>'
  };

  function icon(name, options = {}) {
    const className = options.className || "snf-icon";
    return `<span class="${escapeHtml(className)}" ${componentAttrs("icon", "dashboard-icon", `icon.${name}`, {
      "data-icon-name": name,
      "aria-hidden": "true"
    })}><svg viewBox="0 0 24 24" focusable="false">${iconPaths[name] || iconPaths.overview}</svg></span>`;
  }

  function brandLogo(options = {}) {
    return `<img class="${escapeHtml(options.className || "snf-brand-logo")}" src="${escapeHtml(options.src || brandLogoPath)}" alt="${escapeHtml(options.alt || "Sanofi")}" data-brand-asset-id="sanofi-logo-full" data-brand-asset-type="logo" data-source-doc-id="brand-assets" data-source-url="https://elements.sanofidesign.com/557b0250b/p/396515-brand-assets">`;
  }

  function button(options = {}) {
    const label = options.label || "Action";
    const variant = options.variant || "secondary";
    const iconName = options.icon || "";
    const iconPosition = options.iconPosition || "start";
    const iconMarkup = iconName ? icon(iconName, { className: "snf-button-icon" }) : "";
    const children = iconName && iconPosition === "start"
      ? `${iconMarkup}<span>${escapeHtml(label)}</span>`
      : `<span>${escapeHtml(label)}</span>${iconMarkup}`;
    return `<button class="snf-button snf-button--${escapeHtml(variant)}" ${componentAttrs("button", options.pattern || "dashboard-action", options.instance || `button.${label}`, {
      type: options.type || "button",
      "data-button-variant": variant,
      "data-button-size": options.size || defaultComponentSize
    })}>${children}</button>`;
  }

  function searchInput(options = {}) {
    const id = options.id || "dashboard-search";
    return `<label class="snf-field snf-search-field" ${componentAttrs("search-input", "dashboard-toolbar", options.instance || "search.dashboard", {
      "data-search-size": options.size || defaultComponentSize,
      "data-field-control": "root",
      "data-field-control-kind": "search-input",
      "data-control-size": options.size || defaultComponentSize
    })}>
      <span class="snf-field-label">${escapeHtml(options.label || "搜索")}</span>
      <span class="snf-control-shell snf-search-shell" data-control-shell="field" data-control-kind="search-input">
        ${icon(options.icon || "filter", { className: "snf-search-icon" })}
        <input id="${escapeHtml(id)}" class="snf-search-input" type="search" placeholder="${escapeHtml(options.placeholder || "Type in to search")}" aria-label="${escapeHtml(options.ariaLabel || options.label || "Search")}">
      </span>
    </label>`;
  }

  function select(options = {}) {
    const id = options.id || "dashboard-select";
    const value = options.value || options.options?.[0]?.value || options.options?.[0]?.label || "";
    const selected = (options.options || []).find((item) => item.value === value || item.label === value) || options.options?.[0] || { label: value, value };
    const listboxId = `${id}-listbox`;
    const labelId = `${id}-label`;
    const optionMarkup = (options.options || []).map((item, index) => {
      const optionValue = item.value || item.label;
      const active = optionValue === (selected.value || selected.label);
      return `<li class="snf-select-option" role="option" id="${escapeHtml(id)}-option-${index}" data-value="${escapeHtml(optionValue)}" aria-selected="${active ? "true" : "false"}">${escapeHtml(item.label || item.value)}</li>`;
    }).join("");
    return `<div class="snf-field snf-select-field" ${componentAttrs("select", "dashboard-toolbar", options.instance || "select.dashboard.region", {
      "data-select-size": options.size || defaultComponentSize,
      "data-select-shell": "normal",
      "data-select-edge-safe": "true",
      "data-select-label-position": options.labelPosition || "top",
      "data-select-native": "false",
      "data-native": "false",
      "data-field-control": "root",
      "data-field-control-kind": "select",
      "data-control-size": options.size || defaultComponentSize
    })}>
      <span class="snf-field-label" id="${escapeHtml(labelId)}">${escapeHtml(options.label || "Select")}</span>
      <div class="snf-select-shell" data-select-part="root">
        <button class="snf-control-shell snf-select-trigger" type="button" role="combobox" aria-haspopup="listbox" aria-expanded="false" aria-labelledby="${escapeHtml(labelId)} ${escapeHtml(id)}-value" aria-controls="${escapeHtml(listboxId)}" data-control-shell="field" data-control-kind="select" data-select-trigger>
          <span class="snf-select-value" id="${escapeHtml(id)}-value" data-select-value>${escapeHtml(selected.label || selected.value)}</span>
          ${icon("chevronDown", { className: "snf-select-chevron" })}
        </button>
        <ul class="snf-select-listbox" role="listbox" id="${escapeHtml(listboxId)}" aria-labelledby="${escapeHtml(labelId)}" hidden data-select-listbox>
          ${optionMarkup}
        </ul>
      </div>
    </div>`;
  }

  function datePicker(options = {}) {
    const id = options.id || "dashboard-date-picker";
    const mode = options.mode || "single";
    const selectorType = options.selectorType || "day";
    const value = options.value || (mode === "range" ? "2026-06-01 ~ 2026-06-30" : "2026-06-04");
    const labelId = `${id}-label`;
    const valueId = `${id}-value`;
    const dialogId = `${id}-dialog`;
    const storyId = options.storyId || (mode === "range"
      ? "components-datepicker--range"
      : selectorType === "month"
        ? "components-datepicker--month-picker"
        : "components-datepicker--medium-size");
    return `<div class="snf-field snf-date-picker-field" ${componentAttrs("date-picker", options.pattern || "business-form-field", options.instance || `date-picker.${id}`, {
      "data-story-id": storyId,
      "data-date-picker-root": "true",
      "data-date-picker-size": options.size || defaultComponentSize,
      "data-date-picker-shell": "normal",
      "data-date-picker-edge-safe": "true",
      "data-date-picker-mode": mode,
      "data-date-picker-selector-type": selectorType,
      "data-date-picker-clearable": options.clearable === false ? "false" : "true",
      "data-field-control": "root",
      "data-field-control-kind": "date-picker",
      "data-control-size": options.size || defaultComponentSize
    })}>
      <span class="snf-field-label" id="${escapeHtml(labelId)}">${escapeHtml(options.label || "Date")}</span>
      <div class="snf-date-picker-shell" data-date-picker-part="root">
        <button class="snf-control-shell snf-date-picker-trigger" type="button" role="combobox" aria-haspopup="dialog" aria-expanded="false" aria-labelledby="${escapeHtml(labelId)} ${escapeHtml(valueId)}" aria-controls="${escapeHtml(dialogId)}" data-control-shell="field" data-control-kind="date-picker" data-date-picker-trigger="true">
          <span class="snf-date-picker-value" id="${escapeHtml(valueId)}" data-date-picker-value>${escapeHtml(value)}</span>
          ${icon("calendar", { className: "snf-date-picker-icon" })}
        </button>
        <div class="snf-date-picker-dialog" id="${escapeHtml(dialogId)}" role="dialog" aria-modal="false" aria-labelledby="${escapeHtml(labelId)}" hidden data-date-picker-dialog="true">
          <div class="snf-date-picker-dialog-head">
            <span>${escapeHtml(mode === "range" ? "选择日期范围" : "选择日期")}</span>
            <button class="snf-date-picker-close" type="button" aria-label="关闭日期选择" data-date-picker-close>×</button>
          </div>
          <div class="snf-date-picker-calendar" data-date-picker-calendar="${escapeHtml(selectorType)}">
            <span>一</span><span>二</span><span>三</span><span>四</span><span>五</span><span>六</span><span>日</span>
            <button type="button">1</button><button type="button">2</button><button type="button">3</button><button type="button">4</button><button type="button">5</button><button type="button">6</button><button type="button">7</button>
          </div>
        </div>
      </div>
    </div>`;
  }

  function tag(options = {}) {
    const variant = options.variant || "branded";
    return `<span class="snf-tag snf-tag--${escapeHtml(variant)}" ${componentAttrs("tag", "status", options.instance || `tag.${options.label || "status"}`, {
      "data-variant": variant
    })}>${escapeHtml(options.label || "Status")}</span>`;
  }

  function progressBar(options = {}) {
    const value = Number(options.value ?? 0);
    return `<div class="snf-progress" ${componentAttrs("progress-bar", "kpi-summary", options.instance || "progress.dashboard", {
      role: "progressbar",
      "aria-valuenow": String(value),
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    })}><div class="snf-progress-fill" style="--progress-value: ${escapeHtml(value)}%;"></div></div>`;
  }

  function card(options = {}) {
    return `<article class="snf-card ${escapeHtml(options.className || "")}" ${componentAttrs("card", options.pattern || "kpi-summary", options.instance || "card.dashboard")}>${options.children || ""}</article>`;
  }

  function tabs(options = {}) {
    const tabsList = options.tabs || [];
    const selectedId = options.selected || tabsList[0]?.id;
    const tabButtons = tabsList.map((item) => {
      const selected = item.id === selectedId;
      return `<button class="snf-tab" role="tab" type="button" id="${escapeHtml(item.id)}-tab" aria-controls="${escapeHtml(item.id)}-panel" aria-selected="${selected ? "true" : "false"}" data-tab-target="${escapeHtml(item.id)}">${escapeHtml(item.label)}</button>`;
    }).join("");
    return `<div class="snf-tabs" ${componentAttrs("tabs", options.pattern || "work-queue", options.instance || "tabs.work-queue", {
      role: "tablist"
    })}>${tabButtons}</div>`;
  }

  function sidebar(options = {}) {
    const items = options.items || [];
    const itemMarkup = items.map((item) => {
      const hasChildren = Array.isArray(item.children) && item.children.length;
      const childMarkup = hasChildren ? `<ul class="snf-nav-children" role="list" ${item.expanded ? "" : "hidden"}>${item.children.map((child) => `<li data-sidebar-part="item"><a class="snf-nav-child" href="${escapeHtml(child.href || "#")}">${escapeHtml(child.label)}</a></li>`).join("")}</ul>` : "";
      return `<li data-sidebar-part="item">
        <a class="snf-nav-link" href="${escapeHtml(item.href || "#")}" ${item.active ? 'aria-current="page"' : ""} ${hasChildren ? `aria-expanded="${item.expanded ? "true" : "false"}" data-sidebar-toggle` : ""}>
          <span class="snf-nav-item-main">${icon(item.icon || "overview")}${escapeHtml(item.label)}</span>
          ${hasChildren ? icon("chevronDown", { className: "snf-nav-chevron" }) : ""}
        </a>
        ${childMarkup}
      </li>`;
    }).join("");
    return `<aside class="snf-sidebar" data-template-part="sidebar" data-sidebar-part="root" aria-label="${escapeHtml(options.ariaLabel || "应用导航")}" ${componentAttrs("sidebar", "admin-dashboard-sidebar", options.instance || "sidebar.primary")}>
      <div class="snf-sidebar-heading" data-sidebar-part="header">${escapeHtml(options.heading || "导航")}</div>
      <nav class="snf-sidebar-content" data-sidebar-part="content" aria-label="${escapeHtml(options.navLabel || "主导航")}" ${componentAttrs("menu", "admin-dashboard-navigation", "menu.primary")}>
        <section data-sidebar-part="section"><ul class="snf-nav-list" role="list">${itemMarkup}</ul></section>
      </nav>
      <footer class="snf-sidebar-footer" data-sidebar-part="footer" data-source-doc-id="components-sidebar--docs"><span data-sidebar-part="userProfile">${escapeHtml(options.footer || "")}</span></footer>
    </aside>`;
  }

  function containerStart(extra = {}) {
    return `<section class="snf-container" ${componentAttrs("container", "layout-container", extra.instance || "container.dashboard", {
      "data-layout-rule": extra.layoutRule || "layout-grid-container",
      "data-container-part": "root",
      "data-container-mode": "fixed",
      "data-container-width-token": "--elements-container-width-2xl",
      "data-component-contract": "Container"
    })}><div class="snf-container-content" data-container-part="contentContainer" data-component-contract="Container.contentContainer" data-component-slot="Container.contentContainer" data-source-doc-id="components-container--docs">`;
  }

  function containerEnd() {
    return "</div></section>";
  }

  function gridStart(extra = {}) {
    return `<div class="snf-layout-grid" ${componentAttrs("grid", "layout-grid", extra.instance || "grid.dashboard", {
      "data-layout-rule": extra.layoutRule || "layout-grid-container",
      "data-grid-part": "root",
      "data-grid-columns": "12",
      "data-grid-gap-token": "--elements-grid-gutter-lg",
      "data-component-contract": "Grid.Root"
    })}>`;
  }

  function gridEnd() {
    return "</div>";
  }

  function gridItemAttrs(span, name) {
    return attrsFor({
      "data-grid-part": "item",
      "data-component-contract": "Grid.Item",
      "data-grid-item-name": name,
      "data-grid-item-span": span,
      "data-grid-item-xl": span,
      "data-grid-item-xxl": span
    });
  }

  return {
    runtimeName,
    renderSource,
    componentAttrs,
    icon,
    brandLogo,
    button,
    searchInput,
    select,
    datePicker,
    tag,
    progressBar,
    card,
    tabs,
    sidebar,
    containerStart,
    containerEnd,
    gridStart,
    gridEnd,
    gridItemAttrs
  };
}

function runtimeStyles() {
  return `
      .snf-button { display: inline-flex; align-items: center; justify-content: center; gap: var(--elements-spacing-2xs); min-block-size: 2.5rem; border: 0.0625rem solid var(--elements-color-semantic-accent-default); border-radius: var(--elements-radius-sm); background: var(--dashboard-surface-bg); color: var(--elements-color-semantic-text-accent-default); padding-inline: var(--elements-spacing-lg); font: inherit; font-weight: var(--elements-font-weight-bold); white-space: nowrap; cursor: pointer; transition: border-color var(--elements-motion-duration-150) var(--elements-motion-ease-out), background-color var(--elements-motion-duration-150) var(--elements-motion-ease-out), color var(--elements-motion-duration-150) var(--elements-motion-ease-out), transform var(--elements-motion-duration-75) var(--elements-motion-ease-out); }
      .snf-button:hover { background: var(--elements-color-semantic-background-brand-subtle); }
      .snf-button:active { transform: translateY(0.0625rem); }
      .snf-button--primary { background: var(--elements-color-semantic-accent-default); color: var(--elements-color-components-tooltip-bg-default); }
      .snf-button--primary:hover { background: var(--elements-color-semantic-accent-hover); }
      .snf-button--tertiary { border-color: transparent; background: transparent; }
      .snf-brand-logo { display: block; inline-size: 5.875rem; block-size: auto; flex: 0 0 auto; }
      .snf-icon, .snf-button-icon, .snf-search-icon, .snf-select-chevron, .snf-date-picker-icon, .snf-nav-chevron { inline-size: 1.5rem; block-size: 1.5rem; display: inline-grid; place-items: center; flex: 0 0 auto; }
      .snf-icon svg, .snf-button-icon svg, .snf-search-icon svg, .snf-select-chevron svg, .snf-date-picker-icon svg, .snf-nav-chevron svg { inline-size: 100%; block-size: 100%; fill: none; stroke: currentColor; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; }
      .snf-sidebar { grid-row: 2; display: grid; grid-template-rows: auto 1fr auto; gap: var(--elements-spacing-md); padding: var(--elements-spacing-md) var(--elements-spacing-sm); background: var(--dashboard-surface-bg); border-inline-end: 0.0625rem solid var(--dashboard-border); overflow: hidden; }
      .snf-sidebar-heading { padding-inline: var(--elements-spacing-sm); font-size: var(--elements-font-size-200); color: var(--elements-color-semantic-text-subtle_inverse); }
      .snf-sidebar-content { min-block-size: 0; overflow: auto; }
      .snf-nav-list, .snf-nav-children { list-style: none; margin: 0; padding: 0; display: grid; gap: var(--elements-spacing-2xs); }
      .snf-nav-link, .snf-nav-child { display: flex; align-items: center; min-block-size: 2.5rem; border-radius: var(--elements-radius-sm); color: var(--elements-color-semantic-text-subtle_inverse); padding-inline: var(--elements-spacing-sm); }
      .snf-nav-link { justify-content: space-between; }
      .snf-nav-child { padding-inline-start: var(--elements-spacing-3xl); }
      .snf-nav-link[aria-current="page"], .snf-nav-child[aria-current="page"] { background: var(--dashboard-active-bg); color: var(--elements-color-semantic-text-accent-default); font-weight: var(--elements-font-weight-bold); }
      .snf-nav-link:hover, .snf-nav-child:hover { background: var(--dashboard-active-bg); }
      .snf-nav-item-main { display: flex; align-items: center; gap: var(--elements-spacing-md); }
      .snf-sidebar-footer { border-block-start: 0.0625rem solid var(--dashboard-border); padding: var(--elements-spacing-sm); color: var(--elements-color-semantic-text-subtle_inverse); }
      .snf-container { inline-size: 100%; min-inline-size: 0; max-inline-size: var(--elements-container-width-2xl); margin-inline: auto; }
      .snf-container-content { inline-size: 100%; min-inline-size: 0; padding-inline: var(--elements-spacing-xl); }
      .snf-layout-grid { display: grid; grid-template-columns: repeat(12, minmax(0, 1fr)); gap: var(--elements-grid-gutter-lg); align-items: start; min-inline-size: 0; }
      .snf-field { display: grid; gap: var(--elements-spacing-2xs); min-inline-size: 0; font-size: var(--elements-font-size-200); color: var(--elements-color-semantic-text-subtle_inverse); }
      .snf-field-label { font-size: var(--elements-font-size-200); color: var(--elements-color-semantic-text-subtle_inverse); }
      .snf-control-shell { inline-size: 100%; min-inline-size: 0; min-block-size: 2.5rem; border: 0.0625rem solid var(--dashboard-border); border-radius: var(--elements-radius-sm); background: var(--dashboard-surface-bg); color: var(--elements-color-semantic-text-default_inverse); }
      .snf-search-shell { display: grid; grid-template-columns: auto minmax(0, 1fr); align-items: center; gap: var(--elements-spacing-2xs); padding-inline: var(--elements-spacing-sm); }
      .snf-search-input { inline-size: 100%; min-inline-size: 0; min-block-size: 2.25rem; border: 0; background: transparent; color: inherit; padding: 0; font: inherit; outline: 0; }
      .snf-select-shell { position: relative; min-inline-size: 0; }
      .snf-select-trigger { display: flex; align-items: center; justify-content: space-between; gap: var(--elements-spacing-sm); padding-inline: var(--elements-spacing-sm); font: inherit; cursor: pointer; }
      .snf-select-trigger:hover { border-color: var(--elements-color-semantic-accent-default); }
      .snf-select-listbox { position: absolute; inset-block-start: calc(100% + var(--elements-spacing-3xs)); inset-inline: 0; z-index: 20; display: grid; gap: var(--elements-spacing-3xs); max-block-size: 12rem; overflow: auto; margin: 0; padding: var(--elements-spacing-2xs); list-style: none; border: 0.0625rem solid var(--dashboard-border); border-radius: var(--elements-radius-sm); background: var(--dashboard-surface-bg); box-shadow: var(--elements-core-elevation-02); }
      .snf-select-listbox[hidden] { display: none; }
      .snf-select-option { border-radius: var(--elements-radius-sm); padding: var(--elements-spacing-sm); cursor: pointer; color: var(--elements-color-semantic-text-default_inverse); }
      .snf-select-option:hover, .snf-select-option[aria-selected="true"] { background: var(--dashboard-active-bg); color: var(--elements-color-semantic-text-accent-default); }
      .snf-date-picker-shell { position: relative; min-inline-size: 0; }
      .snf-date-picker-trigger { display: flex; align-items: center; justify-content: space-between; gap: var(--elements-spacing-sm); padding-inline: var(--elements-spacing-sm); font: inherit; white-space: nowrap; cursor: pointer; }
      .snf-date-picker-value { min-inline-size: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
      .snf-date-picker-trigger:hover { border-color: var(--elements-color-semantic-accent-default); }
      .snf-date-picker-dialog { position: absolute; inset-block-start: calc(100% + var(--elements-spacing-3xs)); inset-inline-start: 0; z-index: 25; min-inline-size: 18rem; padding: var(--elements-spacing-sm); border: 0.0625rem solid var(--dashboard-border); border-radius: var(--elements-radius-sm); background: var(--dashboard-surface-bg); box-shadow: var(--elements-core-elevation-02); }
      .snf-date-picker-dialog[hidden] { display: none; }
      .snf-date-picker-dialog-head { display: flex; align-items: center; justify-content: space-between; gap: var(--elements-spacing-sm); margin-block-end: var(--elements-spacing-sm); font-weight: var(--elements-font-weight-bold); }
      .snf-date-picker-close { display: inline-grid; place-items: center; inline-size: 2rem; block-size: 2rem; border: 0; border-radius: var(--elements-radius-rounded); background: transparent; color: inherit; font: inherit; cursor: pointer; }
      .snf-date-picker-calendar { display: grid; grid-template-columns: repeat(7, minmax(0, 1fr)); gap: var(--elements-spacing-3xs); text-align: center; font-size: var(--elements-font-size-100); }
      .snf-date-picker-calendar span { color: var(--elements-color-semantic-text-subtle_inverse); }
      .snf-date-picker-calendar button { min-block-size: 2rem; border: 0.0625rem solid transparent; border-radius: var(--elements-radius-sm); background: var(--dashboard-active-bg); color: var(--elements-color-semantic-text-default_inverse); font: inherit; cursor: pointer; }
      .snf-card { display: grid; gap: var(--elements-spacing-md); min-block-size: 11rem; padding: var(--elements-spacing-lg); background: var(--dashboard-surface-bg); border: 0.0625rem solid var(--dashboard-border); border-radius: var(--elements-radius-sm); }
      .snf-tag { display: inline-flex; align-items: center; inline-size: fit-content; border: 0.0625rem solid var(--elements-color-components-tag-branded-border); border-radius: var(--elements-radius-rounded); background: var(--elements-color-components-tag-branded-bg-subtle); color: var(--elements-color-components-tag-branded-text); padding: var(--elements-spacing-3xs) var(--elements-spacing-sm); font-size: var(--elements-font-size-200); font-weight: var(--elements-font-weight-bold); white-space: nowrap; }
      .snf-tag--semantic-success { border-color: var(--elements-color-components-tag-semantic_green-border); background: var(--elements-color-components-tag-semantic_green-bg-solid); color: var(--elements-color-components-tag-semantic_green-text-inverse); }
      .snf-progress { overflow: hidden; min-block-size: 0.5rem; border-radius: var(--elements-radius-rounded); background: var(--elements-color-semantic-background-neutral-subtle); }
      .snf-progress-fill { inline-size: var(--progress-value); min-block-size: 0.5rem; border-radius: var(--elements-radius-rounded); background: var(--elements-color-semantic-accent-default); }
      .snf-tabs { display: flex; gap: var(--elements-spacing-sm); border-block-end: 0.0625rem solid var(--dashboard-border); margin-block-end: var(--elements-spacing-md); }
      .snf-tab { border: 0; border-block-end: 0.1875rem solid transparent; background: transparent; color: var(--elements-color-semantic-text-default_inverse); padding: var(--elements-spacing-sm) var(--elements-spacing-md); font: inherit; font-weight: var(--elements-font-weight-bold); cursor: pointer; }
      .snf-tab[aria-selected="true"] { color: var(--elements-color-semantic-text-accent-default); border-block-end-color: var(--elements-color-semantic-accent-default); }
      .snf-button:focus-visible, .snf-nav-link:focus-visible, .snf-nav-child:focus-visible, .snf-control-shell:focus-within, .snf-control-shell:focus-visible, .snf-tab:focus-visible { outline: 0.1875rem solid var(--elements-color-semantic-accent-focus); outline-offset: var(--elements-spacing-3xs); }`;
}

function runtimeScript() {
  return `<script data-component-runtime="${runtimeName}" data-render-source="${renderSource}">
      (() => {
        const closeSelect = (root) => {
          const trigger = root.querySelector("[data-select-trigger]");
          const listbox = root.querySelector("[data-select-listbox]");
          if (!trigger || !listbox) return;
          trigger.setAttribute("aria-expanded", "false");
          listbox.hidden = true;
        };

        document.querySelectorAll("[data-component-id='select'][data-component-runtime='${runtimeName}']").forEach((root) => {
          const trigger = root.querySelector("[data-select-trigger]");
          const listbox = root.querySelector("[data-select-listbox]");
          const valueNode = root.querySelector("[data-select-value]");
          if (!trigger || !listbox || !valueNode) return;

          trigger.addEventListener("click", () => {
            const nextExpanded = trigger.getAttribute("aria-expanded") !== "true";
            trigger.setAttribute("aria-expanded", String(nextExpanded));
            listbox.hidden = !nextExpanded;
          });

          listbox.querySelectorAll("[role='option']").forEach((option) => {
            option.addEventListener("click", () => {
              listbox.querySelectorAll("[role='option']").forEach((item) => item.setAttribute("aria-selected", "false"));
              option.setAttribute("aria-selected", "true");
              valueNode.textContent = option.textContent.trim();
              closeSelect(root);
            });
          });
        });

        document.addEventListener("click", (event) => {
          document.querySelectorAll("[data-component-id='select'][data-component-runtime='${runtimeName}']").forEach((root) => {
            if (!root.contains(event.target)) closeSelect(root);
          });
        });

        const closeDatePicker = (root) => {
          const trigger = root.querySelector("[data-date-picker-trigger='true']");
          const dialog = root.querySelector("[data-date-picker-dialog='true']");
          if (!trigger || !dialog) return;
          trigger.setAttribute("aria-expanded", "false");
          dialog.hidden = true;
        };

        document.querySelectorAll("[data-component-id='date-picker'][data-component-runtime='${runtimeName}']").forEach((root) => {
          const trigger = root.querySelector("[data-date-picker-trigger='true']");
          const dialog = root.querySelector("[data-date-picker-dialog='true']");
          if (!trigger || !dialog) return;

          trigger.addEventListener("click", () => {
            const nextExpanded = trigger.getAttribute("aria-expanded") !== "true";
            trigger.setAttribute("aria-expanded", String(nextExpanded));
            dialog.hidden = !nextExpanded;
          });

          root.querySelectorAll("[data-date-picker-close]").forEach((closeButton) => {
            closeButton.addEventListener("click", () => closeDatePicker(root));
          });
        });

        document.addEventListener("click", (event) => {
          document.querySelectorAll("[data-component-id='date-picker'][data-component-runtime='${runtimeName}']").forEach((root) => {
            if (!root.contains(event.target)) closeDatePicker(root);
          });
        });

        document.querySelectorAll("[data-component-id='tabs'][data-component-runtime='${runtimeName}']").forEach((root) => {
          root.querySelectorAll("[role='tab']").forEach((tab) => {
            tab.addEventListener("click", () => {
              root.querySelectorAll("[role='tab']").forEach((item) => item.setAttribute("aria-selected", "false"));
              tab.setAttribute("aria-selected", "true");
            });
          });
        });

        document.querySelectorAll("[data-sidebar-toggle]").forEach((toggle) => {
          toggle.addEventListener("click", (event) => {
            event.preventDefault();
            const expanded = toggle.getAttribute("aria-expanded") === "true";
            toggle.setAttribute("aria-expanded", String(!expanded));
            const children = toggle.parentElement?.querySelector(".snf-nav-children");
            if (children) children.hidden = expanded;
          });
        });
      })();
    </script>`;
}

module.exports = {
  runtimeName,
  renderSource,
  storyIds,
  docsIds,
  createRuntime,
  runtimeStyles,
  runtimeScript
};
