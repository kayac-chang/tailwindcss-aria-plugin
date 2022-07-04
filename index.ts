import plugin from "tailwindcss/plugin";

const WidgetAttributes = {
  autocomplete: ["none", "inline", "list", "both"],
  checked: ["false", "true", "mixed"],
  // disabled: ["true", "false"], duplicate
  // errormessage: ["id"], duplicate
  expanded: ["true", "false"],
  // haspopup: ["false", "true", "menu", "listbox", "tree", "grid", "dialog"], duplicate
  // hidden: ["false", "true"], duplicate
  // invalid: ["grammar", "false", "spelling", "true"], duplicate
  // label: ["<string>"], duplicate
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
  valuetext: ["<string>"],
};

/* ============================================================= *
 * Live region attributes                                        *
 * ============================================================= */

const LiveRegionAttributes = {
  busy: ["false", "true"],
  live: ["assertive", "off", "polite"],
  relevant: ["additions", "all", "removals", "text" /* "additions text" */],
  atomic: ["false", "true"],
};

/* ============================================================= *
 * Drag-and-Drop attributes                                        *
 * ============================================================= */

const DragAndDropAttributes = {
  dropeffect: ["copy", "execute", "link", "move", "none", "popup"],
  grabbed: ["true", "false"],
};

/* ============================================================= *
 * Relationship attributes                                        *
 * ============================================================= */

const RelationshipAttributes = {
  activedescendant: ["id"],
  colcount: ["<integer>"],
  colindex: ["<integer>"],
  colspan: ["<integer>"],
  controls: ["id list"],
  describedby: ["ID reference list"],
  description: ["<string>"],
  details: ["ID reference list"],
  // errormessage: ["id reference"], duplicate
  flowto: ["id" /* "id list" */],
  labelledby: ["ID reference list"],
  owns: ["id list"],
  posinset: ["<integer>"],
  rowcount: ["<integer>"],
  rowindex: ["<integer>"],
  rowspan: ["<integer>"],
  setsize: ["<integer>"],
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
  label: ["<string>"],
  labelledby: ["id"],
  live: ["assertive", "off", "polite"],
  owns: ["id"],
  relevant: ["additions", "all", "removals", "text", "additions text"],
  // roledescription: [],
};

const generateNameWithValue = (key: string, value: string) => {
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

export = plugin(({ addVariant }) => {
  const Attributes = [
    WidgetAttributes,
    LiveRegionAttributes,
    DragAndDropAttributes,
    RelationshipAttributes,
    GlobalAriaAttributes,
  ];

  for (const attributes of Attributes) {
    for (const [key, variants] of Object.entries(attributes)) {
      // only one variants => aria-[key]
      if (variants.length === 1) {
        const name = `aria-${key}`;
        // => aria
        addVariant(name, `&[aria-${key}]`);
        // => group-aria
        addVariant(`group-${name}`, `:merge(.group)[aria-${key}] &`);

        continue;
      }

      for (const value of variants) {
        const name = generateNameWithValue(key, value);
        // => aria
        addVariant(name, `&[aria-${key}="${value}"]`);
        // => group-aria
        addVariant(`group-${name}`, `:merge(.group)[aria-${key}="${value}"] &`);
      }
    }
  }
});
