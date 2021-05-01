import { TaskCreateManyCampaignInputEnvelope } from "../inputs/TaskCreateManyCampaignInputEnvelope";
import { TaskCreateOrConnectWithoutCampaignInput } from "../inputs/TaskCreateOrConnectWithoutCampaignInput";
import { TaskCreateWithoutCampaignInput } from "../inputs/TaskCreateWithoutCampaignInput";
import { TaskScalarWhereInput } from "../inputs/TaskScalarWhereInput";
import { TaskUpdateManyWithWhereWithoutCampaignInput } from "../inputs/TaskUpdateManyWithWhereWithoutCampaignInput";
import { TaskUpdateWithWhereUniqueWithoutCampaignInput } from "../inputs/TaskUpdateWithWhereUniqueWithoutCampaignInput";
import { TaskUpsertWithWhereUniqueWithoutCampaignInput } from "../inputs/TaskUpsertWithWhereUniqueWithoutCampaignInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";
export declare class TaskUpdateManyWithoutCampaignInput {
    create?: TaskCreateWithoutCampaignInput[] | undefined;
    connectOrCreate?: TaskCreateOrConnectWithoutCampaignInput[] | undefined;
    upsert?: TaskUpsertWithWhereUniqueWithoutCampaignInput[] | undefined;
    createMany?: TaskCreateManyCampaignInputEnvelope | undefined;
    connect?: TaskWhereUniqueInput[] | undefined;
    set?: TaskWhereUniqueInput[] | undefined;
    disconnect?: TaskWhereUniqueInput[] | undefined;
    delete?: TaskWhereUniqueInput[] | undefined;
    update?: TaskUpdateWithWhereUniqueWithoutCampaignInput[] | undefined;
    updateMany?: TaskUpdateManyWithWhereWithoutCampaignInput[] | undefined;
    deleteMany?: TaskScalarWhereInput[] | undefined;
}
