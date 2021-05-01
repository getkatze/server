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
exports.CampaignGroupBy = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const CampaignAvgAggregate_1 = require("../outputs/CampaignAvgAggregate");
const CampaignCountAggregate_1 = require("../outputs/CampaignCountAggregate");
const CampaignMaxAggregate_1 = require("../outputs/CampaignMaxAggregate");
const CampaignMinAggregate_1 = require("../outputs/CampaignMinAggregate");
const CampaignSumAggregate_1 = require("../outputs/CampaignSumAggregate");
let CampaignGroupBy = class CampaignGroupBy {
};
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], CampaignGroupBy.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], CampaignGroupBy.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], CampaignGroupBy.prototype, "contractorId", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], CampaignGroupBy.prototype, "description", void 0);
__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: false
    }),
    __metadata("design:type", Array)
], CampaignGroupBy.prototype, "options", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], CampaignGroupBy.prototype, "totalPrizeAmount", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], CampaignGroupBy.prototype, "participantLimit", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    __metadata("design:type", Boolean)
], CampaignGroupBy.prototype, "completed", void 0);
__decorate([
    TypeGraphQL.Field(_type => CampaignCountAggregate_1.CampaignCountAggregate, {
        nullable: true
    }),
    __metadata("design:type", CampaignCountAggregate_1.CampaignCountAggregate)
], CampaignGroupBy.prototype, "count", void 0);
__decorate([
    TypeGraphQL.Field(_type => CampaignAvgAggregate_1.CampaignAvgAggregate, {
        nullable: true
    }),
    __metadata("design:type", CampaignAvgAggregate_1.CampaignAvgAggregate)
], CampaignGroupBy.prototype, "avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => CampaignSumAggregate_1.CampaignSumAggregate, {
        nullable: true
    }),
    __metadata("design:type", CampaignSumAggregate_1.CampaignSumAggregate)
], CampaignGroupBy.prototype, "sum", void 0);
__decorate([
    TypeGraphQL.Field(_type => CampaignMinAggregate_1.CampaignMinAggregate, {
        nullable: true
    }),
    __metadata("design:type", CampaignMinAggregate_1.CampaignMinAggregate)
], CampaignGroupBy.prototype, "min", void 0);
__decorate([
    TypeGraphQL.Field(_type => CampaignMaxAggregate_1.CampaignMaxAggregate, {
        nullable: true
    }),
    __metadata("design:type", CampaignMaxAggregate_1.CampaignMaxAggregate)
], CampaignGroupBy.prototype, "max", void 0);
CampaignGroupBy = __decorate([
    TypeGraphQL.ObjectType({
        isAbstract: true
    })
], CampaignGroupBy);
exports.CampaignGroupBy = CampaignGroupBy;
