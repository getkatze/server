'use strict';
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, {
          enumerable: true,
          get: function () {
            return m[k];
          },
        });
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, 'default', { enumerable: true, value: v });
      }
    : function (o, v) {
        o['default'] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== 'default' && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
<<<<<<< HEAD
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyArgsTypesEnhanceMap = exports.applyInputTypesEnhanceMap = exports.applyOutputTypesEnhanceMap = exports.applyModelsEnhanceMap = exports.applyRelationResolversEnhanceMap = exports.applyResolversEnhanceMap = void 0;
const crudResolvers = __importStar(require("./resolvers/crud/resolvers-crud.index"));
const actionResolvers = __importStar(require("./resolvers/crud/resolvers-actions.index"));
const relationResolvers = __importStar(require("./resolvers/relations/resolvers.index"));
const models = __importStar(require("./models"));
const outputTypes = __importStar(require("./resolvers/outputs"));
const inputTypes = __importStar(require("./resolvers/inputs"));
const argsTypes = __importStar(require("./resolvers/crud/args.index"));
const crudResolversMap = {
    User: crudResolvers.UserCrudResolver,
    Task: crudResolvers.TaskCrudResolver,
    Campaign: crudResolvers.CampaignCrudResolver
};
const relationResolversMap = {
    User: relationResolvers.UserRelationsResolver,
    Task: relationResolvers.TaskRelationsResolver,
    Campaign: relationResolvers.CampaignRelationsResolver
};
const actionResolversMap = {
    User: {
        user: actionResolvers.FindUniqueUserResolver,
        findFirstUser: actionResolvers.FindFirstUserResolver,
        users: actionResolvers.FindManyUserResolver,
        createUser: actionResolvers.CreateUserResolver,
        createManyUser: actionResolvers.CreateManyUserResolver,
        deleteUser: actionResolvers.DeleteUserResolver,
        updateUser: actionResolvers.UpdateUserResolver,
        deleteManyUser: actionResolvers.DeleteManyUserResolver,
        updateManyUser: actionResolvers.UpdateManyUserResolver,
        upsertUser: actionResolvers.UpsertUserResolver,
        aggregateUser: actionResolvers.AggregateUserResolver,
        groupByUser: actionResolvers.GroupByUserResolver
    },
    Task: {
        task: actionResolvers.FindUniqueTaskResolver,
        findFirstTask: actionResolvers.FindFirstTaskResolver,
        tasks: actionResolvers.FindManyTaskResolver,
        createTask: actionResolvers.CreateTaskResolver,
        createManyTask: actionResolvers.CreateManyTaskResolver,
        deleteTask: actionResolvers.DeleteTaskResolver,
        updateTask: actionResolvers.UpdateTaskResolver,
        deleteManyTask: actionResolvers.DeleteManyTaskResolver,
        updateManyTask: actionResolvers.UpdateManyTaskResolver,
        upsertTask: actionResolvers.UpsertTaskResolver,
        aggregateTask: actionResolvers.AggregateTaskResolver,
        groupByTask: actionResolvers.GroupByTaskResolver
    },
    Campaign: {
        campaign: actionResolvers.FindUniqueCampaignResolver,
        findFirstCampaign: actionResolvers.FindFirstCampaignResolver,
        campaigns: actionResolvers.FindManyCampaignResolver,
        createCampaign: actionResolvers.CreateCampaignResolver,
        createManyCampaign: actionResolvers.CreateManyCampaignResolver,
        deleteCampaign: actionResolvers.DeleteCampaignResolver,
        updateCampaign: actionResolvers.UpdateCampaignResolver,
        deleteManyCampaign: actionResolvers.DeleteManyCampaignResolver,
        updateManyCampaign: actionResolvers.UpdateManyCampaignResolver,
        upsertCampaign: actionResolvers.UpsertCampaignResolver,
        aggregateCampaign: actionResolvers.AggregateCampaignResolver,
        groupByCampaign: actionResolvers.GroupByCampaignResolver
    }
};
const resolversInfo = {
    User: ["user", "findFirstUser", "users", "createUser", "createManyUser", "deleteUser", "updateUser", "deleteManyUser", "updateManyUser", "upsertUser", "aggregateUser", "groupByUser"],
    Task: ["task", "findFirstTask", "tasks", "createTask", "createManyTask", "deleteTask", "updateTask", "deleteManyTask", "updateManyTask", "upsertTask", "aggregateTask", "groupByTask"],
    Campaign: ["campaign", "findFirstCampaign", "campaigns", "createCampaign", "createManyCampaign", "deleteCampaign", "updateCampaign", "deleteManyCampaign", "updateManyCampaign", "upsertCampaign", "aggregateCampaign", "groupByCampaign"]
};
const relationResolversInfo = {
    User: ["tasks", "campaigns"],
    Task: ["user", "campaign"],
    Campaign: ["contractor", "tasks"]
};
const modelsInfo = {
    User: ["id", "createdAt", "username", "crypto"],
    Task: ["id", "value", "createdAt", "userId", "campaignId"],
    Campaign: ["id", "name", "contractorId", "description", "options", "totalPrizeAmount", "participantLimit", "completed"]
};
const inputsInfo = {
    UserWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "username", "crypto", "tasks", "campaigns"],
    UserOrderByInput: ["id", "createdAt", "username", "crypto"],
    UserWhereUniqueInput: ["id", "username"],
    UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "username", "crypto"],
    TaskWhereInput: ["AND", "OR", "NOT", "id", "value", "user", "createdAt", "campaign", "userId", "campaignId"],
    TaskOrderByInput: ["id", "value", "createdAt", "userId", "campaignId"],
    TaskWhereUniqueInput: ["id"],
    TaskScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "value", "createdAt", "userId", "campaignId"],
    CampaignWhereInput: ["AND", "OR", "NOT", "id", "name", "contractor", "tasks", "contractorId", "description", "options", "totalPrizeAmount", "participantLimit", "completed"],
    CampaignOrderByInput: ["id", "name", "contractorId", "description", "options", "totalPrizeAmount", "participantLimit", "completed"],
    CampaignWhereUniqueInput: ["id"],
    CampaignScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "contractorId", "description", "options", "totalPrizeAmount", "participantLimit", "completed"],
    UserCreateInput: ["id", "createdAt", "username", "crypto", "tasks", "campaigns"],
    UserUpdateInput: ["id", "createdAt", "username", "crypto", "tasks", "campaigns"],
    UserCreateManyInput: ["id", "createdAt", "username", "crypto"],
    UserUpdateManyMutationInput: ["id", "createdAt", "username", "crypto"],
    TaskCreateInput: ["id", "value", "createdAt", "user", "campaign"],
    TaskUpdateInput: ["id", "value", "createdAt", "user", "campaign"],
    TaskCreateManyInput: ["id", "value", "createdAt", "userId", "campaignId"],
    TaskUpdateManyMutationInput: ["id", "value", "createdAt"],
    CampaignCreateInput: ["id", "name", "description", "totalPrizeAmount", "participantLimit", "completed", "options", "contractor", "tasks"],
    CampaignUpdateInput: ["id", "name", "description", "totalPrizeAmount", "participantLimit", "completed", "options", "contractor", "tasks"],
    CampaignCreateManyInput: ["id", "name", "contractorId", "description", "totalPrizeAmount", "participantLimit", "completed", "options"],
    CampaignUpdateManyMutationInput: ["id", "name", "description", "totalPrizeAmount", "participantLimit", "completed", "options"],
    StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    TaskListRelationFilter: ["every", "some", "none"],
    CampaignListRelationFilter: ["every", "some", "none"],
    StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "count", "min", "max"],
    DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "count", "min", "max"],
    IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "count", "avg", "sum", "min", "max"],
    UserRelationFilter: ["is", "isNot"],
    CampaignRelationFilter: ["is", "isNot"],
    StringNullableListFilter: ["equals", "has", "hasEvery", "hasSome", "isEmpty"],
    IntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    BoolFilter: ["equals", "not"],
    IntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "count", "avg", "sum", "min", "max"],
    BoolWithAggregatesFilter: ["equals", "not", "count", "min", "max"],
    TaskCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
    CampaignCreateNestedManyWithoutContractorInput: ["create", "connectOrCreate", "createMany", "connect"],
    StringFieldUpdateOperationsInput: ["set"],
    DateTimeFieldUpdateOperationsInput: ["set"],
    IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    TaskUpdateManyWithoutUserInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
    CampaignUpdateManyWithoutContractorInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
    UserCreateNestedOneWithoutTasksInput: ["create", "connectOrCreate", "connect"],
    CampaignCreateNestedOneWithoutTasksInput: ["create", "connectOrCreate", "connect"],
    UserUpdateOneRequiredWithoutTasksInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    CampaignUpdateOneRequiredWithoutTasksInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    CampaignCreateoptionsInput: ["set"],
    UserCreateNestedOneWithoutCampaignsInput: ["create", "connectOrCreate", "connect"],
    TaskCreateNestedManyWithoutCampaignInput: ["create", "connectOrCreate", "createMany", "connect"],
    NullableIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    BoolFieldUpdateOperationsInput: ["set"],
    CampaignUpdateoptionsInput: ["set", "push"],
    UserUpdateOneRequiredWithoutCampaignsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    TaskUpdateManyWithoutCampaignInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
    CampaignCreateManyoptionsInput: ["set"],
    NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "count", "min", "max"],
    NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "count", "min", "max"],
    NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "count", "avg", "sum", "min", "max"],
    NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedBoolFilter: ["equals", "not"],
    NestedIntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "count", "avg", "sum", "min", "max"],
    NestedFloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedBoolWithAggregatesFilter: ["equals", "not", "count", "min", "max"],
    TaskCreateWithoutUserInput: ["id", "value", "createdAt", "campaign"],
    TaskCreateOrConnectWithoutUserInput: ["where", "create"],
    TaskCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
    CampaignCreateWithoutContractorInput: ["id", "name", "description", "totalPrizeAmount", "participantLimit", "completed", "options", "tasks"],
    CampaignCreateOrConnectWithoutContractorInput: ["where", "create"],
    CampaignCreateManyContractorInputEnvelope: ["data", "skipDuplicates"],
    TaskUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
    TaskUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
    TaskUpdateManyWithWhereWithoutUserInput: ["where", "data"],
    TaskScalarWhereInput: ["AND", "OR", "NOT", "id", "value", "createdAt", "userId", "campaignId"],
    CampaignUpsertWithWhereUniqueWithoutContractorInput: ["where", "update", "create"],
    CampaignUpdateWithWhereUniqueWithoutContractorInput: ["where", "data"],
    CampaignUpdateManyWithWhereWithoutContractorInput: ["where", "data"],
    CampaignScalarWhereInput: ["AND", "OR", "NOT", "id", "name", "contractorId", "description", "options", "totalPrizeAmount", "participantLimit", "completed"],
    UserCreateWithoutTasksInput: ["id", "createdAt", "username", "crypto", "campaigns"],
    UserCreateOrConnectWithoutTasksInput: ["where", "create"],
    CampaignCreateWithoutTasksInput: ["id", "name", "description", "totalPrizeAmount", "participantLimit", "completed", "options", "contractor"],
    CampaignCreateOrConnectWithoutTasksInput: ["where", "create"],
    UserUpsertWithoutTasksInput: ["update", "create"],
    UserUpdateWithoutTasksInput: ["id", "createdAt", "username", "crypto", "campaigns"],
    CampaignUpsertWithoutTasksInput: ["update", "create"],
    CampaignUpdateWithoutTasksInput: ["id", "name", "description", "totalPrizeAmount", "participantLimit", "completed", "options", "contractor"],
    UserCreateWithoutCampaignsInput: ["id", "createdAt", "username", "crypto", "tasks"],
    UserCreateOrConnectWithoutCampaignsInput: ["where", "create"],
    TaskCreateWithoutCampaignInput: ["id", "value", "createdAt", "user"],
    TaskCreateOrConnectWithoutCampaignInput: ["where", "create"],
    TaskCreateManyCampaignInputEnvelope: ["data", "skipDuplicates"],
    UserUpsertWithoutCampaignsInput: ["update", "create"],
    UserUpdateWithoutCampaignsInput: ["id", "createdAt", "username", "crypto", "tasks"],
    TaskUpsertWithWhereUniqueWithoutCampaignInput: ["where", "update", "create"],
    TaskUpdateWithWhereUniqueWithoutCampaignInput: ["where", "data"],
    TaskUpdateManyWithWhereWithoutCampaignInput: ["where", "data"],
    TaskCreateManyUserInput: ["id", "value", "createdAt", "campaignId"],
    CampaignCreateManyContractorInput: ["id", "name", "description", "totalPrizeAmount", "participantLimit", "completed", "options"],
    TaskUpdateWithoutUserInput: ["id", "value", "createdAt", "campaign"],
    CampaignUpdateWithoutContractorInput: ["id", "name", "description", "totalPrizeAmount", "participantLimit", "completed", "options", "tasks"],
    TaskCreateManyCampaignInput: ["id", "value", "createdAt", "userId"],
    TaskUpdateWithoutCampaignInput: ["id", "value", "createdAt", "user"]
};
const outputsInfo = {
    AggregateUser: ["count", "avg", "sum", "min", "max"],
    UserGroupBy: ["id", "createdAt", "username", "crypto", "count", "avg", "sum", "min", "max"],
    AggregateTask: ["count", "min", "max"],
    TaskGroupBy: ["id", "value", "createdAt", "userId", "campaignId", "count", "min", "max"],
    AggregateCampaign: ["count", "avg", "sum", "min", "max"],
    CampaignGroupBy: ["id", "name", "contractorId", "description", "options", "totalPrizeAmount", "participantLimit", "completed", "count", "avg", "sum", "min", "max"],
    AffectedRowsOutput: ["count"],
    UserCountAggregate: ["id", "createdAt", "username", "crypto", "_all"],
    UserAvgAggregate: ["crypto"],
    UserSumAggregate: ["crypto"],
    UserMinAggregate: ["id", "createdAt", "username", "crypto"],
    UserMaxAggregate: ["id", "createdAt", "username", "crypto"],
    TaskCountAggregate: ["id", "value", "createdAt", "userId", "campaignId", "_all"],
    TaskMinAggregate: ["id", "value", "createdAt", "userId", "campaignId"],
    TaskMaxAggregate: ["id", "value", "createdAt", "userId", "campaignId"],
    CampaignCountAggregate: ["id", "name", "contractorId", "description", "options", "totalPrizeAmount", "participantLimit", "completed", "_all"],
    CampaignAvgAggregate: ["totalPrizeAmount", "participantLimit"],
    CampaignSumAggregate: ["totalPrizeAmount", "participantLimit"],
    CampaignMinAggregate: ["id", "name", "contractorId", "description", "totalPrizeAmount", "participantLimit", "completed"],
    CampaignMaxAggregate: ["id", "name", "contractorId", "description", "totalPrizeAmount", "participantLimit", "completed"]
};
const argsInfo = {
    FindUniqueUserArgs: ["where"],
    FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateUserArgs: ["data"],
    CreateManyUserArgs: ["data", "skipDuplicates"],
    DeleteUserArgs: ["where"],
    UpdateUserArgs: ["data", "where"],
    DeleteManyUserArgs: ["where"],
    UpdateManyUserArgs: ["data", "where"],
    UpsertUserArgs: ["where", "create", "update"],
    AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueTaskArgs: ["where"],
    FindFirstTaskArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyTaskArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateTaskArgs: ["data"],
    CreateManyTaskArgs: ["data", "skipDuplicates"],
    DeleteTaskArgs: ["where"],
    UpdateTaskArgs: ["data", "where"],
    DeleteManyTaskArgs: ["where"],
    UpdateManyTaskArgs: ["data", "where"],
    UpsertTaskArgs: ["where", "create", "update"],
    AggregateTaskArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByTaskArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueCampaignArgs: ["where"],
    FindFirstCampaignArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyCampaignArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateCampaignArgs: ["data"],
    CreateManyCampaignArgs: ["data", "skipDuplicates"],
    DeleteCampaignArgs: ["where"],
    UpdateCampaignArgs: ["data", "where"],
    DeleteManyCampaignArgs: ["where"],
    UpdateManyCampaignArgs: ["data", "where"],
    UpsertCampaignArgs: ["where", "create", "update"],
    AggregateCampaignArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByCampaignArgs: ["where", "orderBy", "by", "having", "take", "skip"]
=======
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.applyArgsTypesEnhanceMap = exports.applyInputTypesEnhanceMap = exports.applyOutputTypesEnhanceMap = exports.applyModelsEnhanceMap = exports.applyResolversEnhanceMap = void 0;
const crudResolvers = __importStar(require('./resolvers/crud/resolvers-crud.index'));
const actionResolvers = __importStar(require('./resolvers/crud/resolvers-actions.index'));
const models = __importStar(require('./models'));
const outputTypes = __importStar(require('./resolvers/outputs'));
const inputTypes = __importStar(require('./resolvers/inputs'));
const argsTypes = __importStar(require('./resolvers/crud/args.index'));
const crudResolversMap = {
  User: crudResolvers.UserCrudResolver,
};
const actionResolversMap = {
  User: {
    user: actionResolvers.FindUniqueUserResolver,
    findFirstUser: actionResolvers.FindFirstUserResolver,
    users: actionResolvers.FindManyUserResolver,
    createUser: actionResolvers.CreateUserResolver,
    createManyUser: actionResolvers.CreateManyUserResolver,
    deleteUser: actionResolvers.DeleteUserResolver,
    updateUser: actionResolvers.UpdateUserResolver,
    deleteManyUser: actionResolvers.DeleteManyUserResolver,
    updateManyUser: actionResolvers.UpdateManyUserResolver,
    upsertUser: actionResolvers.UpsertUserResolver,
    aggregateUser: actionResolvers.AggregateUserResolver,
    groupByUser: actionResolvers.GroupByUserResolver,
  },
};
const resolversInfo = {
  User: [
    'user',
    'findFirstUser',
    'users',
    'createUser',
    'createManyUser',
    'deleteUser',
    'updateUser',
    'deleteManyUser',
    'updateManyUser',
    'upsertUser',
    'aggregateUser',
    'groupByUser',
  ],
};
const modelsInfo = {
  User: ['id', 'createdAt', 'username', 'crypto'],
};
const inputsInfo = {
  UserWhereInput: ['AND', 'OR', 'NOT', 'id', 'createdAt', 'username', 'crypto'],
  UserOrderByInput: ['id', 'createdAt', 'username', 'crypto'],
  UserWhereUniqueInput: ['id', 'username'],
  UserScalarWhereWithAggregatesInput: ['AND', 'OR', 'NOT', 'id', 'createdAt', 'username', 'crypto'],
  UserCreateInput: ['id', 'createdAt', 'username', 'crypto'],
  UserUpdateInput: ['id', 'createdAt', 'username', 'crypto'],
  UserCreateManyInput: ['id', 'createdAt', 'username', 'crypto'],
  UserUpdateManyMutationInput: ['id', 'createdAt', 'username', 'crypto'],
  StringFilter: [
    'equals',
    'in',
    'notIn',
    'lt',
    'lte',
    'gt',
    'gte',
    'contains',
    'startsWith',
    'endsWith',
    'mode',
    'not',
  ],
  DateTimeFilter: ['equals', 'in', 'notIn', 'lt', 'lte', 'gt', 'gte', 'not'],
  IntFilter: ['equals', 'in', 'notIn', 'lt', 'lte', 'gt', 'gte', 'not'],
  StringWithAggregatesFilter: [
    'equals',
    'in',
    'notIn',
    'lt',
    'lte',
    'gt',
    'gte',
    'contains',
    'startsWith',
    'endsWith',
    'mode',
    'not',
    'count',
    'min',
    'max',
  ],
  DateTimeWithAggregatesFilter: [
    'equals',
    'in',
    'notIn',
    'lt',
    'lte',
    'gt',
    'gte',
    'not',
    'count',
    'min',
    'max',
  ],
  IntWithAggregatesFilter: [
    'equals',
    'in',
    'notIn',
    'lt',
    'lte',
    'gt',
    'gte',
    'not',
    'count',
    'avg',
    'sum',
    'min',
    'max',
  ],
  StringFieldUpdateOperationsInput: ['set'],
  DateTimeFieldUpdateOperationsInput: ['set'],
  IntFieldUpdateOperationsInput: ['set', 'increment', 'decrement', 'multiply', 'divide'],
  NestedStringFilter: [
    'equals',
    'in',
    'notIn',
    'lt',
    'lte',
    'gt',
    'gte',
    'contains',
    'startsWith',
    'endsWith',
    'not',
  ],
  NestedDateTimeFilter: ['equals', 'in', 'notIn', 'lt', 'lte', 'gt', 'gte', 'not'],
  NestedIntFilter: ['equals', 'in', 'notIn', 'lt', 'lte', 'gt', 'gte', 'not'],
  NestedStringWithAggregatesFilter: [
    'equals',
    'in',
    'notIn',
    'lt',
    'lte',
    'gt',
    'gte',
    'contains',
    'startsWith',
    'endsWith',
    'not',
    'count',
    'min',
    'max',
  ],
  NestedDateTimeWithAggregatesFilter: [
    'equals',
    'in',
    'notIn',
    'lt',
    'lte',
    'gt',
    'gte',
    'not',
    'count',
    'min',
    'max',
  ],
  NestedIntWithAggregatesFilter: [
    'equals',
    'in',
    'notIn',
    'lt',
    'lte',
    'gt',
    'gte',
    'not',
    'count',
    'avg',
    'sum',
    'min',
    'max',
  ],
  NestedFloatFilter: ['equals', 'in', 'notIn', 'lt', 'lte', 'gt', 'gte', 'not'],
};
const outputsInfo = {
  AggregateUser: ['count', 'avg', 'sum', 'min', 'max'],
  UserGroupBy: ['id', 'createdAt', 'username', 'crypto', 'count', 'avg', 'sum', 'min', 'max'],
  AffectedRowsOutput: ['count'],
  UserCountAggregate: ['id', 'createdAt', 'username', 'crypto', '_all'],
  UserAvgAggregate: ['crypto'],
  UserSumAggregate: ['crypto'],
  UserMinAggregate: ['id', 'createdAt', 'username', 'crypto'],
  UserMaxAggregate: ['id', 'createdAt', 'username', 'crypto'],
};
const argsInfo = {
  FindUniqueUserArgs: ['where'],
  FindFirstUserArgs: ['where', 'orderBy', 'cursor', 'take', 'skip', 'distinct'],
  FindManyUserArgs: ['where', 'orderBy', 'cursor', 'take', 'skip', 'distinct'],
  CreateUserArgs: ['data'],
  CreateManyUserArgs: ['data', 'skipDuplicates'],
  DeleteUserArgs: ['where'],
  UpdateUserArgs: ['data', 'where'],
  DeleteManyUserArgs: ['where'],
  UpdateManyUserArgs: ['data', 'where'],
  UpsertUserArgs: ['where', 'create', 'update'],
  AggregateUserArgs: ['where', 'orderBy', 'cursor', 'take', 'skip'],
  GroupByUserArgs: ['where', 'orderBy', 'by', 'having', 'take', 'skip'],
>>>>>>> 659b2b1e564d0d7f19b4d08e2a3d206cae328538
};
function applyResolversEnhanceMap(resolversEnhanceMap) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName];
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = resolversInfo[modelName];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = actionResolversConfig[resolverActionName].prototype;
        for (const allActionsDecorator of allActionsDecorators) {
          allActionsDecorator(
            crudTarget,
            resolverActionName,
            Object.getOwnPropertyDescriptor(crudTarget, resolverActionName)
          );
          allActionsDecorator(
            actionTarget,
            resolverActionName,
            Object.getOwnPropertyDescriptor(actionTarget, resolverActionName)
          );
        }
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter((it) => it !== '_all');
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[resolverActionName];
      const actionTarget = actionResolversConfig[resolverActionName].prototype;
      for (const decorator of decorators) {
        decorator(
          crudTarget,
          resolverActionName,
          Object.getOwnPropertyDescriptor(crudTarget, resolverActionName)
        );
        decorator(
          actionTarget,
          resolverActionName,
          Object.getOwnPropertyDescriptor(actionTarget, resolverActionName)
        );
      }
    }
  }
}
exports.applyResolversEnhanceMap = applyResolversEnhanceMap;
function applyRelationResolversEnhanceMap(relationResolversEnhanceMap) {
    for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
        const modelName = relationResolversEnhanceMapKey;
        const relationResolverTarget = relationResolversMap[modelName].prototype;
        const relationResolverActionsConfig = relationResolversEnhanceMap[modelName];
        if (relationResolverActionsConfig._all) {
            const allActionsDecorators = relationResolverActionsConfig._all;
            const relationResolverActionNames = relationResolversInfo[modelName];
            for (const relationResolverActionName of relationResolverActionNames) {
                for (const allActionsDecorator of allActionsDecorators) {
                    allActionsDecorator(relationResolverTarget, relationResolverActionName, Object.getOwnPropertyDescriptor(relationResolverTarget, relationResolverActionName));
                }
            }
        }
        const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(it => it !== "_all");
        for (const relationResolverActionName of relationResolverActionsToApply) {
            const decorators = relationResolverActionsConfig[relationResolverActionName];
            for (const decorator of decorators) {
                decorator(relationResolverTarget, relationResolverActionName, Object.getOwnPropertyDescriptor(relationResolverTarget, relationResolverActionName));
            }
        }
    }
}
exports.applyRelationResolversEnhanceMap = applyRelationResolversEnhanceMap;
function applyTypeClassEnhanceConfig(enhanceConfig, typeClass, typePrototype, typeFieldNames) {
  if (enhanceConfig.class) {
    for (const decorator of enhanceConfig.class) {
      decorator(typeClass);
    }
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        for (const allFieldsDecorator of allFieldsDecorators) {
          allFieldsDecorator(typePrototype, typeFieldName);
        }
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter((it) => it !== '_all');
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName];
      for (const fieldDecorator of fieldDecorators) {
        fieldDecorator(typePrototype, typeFieldName);
      }
    }
  }
}
function applyModelsEnhanceMap(modelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey;
    const modelConfig = modelsEnhanceMap[modelName];
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(modelConfig, modelClass, modelTarget, modelsInfo[modelName]);
  }
}
exports.applyModelsEnhanceMap = applyModelsEnhanceMap;
function applyOutputTypesEnhanceMap(outputTypesEnhanceMap) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey;
    const typeConfig = outputTypesEnhanceMap[outputTypeName];
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, outputsInfo[outputTypeName]);
  }
}
exports.applyOutputTypesEnhanceMap = applyOutputTypesEnhanceMap;
function applyInputTypesEnhanceMap(inputTypesEnhanceMap) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey;
    const typeConfig = inputTypesEnhanceMap[inputTypeName];
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, inputsInfo[inputTypeName]);
  }
}
exports.applyInputTypesEnhanceMap = applyInputTypesEnhanceMap;
function applyArgsTypesEnhanceMap(argsTypesEnhanceMap) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey;
    const typeConfig = argsTypesEnhanceMap[argsTypeName];
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, argsInfo[argsTypeName]);
  }
}
exports.applyArgsTypesEnhanceMap = applyArgsTypesEnhanceMap;
