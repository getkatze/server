import { GraphQLResolveInfo } from "graphql";
import { UpdateCampaignArgs } from "./args/UpdateCampaignArgs";
import { Campaign } from "../../../models/Campaign";
export declare class UpdateCampaignResolver {
    updateCampaign(ctx: any, info: GraphQLResolveInfo, args: UpdateCampaignArgs): Promise<Campaign | null>;
}
