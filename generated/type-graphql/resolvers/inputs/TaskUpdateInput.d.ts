import { CampaignUpdateOneRequiredWithoutTasksInput } from "../inputs/CampaignUpdateOneRequiredWithoutTasksInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutTasksInput } from "../inputs/UserUpdateOneRequiredWithoutTasksInput";
export declare class TaskUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    value?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    user?: UserUpdateOneRequiredWithoutTasksInput | undefined;
    campaign?: CampaignUpdateOneRequiredWithoutTasksInput | undefined;
}
