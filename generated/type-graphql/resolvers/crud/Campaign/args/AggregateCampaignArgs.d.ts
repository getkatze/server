import { CampaignOrderByInput } from "../../../inputs/CampaignOrderByInput";
import { CampaignWhereInput } from "../../../inputs/CampaignWhereInput";
import { CampaignWhereUniqueInput } from "../../../inputs/CampaignWhereUniqueInput";
export declare class AggregateCampaignArgs {
    where?: CampaignWhereInput | undefined;
    orderBy?: CampaignOrderByInput[] | undefined;
    cursor?: CampaignWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
