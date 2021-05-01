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
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d;
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
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
  };
var __metadata =
  (this && this.__metadata) ||
  function (k, v) {
    if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
      return Reflect.metadata(k, v);
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.UserCreateInput = void 0;
<<<<<<< HEAD
const TypeGraphQL = __importStar(require("type-graphql"));
const CampaignCreateNestedManyWithoutContractorInput_1 = require("../inputs/CampaignCreateNestedManyWithoutContractorInput");
const TaskCreateNestedManyWithoutUserInput_1 = require("../inputs/TaskCreateNestedManyWithoutUserInput");
let UserCreateInput = class UserCreateInput {
};
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
=======
const TypeGraphQL = __importStar(require('type-graphql'));
let UserCreateInput = class UserCreateInput {};
__decorate(
  [
    TypeGraphQL.Field((_type) => String, {
      nullable: true,
>>>>>>> 659b2b1e564d0d7f19b4d08e2a3d206cae328538
    }),
    __metadata('design:type', String),
  ],
  UserCreateInput.prototype,
  'id',
  void 0
);
__decorate(
  [
    TypeGraphQL.Field((_type) => Date, {
      nullable: true,
    }),
    __metadata('design:type', Date),
  ],
  UserCreateInput.prototype,
  'createdAt',
  void 0
);
__decorate(
  [
    TypeGraphQL.Field((_type) => String, {
      nullable: false,
    }),
    __metadata('design:type', String),
  ],
  UserCreateInput.prototype,
  'username',
  void 0
);
__decorate(
  [
    TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
      nullable: true,
    }),
<<<<<<< HEAD
    __metadata("design:type", Number)
], UserCreateInput.prototype, "crypto", void 0);
__decorate([
    TypeGraphQL.Field(_type => TaskCreateNestedManyWithoutUserInput_1.TaskCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    __metadata("design:type", TaskCreateNestedManyWithoutUserInput_1.TaskCreateNestedManyWithoutUserInput)
], UserCreateInput.prototype, "tasks", void 0);
__decorate([
    TypeGraphQL.Field(_type => CampaignCreateNestedManyWithoutContractorInput_1.CampaignCreateNestedManyWithoutContractorInput, {
        nullable: true
    }),
    __metadata("design:type", CampaignCreateNestedManyWithoutContractorInput_1.CampaignCreateNestedManyWithoutContractorInput)
], UserCreateInput.prototype, "campaigns", void 0);
UserCreateInput = __decorate([
=======
    __metadata('design:type', Number),
  ],
  UserCreateInput.prototype,
  'crypto',
  void 0
);
UserCreateInput = __decorate(
  [
>>>>>>> 659b2b1e564d0d7f19b4d08e2a3d206cae328538
    TypeGraphQL.InputType({
      isAbstract: true,
    }),
  ],
  UserCreateInput
);
exports.UserCreateInput = UserCreateInput;
