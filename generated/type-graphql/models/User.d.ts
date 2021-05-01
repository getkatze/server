import { Campaign } from "../models/Campaign";
import { Task } from "../models/Task";
export declare class User {
    id: string;
    createdAt: Date;
    username: string;
    crypto: number;
    tasks?: Task[];
    campaigns?: Campaign[];
}
