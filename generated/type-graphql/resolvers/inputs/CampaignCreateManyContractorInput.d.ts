import { CampaignCreateManyoptionsInput } from "../inputs/CampaignCreateManyoptionsInput";
export declare class CampaignCreateManyContractorInput {
    id?: string | undefined;
    name: string;
    description: string;
    totalPrizeAmount?: number | undefined;
    participantLimit?: number | undefined;
    completed?: boolean | undefined;
    options?: CampaignCreateManyoptionsInput | undefined;
}
