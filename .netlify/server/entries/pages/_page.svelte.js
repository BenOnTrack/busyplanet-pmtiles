import { c as create_ssr_component, d as compute_rest_props, f as spread, g as escape_attribute_value, h as escape_object, e as escape, i as getContext, v as validate_component, j as add_attribute, k as add_classes, m as missing_component, l as compute_slots, o as createEventDispatcher, a as setContext, p as add_styles, q as each, b as subscribe, r as is_promise, n as noop } from "../../chunks/index.js";
import Dexie from "dexie";
import "@mapbox/togeojson";
import { decompressSync } from "fflate";
import { p as page } from "../../chunks/stores.js";
import maplibre from "maplibre-gl";
import "tiny-lru";
const bookmarkdb = new Dexie("bookmarks");
bookmarkdb.version(1).stores({
  ids: "&id"
});
const white = "";
const maplibreGl = "";
const ButtonSkeleton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["href", "size"]);
  let { href = void 0 } = $$props;
  let { size = "default" } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  return `
${href ? `<a${spread(
    [
      { href: escape_attribute_value(href) },
      {
        rel: escape_attribute_value($$restProps.target === "_blank" ? "noopener noreferrer" : void 0)
      },
      { role: "button" },
      escape_object($$restProps)
    ],
    {
      classes: "bx--skeleton bx--btn " + (size === "field" ? "bx--btn--field" : "") + " " + (size === "small" ? "bx--btn--sm" : "") + " " + (size === "lg" ? "bx--btn--lg" : "") + " " + (size === "xl" ? "bx--btn--xl" : "")
    }
  )}>${escape("")}</a>` : `
  <div${spread([escape_object($$restProps)], {
    classes: "bx--skeleton bx--btn " + (size === "field" ? "bx--btn--field" : "") + " " + (size === "small" ? "bx--btn--sm" : "") + " " + (size === "lg" ? "bx--btn--lg" : "") + " " + (size === "xl" ? "bx--btn--xl" : "")
  })}></div>`}`;
});
const ButtonSkeleton$1 = ButtonSkeleton;
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let hasIconOnly;
  let buttonProps;
  let $$restProps = compute_rest_props($$props, [
    "kind",
    "size",
    "expressive",
    "isSelected",
    "icon",
    "iconDescription",
    "tooltipAlignment",
    "tooltipPosition",
    "as",
    "skeleton",
    "disabled",
    "href",
    "tabindex",
    "type",
    "ref"
  ]);
  let $$slots = compute_slots(slots);
  let { kind = "primary" } = $$props;
  let { size = "default" } = $$props;
  let { expressive = false } = $$props;
  let { isSelected = false } = $$props;
  let { icon = void 0 } = $$props;
  let { iconDescription = void 0 } = $$props;
  let { tooltipAlignment = "center" } = $$props;
  let { tooltipPosition = "bottom" } = $$props;
  let { as = false } = $$props;
  let { skeleton = false } = $$props;
  let { disabled = false } = $$props;
  let { href = void 0 } = $$props;
  let { tabindex = "0" } = $$props;
  let { type = "button" } = $$props;
  let { ref = null } = $$props;
  const ctx = getContext("ComposedModal");
  if ($$props.kind === void 0 && $$bindings.kind && kind !== void 0)
    $$bindings.kind(kind);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.expressive === void 0 && $$bindings.expressive && expressive !== void 0)
    $$bindings.expressive(expressive);
  if ($$props.isSelected === void 0 && $$bindings.isSelected && isSelected !== void 0)
    $$bindings.isSelected(isSelected);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.iconDescription === void 0 && $$bindings.iconDescription && iconDescription !== void 0)
    $$bindings.iconDescription(iconDescription);
  if ($$props.tooltipAlignment === void 0 && $$bindings.tooltipAlignment && tooltipAlignment !== void 0)
    $$bindings.tooltipAlignment(tooltipAlignment);
  if ($$props.tooltipPosition === void 0 && $$bindings.tooltipPosition && tooltipPosition !== void 0)
    $$bindings.tooltipPosition(tooltipPosition);
  if ($$props.as === void 0 && $$bindings.as && as !== void 0)
    $$bindings.as(as);
  if ($$props.skeleton === void 0 && $$bindings.skeleton && skeleton !== void 0)
    $$bindings.skeleton(skeleton);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.tabindex === void 0 && $$bindings.tabindex && tabindex !== void 0)
    $$bindings.tabindex(tabindex);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  {
    if (ctx && ref) {
      ctx.declareRef(ref);
    }
  }
  hasIconOnly = icon && !$$slots.default;
  buttonProps = {
    type: href && !disabled ? void 0 : type,
    tabindex,
    disabled: disabled === true ? true : void 0,
    href,
    "aria-pressed": hasIconOnly && kind === "ghost" && !href ? isSelected : void 0,
    ...$$restProps,
    class: [
      "bx--btn",
      expressive && "bx--btn--expressive",
      (size === "small" && !expressive || size === "sm" && !expressive || size === "small" && !expressive) && "bx--btn--sm",
      size === "field" && !expressive || size === "md" && !expressive && "bx--btn--md",
      size === "field" && "bx--btn--field",
      size === "small" && "bx--btn--sm",
      size === "lg" && "bx--btn--lg",
      size === "xl" && "bx--btn--xl",
      kind && `bx--btn--${kind}`,
      disabled && "bx--btn--disabled",
      hasIconOnly && "bx--btn--icon-only",
      hasIconOnly && "bx--tooltip__trigger",
      hasIconOnly && "bx--tooltip--a11y",
      hasIconOnly && tooltipPosition && `bx--btn--icon-only--${tooltipPosition}`,
      hasIconOnly && tooltipAlignment && `bx--tooltip--align-${tooltipAlignment}`,
      hasIconOnly && isSelected && kind === "ghost" && "bx--btn--selected",
      $$restProps.class
    ].filter(Boolean).join(" ")
  };
  return `
${skeleton ? `${validate_component(ButtonSkeleton$1, "ButtonSkeleton").$$render($$result, Object.assign({}, { href }, { size }, $$restProps, { style: hasIconOnly && "width: 3rem;" }), {}, {})}` : `${as ? `${slots.default ? slots.default({ props: buttonProps }) : ``}` : `${href && !disabled ? `
  
  <a${spread([escape_object(buttonProps)], {})}${add_attribute("this", ref, 0)}>${hasIconOnly ? `<span${add_classes("bx--assistive-text".trim())}>${escape(iconDescription)}</span>` : ``}
    ${slots.default ? slots.default({}) : ``}${validate_component(icon || missing_component, "svelte:component").$$render(
    $$result,
    {
      "aria-hidden": "true",
      class: "bx--btn__icon",
      "aria-label": iconDescription
    },
    {},
    {}
  )}</a>` : `<button${spread([escape_object(buttonProps)], {})}${add_attribute("this", ref, 0)}>${hasIconOnly ? `<span${add_classes("bx--assistive-text".trim())}>${escape(iconDescription)}</span>` : ``}
    ${slots.default ? slots.default({}) : ``}${validate_component(icon || missing_component, "svelte:component").$$render(
    $$result,
    {
      "aria-hidden": "true",
      class: "bx--btn__icon",
      style: hasIconOnly ? "margin-left: 0" : void 0,
      "aria-label": iconDescription
    },
    {},
    {}
  )}</button>`}`}`}`;
});
const Button$1 = Button;
const CheckboxSkeleton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  return `

<div${spread([escape_object($$restProps)], {
    classes: "bx--form-item bx--checkbox-wrapper bx--checkbox-label"
  })}><span${add_classes("bx--checkbox-label-text bx--skeleton".trim())}></span></div>`;
});
const CheckboxSkeleton$1 = CheckboxSkeleton;
const Checkbox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let useGroup;
  let isTruncated;
  let $$restProps = compute_rest_props($$props, [
    "value",
    "checked",
    "group",
    "indeterminate",
    "skeleton",
    "required",
    "readonly",
    "disabled",
    "labelText",
    "hideLabel",
    "name",
    "title",
    "id",
    "ref"
  ]);
  let { value = "" } = $$props;
  let { checked = false } = $$props;
  let { group = void 0 } = $$props;
  let { indeterminate = false } = $$props;
  let { skeleton = false } = $$props;
  let { required = false } = $$props;
  let { readonly = false } = $$props;
  let { disabled = false } = $$props;
  let { labelText = "" } = $$props;
  let { hideLabel = false } = $$props;
  let { name = "" } = $$props;
  let { title = void 0 } = $$props;
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  let { ref = null } = $$props;
  const dispatch = createEventDispatcher();
  let refLabel = null;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.checked === void 0 && $$bindings.checked && checked !== void 0)
    $$bindings.checked(checked);
  if ($$props.group === void 0 && $$bindings.group && group !== void 0)
    $$bindings.group(group);
  if ($$props.indeterminate === void 0 && $$bindings.indeterminate && indeterminate !== void 0)
    $$bindings.indeterminate(indeterminate);
  if ($$props.skeleton === void 0 && $$bindings.skeleton && skeleton !== void 0)
    $$bindings.skeleton(skeleton);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0)
    $$bindings.required(required);
  if ($$props.readonly === void 0 && $$bindings.readonly && readonly !== void 0)
    $$bindings.readonly(readonly);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.labelText === void 0 && $$bindings.labelText && labelText !== void 0)
    $$bindings.labelText(labelText);
  if ($$props.hideLabel === void 0 && $$bindings.hideLabel && hideLabel !== void 0)
    $$bindings.hideLabel(hideLabel);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  useGroup = Array.isArray(group);
  checked = useGroup ? group.includes(value) : checked;
  {
    dispatch("check", checked);
  }
  isTruncated = refLabel?.offsetWidth < refLabel?.scrollWidth;
  title = !title && isTruncated ? refLabel?.innerText : title;
  return `
${skeleton ? `${validate_component(CheckboxSkeleton$1, "CheckboxSkeleton").$$render($$result, Object.assign({}, $$restProps), {}, {})}` : `
  <div${spread([escape_object($$restProps)], {
    classes: "bx--form-item bx--checkbox-wrapper"
  })}><input type="checkbox"${add_attribute("value", value, 0)} ${checked ? "checked" : ""} ${disabled ? "disabled" : ""}${add_attribute("id", id, 0)}${add_attribute("indeterminate", indeterminate, 0)}${add_attribute("name", name, 0)} ${required ? "required" : ""} ${readonly ? "readonly" : ""}${add_classes("bx--checkbox".trim())}${add_attribute("this", ref, 0)}>
    <label${add_attribute("for", id, 0)}${add_attribute("title", title, 0)}${add_classes("bx--checkbox-label".trim())}><span${add_classes(("bx--checkbox-label-text " + (hideLabel ? "bx--visually-hidden" : "")).trim())}${add_attribute("this", refLabel, 0)}>${slots.labelText ? slots.labelText({}) : `
          ${escape(labelText)}
        `}</span></label></div>`}`;
});
const Checkbox$1 = Checkbox;
const WarningFilled = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelled;
  let attributes;
  let $$restProps = compute_rest_props($$props, ["size", "title"]);
  let { size = 16 } = $$props;
  let { title = void 0 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  labelled = $$props["aria-label"] || $$props["aria-labelledby"] || title;
  attributes = {
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: Number($$props["tabindex"]) === 0 ? true : void 0
  };
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 32 32" },
      { fill: "currentColor" },
      { preserveAspectRatio: "xMidYMid meet" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object(attributes),
      escape_object($$restProps)
    ],
    {}
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M16,2C8.3,2,2,8.3,2,16s6.3,14,14,14s14-6.3,14-14C30,8.3,23.7,2,16,2z M14.9,8h2.2v11h-2.2V8z M16,25	c-0.8,0-1.5-0.7-1.5-1.5S15.2,22,16,22c0.8,0,1.5,0.7,1.5,1.5S16.8,25,16,25z"></path><path fill="none" d="M17.5,23.5c0,0.8-0.7,1.5-1.5,1.5c-0.8,0-1.5-0.7-1.5-1.5S15.2,22,16,22	C16.8,22,17.5,22.7,17.5,23.5z M17.1,8h-2.2v11h2.2V8z" data-icon-path="inner-path" opacity="0"></path></svg>`;
});
const WarningFilled$1 = WarningFilled;
const WarningAltFilled = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelled;
  let attributes;
  let $$restProps = compute_rest_props($$props, ["size", "title"]);
  let { size = 16 } = $$props;
  let { title = void 0 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  labelled = $$props["aria-label"] || $$props["aria-labelledby"] || title;
  attributes = {
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: Number($$props["tabindex"]) === 0 ? true : void 0
  };
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 32 32" },
      { fill: "currentColor" },
      { preserveAspectRatio: "xMidYMid meet" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object(attributes),
      escape_object($$restProps)
    ],
    {}
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path fill="none" d="M16,26a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,16,26Zm-1.125-5h2.25V12h-2.25Z" data-icon-path="inner-path"></path><path d="M16.002,6.1714h-.004L4.6487,27.9966,4.6506,28H27.3494l.0019-.0034ZM14.875,12h2.25v9h-2.25ZM16,26a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,16,26Z"></path><path d="M29,30H3a1,1,0,0,1-.8872-1.4614l13-25a1,1,0,0,1,1.7744,0l13,25A1,1,0,0,1,29,30ZM4.6507,28H27.3493l.002-.0033L16.002,6.1714h-.004L4.6487,27.9967Z"></path></svg>`;
});
const WarningAltFilled$1 = WarningAltFilled;
const ListBox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "size",
    "type",
    "open",
    "light",
    "disabled",
    "invalid",
    "invalidText",
    "warn",
    "warnText"
  ]);
  let { size = void 0 } = $$props;
  let { type = "default" } = $$props;
  let { open = false } = $$props;
  let { light = false } = $$props;
  let { disabled = false } = $$props;
  let { invalid = false } = $$props;
  let { invalidText = "" } = $$props;
  let { warn = false } = $$props;
  let { warnText = "" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.light === void 0 && $$bindings.light && light !== void 0)
    $$bindings.light(light);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.invalid === void 0 && $$bindings.invalid && invalid !== void 0)
    $$bindings.invalid(invalid);
  if ($$props.invalidText === void 0 && $$bindings.invalidText && invalidText !== void 0)
    $$bindings.invalidText(invalidText);
  if ($$props.warn === void 0 && $$bindings.warn && warn !== void 0)
    $$bindings.warn(warn);
  if ($$props.warnText === void 0 && $$bindings.warnText && warnText !== void 0)
    $$bindings.warnText(warnText);
  return `<div${spread(
    [
      { role: "listbox" },
      { tabindex: "-1" },
      {
        "data-invalid": escape_attribute_value(invalid || void 0)
      },
      escape_object($$restProps)
    ],
    {
      classes: "bx--list-box " + (size === "sm" ? "bx--list-box--sm" : "") + " " + (size === "xl" ? "bx--list-box--xl" : "") + " " + (type === "inline" ? "bx--list-box--inline" : "") + " " + (disabled ? "bx--list-box--disabled" : "") + " " + (open ? "bx--list-box--expanded" : "") + " " + (light ? "bx--list-box--light" : "") + " " + (!invalid && warn ? "bx--list-box--warning" : "")
    }
  )}>${slots.default ? slots.default({}) : ``}</div>
${invalid ? `<div${add_classes("bx--form-requirement".trim())}>${escape(invalidText)}</div>` : ``}
${!invalid && warn ? `<div${add_classes("bx--form-requirement".trim())}>${escape(warnText)}</div>` : ``}`;
});
const ListBox$1 = ListBox;
const ListBoxField = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let ariaExpanded;
  let menuId;
  let $$restProps = compute_rest_props($$props, ["disabled", "role", "tabindex", "translationIds", "translateWithId", "id", "ref"]);
  let { disabled = false } = $$props;
  let { role = "combobox" } = $$props;
  let { tabindex = "-1" } = $$props;
  const translationIds = { close: "close", open: "open" };
  let { translateWithId = (id2) => defaultTranslations[id2] } = $$props;
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  let { ref = null } = $$props;
  const defaultTranslations = {
    [translationIds.close]: "Close menu",
    [translationIds.open]: "Open menu"
  };
  const ctx = getContext("MultiSelect");
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.tabindex === void 0 && $$bindings.tabindex && tabindex !== void 0)
    $$bindings.tabindex(tabindex);
  if ($$props.translationIds === void 0 && $$bindings.translationIds && translationIds !== void 0)
    $$bindings.translationIds(translationIds);
  if ($$props.translateWithId === void 0 && $$bindings.translateWithId && translateWithId !== void 0)
    $$bindings.translateWithId(translateWithId);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  {
    if (ctx && ref) {
      ctx.declareRef({ key: "field", ref });
    }
  }
  ariaExpanded = $$props["aria-expanded"];
  menuId = `menu-${id}`;
  return `
<div${spread(
    [
      { role: escape_attribute_value(role) },
      {
        "aria-expanded": escape_attribute_value(ariaExpanded)
      },
      {
        "aria-owns": escape_attribute_value(ariaExpanded && menuId || void 0)
      },
      {
        "aria-controls": escape_attribute_value(ariaExpanded && menuId || void 0)
      },
      {
        "aria-disabled": escape_attribute_value(disabled)
      },
      {
        "aria-label": escape_attribute_value(ariaExpanded ? translateWithId("close") : translateWithId("open"))
      },
      {
        tabindex: escape_attribute_value(disabled ? "-1" : tabindex)
      },
      escape_object($$restProps)
    ],
    {
      classes: "bx--list-box__field"
    }
  )}${add_attribute("this", ref, 0)}>${slots.default ? slots.default({}) : ``}</div>`;
});
const ListBoxField$1 = ListBoxField;
const ListBoxMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["id", "ref"]);
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  let { ref = null } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  return `<div${spread(
    [
      { role: "listbox" },
      { id: "menu-" + escape(id, true) },
      escape_object($$restProps)
    ],
    {
      classes: "bx--list-box__menu"
    }
  )}${add_attribute("this", ref, 0)}>${slots.default ? slots.default({}) : ``}</div>`;
});
const ListBoxMenu$1 = ListBoxMenu;
const ChevronDown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelled;
  let attributes;
  let $$restProps = compute_rest_props($$props, ["size", "title"]);
  let { size = 16 } = $$props;
  let { title = void 0 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  labelled = $$props["aria-label"] || $$props["aria-labelledby"] || title;
  attributes = {
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: Number($$props["tabindex"]) === 0 ? true : void 0
  };
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 32 32" },
      { fill: "currentColor" },
      { preserveAspectRatio: "xMidYMid meet" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object(attributes),
      escape_object($$restProps)
    ],
    {}
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M16 22L6 12 7.4 10.6 16 19.2 24.6 10.6 26 12z"></path></svg>`;
});
const ChevronDown$1 = ChevronDown;
const ListBoxMenuIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let translationId;
  let description;
  let $$restProps = compute_rest_props($$props, ["open", "translationIds", "translateWithId"]);
  let { open = false } = $$props;
  const translationIds = { close: "close", open: "open" };
  let { translateWithId = (id) => defaultTranslations[id] } = $$props;
  const defaultTranslations = {
    [translationIds.close]: "Close menu",
    [translationIds.open]: "Open menu"
  };
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.translationIds === void 0 && $$bindings.translationIds && translationIds !== void 0)
    $$bindings.translationIds(translationIds);
  if ($$props.translateWithId === void 0 && $$bindings.translateWithId && translateWithId !== void 0)
    $$bindings.translateWithId(translateWithId);
  translationId = open ? translationIds.close : translationIds.open;
  description = translateWithId?.(translationId) ?? defaultTranslations[translationId];
  return `
<div${spread([escape_object($$restProps)], {
    classes: "bx--list-box__menu-icon " + (open ? "bx--list-box__menu-icon--open" : "")
  })}>${validate_component(ChevronDown$1, "ChevronDown").$$render(
    $$result,
    {
      "aria-label": description,
      title: description
    },
    {},
    {}
  )}</div>`;
});
const ListBoxMenuIcon$1 = ListBoxMenuIcon;
const ListBoxMenuItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isTruncated;
  let title;
  let $$restProps = compute_rest_props($$props, ["active", "highlighted", "disabled"]);
  let { active = false } = $$props;
  let { highlighted = false } = $$props;
  let { disabled = false } = $$props;
  let ref = null;
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.highlighted === void 0 && $$bindings.highlighted && highlighted !== void 0)
    $$bindings.highlighted(highlighted);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  isTruncated = ref?.offsetWidth < ref?.scrollWidth;
  title = isTruncated ? ref?.innerText : void 0;
  {
    if (highlighted && ref && !ref.matches(":hover")) {
      ref.scrollIntoView({ block: "nearest" });
    }
  }
  return `<div${spread(
    [
      { role: "option" },
      { tabindex: "-1" },
      {
        "aria-selected": escape_attribute_value(active)
      },
      {
        disabled: (disabled ? true : void 0) || null
      },
      escape_object($$restProps)
    ],
    {
      classes: "bx--list-box__menu-item " + (active ? "bx--list-box__menu-item--active" : "") + " " + (highlighted || active ? "bx--list-box__menu-item--highlighted" : "")
    }
  )}><div${add_attribute("title", title, 0)}${add_classes("bx--list-box__menu-item__option".trim())}${add_attribute("this", ref, 0)}>${slots.default ? slots.default({}) : ``}</div></div>`;
});
const ListBoxMenuItem$1 = ListBoxMenuItem;
const Close = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelled;
  let attributes;
  let $$restProps = compute_rest_props($$props, ["size", "title"]);
  let { size = 16 } = $$props;
  let { title = void 0 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  labelled = $$props["aria-label"] || $$props["aria-labelledby"] || title;
  attributes = {
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: Number($$props["tabindex"]) === 0 ? true : void 0
  };
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 32 32" },
      { fill: "currentColor" },
      { preserveAspectRatio: "xMidYMid meet" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object(attributes),
      escape_object($$restProps)
    ],
    {}
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z"></path></svg>`;
});
const Close$1 = Close;
const ListBoxSelection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let translationId;
  let description;
  let $$restProps = compute_rest_props($$props, ["selectionCount", "disabled", "translationIds", "translateWithId", "ref"]);
  let { selectionCount = void 0 } = $$props;
  let { disabled = false } = $$props;
  const translationIds = {
    clearAll: "clearAll",
    clearSelection: "clearSelection"
  };
  let { translateWithId = (id) => defaultTranslations[id] } = $$props;
  let { ref = null } = $$props;
  const defaultTranslations = {
    [translationIds.clearAll]: "Clear all selected items",
    [translationIds.clearSelection]: "Clear selected item"
  };
  createEventDispatcher();
  const ctx = getContext("MultiSelect");
  if ($$props.selectionCount === void 0 && $$bindings.selectionCount && selectionCount !== void 0)
    $$bindings.selectionCount(selectionCount);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.translationIds === void 0 && $$bindings.translationIds && translationIds !== void 0)
    $$bindings.translationIds(translationIds);
  if ($$props.translateWithId === void 0 && $$bindings.translateWithId && translateWithId !== void 0)
    $$bindings.translateWithId(translateWithId);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  {
    if (ctx && ref) {
      ctx.declareRef({ key: "selection", ref });
    }
  }
  translationId = selectionCount ? translationIds.clearAll : translationIds.clearSelection;
  description = translateWithId?.(translationId) ?? defaultTranslations[translationId];
  return `${selectionCount !== void 0 ? `<div${add_classes(("bx--tag bx--tag--filter bx--tag--high-contrast " + (disabled ? "bx--tag--disabled" : "")).trim())}><span${add_attribute("title", selectionCount, 0)}${add_classes("bx--tag__label".trim())}>${escape(selectionCount)}</span>
    <div role="button"${add_attribute("tabindex", disabled ? -1 : 0, 0)} ${disabled ? "disabled" : ""}${add_attribute("aria-label", translationIds.clearAll, 0)}${add_attribute("title", description, 0)}${add_classes("bx--tag__close-icon".trim())}${add_attribute("this", ref, 0)}>${validate_component(Close$1, "Close").$$render($$result, {}, {}, {})}</div></div>` : `<div${spread(
    [
      { role: "button" },
      {
        "aria-label": escape_attribute_value(description)
      },
      {
        title: escape_attribute_value(description)
      },
      {
        tabindex: escape_attribute_value(disabled ? "-1" : "0")
      },
      escape_object($$restProps)
    ],
    {
      classes: "bx--list-box__selection " + (selectionCount ? "bx--tag--filter" : "") + " " + (selectionCount ? "bx--list-box__selection--multi" : "")
    }
  )}${add_attribute("this", ref, 0)}>${selectionCount !== void 0 ? `${escape(selectionCount)}` : ``}
    ${validate_component(Close$1, "Close").$$render($$result, {}, {}, {})}</div>`}`;
});
const ListBoxSelection$1 = ListBoxSelection;
const MultiSelect = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let menuId;
  let inline;
  let ariaLabel;
  let sortedItems;
  let checked;
  let filteredItems;
  let $$restProps = compute_rest_props($$props, [
    "items",
    "itemToString",
    "itemToInput",
    "selectedIds",
    "value",
    "size",
    "type",
    "direction",
    "selectionFeedback",
    "disabled",
    "filterable",
    "filterItem",
    "open",
    "light",
    "locale",
    "placeholder",
    "sortItem",
    "translateWithId",
    "translateWithIdSelection",
    "titleText",
    "useTitleInItem",
    "invalid",
    "invalidText",
    "warn",
    "warnText",
    "helperText",
    "label",
    "hideLabel",
    "id",
    "name",
    "inputRef",
    "multiSelectRef",
    "fieldRef",
    "selectionRef",
    "highlightedId"
  ]);
  let $$slots = compute_slots(slots);
  let { items = [] } = $$props;
  let { itemToString = (item2) => item2.text || item2.id } = $$props;
  let { itemToInput = (item2) => {
  } } = $$props;
  let { selectedIds = [] } = $$props;
  let { value = "" } = $$props;
  let { size = void 0 } = $$props;
  let { type = "default" } = $$props;
  let { direction = "bottom" } = $$props;
  let { selectionFeedback = "top-after-reopen" } = $$props;
  let { disabled = false } = $$props;
  let { filterable = false } = $$props;
  let { filterItem = (item2, value2) => item2.text.toLowerCase().includes(value2.trim().toLowerCase()) } = $$props;
  let { open = false } = $$props;
  let { light = false } = $$props;
  let { locale = "en" } = $$props;
  let { placeholder = "" } = $$props;
  let { sortItem = (a, b) => a.text.localeCompare(b.text, locale, { numeric: true }) } = $$props;
  let { translateWithId = void 0 } = $$props;
  let { translateWithIdSelection = void 0 } = $$props;
  let { titleText = "" } = $$props;
  let { useTitleInItem = false } = $$props;
  let { invalid = false } = $$props;
  let { invalidText = "" } = $$props;
  let { warn = false } = $$props;
  let { warnText = "" } = $$props;
  let { helperText = "" } = $$props;
  let { label = "" } = $$props;
  let { hideLabel = false } = $$props;
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  let { name = void 0 } = $$props;
  let { inputRef = null } = $$props;
  let { multiSelectRef = null } = $$props;
  let { fieldRef = null } = $$props;
  let { selectionRef = null } = $$props;
  let { highlightedId = null } = $$props;
  createEventDispatcher();
  let highlightedIndex = -1;
  setContext("MultiSelect", {
    declareRef: ({ key, ref }) => {
      switch (key) {
        case "field":
          fieldRef = ref;
          break;
        case "selection":
          selectionRef = ref;
          break;
      }
    }
  });
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  if ($$props.itemToString === void 0 && $$bindings.itemToString && itemToString !== void 0)
    $$bindings.itemToString(itemToString);
  if ($$props.itemToInput === void 0 && $$bindings.itemToInput && itemToInput !== void 0)
    $$bindings.itemToInput(itemToInput);
  if ($$props.selectedIds === void 0 && $$bindings.selectedIds && selectedIds !== void 0)
    $$bindings.selectedIds(selectedIds);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.direction === void 0 && $$bindings.direction && direction !== void 0)
    $$bindings.direction(direction);
  if ($$props.selectionFeedback === void 0 && $$bindings.selectionFeedback && selectionFeedback !== void 0)
    $$bindings.selectionFeedback(selectionFeedback);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.filterable === void 0 && $$bindings.filterable && filterable !== void 0)
    $$bindings.filterable(filterable);
  if ($$props.filterItem === void 0 && $$bindings.filterItem && filterItem !== void 0)
    $$bindings.filterItem(filterItem);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.light === void 0 && $$bindings.light && light !== void 0)
    $$bindings.light(light);
  if ($$props.locale === void 0 && $$bindings.locale && locale !== void 0)
    $$bindings.locale(locale);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.sortItem === void 0 && $$bindings.sortItem && sortItem !== void 0)
    $$bindings.sortItem(sortItem);
  if ($$props.translateWithId === void 0 && $$bindings.translateWithId && translateWithId !== void 0)
    $$bindings.translateWithId(translateWithId);
  if ($$props.translateWithIdSelection === void 0 && $$bindings.translateWithIdSelection && translateWithIdSelection !== void 0)
    $$bindings.translateWithIdSelection(translateWithIdSelection);
  if ($$props.titleText === void 0 && $$bindings.titleText && titleText !== void 0)
    $$bindings.titleText(titleText);
  if ($$props.useTitleInItem === void 0 && $$bindings.useTitleInItem && useTitleInItem !== void 0)
    $$bindings.useTitleInItem(useTitleInItem);
  if ($$props.invalid === void 0 && $$bindings.invalid && invalid !== void 0)
    $$bindings.invalid(invalid);
  if ($$props.invalidText === void 0 && $$bindings.invalidText && invalidText !== void 0)
    $$bindings.invalidText(invalidText);
  if ($$props.warn === void 0 && $$bindings.warn && warn !== void 0)
    $$bindings.warn(warn);
  if ($$props.warnText === void 0 && $$bindings.warnText && warnText !== void 0)
    $$bindings.warnText(warnText);
  if ($$props.helperText === void 0 && $$bindings.helperText && helperText !== void 0)
    $$bindings.helperText(helperText);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.hideLabel === void 0 && $$bindings.hideLabel && hideLabel !== void 0)
    $$bindings.hideLabel(hideLabel);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.inputRef === void 0 && $$bindings.inputRef && inputRef !== void 0)
    $$bindings.inputRef(inputRef);
  if ($$props.multiSelectRef === void 0 && $$bindings.multiSelectRef && multiSelectRef !== void 0)
    $$bindings.multiSelectRef(multiSelectRef);
  if ($$props.fieldRef === void 0 && $$bindings.fieldRef && fieldRef !== void 0)
    $$bindings.fieldRef(fieldRef);
  if ($$props.selectionRef === void 0 && $$bindings.selectionRef && selectionRef !== void 0)
    $$bindings.selectionRef(selectionRef);
  if ($$props.highlightedId === void 0 && $$bindings.highlightedId && highlightedId !== void 0)
    $$bindings.highlightedId(highlightedId);
  menuId = `menu-${id}`;
  inline = type === "inline";
  ariaLabel = $$props["aria-label"] || "Choose an item";
  sortedItems = items.map((item2) => ({
    ...item2,
    checked: selectedIds.includes(item2.id)
  }));
  checked = sortedItems.filter(({ checked: checked2 }) => checked2);
  sortedItems.filter(({ checked: checked2 }) => !checked2);
  filteredItems = sortedItems.filter((item2) => filterItem(item2, value));
  highlightedId = null;
  return `

<div${add_classes(("bx--multi-select__wrapper bx--list-box__wrapper " + (inline ? "bx--multi-select__wrapper--inline" : "") + " " + (inline ? "bx--list-box__wrapper--inline" : "") + " " + (inline && invalid ? "bx--multi-select__wrapper--inline--invalid" : "")).trim())}${add_attribute("this", multiSelectRef, 0)}>${titleText || $$slots.titleText ? `<label${add_attribute("for", id, 0)}${add_classes(("bx--label " + (disabled ? "bx--label--disabled" : "") + " " + (hideLabel ? "bx--visually-hidden" : "")).trim())}>${slots.titleText ? slots.titleText({ slot: "labelText", item, index: i }) : `
        ${escape(titleText)}
      `}</label>` : ``}
  ${validate_component(ListBox$1, "ListBox").$$render(
    $$result,
    {
      role: void 0,
      disabled,
      invalid,
      invalidText,
      open,
      light,
      size,
      warn,
      warnText,
      class: "bx--multi-select " + (direction === "top" && "bx--list-box--up") + " " + (filterable && "bx--combo-box") + "\n      " + (filterable && "bx--multi-select--filterable") + "\n      " + (invalid && "bx--multi-select--invalid") + "\n      " + (inline && "bx--multi-select--inline") + "\n      " + (checked.length > 0 && "bx--multi-select--selected")
    },
    {},
    {
      default: () => {
        return `${invalid ? `${validate_component(WarningFilled$1, "WarningFilled").$$render($$result, { class: "bx--list-box__invalid-icon" }, {}, {})}` : ``}
    ${!invalid && warn ? `${validate_component(WarningAltFilled$1, "WarningAltFilled").$$render(
          $$result,
          {
            class: "bx--list-box__invalid-icon bx--list-box__invalid-icon--warning"
          },
          {},
          {}
        )}` : ``}
    ${validate_component(ListBoxField$1, "ListBoxField").$$render(
          $$result,
          {
            role: "button",
            tabindex: "0",
            "aria-expanded": open,
            id,
            disabled,
            translateWithId
          },
          {},
          {
            default: () => {
              return `${checked.length > 0 ? `${validate_component(ListBoxSelection$1, "ListBoxSelection").$$render(
                $$result,
                {
                  selectionCount: checked.length,
                  translateWithId: translateWithIdSelection,
                  disabled
                },
                {},
                {}
              )}` : ``}
      ${filterable ? `<input${spread(
                [
                  escape_object($$restProps),
                  { role: "combobox" },
                  { tabindex: "0" },
                  { autocomplete: "off" },
                  { "aria-autocomplete": "list" },
                  {
                    "aria-expanded": escape_attribute_value(open)
                  },
                  {
                    "aria-activedescendant": escape_attribute_value(highlightedId)
                  },
                  {
                    "aria-disabled": escape_attribute_value(disabled)
                  },
                  {
                    "aria-controls": escape_attribute_value(menuId)
                  },
                  { disabled: disabled || null },
                  {
                    placeholder: escape_attribute_value(placeholder)
                  },
                  { id: escape_attribute_value(id) },
                  { name: escape_attribute_value(name) }
                ],
                {
                  classes: "bx--text-input " + (value === "" ? "bx--text-input--empty" : "") + " " + (light ? "bx--text-input--light" : "")
                }
              )}${add_attribute("this", inputRef, 0)}${add_attribute("value", value, 0)}>
        ${invalid ? `${validate_component(WarningFilled$1, "WarningFilled").$$render($$result, { class: "bx--list-box__invalid-icon" }, {}, {})}` : ``}
        ${value ? `${validate_component(ListBoxSelection$1, "ListBoxSelection").$$render(
                $$result,
                {
                  translateWithId: translateWithIdSelection,
                  disabled,
                  open
                },
                {},
                {}
              )}` : ``}
        ${validate_component(ListBoxMenuIcon$1, "ListBoxMenuIcon").$$render(
                $$result,
                {
                  style: "pointer-events: " + (open ? "auto" : "none"),
                  translateWithId,
                  open
                },
                {},
                {}
              )}` : ``}
      ${!filterable ? `<span${add_classes("bx--list-box__label".trim())}>${escape(label)}</span>
        ${validate_component(ListBoxMenuIcon$1, "ListBoxMenuIcon").$$render($$result, { open, translateWithId }, {}, {})}` : ``}`;
            }
          }
        )}
    <div${add_styles({ "display": open ? "block" : "none" })}>${validate_component(ListBoxMenu$1, "ListBoxMenu").$$render(
          $$result,
          {
            "aria-label": ariaLabel,
            id,
            "aria-multiselectable": "true"
          },
          {},
          {
            default: () => {
              return `${each(filterable ? filteredItems : sortedItems, (item2, i2) => {
                return `${validate_component(ListBoxMenuItem$1, "ListBoxMenuItem").$$render(
                  $$result,
                  {
                    id: item2.id,
                    role: "option",
                    "aria-labelledby": "checkbox-" + item2.id,
                    "aria-selected": item2.checked,
                    active: item2.checked,
                    highlighted: highlightedIndex === i2,
                    disabled: item2.disabled
                  },
                  {},
                  {
                    default: () => {
                      return `${validate_component(Checkbox$1, "Checkbox").$$render(
                        $$result,
                        Object.assign(
                          {},
                          { name: item2.id },
                          {
                            title: useTitleInItem ? itemToString(item2) : void 0
                          },
                          itemToInput(item2),
                          { readonly: true },
                          { tabindex: "-1" },
                          { id: "checkbox-" + item2.id },
                          { checked: item2.checked },
                          { disabled: item2.disabled }
                        ),
                        {},
                        {
                          labelText: () => {
                            return `${slots.default ? slots.default({ slot: "labelText", item: item2, index: i2 }) : `
                ${escape(itemToString(item2))}
              `}`;
                          }
                        }
                      )}
          `;
                    }
                  }
                )}`;
              })}`;
            }
          }
        )}</div>`;
      }
    }
  )}
  ${!inline && !invalid && !warn && helperText ? `<div${add_classes(("bx--form__helper-text " + (disabled ? "bx--form__helper-text--disabled" : "")).trim())}>${escape(helperText)}</div>` : ``}</div>`;
});
const MultiSelect$1 = MultiSelect;
const TagSkeleton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size"]);
  let { size = "default" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  return `

<span${spread([escape_object($$restProps)], {
    classes: "bx--tag " + (size === "sm" ? "bx--tag--sm" : "") + " bx--skeleton"
  })}></span>`;
});
const TagSkeleton$1 = TagSkeleton;
const Tag = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["type", "size", "filter", "disabled", "interactive", "skeleton", "title", "icon", "id"]);
  let $$slots = compute_slots(slots);
  let { type = void 0 } = $$props;
  let { size = "default" } = $$props;
  let { filter = false } = $$props;
  let { disabled = false } = $$props;
  let { interactive = false } = $$props;
  let { skeleton = false } = $$props;
  let { title = "Clear filter" } = $$props;
  let { icon = void 0 } = $$props;
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  createEventDispatcher();
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.filter === void 0 && $$bindings.filter && filter !== void 0)
    $$bindings.filter(filter);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.interactive === void 0 && $$bindings.interactive && interactive !== void 0)
    $$bindings.interactive(interactive);
  if ($$props.skeleton === void 0 && $$bindings.skeleton && skeleton !== void 0)
    $$bindings.skeleton(skeleton);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  return `
${skeleton ? `${validate_component(TagSkeleton$1, "TagSkeleton").$$render($$result, Object.assign({}, { size }, $$restProps), {}, {})}` : `${filter ? `<div${spread(
    [
      {
        "aria-label": escape_attribute_value(title)
      },
      { id: escape_attribute_value(id) },
      escape_object($$restProps)
    ],
    {
      classes: "bx--tag " + (disabled ? "bx--tag--disabled" : "") + " " + (filter ? "bx--tag--filter" : "") + " " + (size === "sm" ? "bx--tag--sm" : "") + " " + (type === "red" ? "bx--tag--red" : "") + " " + (type === "magenta" ? "bx--tag--magenta" : "") + " " + (type === "purple" ? "bx--tag--purple" : "") + " " + (type === "blue" ? "bx--tag--blue" : "") + " " + (type === "cyan" ? "bx--tag--cyan" : "") + " " + (type === "teal" ? "bx--tag--teal" : "") + " " + (type === "green" ? "bx--tag--green" : "") + " " + (type === "gray" ? "bx--tag--gray" : "") + " " + (type === "cool-gray" ? "bx--tag--cool-gray" : "") + " " + (type === "warm-gray" ? "bx--tag--warm-gray" : "") + " " + (type === "high-contrast" ? "bx--tag--high-contrast" : "") + " " + (type === "outline" ? "bx--tag--outline" : "")
    }
  )}>${slots.default ? slots.default({ props: { class: "bx--tag__label" } }) : `
      <span${add_classes("bx--tag__label".trim())}>${escape(type)}</span>
    `}
    <button type="button"${add_attribute("aria-labelledby", id, 0)} ${disabled ? "disabled" : ""}${add_attribute("title", title, 0)}${add_classes("bx--tag__close-icon".trim())}>${validate_component(Close$1, "Close").$$render($$result, {}, {}, {})}</button></div>` : `${interactive ? `<button${spread(
    [
      { type: "button" },
      { id: escape_attribute_value(id) },
      { disabled: disabled || null },
      {
        "aria-disabled": escape_attribute_value(disabled)
      },
      {
        tabindex: escape_attribute_value(disabled ? "-1" : void 0)
      },
      escape_object($$restProps)
    ],
    {
      classes: "bx--tag bx--tag--interactive " + (disabled ? "bx--tag--disabled" : "") + " " + (size === "sm" ? "bx--tag--sm" : "") + " " + (type === "red" ? "bx--tag--red" : "") + " " + (type === "magenta" ? "bx--tag--magenta" : "") + " " + (type === "purple" ? "bx--tag--purple" : "") + " " + (type === "blue" ? "bx--tag--blue" : "") + " " + (type === "cyan" ? "bx--tag--cyan" : "") + " " + (type === "teal" ? "bx--tag--teal" : "") + " " + (type === "green" ? "bx--tag--green" : "") + " " + (type === "gray" ? "bx--tag--gray" : "") + " " + (type === "cool-gray" ? "bx--tag--cool-gray" : "") + " " + (type === "warm-gray" ? "bx--tag--warm-gray" : "") + " " + (type === "high-contrast" ? "bx--tag--high-contrast" : "") + " " + (type === "outline" ? "bx--tag--outline" : "")
    }
  )}>${$$slots.icon || icon ? `<div${add_classes("bx--tag__custom-icon".trim())}>${slots.icon ? slots.icon({ props: { class: "bx--tag__label" } }) : `
          ${validate_component(icon || missing_component, "svelte:component").$$render($$result, {}, {}, {})}
        `}</div>` : ``}
    <span>${slots.default ? slots.default({}) : ``}</span></button>` : `
  <div${spread([{ id: escape_attribute_value(id) }, escape_object($$restProps)], {
    classes: "bx--tag " + (disabled ? "bx--tag--disabled" : "") + " " + (size === "sm" ? "bx--tag--sm" : "") + " " + (type === "red" ? "bx--tag--red" : "") + " " + (type === "magenta" ? "bx--tag--magenta" : "") + " " + (type === "purple" ? "bx--tag--purple" : "") + " " + (type === "blue" ? "bx--tag--blue" : "") + " " + (type === "cyan" ? "bx--tag--cyan" : "") + " " + (type === "teal" ? "bx--tag--teal" : "") + " " + (type === "green" ? "bx--tag--green" : "") + " " + (type === "gray" ? "bx--tag--gray" : "") + " " + (type === "cool-gray" ? "bx--tag--cool-gray" : "") + " " + (type === "warm-gray" ? "bx--tag--warm-gray" : "") + " " + (type === "high-contrast" ? "bx--tag--high-contrast" : "") + " " + (type === "outline" ? "bx--tag--outline" : "")
  })}>${$$slots.icon || icon ? `<div${add_classes("bx--tag__custom-icon".trim())}>${slots.icon ? slots.icon({}) : `
          ${validate_component(icon || missing_component, "svelte:component").$$render($$result, {}, {}, {})}
        `}</div>` : ``}
    <span>${slots.default ? slots.default({}) : ``}</span></div>`}`}`}`;
});
const Tag$1 = Tag;
const Modal_svelte_svelte_type_style_lang = "";
const Offcanvas_svelte_svelte_type_style_lang = "";
const RouteDropdown_svelte_svelte_type_style_lang = "";
const LayerSwitcher_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".map-overlay.svelte-wrspnv.svelte-wrspnv{font:12px/20px 'Helvetica Neue', Arial, Helvetica, sans-serif;position:absolute;width:300px;top:65px;left:0;padding:10px}.map-overlay.svelte-wrspnv .map-overlay-inner.svelte-wrspnv{background-color:#fff;box-shadow:0 1px 2px rgba(0, 0, 0, 0.1);border-radius:3px;padding:10px;margin-bottom:10px}",
  map: null
};
const LayerSwitcher = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { map } = $$props;
  let { layerSwitcherIds = [] } = $$props;
  let { layerSwitcherSelectedIds } = $$props;
  if ($$props.map === void 0 && $$bindings.map && map !== void 0)
    $$bindings.map(map);
  if ($$props.layerSwitcherIds === void 0 && $$bindings.layerSwitcherIds && layerSwitcherIds !== void 0)
    $$bindings.layerSwitcherIds(layerSwitcherIds);
  if ($$props.layerSwitcherSelectedIds === void 0 && $$bindings.layerSwitcherSelectedIds && layerSwitcherSelectedIds !== void 0)
    $$bindings.layerSwitcherSelectedIds(layerSwitcherSelectedIds);
  $$result.css.add(css$2);
  return `


<div class="map-overlay top svelte-wrspnv"><div class="map-overlay-inner svelte-wrspnv">${validate_component(MultiSelect$1, "MultiSelect").$$render(
    $$result,
    {
      selectedIds: layerSwitcherSelectedIds,
      label: "Layers to be displayed",
      items: layerSwitcherIds
    },
    {},
    {}
  )}</div>
</div>`;
});
const LayerColorSwitcher_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".map-overlay.svelte-sxp6mt.svelte-sxp6mt{font:12px/20px 'Helvetica Neue', Arial, Helvetica, sans-serif;position:absolute;width:200px;top:0;left:0;padding:10px}.map-overlay.svelte-sxp6mt .map-overlay-inner.svelte-sxp6mt{background-color:#fff;box-shadow:0 1px 2px rgba(0, 0, 0, 0.1);border-radius:3px;padding:10px;margin-bottom:10px}.map-overlay-inner.svelte-sxp6mt fieldset.svelte-sxp6mt{border:none;padding:0;margin:0 0 5px}.map-overlay-inner.svelte-sxp6mt fieldset.svelte-sxp6mt:last-child{margin:0}.map-overlay-inner.svelte-sxp6mt select.svelte-sxp6mt{width:100%}",
  map: null
};
const LayerColorSwitcher = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { map } = $$props;
  let { layerColorSwitcherIds } = $$props;
  let Layercolors = [
    "#ffffcc",
    "#a1dab4",
    "#41b6c4",
    "#2c7fb8",
    "#253494",
    "#fed976",
    "#feb24c",
    "#fd8d3c",
    "#f03b20",
    "#bd0026"
  ];
  if ($$props.map === void 0 && $$bindings.map && map !== void 0)
    $$bindings.map(map);
  if ($$props.layerColorSwitcherIds === void 0 && $$bindings.layerColorSwitcherIds && layerColorSwitcherIds !== void 0)
    $$bindings.layerColorSwitcherIds(layerColorSwitcherIds);
  $$result.css.add(css$1);
  return `


<div class="map-overlay top svelte-sxp6mt"><div class="map-overlay-inner svelte-sxp6mt"><fieldset class="svelte-sxp6mt">
			<select id="layer" class="svelte-sxp6mt">${each(layerColorSwitcherIds, (layerId) => {
    return `<option${add_attribute("value", layerId.text, 0)}>${escape(layerId.text)}</option>`;
  })}</select></fieldset>
		<fieldset class="svelte-sxp6mt">
			<div id="swatches">${each(Layercolors, (color) => {
    return `<button style="${"background-color: " + escape(color, true)}"></button>`;
  })}</div></fieldset></div>
</div>`;
});
function toNum(low, high) {
  return (high >>> 0) * 4294967296 + (low >>> 0);
}
function readVarintRemainder(l, p) {
  const buf = p.buf;
  let h, b;
  b = buf[p.pos++];
  h = (b & 112) >> 4;
  if (b < 128)
    return toNum(l, h);
  b = buf[p.pos++];
  h |= (b & 127) << 3;
  if (b < 128)
    return toNum(l, h);
  b = buf[p.pos++];
  h |= (b & 127) << 10;
  if (b < 128)
    return toNum(l, h);
  b = buf[p.pos++];
  h |= (b & 127) << 17;
  if (b < 128)
    return toNum(l, h);
  b = buf[p.pos++];
  h |= (b & 127) << 24;
  if (b < 128)
    return toNum(l, h);
  b = buf[p.pos++];
  h |= (b & 1) << 31;
  if (b < 128)
    return toNum(l, h);
  throw new Error("Expected varint not more than 10 bytes");
}
function readVarint(p) {
  const buf = p.buf;
  let val, b;
  b = buf[p.pos++];
  val = b & 127;
  if (b < 128)
    return val;
  b = buf[p.pos++];
  val |= (b & 127) << 7;
  if (b < 128)
    return val;
  b = buf[p.pos++];
  val |= (b & 127) << 14;
  if (b < 128)
    return val;
  b = buf[p.pos++];
  val |= (b & 127) << 21;
  if (b < 128)
    return val;
  b = buf[p.pos];
  val |= (b & 15) << 28;
  return readVarintRemainder(val, p);
}
function rotate(n, xy, rx, ry) {
  if (ry == 0) {
    if (rx == 1) {
      xy[0] = n - 1 - xy[0];
      xy[1] = n - 1 - xy[1];
    }
    const t = xy[0];
    xy[0] = xy[1];
    xy[1] = t;
  }
}
const tzValues = [
  0,
  1,
  5,
  21,
  85,
  341,
  1365,
  5461,
  21845,
  87381,
  349525,
  1398101,
  5592405,
  22369621,
  89478485,
  357913941,
  1431655765,
  5726623061,
  22906492245,
  91625968981,
  366503875925,
  1466015503701,
  5864062014805,
  23456248059221,
  93824992236885,
  375299968947541,
  1501199875790165
];
function zxyToTileId(z, x, y) {
  if (z > 26) {
    throw Error("Tile zoom level exceeds max safe number limit (26)");
  }
  if (x > Math.pow(2, z) - 1 || y > Math.pow(2, z) - 1) {
    throw Error("tile x/y outside zoom level bounds");
  }
  const acc = tzValues[z];
  const n = Math.pow(2, z);
  let rx = 0;
  let ry = 0;
  let d = 0;
  const xy = [x, y];
  let s = n / 2;
  while (s > 0) {
    rx = (xy[0] & s) > 0 ? 1 : 0;
    ry = (xy[1] & s) > 0 ? 1 : 0;
    d += s * s * (3 * rx ^ ry);
    rotate(s, xy, rx, ry);
    s = s / 2;
  }
  return acc + d;
}
async function defaultDecompress(buf, compression) {
  if (compression === 1 || compression === 0) {
    return buf;
  } else if (compression === 2) {
    if (typeof globalThis.DecompressionStream == "undefined") {
      return decompressSync(new Uint8Array(buf));
    } else {
      let stream = new Response(buf).body;
      let result = stream.pipeThrough(
        new globalThis.DecompressionStream("gzip")
      );
      return new Response(result).arrayBuffer();
    }
  } else {
    throw Error("Compression method not supported");
  }
}
const HEADER_SIZE_BYTES = 127;
function findTile(entries, tileId) {
  let m = 0;
  let n = entries.length - 1;
  while (m <= n) {
    const k = n + m >> 1;
    const cmp = tileId - entries[k].tileId;
    if (cmp > 0) {
      m = k + 1;
    } else if (cmp < 0) {
      n = k - 1;
    } else {
      return entries[k];
    }
  }
  if (n >= 0) {
    if (entries[n].runLength === 0) {
      return entries[n];
    }
    if (tileId - entries[n].tileId < entries[n].runLength) {
      return entries[n];
    }
  }
  return null;
}
class FetchSource {
  url;
  customHeaders;
  constructor(url, customHeaders = new Headers()) {
    this.url = url;
    this.customHeaders = customHeaders;
  }
  getKey() {
    return this.url;
  }
  setHeaders(customHeaders) {
    this.customHeaders = customHeaders;
  }
  async getBytes(offset, length, signal) {
    let controller;
    if (!signal) {
      controller = new AbortController();
      signal = controller.signal;
    }
    const requestHeaders = new Headers(this.customHeaders);
    requestHeaders.set(
      "Range",
      "bytes=" + offset + "-" + (offset + length - 1)
    );
    let resp = await fetch(this.url, {
      signal,
      headers: requestHeaders
    });
    if (resp.status === 416 && offset === 0) {
      const content_range = resp.headers.get("Content-Range");
      if (!content_range || !content_range.startsWith("bytes */")) {
        throw Error("Missing content-length on 416 response");
      }
      const actual_length = +content_range.substr(8);
      resp = await fetch(this.url, {
        signal,
        headers: { Range: "bytes=0-" + (actual_length - 1) }
      });
    }
    if (resp.status >= 300) {
      throw Error("Bad response code: " + resp.status);
    }
    const content_length = resp.headers.get("Content-Length");
    if (resp.status === 200 && (!content_length || +content_length > length)) {
      if (controller)
        controller.abort();
      throw Error(
        "Server returned no content-length header or content-length exceeding request. Check that your storage backend supports HTTP Byte Serving."
      );
    }
    const a = await resp.arrayBuffer();
    return {
      data: a,
      etag: resp.headers.get("ETag") || void 0,
      cacheControl: resp.headers.get("Cache-Control") || void 0,
      expires: resp.headers.get("Expires") || void 0
    };
  }
}
function getUint64(v, offset) {
  const wh = v.getUint32(offset + 4, true);
  const wl = v.getUint32(offset + 0, true);
  return wh * Math.pow(2, 32) + wl;
}
function bytesToHeader(bytes, etag) {
  const v = new DataView(bytes);
  const spec_version = v.getUint8(7);
  if (spec_version > 3) {
    throw Error(
      `Archive is spec version ${spec_version} but this library supports up to spec version 3`
    );
  }
  return {
    specVersion: spec_version,
    rootDirectoryOffset: getUint64(v, 8),
    rootDirectoryLength: getUint64(v, 16),
    jsonMetadataOffset: getUint64(v, 24),
    jsonMetadataLength: getUint64(v, 32),
    leafDirectoryOffset: getUint64(v, 40),
    leafDirectoryLength: getUint64(v, 48),
    tileDataOffset: getUint64(v, 56),
    tileDataLength: getUint64(v, 64),
    numAddressedTiles: getUint64(v, 72),
    numTileEntries: getUint64(v, 80),
    numTileContents: getUint64(v, 88),
    clustered: v.getUint8(96) === 1,
    internalCompression: v.getUint8(97),
    tileCompression: v.getUint8(98),
    tileType: v.getUint8(99),
    minZoom: v.getUint8(100),
    maxZoom: v.getUint8(101),
    minLon: v.getInt32(102, true) / 1e7,
    minLat: v.getInt32(106, true) / 1e7,
    maxLon: v.getInt32(110, true) / 1e7,
    maxLat: v.getInt32(114, true) / 1e7,
    centerZoom: v.getUint8(118),
    centerLon: v.getInt32(119, true) / 1e7,
    centerLat: v.getInt32(123, true) / 1e7,
    etag
  };
}
function deserializeIndex(buffer) {
  const p = { buf: new Uint8Array(buffer), pos: 0 };
  const numEntries = readVarint(p);
  const entries = [];
  let lastId = 0;
  for (let i2 = 0; i2 < numEntries; i2++) {
    const v = readVarint(p);
    entries.push({ tileId: lastId + v, offset: 0, length: 0, runLength: 1 });
    lastId += v;
  }
  for (let i2 = 0; i2 < numEntries; i2++) {
    entries[i2].runLength = readVarint(p);
  }
  for (let i2 = 0; i2 < numEntries; i2++) {
    entries[i2].length = readVarint(p);
  }
  for (let i2 = 0; i2 < numEntries; i2++) {
    const v = readVarint(p);
    if (v === 0 && i2 > 0) {
      entries[i2].offset = entries[i2 - 1].offset + entries[i2 - 1].length;
    } else {
      entries[i2].offset = v - 1;
    }
  }
  return entries;
}
function detectVersion(a) {
  const v = new DataView(a);
  if (v.getUint16(2, true) === 2) {
    console.warn(
      "PMTiles spec version 2 has been deprecated; please see github.com/protomaps/PMTiles for tools to upgrade"
    );
    return 2;
  } else if (v.getUint16(2, true) === 1) {
    console.warn(
      "PMTiles spec version 1 has been deprecated; please see github.com/protomaps/PMTiles for tools to upgrade"
    );
    return 1;
  }
  return 3;
}
class EtagMismatch extends Error {
}
async function getHeaderAndRoot(source, decompress, prefetch, current_etag) {
  const resp = await source.getBytes(0, 16384);
  const v = new DataView(resp.data);
  if (v.getUint16(0, true) !== 19792) {
    throw new Error("Wrong magic number for PMTiles archive");
  }
  if (detectVersion(resp.data) < 3) {
    throw new Error("V2 is not supported.");
  }
  const headerData = resp.data.slice(0, HEADER_SIZE_BYTES);
  let resp_etag = resp.etag;
  if (current_etag && resp.etag != current_etag) {
    console.warn(
      "ETag conflict detected; your HTTP server might not support content-based ETag headers. ETags disabled for " + source.getKey()
    );
    resp_etag = void 0;
  }
  const header = bytesToHeader(headerData, resp_etag);
  if (prefetch) {
    const rootDirData = resp.data.slice(
      header.rootDirectoryOffset,
      header.rootDirectoryOffset + header.rootDirectoryLength
    );
    const dirKey = source.getKey() + "|" + (header.etag || "") + "|" + header.rootDirectoryOffset + "|" + header.rootDirectoryLength;
    const rootDir = deserializeIndex(
      await decompress(rootDirData, header.internalCompression)
    );
    return [header, [dirKey, rootDir.length, rootDir]];
  }
  return [header, void 0];
}
async function getDirectory(source, decompress, offset, length, header) {
  const resp = await source.getBytes(offset, length);
  if (header.etag && header.etag !== resp.etag) {
    throw new EtagMismatch(resp.etag);
  }
  const data = await decompress(resp.data, header.internalCompression);
  const directory = deserializeIndex(data);
  if (directory.length === 0) {
    throw new Error("Empty directory is invalid");
  }
  return directory;
}
class SharedPromiseCache {
  cache;
  maxCacheEntries;
  counter;
  prefetch;
  decompress;
  constructor(maxCacheEntries = 100, prefetch = true, decompress = defaultDecompress) {
    this.cache = /* @__PURE__ */ new Map();
    this.maxCacheEntries = maxCacheEntries;
    this.counter = 1;
    this.prefetch = prefetch;
    this.decompress = decompress;
  }
  async getHeader(source, current_etag) {
    const cacheKey = source.getKey();
    if (this.cache.has(cacheKey)) {
      this.cache.get(cacheKey).lastUsed = this.counter++;
      const data = await this.cache.get(cacheKey).data;
      return data;
    }
    const p = new Promise((resolve, reject) => {
      getHeaderAndRoot(source, this.decompress, this.prefetch, current_etag).then((res) => {
        if (res[1]) {
          this.cache.set(res[1][0], {
            lastUsed: this.counter++,
            data: Promise.resolve(res[1][2])
          });
        }
        resolve(res[0]);
        this.prune();
      }).catch((e) => {
        reject(e);
      });
    });
    this.cache.set(cacheKey, { lastUsed: this.counter++, data: p });
    return p;
  }
  async getDirectory(source, offset, length, header) {
    const cacheKey = source.getKey() + "|" + (header.etag || "") + "|" + offset + "|" + length;
    if (this.cache.has(cacheKey)) {
      this.cache.get(cacheKey).lastUsed = this.counter++;
      const data = await this.cache.get(cacheKey).data;
      return data;
    }
    const p = new Promise((resolve, reject) => {
      getDirectory(source, this.decompress, offset, length, header).then((directory) => {
        resolve(directory);
        this.prune();
      }).catch((e) => {
        reject(e);
      });
    });
    this.cache.set(cacheKey, { lastUsed: this.counter++, data: p });
    return p;
  }
  prune() {
    if (this.cache.size >= this.maxCacheEntries) {
      let minUsed = Infinity;
      let minKey = void 0;
      this.cache.forEach(
        (cache_value, key) => {
          if (cache_value.lastUsed < minUsed) {
            minUsed = cache_value.lastUsed;
            minKey = key;
          }
        }
      );
      if (minKey) {
        this.cache.delete(minKey);
      }
    }
  }
  async invalidate(source, current_etag) {
    this.cache.delete(source.getKey());
    await this.getHeader(source, current_etag);
  }
}
class PMTiles {
  source;
  cache;
  decompress;
  constructor(source, cache, decompress) {
    if (typeof source === "string") {
      this.source = new FetchSource(source);
    } else {
      this.source = source;
    }
    if (decompress) {
      this.decompress = decompress;
    } else {
      this.decompress = defaultDecompress;
    }
    if (cache) {
      this.cache = cache;
    } else {
      this.cache = new SharedPromiseCache();
    }
  }
  async getHeader() {
    return await this.cache.getHeader(this.source);
  }
  async getZxyAttempt(z, x, y, signal) {
    const tile_id = zxyToTileId(z, x, y);
    const header = await this.cache.getHeader(this.source);
    if (header.specVersion < 3) {
      throw new Error("V2 is not supported.");
    }
    if (z < header.minZoom || z > header.maxZoom) {
      return void 0;
    }
    let d_o = header.rootDirectoryOffset;
    let d_l = header.rootDirectoryLength;
    for (let depth = 0; depth <= 3; depth++) {
      const directory = await this.cache.getDirectory(
        this.source,
        d_o,
        d_l,
        header
      );
      const entry = findTile(directory, tile_id);
      if (entry) {
        let s = 0;
        let offset = -1;
        let length = -1;
        try {
          if (entry.runLength > 0) {
            s = 1;
            offset = header.tileDataOffset + entry.offset;
            length = entry.length;
            const resp = await this.source.getBytes(
              header.tileDataOffset + entry.offset,
              entry.length,
              signal
            );
            if (header.etag && header.etag !== resp.etag) {
              throw new EtagMismatch(resp.etag);
            }
            return {
              data: await this.decompress(resp.data, header.tileCompression),
              cacheControl: resp.cacheControl,
              expires: resp.expires
            };
          } else {
            s = 100;
            d_o = header.leafDirectoryOffset + entry.offset;
            d_l = entry.length;
          }
        } catch (e) {
          console.log("Error rethrown", e, "with", s, { offset, length });
          throw e;
        }
      } else {
        return void 0;
      }
    }
    throw Error("Maximum directory depth exceeded");
  }
  async getZxy(z, x, y, signal) {
    try {
      return await this.getZxyAttempt(z, x, y, signal);
    } catch (e) {
      if (e instanceof EtagMismatch) {
        this.cache.invalidate(this.source, e.message);
        return await this.getZxyAttempt(z, x, y, signal);
      } else {
        console.log("throwing", e);
        throw e;
      }
    }
  }
  async getMetadataAttempt() {
    const header = await this.cache.getHeader(this.source);
    const resp = await this.source.getBytes(
      header.jsonMetadataOffset,
      header.jsonMetadataLength
    );
    if (header.etag && header.etag !== resp.etag) {
      throw new EtagMismatch(resp.etag);
    }
    const decompressed = await this.decompress(
      resp.data,
      header.internalCompression
    );
    const dec = new TextDecoder("utf-8");
    return JSON.parse(dec.decode(decompressed));
  }
  async getMetadata() {
    try {
      return await this.getMetadataAttempt();
    } catch (e) {
      if (e instanceof EtagMismatch) {
        this.cache.invalidate(this.source, e.message);
        return await this.getMetadataAttempt();
      } else {
        throw e;
      }
    }
  }
}
const db = new Dexie("pmfiles");
db.version(1).stores({
  fileChunks: "&[url+offset]",
  fileStatus: "&url"
});
const App_svelte_svelte_type_style_lang = "";
const css = {
  code: ".waiting.svelte-2l75go{border:5px solid;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);padding:10px}#map.svelte-2l75go{width:100%;height:80vh}#feature-info.svelte-2l75go{padding:10px}",
  map: null
};
const basemapFilePath = "nz-base.pmtiles";
const routeFilePath = "route.pmtiles";
const basemapPMSource = null;
new PMTiles(basemapFilePath);
new PMTiles(routeFilePath);
const App = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let { lat = -36.88 } = $$props;
  let { lon = 174.77 } = $$props;
  let { zoom = 12 } = $$props;
  new maplibre.LngLatBounds([174.398279, -37.104532], [175.33349, -36.828027]);
  let mapContainer;
  let map;
  let layerColorSwitcherIds = [];
  let layerSwitcherIds = [];
  let layerSwitcherSelectedIds;
  let tagList = [];
  if ($$props.lat === void 0 && $$bindings.lat && lat !== void 0)
    $$bindings.lat(lat);
  if ($$props.lon === void 0 && $$bindings.lon && lon !== void 0)
    $$bindings.lon(lon);
  if ($$props.zoom === void 0 && $$bindings.zoom && zoom !== void 0)
    $$bindings.zoom(zoom);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-hgg8sq_START --><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"><!-- HEAD_svelte-hgg8sq_END -->`, ""}

<div><div id="map" class="svelte-2l75go"${add_attribute("this", mapContainer, 0)}></div>
	${validate_component(LayerColorSwitcher, "LayerColorSwitcher").$$render($$result, { map, layerColorSwitcherIds }, {}, {})}
	${validate_component(LayerSwitcher, "LayerSwitcher").$$render(
    $$result,
    {
      map,
      layerSwitcherIds,
      layerSwitcherSelectedIds
    },
    {},
    {}
  )}
	${validate_component(Button$1, "Button").$$render($$result, {}, {}, {
    default: () => {
      return `Save ID`;
    }
  })}
	<div id="feature-info" class="svelte-2l75go">

		${tagList.length > 0 ? `${each(tagList, (tag) => {
    return `${validate_component(Tag$1, "Tag").$$render($$result, {}, {}, {
      default: () => {
        return `${escape(tag)}`;
      }
    })}`;
  })}` : ``}</div></div>

${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `
	<div class="waiting svelte-2l75go"><h1>Please Wait</h1></div>
`;
    }
    return function() {
      return ``;
    }();
  }(basemapPMSource?.fileInfoPromise)}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(App, "App").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
