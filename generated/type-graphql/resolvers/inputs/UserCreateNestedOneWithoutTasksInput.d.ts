import { UserCreateOrConnectWithoutTasksInput } from "../inputs/UserCreateOrConnectWithoutTasksInput";
import { UserCreateWithoutTasksInput } from "../inputs/UserCreateWithoutTasksInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutTasksInput {
    create?: UserCreateWithoutTasksInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutTasksInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
