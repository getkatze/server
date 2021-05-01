<<<<<<< HEAD
import { CampaignUpdateManyWithoutContractorInput } from "../inputs/CampaignUpdateManyWithoutContractorInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TaskUpdateManyWithoutUserInput } from "../inputs/TaskUpdateManyWithoutUserInput";
export declare class UserUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    username?: StringFieldUpdateOperationsInput | undefined;
    crypto?: IntFieldUpdateOperationsInput | undefined;
    tasks?: TaskUpdateManyWithoutUserInput | undefined;
    campaigns?: CampaignUpdateManyWithoutContractorInput | undefined;
=======
import { DateTimeFieldUpdateOperationsInput } from '../inputs/DateTimeFieldUpdateOperationsInput';
import { IntFieldUpdateOperationsInput } from '../inputs/IntFieldUpdateOperationsInput';
import { StringFieldUpdateOperationsInput } from '../inputs/StringFieldUpdateOperationsInput';
export declare class UserUpdateInput {
  id?: StringFieldUpdateOperationsInput | undefined;
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
  username?: StringFieldUpdateOperationsInput | undefined;
  crypto?: IntFieldUpdateOperationsInput | undefined;
>>>>>>> 659b2b1e564d0d7f19b4d08e2a3d206cae328538
}
