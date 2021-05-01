import { CampaignOrderByInput } from "../../../inputs/CampaignOrderByInput";
import { CampaignScalarWhereWithAggregatesInput } from "../../../inputs/CampaignScalarWhereWithAggregatesInput";
import { CampaignWhereInput } from "../../../inputs/CampaignWhereInput";
export declare class GroupByCampaignArgs {
    where?: CampaignWhereInput | undefined;
    orderBy?: CampaignOrderByInput[] | undefined;
    by: Array<"id" | "name" | "contractorId" | "description" | "options" | "totalPrizeAmount" | "participantLimit" | "completed">;
    having?: CampaignScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
