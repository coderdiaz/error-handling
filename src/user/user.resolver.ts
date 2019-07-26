import { Resolver, Mutation, Args, Query } from "@nestjs/graphql";
import { UserService } from "./user.service";
import { InputCreateDto } from "./dto/create-input.dto";
import { GraphQLError } from "graphql";
import { IUser } from "./interfaces/user.interface";
import { IUserExists } from "./interfaces/user-exists.interface";
import { IUserNotFound } from "./interfaces/user-not-found.interface";

@Resolver()
export class UserResolver {
  constructor(
    private readonly userService: UserService,
  ) {}

  @Query("user")
  async user(
    @Args("email") email: string,
  ): Promise<IUser | IUserNotFound> {
    const user = await this.userService.findUserByEmail(email);
    if (!user) {
      return {
        message: "User not found",
        code: "USER_NOT_FOUND",
      };
    }
    return user;
  }

  @Query("users")
  async users(): Promise<IUser[]> {
    return await this.userService.find();
  }

  @Mutation("createUser")
  async create(
    @Args("input") input: InputCreateDto,
  ): Promise<IUser | IUserExists> {
    const user = await this.userService.findUserByEmail(input.email);
    if (user) {
      return {
        message: "This email is registrered",
        code: "EMAIL_ALREADY_TAKEN",
      };
    }
    const newUser = await this.userService.create(input);
    return newUser;
  }
}
