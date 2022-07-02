import postcss from "postcss";
import tailwind, { Config } from "tailwindcss";
import plugin from "./index";

const html = String.raw;
const css = String.raw;

const generateConfig = (config: Config) => ({
  theme: {},
  plugins: [plugin],
  ...config,
});

const run = (config: Config, input: string) =>
  postcss(tailwind(config)).process(input, { from: undefined });

describe("test aria-autocomplete-none", () => {
  test("should generate correct css", async () => {
    const config: Config = generateConfig({
      content: [
        {
          raw: html`<div class="aria-autocomplete-none:bg-pink-600"></div>`,
        },
      ],
    });
    const expected = css`
      .aria-autocomplete-none\:bg-pink-600[aria-autocomplete="none"] {
        --tw-bg-opacity: 1;
        background-color: rgb(219 39 119 / var(--tw-bg-opacity));
      }
    `;

    return run(config, "@tailwind utilities").then((result) =>
      expect(result.css).toMatchCSS(expected)
    );
  });
});
