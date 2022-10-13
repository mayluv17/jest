const reversstring = require("./reversstring");

//if function exists
test("reverse function exists", () => {
  expect(reversstring).toBeDefined();
});

test("check if string is reversed", () => {
  expect(reversstring("boy")).toEqual("yob");
});
