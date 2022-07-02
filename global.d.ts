interface CustomMatchers<R = unknown> {
  toMatchCSS(received: string): R;
}
namespace jest {
  interface Expect extends CustomMatchers {}
  interface Matchers<R> extends CustomMatchers<R> {}
  interface InverseAsymmetricMatchers extends CustomMatchers {}
}
