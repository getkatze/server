import { CampaignListRelationFilter } from "../inputs/CampaignListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TaskListRelationFilter } from "../inputs/TaskListRelationFilter";
export declare class UserWhereInput {
    AND?: UserWhereInput[] | undefined;
    OR?: UserWhereInput[] | undefined;
    NOT?: UserWhereInput[] | undefined;
    id?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    username?: StringFilter | undefined;
    crypto?: IntFilter | undefined;
    tasks?: TaskListRelationFilter | undefined;
    campaigns?: CampaignListRelationFilter | undefined;
}
