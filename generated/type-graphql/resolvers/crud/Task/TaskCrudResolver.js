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
exports.TaskCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const graphql_fields_1 = __importDefault(require("graphql-fields"));
const AggregateTaskArgs_1 = require("./args/AggregateTaskArgs");
const CreateManyTaskArgs_1 = require("./args/CreateManyTaskArgs");
const CreateTaskArgs_1 = require("./args/CreateTaskArgs");
const DeleteManyTaskArgs_1 = require("./args/DeleteManyTaskArgs");
const DeleteTaskArgs_1 = require("./args/DeleteTaskArgs");
const FindFirstTaskArgs_1 = require("./args/FindFirstTaskArgs");
const FindManyTaskArgs_1 = require("./args/FindManyTaskArgs");
const FindUniqueTaskArgs_1 = require("./args/FindUniqueTaskArgs");
const GroupByTaskArgs_1 = require("./args/GroupByTaskArgs");
const UpdateManyTaskArgs_1 = require("./args/UpdateManyTaskArgs");
const UpdateTaskArgs_1 = require("./args/UpdateTaskArgs");
const UpsertTaskArgs_1 = require("./args/UpsertTaskArgs");
const helpers_1 = require("../../../helpers");
const Task_1 = require("../../../models/Task");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateTask_1 = require("../../outputs/AggregateTask");
const TaskGroupBy_1 = require("../../outputs/TaskGroupBy");
let TaskCrudResolver = class TaskCrudResolver {
    async task(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).task.findUnique({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async findFirstTask(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).task.findFirst({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async tasks(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).task.findMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async createTask(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).task.create({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async createManyTask(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).task.createMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async deleteTask(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).task.delete({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async updateTask(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).task.update({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async deleteManyTask(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).task.deleteMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async updateManyTask(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).task.updateMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async upsertTask(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).task.upsert({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async aggregateTask(ctx, info, args) {
        return helpers_1.getPrismaFromContext(ctx).task.aggregate({
            ...args,
            ...helpers_1.transformFields(graphql_fields_1.default(info)),
        });
    }
    async groupByTask(ctx, info, args) {
        const { count, avg, sum, min, max } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).task.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ count, avg, sum, min, max }).filter(([_, v]) => v != null)),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => Task_1.Task, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueTaskArgs_1.FindUniqueTaskArgs]),
    __metadata("design:returntype", Promise)
], TaskCrudResolver.prototype, "task", null);
__decorate([
    TypeGraphQL.Query(_returns => Task_1.Task, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstTaskArgs_1.FindFirstTaskArgs]),
    __metadata("design:returntype", Promise)
], TaskCrudResolver.prototype, "findFirstTask", null);
__decorate([
    TypeGraphQL.Query(_returns => [Task_1.Task], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyTaskArgs_1.FindManyTaskArgs]),
    __metadata("design:returntype", Promise)
], TaskCrudResolver.prototype, "tasks", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Task_1.Task, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateTaskArgs_1.CreateTaskArgs]),
    __metadata("design:returntype", Promise)
], TaskCrudResolver.prototype, "createTask", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyTaskArgs_1.CreateManyTaskArgs]),
    __metadata("design:returntype", Promise)
], TaskCrudResolver.prototype, "createManyTask", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Task_1.Task, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteTaskArgs_1.DeleteTaskArgs]),
    __metadata("design:returntype", Promise)
], TaskCrudResolver.prototype, "deleteTask", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Task_1.Task, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateTaskArgs_1.UpdateTaskArgs]),
    __metadata("design:returntype", Promise)
], TaskCrudResolver.prototype, "updateTask", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManyTaskArgs_1.DeleteManyTaskArgs]),
    __metadata("design:returntype", Promise)
], TaskCrudResolver.prototype, "deleteManyTask", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManyTaskArgs_1.UpdateManyTaskArgs]),
    __metadata("design:returntype", Promise)
], TaskCrudResolver.prototype, "updateManyTask", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Task_1.Task, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertTaskArgs_1.UpsertTaskArgs]),
    __metadata("design:returntype", Promise)
], TaskCrudResolver.prototype, "upsertTask", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateTask_1.AggregateTask, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateTaskArgs_1.AggregateTaskArgs]),
    __metadata("design:returntype", Promise)
], TaskCrudResolver.prototype, "aggregateTask", null);
__decorate([
    TypeGraphQL.Query(_returns => [TaskGroupBy_1.TaskGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupByTaskArgs_1.GroupByTaskArgs]),
    __metadata("design:returntype", Promise)
], TaskCrudResolver.prototype, "groupByTask", null);
TaskCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => Task_1.Task)
], TaskCrudResolver);
exports.TaskCrudResolver = TaskCrudResolver;
