import { Test, TestingModule } from "@nestjs/testing";
import { MessageResolver } from "./message.resolver";

describe("MessageResolver", () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      providers: [MessageResolver],
    }).compile();
  });

  it("should return 'Hello to GraphQL + Nest'", async () => {
    const messageResolver = app.get<MessageResolver>(MessageResolver);
    const showMessageResponse = await messageResolver.showMessage();
    expect(showMessageResponse.text).toBe("Hello to GraphQL + Nest");
  });
});
