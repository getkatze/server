import { CampaignCreateoptionsInput } from "../inputs/CampaignCreateoptionsInput";
import { UserCreateNestedOneWithoutCampaignsInput } from "../inputs/UserCreateNestedOneWithoutCampaignsInput";
export declare class CampaignCreateWithoutTasksInput {
    id?: string | undefined;
    name: string;
    description: string;
    totalPrizeAmount?: number | undefined;
    participantLimit?: number | undefined;
    completed?: boolean | undefined;
    options?: CampaignCreateoptionsInput | undefined;
    contractor: UserCreateNestedOneWithoutCampaignsInput;
}
