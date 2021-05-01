import { CampaignCreateNestedOneWithoutTasksInput } from "../inputs/CampaignCreateNestedOneWithoutTasksInput";
export declare class TaskCreateWithoutUserInput {
    id?: string | undefined;
    value: string;
    createdAt?: Date | undefined;
    campaign: CampaignCreateNestedOneWithoutTasksInput;
}
