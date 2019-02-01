const helloWorld = require("../src/main");

test("Returns Hello World String", () => {
  expect(helloWorld()).toBe("Hello World");
});
