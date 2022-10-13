const functions = require("./functions");

test("adds 2+2 to equal", () => {
  expect(functions.add(2, 2)).toBe(4);
});

// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());

// beforeAll(() => initDatabase());
// afterAll(() => closeDatabase());

// const initDatabase = () => console.log("database initialised");
// const closeDatabase = () => console.log("database close...");

// running a function on each check
const nameCheck = () => console.log("checking time...");
describe("checking names", () => {
  beforeEach(() => nameCheck());

  test("user is jeff", () => {
    const user = "jeff";
    expect(user).toEqual("jeff");
  });

  test("user is Jane", () => {
    const user = "Jane";
    expect(user).toEqual("Jane");
  });
});

//not.toBe
test("adds 2+2 to notequal 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

//toBeNull
test("is to be null", () => {
  expect(functions.isNull()).toBeNull();
});
//tobeFalsy
test("should be falsy", () => {
  expect(functions.checkValue(null)).toBeFalsy();
});
//to equal for object
test("User should be traversy object", () => {
  expect(functions.createUser()).toEqual({
    firstName: "Brad",
    lastName: "Traversy",
  });
});

//LESS than and greater than
test("should be under", () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThanOrEqual(1600);
});

//Regex i- case insensitive
test("There is no I in team", () => {
  expect("team").not.toMatch(/I/i);
});

//array
test("Admin should be in username", () => {
  usernames = ["Jane", "Tobi", "Admin"];
  expect(usernames).toContain("Admin");
});

//promise
test("User fetched name should be Leanne Graham", () => {
  expect.assertions(1);
  return functions.fetchUser().then((data) => {
    expect(data.name).toEqual("Leanne Graham");
  });
});

test("User fetched name should be Leanne Graham/async", async () => {
  expect.assertions(1);
  const data = await functions.fetchUser().then((data) => {
    expect(data.name).toEqual("Leanne Graham");
  });
});
