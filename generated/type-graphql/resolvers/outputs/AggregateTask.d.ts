import { TaskCountAggregate } from "../outputs/TaskCountAggregate";
import { TaskMaxAggregate } from "../outputs/TaskMaxAggregate";
import { TaskMinAggregate } from "../outputs/TaskMinAggregate";
export declare class AggregateTask {
    count: TaskCountAggregate | null;
    min: TaskMinAggregate | null;
    max: TaskMaxAggregate | null;
}
