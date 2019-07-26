import { Module } from "@nestjs/common";
import { UserResolver } from "./user.resolver";
import { UserService } from "./user.service";
import { UserResultResolver } from "./user-result.resolver";
import { UserEntity } from "./user.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CreateUserResultResolver } from "./create-user-result.resolver";

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
  ],
  providers: [UserService, UserResolver, UserResultResolver, CreateUserResultResolver],
})
export class UserModule {}
