import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { User } from '../generated/type-graphql';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Resolver()
export default class UserResolver {
  @Query(() => [User])
  async users() {
    return await prisma.user.findMany();
  }

  @Mutation(() => User)
  async createUser(@Arg('username') username: string) {
    return await prisma.user.create(
      {
      data: {
        username: username,
      },
    }
    );
  }
}
