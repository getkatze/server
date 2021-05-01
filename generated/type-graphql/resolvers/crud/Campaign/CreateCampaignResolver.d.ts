import { GraphQLResolveInfo } from "graphql";
import { CreateCampaignArgs } from "./args/CreateCampaignArgs";
import { Campaign } from "../../../models/Campaign";
export declare class CreateCampaignResolver {
    createCampaign(ctx: any, info: GraphQLResolveInfo, args: CreateCampaignArgs): Promise<Campaign>;
}
