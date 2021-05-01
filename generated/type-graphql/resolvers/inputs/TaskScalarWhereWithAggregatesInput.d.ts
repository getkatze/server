import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class TaskScalarWhereWithAggregatesInput {
    AND?: TaskScalarWhereWithAggregatesInput[] | undefined;
    OR?: TaskScalarWhereWithAggregatesInput[] | undefined;
    NOT?: TaskScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    value?: StringWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    userId?: StringWithAggregatesFilter | undefined;
    campaignId?: StringWithAggregatesFilter | undefined;
}
