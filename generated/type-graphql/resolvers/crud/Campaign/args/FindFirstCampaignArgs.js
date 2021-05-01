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
exports.FindFirstCampaignArgs = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const CampaignOrderByInput_1 = require("../../../inputs/CampaignOrderByInput");
const CampaignWhereInput_1 = require("../../../inputs/CampaignWhereInput");
const CampaignWhereUniqueInput_1 = require("../../../inputs/CampaignWhereUniqueInput");
const CampaignScalarFieldEnum_1 = require("../../../../enums/CampaignScalarFieldEnum");
let FindFirstCampaignArgs = class FindFirstCampaignArgs {
};
__decorate([
    TypeGraphQL.Field(_type => CampaignWhereInput_1.CampaignWhereInput, {
        nullable: true
    }),
    __metadata("design:type", CampaignWhereInput_1.CampaignWhereInput)
], FindFirstCampaignArgs.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => [CampaignOrderByInput_1.CampaignOrderByInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], FindFirstCampaignArgs.prototype, "orderBy", void 0);
__decorate([
    TypeGraphQL.Field(_type => CampaignWhereUniqueInput_1.CampaignWhereUniqueInput, {
        nullable: true
    }),
    __metadata("design:type", CampaignWhereUniqueInput_1.CampaignWhereUniqueInput)
], FindFirstCampaignArgs.prototype, "cursor", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], FindFirstCampaignArgs.prototype, "take", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], FindFirstCampaignArgs.prototype, "skip", void 0);
__decorate([
    TypeGraphQL.Field(_type => [CampaignScalarFieldEnum_1.CampaignScalarFieldEnum], {
        nullable: true
    }),
    __metadata("design:type", Array)
], FindFirstCampaignArgs.prototype, "distinct", void 0);
FindFirstCampaignArgs = __decorate([
    TypeGraphQL.ArgsType()
], FindFirstCampaignArgs);
exports.FindFirstCampaignArgs = FindFirstCampaignArgs;
