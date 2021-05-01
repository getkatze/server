import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TaskUpdateManyWithoutUserInput } from "../inputs/TaskUpdateManyWithoutUserInput";
export declare class UserUpdateWithoutCampaignsInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    username?: StringFieldUpdateOperationsInput | undefined;
    crypto?: IntFieldUpdateOperationsInput | undefined;
    tasks?: TaskUpdateManyWithoutUserInput | undefined;
}
