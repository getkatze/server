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
var CampaignWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampaignWhereInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const BoolFilter_1 = require("../inputs/BoolFilter");
const IntNullableFilter_1 = require("../inputs/IntNullableFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableListFilter_1 = require("../inputs/StringNullableListFilter");
const TaskListRelationFilter_1 = require("../inputs/TaskListRelationFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
let CampaignWhereInput = CampaignWhereInput_1 = class CampaignWhereInput {
};
__decorate([
    TypeGraphQL.Field(_type => [CampaignWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], CampaignWhereInput.prototype, "AND", void 0);
__decorate([
    TypeGraphQL.Field(_type => [CampaignWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], CampaignWhereInput.prototype, "OR", void 0);
__decorate([
    TypeGraphQL.Field(_type => [CampaignWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], CampaignWhereInput.prototype, "NOT", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], CampaignWhereInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], CampaignWhereInput.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], CampaignWhereInput.prototype, "contractor", void 0);
__decorate([
    TypeGraphQL.Field(_type => TaskListRelationFilter_1.TaskListRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", TaskListRelationFilter_1.TaskListRelationFilter)
], CampaignWhereInput.prototype, "tasks", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], CampaignWhereInput.prototype, "contractorId", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], CampaignWhereInput.prototype, "description", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableListFilter_1.StringNullableListFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableListFilter_1.StringNullableListFilter)
], CampaignWhereInput.prototype, "options", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntNullableFilter_1.IntNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", IntNullableFilter_1.IntNullableFilter)
], CampaignWhereInput.prototype, "totalPrizeAmount", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntNullableFilter_1.IntNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", IntNullableFilter_1.IntNullableFilter)
], CampaignWhereInput.prototype, "participantLimit", void 0);
__decorate([
    TypeGraphQL.Field(_type => BoolFilter_1.BoolFilter, {
        nullable: true
    }),
    __metadata("design:type", BoolFilter_1.BoolFilter)
], CampaignWhereInput.prototype, "completed", void 0);
CampaignWhereInput = CampaignWhereInput_1 = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], CampaignWhereInput);
exports.CampaignWhereInput = CampaignWhereInput;
