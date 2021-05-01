import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class CampaignScalarWhereWithAggregatesInput {
    AND?: CampaignScalarWhereWithAggregatesInput[] | undefined;
    OR?: CampaignScalarWhereWithAggregatesInput[] | undefined;
    NOT?: CampaignScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    name?: StringWithAggregatesFilter | undefined;
    contractorId?: StringWithAggregatesFilter | undefined;
    description?: StringWithAggregatesFilter | undefined;
    options?: StringNullableListFilter | undefined;
    totalPrizeAmount?: IntNullableWithAggregatesFilter | undefined;
    participantLimit?: IntNullableWithAggregatesFilter | undefined;
    completed?: BoolWithAggregatesFilter | undefined;
}
