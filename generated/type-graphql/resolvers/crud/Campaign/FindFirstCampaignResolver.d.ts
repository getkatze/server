import { GraphQLResolveInfo } from "graphql";
import { FindFirstCampaignArgs } from "./args/FindFirstCampaignArgs";
import { Campaign } from "../../../models/Campaign";
export declare class FindFirstCampaignResolver {
    findFirstCampaign(ctx: any, info: GraphQLResolveInfo, args: FindFirstCampaignArgs): Promise<Campaign | null>;
}
