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
      });
    }
    return await prisma.campaign.findMany();
  }

  @Mutation(() => Campaign)
  async createCampaign(@Arg('name') name: string, @Arg('contractorId') contractorId: string) {
    let contractor = await prisma.user.findMany({
      where: { username: 'Bob' },
    });
    return await prisma.campaign.create({
      data: {
        name: name,
        description: 'something',
        contractorId,
        options: ['yes', 'no'],
      },
    });
  }
}
