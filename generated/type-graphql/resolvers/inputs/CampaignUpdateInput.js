"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampaignUpdateInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const BoolFieldUpdateOperationsInput_1 = require("../inputs/BoolFieldUpdateOperationsInput");
const CampaignUpdateoptionsInput_1 = require("../inputs/CampaignUpdateoptionsInput");
const NullableIntFieldUpdateOperationsInput_1 = require("../inputs/NullableIntFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const TaskUpdateManyWithoutCampaignInput_1 = require("../inputs/TaskUpdateManyWithoutCampaignInput");
const UserUpdateOneRequiredWithoutCampaignsInput_1 = require("../inputs/UserUpdateOneRequiredWithoutCampaignsInput");
let CampaignUpdateInput = class CampaignUpdateInput {
};
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CampaignUpdateInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CampaignUpdateInput.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CampaignUpdateInput.prototype, "description", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput)
], CampaignUpdateInput.prototype, "totalPrizeAmount", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput)
], CampaignUpdateInput.prototype, "participantLimit", void 0);
__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], CampaignUpdateInput.prototype, "completed", void 0);
__decorate([
    TypeGraphQL.Field(_type => CampaignUpdateoptionsInput_1.CampaignUpdateoptionsInput, {
        nullable: true
    }),
    __metadata("design:type", CampaignUpdateoptionsInput_1.CampaignUpdateoptionsInput)
], CampaignUpdateInput.prototype, "options", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutCampaignsInput_1.UserUpdateOneRequiredWithoutCampaignsInput, {
        nullable: true
    }),
    __metadata("design:type", UserUpdateOneRequiredWithoutCampaignsInput_1.UserUpdateOneRequiredWithoutCampaignsInput)
], CampaignUpdateInput.prototype, "contractor", void 0);
__decorate([
    TypeGraphQL.Field(_type => TaskUpdateManyWithoutCampaignInput_1.TaskUpdateManyWithoutCampaignInput, {
        nullable: true
    }),
    __metadata("design:type", TaskUpdateManyWithoutCampaignInput_1.TaskUpdateManyWithoutCampaignInput)
], CampaignUpdateInput.prototype, "tasks", void 0);
CampaignUpdateInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], CampaignUpdateInput);
exports.CampaignUpdateInput = CampaignUpdateInput;