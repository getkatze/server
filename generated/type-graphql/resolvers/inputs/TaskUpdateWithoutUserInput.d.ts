import { CampaignUpdateOneRequiredWithoutTasksInput } from "../inputs/CampaignUpdateOneRequiredWithoutTasksInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class TaskUpdateWithoutUserInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    value?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    campaign?: CampaignUpdateOneRequiredWithoutTasksInput | undefined;
}
