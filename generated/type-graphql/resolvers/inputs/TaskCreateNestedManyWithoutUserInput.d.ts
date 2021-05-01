import { TaskCreateManyUserInputEnvelope } from "../inputs/TaskCreateManyUserInputEnvelope";
import { TaskCreateOrConnectWithoutUserInput } from "../inputs/TaskCreateOrConnectWithoutUserInput";
import { TaskCreateWithoutUserInput } from "../inputs/TaskCreateWithoutUserInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";
export declare class TaskCreateNestedManyWithoutUserInput {
    create?: TaskCreateWithoutUserInput[] | undefined;
    connectOrCreate?: TaskCreateOrConnectWithoutUserInput[] | undefined;
    createMany?: TaskCreateManyUserInputEnvelope | undefined;
    connect?: TaskWhereUniqueInput[] | undefined;
}
