import { CampaignCreateOrConnectWithoutTasksInput } from "../inputs/CampaignCreateOrConnectWithoutTasksInput";
import { CampaignCreateWithoutTasksInput } from "../inputs/CampaignCreateWithoutTasksInput";
import { CampaignUpdateWithoutTasksInput } from "../inputs/CampaignUpdateWithoutTasksInput";
import { CampaignUpsertWithoutTasksInput } from "../inputs/CampaignUpsertWithoutTasksInput";
import { CampaignWhereUniqueInput } from "../inputs/CampaignWhereUniqueInput";
export declare class CampaignUpdateOneRequiredWithoutTasksInput {
    create?: CampaignCreateWithoutTasksInput | undefined;
    connectOrCreate?: CampaignCreateOrConnectWithoutTasksInput | undefined;
    upsert?: CampaignUpsertWithoutTasksInput | undefined;
    connect?: CampaignWhereUniqueInput | undefined;
    update?: CampaignUpdateWithoutTasksInput | undefined;
}
