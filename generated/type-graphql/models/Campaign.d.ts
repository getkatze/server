import { Task } from "../models/Task";
import { User } from "../models/User";
export declare class Campaign {
    id: string;
    name: string;
    contractor?: User;
    tasks?: Task[];
    contractorId: string;
    description: string;
    options: string[];
    totalPrizeAmount?: number | null;
    participantLimit?: number | null;
    completed: boolean;
}
