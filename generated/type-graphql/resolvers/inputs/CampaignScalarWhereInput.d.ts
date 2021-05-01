import { BoolFilter } from "../inputs/BoolFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";
export declare class CampaignScalarWhereInput {
    AND?: CampaignScalarWhereInput[] | undefined;
    OR?: CampaignScalarWhereInput[] | undefined;
    NOT?: CampaignScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    name?: StringFilter | undefined;
    contractorId?: StringFilter | undefined;
    description?: StringFilter | undefined;
    options?: StringNullableListFilter | undefined;
    totalPrizeAmount?: IntNullableFilter | undefined;
    participantLimit?: IntNullableFilter | undefined;
    completed?: BoolFilter | undefined;
}
