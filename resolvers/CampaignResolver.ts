import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { Campaign, Task } from '../generated/type-graphql';
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

    return await prisma.campaign.findMany({
      include: {
        tasks: true,
      }
    });
  }

  @Query(() => Campaign, { nullable: true })
  async getCampaignById(@Arg('campaignId') id: string) {
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
          ],
        },
        contractor,
        options,
      },
    });
  }

  @Mutation(() => Task)
  async createTask(
    @Arg('campaignId') campaignId: string,
    @Arg('value') value: string,
    @Arg('userId') userId: string
  ) {
    return await prisma.campaign.update({
      where: {
        id: campaignId,
      },
      data: {
        tasks: {
          create: {
            user: userId,
            value: value,
          },
        },
      },
    });
  }
}
