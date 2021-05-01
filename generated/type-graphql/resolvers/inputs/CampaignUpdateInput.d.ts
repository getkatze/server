import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { CampaignUpdateoptionsInput } from "../inputs/CampaignUpdateoptionsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TaskUpdateManyWithoutCampaignInput } from "../inputs/TaskUpdateManyWithoutCampaignInput";
import { UserUpdateOneRequiredWithoutCampaignsInput } from "../inputs/UserUpdateOneRequiredWithoutCampaignsInput";
export declare class CampaignUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    description?: StringFieldUpdateOperationsInput | undefined;
    totalPrizeAmount?: NullableIntFieldUpdateOperationsInput | undefined;
    participantLimit?: NullableIntFieldUpdateOperationsInput | undefined;
    completed?: BoolFieldUpdateOperationsInput | undefined;
    options?: CampaignUpdateoptionsInput | undefined;
    contractor?: UserUpdateOneRequiredWithoutCampaignsInput | undefined;
    tasks?: TaskUpdateManyWithoutCampaignInput | undefined;
}
