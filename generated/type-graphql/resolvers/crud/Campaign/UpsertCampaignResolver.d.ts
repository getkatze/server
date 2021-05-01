import { GraphQLResolveInfo } from "graphql";
import { UpsertCampaignArgs } from "./args/UpsertCampaignArgs";
import { Campaign } from "../../../models/Campaign";
export declare class UpsertCampaignResolver {
    upsertCampaign(ctx: any, info: GraphQLResolveInfo, args: UpsertCampaignArgs): Promise<Campaign>;
}
