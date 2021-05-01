import { CampaignUpdateManyWithoutContractorInput } from "../inputs/CampaignUpdateManyWithoutContractorInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class UserUpdateWithoutTasksInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    username?: StringFieldUpdateOperationsInput | undefined;
    crypto?: IntFieldUpdateOperationsInput | undefined;
    campaigns?: CampaignUpdateManyWithoutContractorInput | undefined;
}
