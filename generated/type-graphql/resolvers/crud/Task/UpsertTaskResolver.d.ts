import { GraphQLResolveInfo } from "graphql";
import { UpsertTaskArgs } from "./args/UpsertTaskArgs";
import { Task } from "../../../models/Task";
export declare class UpsertTaskResolver {
    upsertTask(ctx: any, info: GraphQLResolveInfo, args: UpsertTaskArgs): Promise<Task>;
}
