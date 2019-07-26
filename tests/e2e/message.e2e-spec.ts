import { INestApplication } from "@nestjs/common";
import { Test } from "@nestjs/testing";
import { ApplicationModule } from "../../src/app.module";
import * as request from "supertest";

describe("Message", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [ApplicationModule],
    }).compile();
    app = await module.createNestApplication().init();
  });

  it("should show the welcome message", () => {
    return request(app.getHttpServer())
      .post("/graphql")
      .send({
        operationName: null,
        variables: {},
        query: `{
          showMessage {
            text
          }
        }`,
      }).expect(({ body }) => {
        expect(body.data.showMessage.text).toBe("Hello to GraphQL + Nest");
      })
      .expect(200);
  });
});
