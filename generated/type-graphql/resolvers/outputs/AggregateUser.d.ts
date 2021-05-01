import { UserAvgAggregate } from "../outputs/UserAvgAggregate";
import { UserCountAggregate } from "../outputs/UserCountAggregate";
import { UserMaxAggregate } from "../outputs/UserMaxAggregate";
import { UserMinAggregate } from "../outputs/UserMinAggregate";
import { UserSumAggregate } from "../outputs/UserSumAggregate";
export declare class AggregateUser {
    count: UserCountAggregate | null;
    avg: UserAvgAggregate | null;
    sum: UserSumAggregate | null;
    min: UserMinAggregate | null;
    max: UserMaxAggregate | null;
}
