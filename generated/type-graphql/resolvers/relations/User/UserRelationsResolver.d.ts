import { Campaign } from "../../../models/Campaign";
import { Task } from "../../../models/Task";
import { User } from "../../../models/User";
import { UserCampaignsArgs } from "./args/UserCampaignsArgs";
import { UserTasksArgs } from "./args/UserTasksArgs";
export declare class UserRelationsResolver {
    tasks(user: User, ctx: any, args: UserTasksArgs): Promise<Task[]>;
    campaigns(user: User, ctx: any, args: UserCampaignsArgs): Promise<Campaign[]>;
}
