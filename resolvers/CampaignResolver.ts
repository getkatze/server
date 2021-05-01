import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { Campaign } from '../generated/type-graphql';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Resolver()
export default class CampaignResolver {
  @Query(() => [Campaign])
  async campaigns(@Arg('id', { nullable: true }) id?: string) {
    if (id) {
      return await prisma.campaign.findMany({
        where: {
          id: id,
        },
        include: {
          tasks: true,
        },
      });
    }
    return await prisma.campaign.findMany();
  }

  @Query(() => Campaign)
  async getTasks(@Arg('campaignId') id: string) {
    return await prisma.campaign.findUnique({
      where: {
        id: id,
      },
      include: {
        tasks: true,
      },
    });
  }

  @Mutation(() => Campaign)
  async createCampaign(
    @Arg('name') name: string,
    @Arg('contractor') contractor: string,
    @Arg('options', () => [String]) options: string[],
    @Arg('description') description: string
  ) {
    return await prisma.campaign.create({
      data: {
        name,
        description,
        tasks: {
          create: [
            { value: 'lemon', user: 'John' },
            { value: 'orange', user: 'WillLovesRust' },
          ],
        },
        contractor,
        options,
      },
    });
  }
}
