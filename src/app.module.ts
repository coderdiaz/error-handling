import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserModule } from "./user/user.module";

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ["./src/**/*.graphql"],
      debug: true,
      playground: true,
    }),
    TypeOrmModule.forRoot(),
    UserModule,
  ],
})
export class ApplicationModule {}
