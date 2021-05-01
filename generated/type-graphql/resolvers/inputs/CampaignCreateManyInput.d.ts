import { CampaignCreateManyoptionsInput } from "../inputs/CampaignCreateManyoptionsInput";
export declare class CampaignCreateManyInput {
    id?: string | undefined;
    name: string;
    contractorId: string;
    description: string;
    totalPrizeAmount?: number | undefined;
    participantLimit?: number | undefined;
    completed?: boolean | undefined;
    options?: CampaignCreateManyoptionsInput | undefined;
}
