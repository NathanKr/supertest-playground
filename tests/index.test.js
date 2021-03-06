const request = require("supertest");
const app = require("../src/app");

test("route / status is 200", async () => {
  await request(app).get("/").expect(200);
});

test("route / get correct object and status code", async () => {
  const response = await request(app).get("/").expect(200);

  expect(response.body).toMatchObject({ msg: "hello world" });
});

test("route / post correct status code", async () => {
  const response = await request(app)
    .post("/")
    .send({ name: "nathan" })
    .expect(201);
});
