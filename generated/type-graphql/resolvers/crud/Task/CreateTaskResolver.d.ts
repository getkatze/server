import { GraphQLResolveInfo } from "graphql";
import { CreateTaskArgs } from "./args/CreateTaskArgs";
import { Task } from "../../../models/Task";
export declare class CreateTaskResolver {
    createTask(ctx: any, info: GraphQLResolveInfo, args: CreateTaskArgs): Promise<Task>;
}
