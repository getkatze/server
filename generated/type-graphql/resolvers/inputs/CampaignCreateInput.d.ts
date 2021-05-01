import { CampaignCreateoptionsInput } from "../inputs/CampaignCreateoptionsInput";
import { TaskCreateNestedManyWithoutCampaignInput } from "../inputs/TaskCreateNestedManyWithoutCampaignInput";
import { UserCreateNestedOneWithoutCampaignsInput } from "../inputs/UserCreateNestedOneWithoutCampaignsInput";
export declare class CampaignCreateInput {
    id?: string | undefined;
    name: string;
    description: string;
    totalPrizeAmount?: number | undefined;
    participantLimit?: number | undefined;
    completed?: boolean | undefined;
    options?: CampaignCreateoptionsInput | undefined;
    contractor: UserCreateNestedOneWithoutCampaignsInput;
    tasks?: TaskCreateNestedManyWithoutCampaignInput | undefined;
}
