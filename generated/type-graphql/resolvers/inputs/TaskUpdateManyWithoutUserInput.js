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
exports.TaskUpdateManyWithoutUserInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const TaskCreateManyUserInputEnvelope_1 = require("../inputs/TaskCreateManyUserInputEnvelope");
const TaskCreateOrConnectWithoutUserInput_1 = require("../inputs/TaskCreateOrConnectWithoutUserInput");
const TaskCreateWithoutUserInput_1 = require("../inputs/TaskCreateWithoutUserInput");
const TaskScalarWhereInput_1 = require("../inputs/TaskScalarWhereInput");
const TaskUpdateManyWithWhereWithoutUserInput_1 = require("../inputs/TaskUpdateManyWithWhereWithoutUserInput");
const TaskUpdateWithWhereUniqueWithoutUserInput_1 = require("../inputs/TaskUpdateWithWhereUniqueWithoutUserInput");
const TaskUpsertWithWhereUniqueWithoutUserInput_1 = require("../inputs/TaskUpsertWithWhereUniqueWithoutUserInput");
const TaskWhereUniqueInput_1 = require("../inputs/TaskWhereUniqueInput");
let TaskUpdateManyWithoutUserInput = class TaskUpdateManyWithoutUserInput {
};
__decorate([
    TypeGraphQL.Field(_type => [TaskCreateWithoutUserInput_1.TaskCreateWithoutUserInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], TaskUpdateManyWithoutUserInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [TaskCreateOrConnectWithoutUserInput_1.TaskCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], TaskUpdateManyWithoutUserInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [TaskUpsertWithWhereUniqueWithoutUserInput_1.TaskUpsertWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], TaskUpdateManyWithoutUserInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => TaskCreateManyUserInputEnvelope_1.TaskCreateManyUserInputEnvelope, {
        nullable: true
    }),
    __metadata("design:type", TaskCreateManyUserInputEnvelope_1.TaskCreateManyUserInputEnvelope)
], TaskUpdateManyWithoutUserInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [TaskWhereUniqueInput_1.TaskWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], TaskUpdateManyWithoutUserInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [TaskWhereUniqueInput_1.TaskWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], TaskUpdateManyWithoutUserInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [TaskWhereUniqueInput_1.TaskWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], TaskUpdateManyWithoutUserInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [TaskWhereUniqueInput_1.TaskWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], TaskUpdateManyWithoutUserInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [TaskUpdateWithWhereUniqueWithoutUserInput_1.TaskUpdateWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], TaskUpdateManyWithoutUserInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [TaskUpdateManyWithWhereWithoutUserInput_1.TaskUpdateManyWithWhereWithoutUserInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], TaskUpdateManyWithoutUserInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [TaskScalarWhereInput_1.TaskScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], TaskUpdateManyWithoutUserInput.prototype, "deleteMany", void 0);
TaskUpdateManyWithoutUserInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], TaskUpdateManyWithoutUserInput);
exports.TaskUpdateManyWithoutUserInput = TaskUpdateManyWithoutUserInput;
