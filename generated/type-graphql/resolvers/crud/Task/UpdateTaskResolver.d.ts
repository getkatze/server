import { GraphQLResolveInfo } from "graphql";
import { UpdateTaskArgs } from "./args/UpdateTaskArgs";
import { Task } from "../../../models/Task";
export declare class UpdateTaskResolver {
    updateTask(ctx: any, info: GraphQLResolveInfo, args: UpdateTaskArgs): Promise<Task | null>;
}
