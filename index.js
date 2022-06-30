const plugin = require("tailwindcss/plugin");

const WidgetAttributes = {
  autocomplete: ["none", "inline", "list", "both"],
  checked: ["false", "true", "mixed"],
  disabled: ["true", "false"],
  errormessage: ["id"],
  expanded: ["true", "false"],
  haspopup: ["false", "true", "menu", "listbox", "tree", "grid", "dialog"],
  hidden: ["false", "true"],
  invalid: ["grammar", "false", "spelling", "true"],
  // label: [], <string>
  // level: [], <integer>
  modal: ["false", "true"],
  multiline: ["false", "true"],
  multiselectable: ["false", "true"],
  orientation: ["horizontal", "vertical"],
  // placeholder: [], <string>
  pressed: ["false", "mixed", "true"],
  readonly: ["true" ,"false"],
  required: ["true" ,"false"],
  selected: ["true", "false"],
  sort: ["ascending", "descending", "none", "other"],
  // valuemax: [], <number>
  // valuemin: [], <number>
  // valuenow: [], <number>
  // valuetext: [], <string>
};

/* ============================================================= *
 * Global ARIA attributes                                        *
 * ============================================================= */

const GlobalAriaAttributes = {
  // atomic: [],
  // busy: [],
  // controls: [],
  current: ["page", "step", "location", "date", "time", "true", "false"],
  // describedby: [],
  // description: [],
  // details: [],
  // disabled: [],
  // dropeffect: [],
  // errormessage: [],
  // flowto: [],
  // grabbed: [],
  // haspopup: [],
  // hidden: [],
  // invalid: [],
  // keyshortcuts: [],
  // label: [],
  // labelledby: [],
  // live: [],
  // owns: [],
  // relevant: [],
  // roledescription: [],
};

const generateNameByValue = (key, value) => {
  // => aria-[key]
  if (value === "true") {
    return `aria-${key}`;
  }

  // => aria-![key]
  if (value === "false") {
    return `aria-!${key}`;
  }

  // => aria-[key]-[value]
  return `aria-${key}-${value}`;
};

module.exports = plugin(({ addVariant }) => {
  const Attributes = [WidgetAttributes, GlobalAriaAttributes];

  for (const attributes of Attributes) {
    for (const [key, variants] of Object.entries(attributes)) {
      for (const value of variants) {
        const name = generateNameByValue(key, value);

        // => aria
        addVariant(name, `&[aria-${key}="${value}"]`);

        // => group-aria
        addVariant(`group-${name}`, `:merge(.group)[aria-${key}="${value}"] &`);
      }
    }
  }
});
