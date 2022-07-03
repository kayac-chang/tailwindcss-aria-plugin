import plugin from "tailwindcss/plugin";
const WidgetAttributes = {
  autocomplete: ["none", "inline", "list", "both"],
  checked: ["false", "true", "mixed"],
  disabled: ["true", "false"],
  errormessage: ["id"],
  expanded: ["true", "false"],
  haspopup: ["false", "true", "menu", "listbox", "tree", "grid", "dialog"],
  hidden: ["false", "true"],
  invalid: ["grammar", "false", "spelling", "true"],
  label: ["<string>"],
  level: ["<integer>"],
  modal: ["false", "true"],
  multiline: ["false", "true"],
  multiselectable: ["false", "true"],
  orientation: ["horizontal", "vertical"],
  placeholder: ["<string>"],
  pressed: ["false", "mixed", "true"],
  readonly: ["true", "false"],
  required: ["true", "false"],
  selected: ["true", "false"],
  sort: ["ascending", "descending", "none", "other"],
  valuemax: ["<number>"],
  valuemin: ["<number>"],
  valuenow: ["<number>"],
  valuetext: ["<string>"]
};
const GlobalAriaAttributes = {
  atomic: ["false", "true"],
  busy: ["false", "true"],
  controls: ["id"],
  current: ["page", "step", "location", "date", "time", "true", "false"],
  describedby: ["id"],
  details: ["id"],
  disabled: ["true", "false"],
  dropeffect: ["copy", "execute", "link", "move", "none", "popup"],
  errormessage: ["id"],
  flowto: ["id"],
  grabbed: ["true", "false"],
  haspopup: ["false", "true", "menu", "listbox", "tree", "grid", "dialog"],
  hidden: ["false", "true"],
  invalid: ["grammar", "false", "spelling", "true"],
  labelledby: ["id"],
  live: ["assertive", "off", "polite"],
  owns: ["id"],
  relevant: ["additions", "all", "removals", "text", "additions text"]
};
const generateNameWithValue = (key, value) => {
  if (value === "true") {
    return `aria-${key}`;
  }
  if (value === "false") {
    return `aria-!${key}`;
  }
  return `aria-${key}-${value}`;
};
var tailwind_aria_plugin_default = plugin(({ addVariant }) => {
  const Attributes = [WidgetAttributes, GlobalAriaAttributes];
  for (const attributes of Attributes) {
    for (const [key, variants] of Object.entries(attributes)) {
      if (variants.length === 1) {
        const name = `aria-${key}`;
        addVariant(name, `&[aria-${key}]`);
        addVariant(`group-${name}`, `:merge(.group)[aria-${key}] &`);
        continue;
      }
      for (const value of variants) {
        const name = generateNameWithValue(key, value);
        addVariant(name, `&[aria-${key}="${value}"]`);
        addVariant(`group-${name}`, `:merge(.group)[aria-${key}="${value}"] &`);
      }
    }
  }
});
export {
  tailwind_aria_plugin_default as default
};
