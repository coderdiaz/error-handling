import { Resolver, ResolveProperty } from "@nestjs/graphql";

@Resolver("UserResult")
export class UserResultResolver {
  @ResolveProperty()
  __resolveType(user) {
    if (user.message) {
      return "NotFound";
    }
    return "User";
  }
}
