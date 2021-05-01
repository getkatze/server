import { GraphQLResolveInfo } from "graphql";
import { GroupByCampaignArgs } from "./args/GroupByCampaignArgs";
import { CampaignGroupBy } from "../../outputs/CampaignGroupBy";
export declare class GroupByCampaignResolver {
    groupByCampaign(ctx: any, info: GraphQLResolveInfo, args: GroupByCampaignArgs): Promise<CampaignGroupBy[]>;
}
