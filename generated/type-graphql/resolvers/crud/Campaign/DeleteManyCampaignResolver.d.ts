import { GraphQLResolveInfo } from "graphql";
import { DeleteManyCampaignArgs } from "./args/DeleteManyCampaignArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyCampaignResolver {
    deleteManyCampaign(ctx: any, info: GraphQLResolveInfo, args: DeleteManyCampaignArgs): Promise<AffectedRowsOutput>;
}
