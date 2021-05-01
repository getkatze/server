import { CampaignCreateOrConnectWithoutTasksInput } from "../inputs/CampaignCreateOrConnectWithoutTasksInput";
import { CampaignCreateWithoutTasksInput } from "../inputs/CampaignCreateWithoutTasksInput";
import { CampaignWhereUniqueInput } from "../inputs/CampaignWhereUniqueInput";
export declare class CampaignCreateNestedOneWithoutTasksInput {
    create?: CampaignCreateWithoutTasksInput | undefined;
    connectOrCreate?: CampaignCreateOrConnectWithoutTasksInput | undefined;
    connect?: CampaignWhereUniqueInput | undefined;
}
