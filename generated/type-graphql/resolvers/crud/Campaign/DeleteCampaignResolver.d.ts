import { GraphQLResolveInfo } from "graphql";
import { DeleteCampaignArgs } from "./args/DeleteCampaignArgs";
import { Campaign } from "../../../models/Campaign";
export declare class DeleteCampaignResolver {
    deleteCampaign(ctx: any, info: GraphQLResolveInfo, args: DeleteCampaignArgs): Promise<Campaign | null>;
}
