import { Resolver, ResolveProperty } from "@nestjs/graphql";

@Resolver("CreateUserResult")
export class CreateUserResultResolver {
  @ResolveProperty()
  __resolveType(user) {
    if (user.message) {
      return "UserExists";
    }
    return "User";
  }
}
