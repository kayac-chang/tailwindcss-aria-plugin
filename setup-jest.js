const prettier = require("prettier");

const format = (source) => prettier.format(source, { parser: "css" });

expect.extend({
  toMatchCSS(received, expected) {
    const formattedReceived = format(received);
    const formattedArgument = format(expected);
    const pass = formattedReceived === formattedArgument;

    const { isNot, promise, utils, expand } = this;
    const { matcherHint, printExpected, printReceived } = utils;

    const message = () => {
      const diffString = diff(formattedArgument, formattedReceived, { expand });
      if (diffString?.includes("- Expect")) {
        return [`Difference:`, "\n", diffString].join("\n");
      }

      const options = {
        comment: "stripped(received) === stripped(argument)",
        isNot,
        promise,
      };

      return [
        matcherHint("toBe", undefined, undefined, options),
        "\n",
        `Expected: ${printExpected(formattedReceived)}`,
        `Received: ${printReceived(formattedArgument)}`,
      ].join("\n");
    };

    return { actual: received, message, pass };
  },
});
