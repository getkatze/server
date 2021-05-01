import { GraphQLResolveInfo } from "graphql";
import { AggregateTaskArgs } from "./args/AggregateTaskArgs";
import { CreateManyTaskArgs } from "./args/CreateManyTaskArgs";
import { CreateTaskArgs } from "./args/CreateTaskArgs";
import { DeleteManyTaskArgs } from "./args/DeleteManyTaskArgs";
import { DeleteTaskArgs } from "./args/DeleteTaskArgs";
import { FindFirstTaskArgs } from "./args/FindFirstTaskArgs";
import { FindManyTaskArgs } from "./args/FindManyTaskArgs";
import { FindUniqueTaskArgs } from "./args/FindUniqueTaskArgs";
import { GroupByTaskArgs } from "./args/GroupByTaskArgs";
import { UpdateManyTaskArgs } from "./args/UpdateManyTaskArgs";
import { UpdateTaskArgs } from "./args/UpdateTaskArgs";
import { UpsertTaskArgs } from "./args/UpsertTaskArgs";
import { Task } from "../../../models/Task";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateTask } from "../../outputs/AggregateTask";
import { TaskGroupBy } from "../../outputs/TaskGroupBy";
export declare class TaskCrudResolver {
    task(ctx: any, info: GraphQLResolveInfo, args: FindUniqueTaskArgs): Promise<Task | null>;
    findFirstTask(ctx: any, info: GraphQLResolveInfo, args: FindFirstTaskArgs): Promise<Task | null>;
    tasks(ctx: any, info: GraphQLResolveInfo, args: FindManyTaskArgs): Promise<Task[]>;
    createTask(ctx: any, info: GraphQLResolveInfo, args: CreateTaskArgs): Promise<Task>;
    createManyTask(ctx: any, info: GraphQLResolveInfo, args: CreateManyTaskArgs): Promise<AffectedRowsOutput>;
    deleteTask(ctx: any, info: GraphQLResolveInfo, args: DeleteTaskArgs): Promise<Task | null>;
    updateTask(ctx: any, info: GraphQLResolveInfo, args: UpdateTaskArgs): Promise<Task | null>;
    deleteManyTask(ctx: any, info: GraphQLResolveInfo, args: DeleteManyTaskArgs): Promise<AffectedRowsOutput>;
    updateManyTask(ctx: any, info: GraphQLResolveInfo, args: UpdateManyTaskArgs): Promise<AffectedRowsOutput>;
    upsertTask(ctx: any, info: GraphQLResolveInfo, args: UpsertTaskArgs): Promise<Task>;
    aggregateTask(ctx: any, info: GraphQLResolveInfo, args: AggregateTaskArgs): Promise<AggregateTask>;
    groupByTask(ctx: any, info: GraphQLResolveInfo, args: GroupByTaskArgs): Promise<TaskGroupBy[]>;
}
