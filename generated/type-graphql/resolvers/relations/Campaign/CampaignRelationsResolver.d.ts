import { Campaign } from "../../../models/Campaign";
import { Task } from "../../../models/Task";
import { User } from "../../../models/User";
import { CampaignTasksArgs } from "./args/CampaignTasksArgs";
export declare class CampaignRelationsResolver {
    contractor(campaign: Campaign, ctx: any): Promise<User>;
    tasks(campaign: Campaign, ctx: any, args: CampaignTasksArgs): Promise<Task[]>;
}
