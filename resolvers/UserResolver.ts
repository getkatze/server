import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { User } from '../generated/type-graphql';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

@Resolver()
export default class UserResolver {
  @Query(() => [User])
  async users() {
    return await prisma.user.findMany();
  }

  @Query(() => User)
  async getUserById(@Arg("userId") userId: string) {
    return await prisma.user.findUnique({
      where: {
        id: userId
      }
    })
  }

  @Query(() => User, { nullable: true })
  async login(@Arg('username') username: string, @Arg('password') password: string) {
    let p = await prisma.user.findUnique({
      where: {
        username: username,
      },
    });

    if (bcrypt.compareSync(password, p!.password)) {
      return p;
    }
    return null;
  }

  @Mutation(() => User)
  async createUser(@Arg('username') username: string, @Arg('password') password: string) {
    let hash = bcrypt.hashSync(password, 10);

    return await prisma.user.create({
      data: {
        username: username,
        password: hash,
        campaigns: []
      },
    });
  }
}
