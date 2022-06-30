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
