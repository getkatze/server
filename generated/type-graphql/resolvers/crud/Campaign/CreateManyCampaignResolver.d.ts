import { GraphQLResolveInfo } from "graphql";
import { CreateManyCampaignArgs } from "./args/CreateManyCampaignArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyCampaignResolver {
    createManyCampaign(ctx: any, info: GraphQLResolveInfo, args: CreateManyCampaignArgs): Promise<AffectedRowsOutput>;
}
