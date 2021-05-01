import { UserCreateOrConnectWithoutCampaignsInput } from "../inputs/UserCreateOrConnectWithoutCampaignsInput";
import { UserCreateWithoutCampaignsInput } from "../inputs/UserCreateWithoutCampaignsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutCampaignsInput {
    create?: UserCreateWithoutCampaignsInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutCampaignsInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
