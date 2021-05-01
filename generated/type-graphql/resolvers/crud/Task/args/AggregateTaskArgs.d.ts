import { TaskOrderByInput } from "../../../inputs/TaskOrderByInput";
import { TaskWhereInput } from "../../../inputs/TaskWhereInput";
import { TaskWhereUniqueInput } from "../../../inputs/TaskWhereUniqueInput";
export declare class AggregateTaskArgs {
    where?: TaskWhereInput | undefined;
    orderBy?: TaskOrderByInput[] | undefined;
    cursor?: TaskWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}