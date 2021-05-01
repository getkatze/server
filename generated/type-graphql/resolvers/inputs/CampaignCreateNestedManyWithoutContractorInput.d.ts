import { CampaignCreateManyContractorInputEnvelope } from "../inputs/CampaignCreateManyContractorInputEnvelope";
import { CampaignCreateOrConnectWithoutContractorInput } from "../inputs/CampaignCreateOrConnectWithoutContractorInput";
import { CampaignCreateWithoutContractorInput } from "../inputs/CampaignCreateWithoutContractorInput";
import { CampaignWhereUniqueInput } from "../inputs/CampaignWhereUniqueInput";
export declare class CampaignCreateNestedManyWithoutContractorInput {
    create?: CampaignCreateWithoutContractorInput[] | undefined;
    connectOrCreate?: CampaignCreateOrConnectWithoutContractorInput[] | undefined;
    createMany?: CampaignCreateManyContractorInputEnvelope | undefined;
    connect?: CampaignWhereUniqueInput[] | undefined;
}
