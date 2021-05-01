import { CampaignCreateNestedManyWithoutContractorInput } from "../inputs/CampaignCreateNestedManyWithoutContractorInput";
import { TaskCreateNestedManyWithoutUserInput } from "../inputs/TaskCreateNestedManyWithoutUserInput";
export declare class UserCreateInput {
    id?: string | undefined;
    createdAt?: Date | undefined;
    username: string;
    crypto?: number | undefined;
    tasks?: TaskCreateNestedManyWithoutUserInput | undefined;
    campaigns?: CampaignCreateNestedManyWithoutContractorInput | undefined;
}
