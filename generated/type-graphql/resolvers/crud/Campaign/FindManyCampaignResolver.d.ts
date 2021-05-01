import { GraphQLResolveInfo } from "graphql";
import { FindManyCampaignArgs } from "./args/FindManyCampaignArgs";
import { Campaign } from "../../../models/Campaign";
export declare class FindManyCampaignResolver {
    campaigns(ctx: any, info: GraphQLResolveInfo, args: FindManyCampaignArgs): Promise<Campaign[]>;
}
