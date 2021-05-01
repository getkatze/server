import { TaskCreateManyCampaignInputEnvelope } from "../inputs/TaskCreateManyCampaignInputEnvelope";
import { TaskCreateOrConnectWithoutCampaignInput } from "../inputs/TaskCreateOrConnectWithoutCampaignInput";
import { TaskCreateWithoutCampaignInput } from "../inputs/TaskCreateWithoutCampaignInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";
export declare class TaskCreateNestedManyWithoutCampaignInput {
    create?: TaskCreateWithoutCampaignInput[] | undefined;
    connectOrCreate?: TaskCreateOrConnectWithoutCampaignInput[] | undefined;
    createMany?: TaskCreateManyCampaignInputEnvelope | undefined;
    connect?: TaskWhereUniqueInput[] | undefined;
}
