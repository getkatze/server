import { GraphQLResolveInfo } from "graphql";
import { AggregateCampaignArgs } from "./args/AggregateCampaignArgs";
import { AggregateCampaign } from "../../outputs/AggregateCampaign";
export declare class AggregateCampaignResolver {
    aggregateCampaign(ctx: any, info: GraphQLResolveInfo, args: AggregateCampaignArgs): Promise<AggregateCampaign>;
}
