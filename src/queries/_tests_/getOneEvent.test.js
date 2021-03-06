const getOneEvent = require("../getOneEvent");
const dbBuild = require("../../db/db_build.js");

const funAtThePark = [
  {
    event_date: "2019-03-09",
    genders: 3,
    id: 1,
    location: "london",
    name: "fun at the park",
    open: true,
    sport: "Football",
    start_time: "12:00",
    users_id: 1
  }
];

describe("a suite of tests", () => {

  test("the function returns the data in the event with the id of 1", () => {
    dbBuild((error, response) => {
      if (error) return console.log("ERROR IN DBBUILD: " + error);
      expect.assertions(1);
      return expect(getOneEvent(1)).resolves.toEqual(funAtThePark);
    });
  });

  test("the fetch fails with an error", () => {
    dbBuild((error, response) => {
      if (error) return console.log("ERROR IN DBBUILD: " + error);
      expect.assertions(1);
      return expect(getOneEvent("potatoes")).rejects.toThrow();
    });
  });
})
