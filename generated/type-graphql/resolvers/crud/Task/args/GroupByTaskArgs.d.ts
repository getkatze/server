import { TaskOrderByInput } from "../../../inputs/TaskOrderByInput";
import { TaskScalarWhereWithAggregatesInput } from "../../../inputs/TaskScalarWhereWithAggregatesInput";
import { TaskWhereInput } from "../../../inputs/TaskWhereInput";
export declare class GroupByTaskArgs {
    where?: TaskWhereInput | undefined;
    orderBy?: TaskOrderByInput[] | undefined;
    by: Array<"id" | "value" | "createdAt" | "userId" | "campaignId">;
    having?: TaskScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
