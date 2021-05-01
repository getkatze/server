import { CampaignCreateoptionsInput } from "../inputs/CampaignCreateoptionsInput";
import { TaskCreateNestedManyWithoutCampaignInput } from "../inputs/TaskCreateNestedManyWithoutCampaignInput";
export declare class CampaignCreateWithoutContractorInput {
    id?: string | undefined;
    name: string;
    description: string;
    totalPrizeAmount?: number | undefined;
    participantLimit?: number | undefined;
    completed?: boolean | undefined;
    options?: CampaignCreateoptionsInput | undefined;
    tasks?: TaskCreateNestedManyWithoutCampaignInput | undefined;
}
