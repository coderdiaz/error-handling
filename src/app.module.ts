import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ["./src/**/*.graphql"],
      debug: true,
      playground: true,
    }),
  ],
})
export class ApplicationModule {}
