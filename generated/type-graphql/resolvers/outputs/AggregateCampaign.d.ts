import { CampaignAvgAggregate } from "../outputs/CampaignAvgAggregate";
import { CampaignCountAggregate } from "../outputs/CampaignCountAggregate";
import { CampaignMaxAggregate } from "../outputs/CampaignMaxAggregate";
import { CampaignMinAggregate } from "../outputs/CampaignMinAggregate";
import { CampaignSumAggregate } from "../outputs/CampaignSumAggregate";
export declare class AggregateCampaign {
    count: CampaignCountAggregate | null;
    avg: CampaignAvgAggregate | null;
    sum: CampaignSumAggregate | null;
    min: CampaignMinAggregate | null;
    max: CampaignMaxAggregate | null;
}
