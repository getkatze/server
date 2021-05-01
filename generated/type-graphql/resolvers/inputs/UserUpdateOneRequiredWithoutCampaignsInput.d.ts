import { UserCreateOrConnectWithoutCampaignsInput } from "../inputs/UserCreateOrConnectWithoutCampaignsInput";
import { UserCreateWithoutCampaignsInput } from "../inputs/UserCreateWithoutCampaignsInput";
import { UserUpdateWithoutCampaignsInput } from "../inputs/UserUpdateWithoutCampaignsInput";
import { UserUpsertWithoutCampaignsInput } from "../inputs/UserUpsertWithoutCampaignsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneRequiredWithoutCampaignsInput {
    create?: UserCreateWithoutCampaignsInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutCampaignsInput | undefined;
    upsert?: UserUpsertWithoutCampaignsInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateWithoutCampaignsInput | undefined;
}
