import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { MessageModule } from "./message/message.module";

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ["./src/**/*.graphql"],
      debug: true,
      playground: true,
    }),
    MessageModule,
  ],
})
export class ApplicationModule {}
