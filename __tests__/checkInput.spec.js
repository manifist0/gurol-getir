import app from "../src/server";
import { postBody } from "../utils/testVariables";
import { validate } from "../src/handlers/error";
import { BodySchema } from "../src/routes/records";

const supertest = require("supertest");
const request = supertest(app);

app.post("/test", [], async (req, res) => {
  const validation = await validate(req.body, BodySchema);
  res.status(validation.code !== 0 ? 400 : 200).send({ code: validation.code });
});

it("check the request body", async (done) => {
  const response = await request.post("/test").send(postBody);

  expect(response.status).toBe(200);
  expect(response.body.code).toBe(0);
  done();
});
