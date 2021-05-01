import { GraphQLResolveInfo } from "graphql";
import { UpdateManyCampaignArgs } from "./args/UpdateManyCampaignArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyCampaignResolver {
    updateManyCampaign(ctx: any, info: GraphQLResolveInfo, args: UpdateManyCampaignArgs): Promise<AffectedRowsOutput>;
}
