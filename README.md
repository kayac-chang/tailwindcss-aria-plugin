# Tailwindcss Aria Plugin

A plugin that provides aria label variants
that can apply utilities when aria-label existed.

## Installation

Install the plugin from npm:

```bash
  npm install -D tailwindcss-aria-plugin
```

Then add the plugin to your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require("tailwind-aria-plugin"),
    // ...
  ],
};
```

## Usage

```html
<!-- aria-[name]-[value] -->
<input type="checkbox" id="chk1-label" class="aria-checked:bg-blue-500" />
<label for="chk1-label">Remember my preferences</label>
```

### Widget Attributes

#### `aria-autocomplete`

[![MDN](https://img.shields.io/badge/MDN-black?style=flat&logo=mdnwebdocs)][aria-autocomplete]
![Test](https://img.shields.io/badge/Test-todo-yellow.svg)

[aria-autocomplete]:[https://developer.mozilla.org/en-us/docs/web/accessibility/aria/attributes/aria-autocomplete]

- `none`: `aria-autocomplete-none`
- `inline`: `aria-autocomplete-inline`
- `list`: `aria-autocomplete-list`
- `both`: `aria-autocomplete-both`

#### `aria-checked`

[![MDN](https://img.shields.io/badge/MDN-black?style=flat&logo=mdnwebdocs)][aria-checked]
![Test](https://img.shields.io/badge/Test-todo-yellow.svg)

[aria-checked]:[https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-checked]

- `true`: `aria-checked`
- `false`: `aria-!checked`
- `mixed`: `aria-checked-mixed`

#### `aria-disabled`

[![MDN](https://img.shields.io/badge/MDN-black?style=flat&logo=mdnwebdocs)][aria-disabled]
![Test](https://img.shields.io/badge/Test-todo-yellow.svg)

[aria-disabled]:[https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-disabled]

- `true`: `aria-disabled`
- `false`: `aria-!disabled`

#### `aria-errormessage`

[![MDN](https://img.shields.io/badge/MDN-black?style=flat&logo=mdnwebdocs)][aria-errormessage]
![Test](https://img.shields.io/badge/Test-todo-yellow.svg)

[aria-errormessage]:[https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-errormessage]

- `id`: `aria-errormessage`

#### `aria-expanded`

[![MDN](https://img.shields.io/badge/MDN-black?style=flat&logo=mdnwebdocs)][aria-expanded]
![Test](https://img.shields.io/badge/Test-todo-yellow.svg)

[aria-expanded]:[https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded]

- `true`: `aria-expanded`
- `false`: `aria-!expanded`

#### `aria-haspopup`

[![MDN](https://img.shields.io/badge/MDN-black?style=flat&logo=mdnwebdocs)][aria-haspopup]
![Test](https://img.shields.io/badge/Test-todo-yellow.svg)

[aria-haspopup]:[https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup]

- `true`: `aria-haspopup`
- `false`: `aria-!haspopup`
- `menu`: `aria-haspopup-menu`
- `listbox`: `aria-haspopup-listbox`
- `tree`: `aria-haspopup-tree`
- `grid`: `aria-haspopup-grid`
- `dialog`: `aria-haspopup-dialog`

#### `aria-hidden`

[![MDN](https://img.shields.io/badge/MDN-black?style=flat&logo=mdnwebdocs)][aria-hidden]
![Test](https://img.shields.io/badge/Test-todo-yellow.svg)

[aria-hidden]:[https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-hidden]

- `true`: `aria-hidden`
- `false`: `aria-!hidden`

#### `aria-invalid`

[![MDN](https://img.shields.io/badge/MDN-black?style=flat&logo=mdnwebdocs)][aria-invalid]
![Test](https://img.shields.io/badge/Test-todo-yellow.svg)

[aria-invalid]:[https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-invalid]

- `true`: `aria-invalid`
- `false`: `aria-!invalid`
- `grammar`: `aria-invalid-grammar`
- `spelling`: `aria-invalid-spelling`

#### `aria-label`

[![MDN](https://img.shields.io/badge/MDN-black?style=flat&logo=mdnwebdocs)][aria-label]
![Test](https://img.shields.io/badge/Test-todo-yellow.svg)

[aria-label]:[https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label]

- `<string>`: `aria-label`

#### `aria-level`

[![MDN](https://img.shields.io/badge/MDN-black?style=flat&logo=mdnwebdocs)][aria-level]
![Test](https://img.shields.io/badge/Test-todo-yellow.svg)

[aria-level]:[https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-level]

- `<integer>`: `aria-level`

#### `aria-modal`

[![MDN](https://img.shields.io/badge/MDN-black?style=flat&logo=mdnwebdocs)][aria-modal]
![Test](https://img.shields.io/badge/Test-todo-yellow.svg)

[aria-modal]:[https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-modal]

- `true`: `aria-modal`
- `false`: `aria-!modal`

#### `aria-multiline`

[![MDN](https://img.shields.io/badge/MDN-black?style=flat&logo=mdnwebdocs)][aria-multiline]
![Test](https://img.shields.io/badge/Test-todo-yellow.svg)

[aria-multiline]:[https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-multiline]

- `true`: `aria-multiline`
- `false`: `aria-!multiline`

#### `aria-multiselectable`

[![MDN](https://img.shields.io/badge/MDN-black?style=flat&logo=mdnwebdocs)][aria-multiselectable]
![Test](https://img.shields.io/badge/Test-todo-yellow.svg)

[aria-multiselectable]:[https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-multiselectable]

- `true`: `aria-multiselectable`
- `false`: `aria-!multiselectable`

#### `aria-orientation`

[![MDN](https://img.shields.io/badge/MDN-black?style=flat&logo=mdnwebdocs)][aria-orientation]
![Test](https://img.shields.io/badge/Test-todo-yellow.svg)

[aria-orientation]:[https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-orientation]

- `horizontal`: `aria-orientation-horizontal`
- `vertical`: `aria-orientation-vertical`

#### `aria-placeholder`

[![MDN](https://img.shields.io/badge/MDN-black?style=flat&logo=mdnwebdocs)][aria-placeholder]
![Test](https://img.shields.io/badge/Test-todo-yellow.svg)

[aria-placeholder]:[https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-placeholder]

- `<string>`: `aria-placeholder`

#### `aria-pressed`

[![MDN](https://img.shields.io/badge/MDN-black?style=flat&logo=mdnwebdocs)][aria-pressed]
![Test](https://img.shields.io/badge/Test-todo-yellow.svg)

[aria-pressed]:[https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-pressed]

- `true`: `aria-pressed`
- `false`: `aria-!pressed`
- `mixed`: `aria-pressed-mixed`

#### `aria-readonly`

[![MDN](https://img.shields.io/badge/MDN-black?style=flat&logo=mdnwebdocs)][aria-readonly]
![Test](https://img.shields.io/badge/Test-todo-yellow.svg)

[aria-readonly]:[https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-readonly]

- `true`: `aria-readonly`
- `false`: `aria-!readonly`

#### `aria-required`

[![MDN](https://img.shields.io/badge/MDN-black?style=flat&logo=mdnwebdocs)][aria-required]
![Test](https://img.shields.io/badge/Test-todo-yellow.svg)

[aria-required]:[https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-required]

- `true`: `aria-required`
- `false`: `aria-!required`

#### `aria-selected`

[![MDN](https://img.shields.io/badge/MDN-black?style=flat&logo=mdnwebdocs)][aria-selected]
![Test](https://img.shields.io/badge/Test-todo-yellow.svg)

[aria-selected]:[https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-selected]

- `true`: `aria-selected`
- `false`: `aria-!selected`

#### `aria-sort`

[![MDN](https://img.shields.io/badge/MDN-black?style=flat&logo=mdnwebdocs)][aria-sort]
![Test](https://img.shields.io/badge/Test-todo-yellow.svg)

[aria-sort]:[https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-sort]

- `none`: `aria-sort-none`
- `ascending`: `aria-sort-ascending`
- `descending`: `aria-sort-descending`
- `other`: `aria-sort-other`

#### `aria-valuemax`

[![MDN](https://img.shields.io/badge/MDN-black?style=flat&logo=mdnwebdocs)][aria-valuemax]
![Test](https://img.shields.io/badge/Test-todo-yellow.svg)

[aria-valuemax]:[https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax]

- `<number>`: `aria-valuemax`

#### `aria-valuemin`

[![MDN](https://img.shields.io/badge/MDN-black?style=flat&logo=mdnwebdocs)][aria-valuemin]
![Test](https://img.shields.io/badge/Test-todo-yellow.svg)

[aria-valuemin]:[https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin]

- `<number>`: `aria-valuemin`

#### `aria-valuenow`

[![MDN](https://img.shields.io/badge/MDN-black?style=flat&logo=mdnwebdocs)][aria-valuenow]
![Test](https://img.shields.io/badge/Test-todo-yellow.svg)

[aria-valuenow]:[https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow]

- `<number>`: `aria-valuenow`

#### `aria-valuetext`

[![MDN](https://img.shields.io/badge/MDN-black?style=flat&logo=mdnwebdocs)][aria-valuetext]
![Test](https://img.shields.io/badge/Test-todo-yellow.svg)

[aria-valuetext]:[https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext]

- `<string>`: `aria-valuetext`
