import { Resolver, Query } from "@nestjs/graphql";

interface Message {
  text: string;
}

@Resolver()
export class MessageResolver {

  @Query()
  async showMessage(): Promise<Message> {
    return {
      text: "Hello to GraphQL + Nest",
    };
  }
}
