/* eslint-disable arrow-body-style */
const supertest = require("supertest");
const app = require("../../app.js");
const router = require("../index.js")

test("SERVER TEST TIME", () => {
  expect(1).toBe(1);
});

test("GET to home should return status 200", (done) => {
  supertest(app).get("/").then(res => {
    expect(res.statusCode).toBe(200);
    done()
  })
});
