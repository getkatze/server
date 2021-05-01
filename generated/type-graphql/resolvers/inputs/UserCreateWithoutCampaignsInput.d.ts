import { TaskCreateNestedManyWithoutUserInput } from "../inputs/TaskCreateNestedManyWithoutUserInput";
export declare class UserCreateWithoutCampaignsInput {
    id?: string | undefined;
    createdAt?: Date | undefined;
    username: string;
    crypto?: number | undefined;
    tasks?: TaskCreateNestedManyWithoutUserInput | undefined;
}
