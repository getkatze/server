import { GraphQLResolveInfo } from "graphql";
import { DeleteTaskArgs } from "./args/DeleteTaskArgs";
import { Task } from "../../../models/Task";
export declare class DeleteTaskResolver {
    deleteTask(ctx: any, info: GraphQLResolveInfo, args: DeleteTaskArgs): Promise<Task | null>;
}
