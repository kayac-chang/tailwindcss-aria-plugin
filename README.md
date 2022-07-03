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

[![MDN](https://img.shields.io/badge/MDN-black?style=flat&logo=mdnwebdocs)](https://developer.mozilla.org/en-us/docs/web/accessibility/aria/attributes/aria-autocomplete)
![Test](https://img.shields.io/badge/Test-todo-yellow.svg)

- `none`: `aria-autocomplete-none`
- `inline`: `aria-autocomplete-inline`
- `list`: `aria-autocomplete-list`
- `both`: `aria-autocomplete-both`

#### `aria-checked`

[![MDN](https://img.shields.io/badge/MDN-black?style=flat&logo=mdnwebdocs)](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-checked)
![Test](https://img.shields.io/badge/Test-todo-yellow.svg)

- `true`: `aria-checked`
- `false`: `aria-!checked`
- `mixed`: `aria-checked-mixed`

#### `aria-disabled`

[![MDN](https://img.shields.io/badge/MDN-black?style=flat&logo=mdnwebdocs)](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-disabled)
![Test](https://img.shields.io/badge/Test-todo-yellow.svg)

- `true`: `aria-disabled`
- `false`: `aria-!disabled`

#### `aria-errormessage`

[![MDN](https://img.shields.io/badge/MDN-black?style=flat&logo=mdnwebdocs)](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-errormessage)
![Test](https://img.shields.io/badge/Test-todo-yellow.svg)

- `id`: `aria-errormessage`

#### `aria-expanded`

[![MDN](https://img.shields.io/badge/MDN-black?style=flat&logo=mdnwebdocs)](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)
![Test](https://img.shields.io/badge/Test-todo-yellow.svg)

- `true`: `aria-expanded`
- `false`: `aria-!expanded`

#### `aria-haspopup`

[![MDN](https://img.shields.io/badge/MDN-black?style=flat&logo=mdnwebdocs)](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup)
![Test](https://img.shields.io/badge/Test-todo-yellow.svg)

- `true`: `aria-haspopup`
- `false`: `aria-!haspopup`
- `menu`: `aria-haspopup-menu`
- `listbox`: `aria-haspopup-listbox`
- `tree`: `aria-haspopup-tree`
- `grid`: `aria-haspopup-grid`
- `dialog`: `aria-haspopup-dialog`

#### `aria-hidden`

[![MDN](https://img.shields.io/badge/MDN-black?style=flat&logo=mdnwebdocs)](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-hidden)
![Test](https://img.shields.io/badge/Test-todo-yellow.svg)

- `true`: `aria-hidden`
- `false`: `aria-!hidden`

#### `aria-invalid`

[![MDN](https://img.shields.io/badge/MDN-black?style=flat&logo=mdnwebdocs)](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-invalid)
![Test](https://img.shields.io/badge/Test-todo-yellow.svg)

- `true`: `aria-invalid`
- `false`: `aria-!invalid`
- `grammar`: `aria-invalid-grammar`
- `spelling`: `aria-invalid-spelling`

#### `aria-label`

[![MDN](https://img.shields.io/badge/MDN-black?style=flat&logo=mdnwebdocs)](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label)
![Test](https://img.shields.io/badge/Test-todo-yellow.svg)

- `<string>`: `aria-label`

#### `aria-level`

[![MDN](https://img.shields.io/badge/MDN-black?style=flat&logo=mdnwebdocs)](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-level)
![Test](https://img.shields.io/badge/Test-todo-yellow.svg)

- `<integer>`: `aria-level`

#### `aria-modal`

[![MDN](https://img.shields.io/badge/MDN-black?style=flat&logo=mdnwebdocs)](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-modal)
![Test](https://img.shields.io/badge/Test-todo-yellow.svg)

- `true`: `aria-modal`
- `false`: `aria-!modal`

#### `aria-multiline`

[![MDN](https://img.shields.io/badge/MDN-black?style=flat&logo=mdnwebdocs)](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-multiline)
![Test](https://img.shields.io/badge/Test-todo-yellow.svg)

- `true`: `aria-multiline`
- `false`: `aria-!multiline`

#### `aria-multiselectable`

[![MDN](https://img.shields.io/badge/MDN-black?style=flat&logo=mdnwebdocs)](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-multiselectable)
![Test](https://img.shields.io/badge/Test-todo-yellow.svg)

- `true`: `aria-multiselectable`
- `false`: `aria-!multiselectable`

#### `aria-orientation`

[![MDN](https://img.shields.io/badge/MDN-black?style=flat&logo=mdnwebdocs)](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-orientation)
![Test](https://img.shields.io/badge/Test-todo-yellow.svg)

- `horizontal`: `aria-orientation-horizontal`
- `vertical`: `aria-orientation-vertical`

#### `aria-placeholder`

[![MDN](https://img.shields.io/badge/MDN-black?style=flat&logo=mdnwebdocs)](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-placeholder)
![Test](https://img.shields.io/badge/Test-todo-yellow.svg)

- `<string>`: `aria-placeholder`

#### `aria-pressed`

[![MDN](https://img.shields.io/badge/MDN-black?style=flat&logo=mdnwebdocs)](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-pressed)
![Test](https://img.shields.io/badge/Test-todo-yellow.svg)

- `true`: `aria-pressed`
- `false`: `aria-!pressed`
- `mixed`: `aria-pressed-mixed`

#### `aria-readonly`

[![MDN](https://img.shields.io/badge/MDN-black?style=flat&logo=mdnwebdocs)](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-readonly)
![Test](https://img.shields.io/badge/Test-todo-yellow.svg)

- `true`: `aria-readonly`
- `false`: `aria-!readonly`

#### `aria-required`

[![MDN](https://img.shields.io/badge/MDN-black?style=flat&logo=mdnwebdocs)](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-required)
![Test](https://img.shields.io/badge/Test-todo-yellow.svg)

- `true`: `aria-required`
- `false`: `aria-!required`

#### `aria-selected`

[![MDN](https://img.shields.io/badge/MDN-black?style=flat&logo=mdnwebdocs)](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-selected)
![Test](https://img.shields.io/badge/Test-todo-yellow.svg)

- `true`: `aria-selected`
- `false`: `aria-!selected`

#### `aria-sort`

[![MDN](https://img.shields.io/badge/MDN-black?style=flat&logo=mdnwebdocs)](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-sort)
![Test](https://img.shields.io/badge/Test-todo-yellow.svg)

- `none`: `aria-sort-none`
- `ascending`: `aria-sort-ascending`
- `descending`: `aria-sort-descending`
- `other`: `aria-sort-other`

#### `aria-valuemax`

[![MDN](https://img.shields.io/badge/MDN-black?style=flat&logo=mdnwebdocs)](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax)
![Test](https://img.shields.io/badge/Test-todo-yellow.svg)

- `<number>`: `aria-valuemax`

#### `aria-valuemin`

[![MDN](https://img.shields.io/badge/MDN-black?style=flat&logo=mdnwebdocs)](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin)
![Test](https://img.shields.io/badge/Test-todo-yellow.svg)

- `<number>`: `aria-valuemin`

#### `aria-valuenow`

[![MDN](https://img.shields.io/badge/MDN-black?style=flat&logo=mdnwebdocs)](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow)
![Test](https://img.shields.io/badge/Test-todo-yellow.svg)

- `<number>`: `aria-valuenow`

#### `aria-valuetext`

[![MDN](https://img.shields.io/badge/MDN-black?style=flat&logo=mdnwebdocs)](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext)
![Test](https://img.shields.io/badge/Test-todo-yellow.svg)

- `<string>`: `aria-valuetext`
