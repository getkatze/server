import { CampaignCreateNestedManyWithoutContractorInput } from "../inputs/CampaignCreateNestedManyWithoutContractorInput";
import { TaskCreateNestedManyWithoutUserInput } from "../inputs/TaskCreateNestedManyWithoutUserInput";
export declare class UserCreateInput {
<<<<<<< HEAD
    id?: string | undefined;
    createdAt?: Date | undefined;
    username: string;
    crypto?: number | undefined;
    tasks?: TaskCreateNestedManyWithoutUserInput | undefined;
    campaigns?: CampaignCreateNestedManyWithoutContractorInput | undefined;
=======
  id?: string | undefined;
  createdAt?: Date | undefined;
  username: string;
  crypto?: number | undefined;
>>>>>>> 659b2b1e564d0d7f19b4d08e2a3d206cae328538
}
