"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var tailwind_aria_plugin_exports = {};
__export(tailwind_aria_plugin_exports, {
  default: () => tailwind_aria_plugin_default
});
module.exports = __toCommonJS(tailwind_aria_plugin_exports);
var import_plugin = __toESM(require("tailwindcss/plugin"));
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
var tailwind_aria_plugin_default = (0, import_plugin.default)(({ addVariant }) => {
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
