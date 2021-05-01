import { CampaignRelationFilter } from "../inputs/CampaignRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class TaskWhereInput {
    AND?: TaskWhereInput[] | undefined;
    OR?: TaskWhereInput[] | undefined;
    NOT?: TaskWhereInput[] | undefined;
    id?: StringFilter | undefined;
    value?: StringFilter | undefined;
    user?: UserRelationFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    campaign?: CampaignRelationFilter | undefined;
    userId?: StringFilter | undefined;
    campaignId?: StringFilter | undefined;
}
