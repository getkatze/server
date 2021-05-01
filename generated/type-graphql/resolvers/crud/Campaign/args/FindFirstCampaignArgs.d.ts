import { CampaignOrderByInput } from "../../../inputs/CampaignOrderByInput";
import { CampaignWhereInput } from "../../../inputs/CampaignWhereInput";
import { CampaignWhereUniqueInput } from "../../../inputs/CampaignWhereUniqueInput";
export declare class FindFirstCampaignArgs {
    where?: CampaignWhereInput | undefined;
    orderBy?: CampaignOrderByInput[] | undefined;
    cursor?: CampaignWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "name" | "contractorId" | "description" | "options" | "totalPrizeAmount" | "participantLimit" | "completed"> | undefined;
}
