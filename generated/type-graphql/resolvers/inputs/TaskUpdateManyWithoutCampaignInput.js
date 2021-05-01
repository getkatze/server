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
exports.TaskUpdateManyWithoutCampaignInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const TaskCreateManyCampaignInputEnvelope_1 = require("../inputs/TaskCreateManyCampaignInputEnvelope");
const TaskCreateOrConnectWithoutCampaignInput_1 = require("../inputs/TaskCreateOrConnectWithoutCampaignInput");
const TaskCreateWithoutCampaignInput_1 = require("../inputs/TaskCreateWithoutCampaignInput");
const TaskScalarWhereInput_1 = require("../inputs/TaskScalarWhereInput");
const TaskUpdateManyWithWhereWithoutCampaignInput_1 = require("../inputs/TaskUpdateManyWithWhereWithoutCampaignInput");
const TaskUpdateWithWhereUniqueWithoutCampaignInput_1 = require("../inputs/TaskUpdateWithWhereUniqueWithoutCampaignInput");
const TaskUpsertWithWhereUniqueWithoutCampaignInput_1 = require("../inputs/TaskUpsertWithWhereUniqueWithoutCampaignInput");
const TaskWhereUniqueInput_1 = require("../inputs/TaskWhereUniqueInput");
let TaskUpdateManyWithoutCampaignInput = class TaskUpdateManyWithoutCampaignInput {
};
__decorate([
    TypeGraphQL.Field(_type => [TaskCreateWithoutCampaignInput_1.TaskCreateWithoutCampaignInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], TaskUpdateManyWithoutCampaignInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [TaskCreateOrConnectWithoutCampaignInput_1.TaskCreateOrConnectWithoutCampaignInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], TaskUpdateManyWithoutCampaignInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [TaskUpsertWithWhereUniqueWithoutCampaignInput_1.TaskUpsertWithWhereUniqueWithoutCampaignInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], TaskUpdateManyWithoutCampaignInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => TaskCreateManyCampaignInputEnvelope_1.TaskCreateManyCampaignInputEnvelope, {
        nullable: true
    }),
    __metadata("design:type", TaskCreateManyCampaignInputEnvelope_1.TaskCreateManyCampaignInputEnvelope)
], TaskUpdateManyWithoutCampaignInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [TaskWhereUniqueInput_1.TaskWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], TaskUpdateManyWithoutCampaignInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [TaskWhereUniqueInput_1.TaskWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], TaskUpdateManyWithoutCampaignInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [TaskWhereUniqueInput_1.TaskWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], TaskUpdateManyWithoutCampaignInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [TaskWhereUniqueInput_1.TaskWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], TaskUpdateManyWithoutCampaignInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [TaskUpdateWithWhereUniqueWithoutCampaignInput_1.TaskUpdateWithWhereUniqueWithoutCampaignInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], TaskUpdateManyWithoutCampaignInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [TaskUpdateManyWithWhereWithoutCampaignInput_1.TaskUpdateManyWithWhereWithoutCampaignInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], TaskUpdateManyWithoutCampaignInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [TaskScalarWhereInput_1.TaskScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], TaskUpdateManyWithoutCampaignInput.prototype, "deleteMany", void 0);
TaskUpdateManyWithoutCampaignInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], TaskUpdateManyWithoutCampaignInput);
exports.TaskUpdateManyWithoutCampaignInput = TaskUpdateManyWithoutCampaignInput;
