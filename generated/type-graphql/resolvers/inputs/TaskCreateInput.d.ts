import { CampaignCreateNestedOneWithoutTasksInput } from "../inputs/CampaignCreateNestedOneWithoutTasksInput";
import { UserCreateNestedOneWithoutTasksInput } from "../inputs/UserCreateNestedOneWithoutTasksInput";
export declare class TaskCreateInput {
    id?: string | undefined;
    value: string;
    createdAt?: Date | undefined;
    user: UserCreateNestedOneWithoutTasksInput;
    campaign: CampaignCreateNestedOneWithoutTasksInput;
}
