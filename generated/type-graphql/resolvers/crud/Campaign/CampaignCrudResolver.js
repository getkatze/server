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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampaignCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const graphql_fields_1 = __importDefault(require("graphql-fields"));
const AggregateCampaignArgs_1 = require("./args/AggregateCampaignArgs");
const CreateCampaignArgs_1 = require("./args/CreateCampaignArgs");
const CreateManyCampaignArgs_1 = require("./args/CreateManyCampaignArgs");
const DeleteCampaignArgs_1 = require("./args/DeleteCampaignArgs");
const DeleteManyCampaignArgs_1 = require("./args/DeleteManyCampaignArgs");
const FindFirstCampaignArgs_1 = require("./args/FindFirstCampaignArgs");
const FindManyCampaignArgs_1 = require("./args/FindManyCampaignArgs");
const FindUniqueCampaignArgs_1 = require("./args/FindUniqueCampaignArgs");
const GroupByCampaignArgs_1 = require("./args/GroupByCampaignArgs");
const UpdateCampaignArgs_1 = require("./args/UpdateCampaignArgs");
const UpdateManyCampaignArgs_1 = require("./args/UpdateManyCampaignArgs");
const UpsertCampaignArgs_1 = require("./args/UpsertCampaignArgs");
const helpers_1 = require("../../../helpers");
const Campaign_1 = require("../../../models/Campaign");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateCampaign_1 = require("../../outputs/AggregateCampaign");
const CampaignGroupBy_1 = require("../../outputs/CampaignGroupBy");
let CampaignCrudResolver = class CampaignCrudResolver {
    async campaign(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).campaign.findUnique({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async findFirstCampaign(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).campaign.findFirst({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async campaigns(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).campaign.findMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async createCampaign(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).campaign.create({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async createManyCampaign(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).campaign.createMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async deleteCampaign(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).campaign.delete({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async updateCampaign(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).campaign.update({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async deleteManyCampaign(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).campaign.deleteMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async updateManyCampaign(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).campaign.updateMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async upsertCampaign(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).campaign.upsert({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async aggregateCampaign(ctx, info, args) {
        return helpers_1.getPrismaFromContext(ctx).campaign.aggregate({
            ...args,
            ...helpers_1.transformFields(graphql_fields_1.default(info)),
        });
    }
    async groupByCampaign(ctx, info, args) {
        const { count, avg, sum, min, max } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).campaign.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ count, avg, sum, min, max }).filter(([_, v]) => v != null)),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => Campaign_1.Campaign, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueCampaignArgs_1.FindUniqueCampaignArgs]),
    __metadata("design:returntype", Promise)
], CampaignCrudResolver.prototype, "campaign", null);
__decorate([
    TypeGraphQL.Query(_returns => Campaign_1.Campaign, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstCampaignArgs_1.FindFirstCampaignArgs]),
    __metadata("design:returntype", Promise)
], CampaignCrudResolver.prototype, "findFirstCampaign", null);
__decorate([
    TypeGraphQL.Query(_returns => [Campaign_1.Campaign], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyCampaignArgs_1.FindManyCampaignArgs]),
    __metadata("design:returntype", Promise)
], CampaignCrudResolver.prototype, "campaigns", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Campaign_1.Campaign, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateCampaignArgs_1.CreateCampaignArgs]),
    __metadata("design:returntype", Promise)
], CampaignCrudResolver.prototype, "createCampaign", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyCampaignArgs_1.CreateManyCampaignArgs]),
    __metadata("design:returntype", Promise)
], CampaignCrudResolver.prototype, "createManyCampaign", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Campaign_1.Campaign, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteCampaignArgs_1.DeleteCampaignArgs]),
    __metadata("design:returntype", Promise)
], CampaignCrudResolver.prototype, "deleteCampaign", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Campaign_1.Campaign, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateCampaignArgs_1.UpdateCampaignArgs]),
    __metadata("design:returntype", Promise)
], CampaignCrudResolver.prototype, "updateCampaign", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManyCampaignArgs_1.DeleteManyCampaignArgs]),
    __metadata("design:returntype", Promise)
], CampaignCrudResolver.prototype, "deleteManyCampaign", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManyCampaignArgs_1.UpdateManyCampaignArgs]),
    __metadata("design:returntype", Promise)
], CampaignCrudResolver.prototype, "updateManyCampaign", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Campaign_1.Campaign, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertCampaignArgs_1.UpsertCampaignArgs]),
    __metadata("design:returntype", Promise)
], CampaignCrudResolver.prototype, "upsertCampaign", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateCampaign_1.AggregateCampaign, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateCampaignArgs_1.AggregateCampaignArgs]),
    __metadata("design:returntype", Promise)
], CampaignCrudResolver.prototype, "aggregateCampaign", null);
__decorate([
    TypeGraphQL.Query(_returns => [CampaignGroupBy_1.CampaignGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupByCampaignArgs_1.GroupByCampaignArgs]),
    __metadata("design:returntype", Promise)
], CampaignCrudResolver.prototype, "groupByCampaign", null);
CampaignCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => Campaign_1.Campaign)
], CampaignCrudResolver);
exports.CampaignCrudResolver = CampaignCrudResolver;
