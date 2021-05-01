import { UserCreateNestedOneWithoutTasksInput } from "../inputs/UserCreateNestedOneWithoutTasksInput";
export declare class TaskCreateWithoutCampaignInput {
    id?: string | undefined;
    value: string;
    createdAt?: Date | undefined;
    user: UserCreateNestedOneWithoutTasksInput;
}
