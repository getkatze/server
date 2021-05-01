import { TaskCountAggregate } from "../outputs/TaskCountAggregate";
import { TaskMaxAggregate } from "../outputs/TaskMaxAggregate";
import { TaskMinAggregate } from "../outputs/TaskMinAggregate";
export declare class TaskGroupBy {
    id: string;
    value: string;
    createdAt: Date;
    userId: string;
    campaignId: string;
    count: TaskCountAggregate | null;
    min: TaskMinAggregate | null;
    max: TaskMaxAggregate | null;
}
