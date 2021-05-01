import { CampaignCreateNestedManyWithoutContractorInput } from "../inputs/CampaignCreateNestedManyWithoutContractorInput";
export declare class UserCreateWithoutTasksInput {
    id?: string | undefined;
    createdAt?: Date | undefined;
    username: string;
    crypto?: number | undefined;
    campaigns?: CampaignCreateNestedManyWithoutContractorInput | undefined;
}
