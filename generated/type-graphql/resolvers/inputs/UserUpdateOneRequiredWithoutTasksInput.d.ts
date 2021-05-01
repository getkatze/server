import { UserCreateOrConnectWithoutTasksInput } from "../inputs/UserCreateOrConnectWithoutTasksInput";
import { UserCreateWithoutTasksInput } from "../inputs/UserCreateWithoutTasksInput";
import { UserUpdateWithoutTasksInput } from "../inputs/UserUpdateWithoutTasksInput";
import { UserUpsertWithoutTasksInput } from "../inputs/UserUpsertWithoutTasksInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneRequiredWithoutTasksInput {
    create?: UserCreateWithoutTasksInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutTasksInput | undefined;
    upsert?: UserUpsertWithoutTasksInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateWithoutTasksInput | undefined;
}
