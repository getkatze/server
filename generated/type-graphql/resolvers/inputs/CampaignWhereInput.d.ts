import { BoolFilter } from "../inputs/BoolFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";
import { TaskListRelationFilter } from "../inputs/TaskListRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class CampaignWhereInput {
    AND?: CampaignWhereInput[] | undefined;
    OR?: CampaignWhereInput[] | undefined;
    NOT?: CampaignWhereInput[] | undefined;
    id?: StringFilter | undefined;
    name?: StringFilter | undefined;
    contractor?: UserRelationFilter | undefined;
    tasks?: TaskListRelationFilter | undefined;
    contractorId?: StringFilter | undefined;
    description?: StringFilter | undefined;
    options?: StringNullableListFilter | undefined;
    totalPrizeAmount?: IntNullableFilter | undefined;
    participantLimit?: IntNullableFilter | undefined;
    completed?: BoolFilter | undefined;
}
