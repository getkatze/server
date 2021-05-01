import { GraphQLResolveInfo } from "graphql";
import { FindUniqueCampaignArgs } from "./args/FindUniqueCampaignArgs";
import { Campaign } from "../../../models/Campaign";
export declare class FindUniqueCampaignResolver {
    campaign(ctx: any, info: GraphQLResolveInfo, args: FindUniqueCampaignArgs): Promise<Campaign | null>;
}
