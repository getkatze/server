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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRelationsResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const Campaign_1 = require("../../../models/Campaign");
const Task_1 = require("../../../models/Task");
const User_1 = require("../../../models/User");
const UserCampaignsArgs_1 = require("./args/UserCampaignsArgs");
const UserTasksArgs_1 = require("./args/UserTasksArgs");
const helpers_1 = require("../../../helpers");
let UserRelationsResolver = class UserRelationsResolver {
    async tasks(user, ctx, args) {
        return helpers_1.getPrismaFromContext(ctx).user.findUnique({
            where: {
                id: user.id,
            },
        }).tasks(args);
    }
    async campaigns(user, ctx, args) {
        return helpers_1.getPrismaFromContext(ctx).user.findUnique({
            where: {
                id: user.id,
            },
        }).campaigns(args);
    }
};
__decorate([
    TypeGraphQL.FieldResolver(_type => [Task_1.Task], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()), __param(1, TypeGraphQL.Ctx()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [User_1.User, Object, UserTasksArgs_1.UserTasksArgs]),
    __metadata("design:returntype", Promise)
], UserRelationsResolver.prototype, "tasks", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => [Campaign_1.Campaign], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()), __param(1, TypeGraphQL.Ctx()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [User_1.User, Object, UserCampaignsArgs_1.UserCampaignsArgs]),
    __metadata("design:returntype", Promise)
], UserRelationsResolver.prototype, "campaigns", null);
UserRelationsResolver = __decorate([
    TypeGraphQL.Resolver(_of => User_1.User)
], UserRelationsResolver);
exports.UserRelationsResolver = UserRelationsResolver;