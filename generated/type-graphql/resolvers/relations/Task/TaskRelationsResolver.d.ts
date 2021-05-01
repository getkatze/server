import { Campaign } from "../../../models/Campaign";
import { Task } from "../../../models/Task";
import { User } from "../../../models/User";
export declare class TaskRelationsResolver {
    user(task: Task, ctx: any): Promise<User>;
    campaign(task: Task, ctx: any): Promise<Campaign>;
}
