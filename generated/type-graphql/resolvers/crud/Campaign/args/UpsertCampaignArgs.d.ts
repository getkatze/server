import { CampaignCreateInput } from "../../../inputs/CampaignCreateInput";
import { CampaignUpdateInput } from "../../../inputs/CampaignUpdateInput";
import { CampaignWhereUniqueInput } from "../../../inputs/CampaignWhereUniqueInput";
export declare class UpsertCampaignArgs {
    where: CampaignWhereUniqueInput;
    create: CampaignCreateInput;
    update: CampaignUpdateInput;
}
