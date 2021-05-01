import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class TaskScalarWhereInput {
    AND?: TaskScalarWhereInput[] | undefined;
    OR?: TaskScalarWhereInput[] | undefined;
    NOT?: TaskScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    value?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    userId?: StringFilter | undefined;
    campaignId?: StringFilter | undefined;
}
