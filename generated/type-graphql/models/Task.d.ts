import { Campaign } from "../models/Campaign";
import { User } from "../models/User";
export declare class Task {
    id: string;
    value: string;
    user?: User;
    createdAt: Date;
    campaign?: Campaign;
    userId: string;
    campaignId: string;
}
