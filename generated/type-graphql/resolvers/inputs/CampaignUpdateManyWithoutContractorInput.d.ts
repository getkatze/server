import { CampaignCreateManyContractorInputEnvelope } from "../inputs/CampaignCreateManyContractorInputEnvelope";
import { CampaignCreateOrConnectWithoutContractorInput } from "../inputs/CampaignCreateOrConnectWithoutContractorInput";
import { CampaignCreateWithoutContractorInput } from "../inputs/CampaignCreateWithoutContractorInput";
import { CampaignScalarWhereInput } from "../inputs/CampaignScalarWhereInput";
import { CampaignUpdateManyWithWhereWithoutContractorInput } from "../inputs/CampaignUpdateManyWithWhereWithoutContractorInput";
import { CampaignUpdateWithWhereUniqueWithoutContractorInput } from "../inputs/CampaignUpdateWithWhereUniqueWithoutContractorInput";
import { CampaignUpsertWithWhereUniqueWithoutContractorInput } from "../inputs/CampaignUpsertWithWhereUniqueWithoutContractorInput";
import { CampaignWhereUniqueInput } from "../inputs/CampaignWhereUniqueInput";
export declare class CampaignUpdateManyWithoutContractorInput {
    create?: CampaignCreateWithoutContractorInput[] | undefined;
    connectOrCreate?: CampaignCreateOrConnectWithoutContractorInput[] | undefined;
    upsert?: CampaignUpsertWithWhereUniqueWithoutContractorInput[] | undefined;
    createMany?: CampaignCreateManyContractorInputEnvelope | undefined;
    connect?: CampaignWhereUniqueInput[] | undefined;
    set?: CampaignWhereUniqueInput[] | undefined;
    disconnect?: CampaignWhereUniqueInput[] | undefined;
    delete?: CampaignWhereUniqueInput[] | undefined;
    update?: CampaignUpdateWithWhereUniqueWithoutContractorInput[] | undefined;
    updateMany?: CampaignUpdateManyWithWhereWithoutContractorInput[] | undefined;
    deleteMany?: CampaignScalarWhereInput[] | undefined;
}
