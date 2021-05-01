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
exports.CampaignUpdateManyWithoutContractorInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const CampaignCreateManyContractorInputEnvelope_1 = require("../inputs/CampaignCreateManyContractorInputEnvelope");
const CampaignCreateOrConnectWithoutContractorInput_1 = require("../inputs/CampaignCreateOrConnectWithoutContractorInput");
const CampaignCreateWithoutContractorInput_1 = require("../inputs/CampaignCreateWithoutContractorInput");
const CampaignScalarWhereInput_1 = require("../inputs/CampaignScalarWhereInput");
const CampaignUpdateManyWithWhereWithoutContractorInput_1 = require("../inputs/CampaignUpdateManyWithWhereWithoutContractorInput");
const CampaignUpdateWithWhereUniqueWithoutContractorInput_1 = require("../inputs/CampaignUpdateWithWhereUniqueWithoutContractorInput");
const CampaignUpsertWithWhereUniqueWithoutContractorInput_1 = require("../inputs/CampaignUpsertWithWhereUniqueWithoutContractorInput");
const CampaignWhereUniqueInput_1 = require("../inputs/CampaignWhereUniqueInput");
let CampaignUpdateManyWithoutContractorInput = class CampaignUpdateManyWithoutContractorInput {
};
__decorate([
    TypeGraphQL.Field(_type => [CampaignCreateWithoutContractorInput_1.CampaignCreateWithoutContractorInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], CampaignUpdateManyWithoutContractorInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [CampaignCreateOrConnectWithoutContractorInput_1.CampaignCreateOrConnectWithoutContractorInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], CampaignUpdateManyWithoutContractorInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [CampaignUpsertWithWhereUniqueWithoutContractorInput_1.CampaignUpsertWithWhereUniqueWithoutContractorInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], CampaignUpdateManyWithoutContractorInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => CampaignCreateManyContractorInputEnvelope_1.CampaignCreateManyContractorInputEnvelope, {
        nullable: true
    }),
    __metadata("design:type", CampaignCreateManyContractorInputEnvelope_1.CampaignCreateManyContractorInputEnvelope)
], CampaignUpdateManyWithoutContractorInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [CampaignWhereUniqueInput_1.CampaignWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], CampaignUpdateManyWithoutContractorInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [CampaignWhereUniqueInput_1.CampaignWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], CampaignUpdateManyWithoutContractorInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [CampaignWhereUniqueInput_1.CampaignWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], CampaignUpdateManyWithoutContractorInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [CampaignWhereUniqueInput_1.CampaignWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], CampaignUpdateManyWithoutContractorInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [CampaignUpdateWithWhereUniqueWithoutContractorInput_1.CampaignUpdateWithWhereUniqueWithoutContractorInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], CampaignUpdateManyWithoutContractorInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [CampaignUpdateManyWithWhereWithoutContractorInput_1.CampaignUpdateManyWithWhereWithoutContractorInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], CampaignUpdateManyWithoutContractorInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [CampaignScalarWhereInput_1.CampaignScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], CampaignUpdateManyWithoutContractorInput.prototype, "deleteMany", void 0);
CampaignUpdateManyWithoutContractorInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], CampaignUpdateManyWithoutContractorInput);
exports.CampaignUpdateManyWithoutContractorInput = CampaignUpdateManyWithoutContractorInput;
