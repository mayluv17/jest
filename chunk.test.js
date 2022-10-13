const chunkArray = require("./chunk");

test("chunkArray function exist", () => {
  expect(chunkArray).toBeDefined();
});

test("chunck an arrat of 10 values with length of 2", () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const len = 2;
  const chunkedArray = chunkArray(numbers, len);

  expect(chunkedArray).toEqual([
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
    [9, 10],
  ]);
});
