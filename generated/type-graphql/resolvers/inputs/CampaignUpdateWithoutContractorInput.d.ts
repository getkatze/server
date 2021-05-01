import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { CampaignUpdateoptionsInput } from "../inputs/CampaignUpdateoptionsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TaskUpdateManyWithoutCampaignInput } from "../inputs/TaskUpdateManyWithoutCampaignInput";
export declare class CampaignUpdateWithoutContractorInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    description?: StringFieldUpdateOperationsInput | undefined;
    totalPrizeAmount?: NullableIntFieldUpdateOperationsInput | undefined;
    participantLimit?: NullableIntFieldUpdateOperationsInput | undefined;
    completed?: BoolFieldUpdateOperationsInput | undefined;
    options?: CampaignUpdateoptionsInput | undefined;
    tasks?: TaskUpdateManyWithoutCampaignInput | undefined;
}
