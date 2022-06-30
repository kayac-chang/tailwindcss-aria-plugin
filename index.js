const plugin = require("tailwindcss/plugin");

const WidgetAttributes = {
  // autocomplete: [],
  // checked: [],
  // disabled: [],
  // errormessage: [],
  expanded: ["true", "false"],
  // haspopup: [],
  // hidden: [],
  // invalid: [],
  // label: [],
  // level: [],
  // modal: [],
  // multiline: [],
  // multiselectable: [],
  // orientation: [],
  // placeholder: [],
  // pressed: [],
  // readonly: [],
  // required: [],
  selected: ["true", "false"],
  // sort: [],
  // valuemax: [],
  // valuemin: [],
  // valuenow: [],
  // valuetext: [],
};

/* ============================================================= *
 * Global ARIA attributes                                        *
 * ============================================================= */

const GlobalAriaAttributes = {
   atomic: ["false", "true"],
   busy: ["false", "true"],
   controls: ["id"],
   current: ["page", "step", "location", "date", "time", "true", "false"],
   describedby: ["id"],
   // description: [],
   details: ["id"],
   disabled: ["true", "false"],
   dropeffect: ["copy", "execute", "link", "move", "none", "popup"],
   errormessage: ["id"],
   flowto: ["id"],
   grabbed: ["true", "false"],
   haspopup: ["false", "true", "menu", "listbox", "tree", "grid", "dialog"],
   hidden: ["false", "true"],
   invalid: ["grammar", "false", "spelling", "true"],
   // keyshortcuts: [],
   // label: [],
   labelledby: ["id"],
   live: ["assertive", "off", "polite"],
   owns: ["id"],
   relevant: ["additions", "all", "removals", "text", "additions text"],
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
