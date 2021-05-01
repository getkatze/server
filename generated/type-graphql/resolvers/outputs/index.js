<<<<<<< HEAD
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSumAggregate = exports.UserMinAggregate = exports.UserMaxAggregate = exports.UserGroupBy = exports.UserCountAggregate = exports.UserAvgAggregate = exports.TaskMinAggregate = exports.TaskMaxAggregate = exports.TaskGroupBy = exports.TaskCountAggregate = exports.CampaignSumAggregate = exports.CampaignMinAggregate = exports.CampaignMaxAggregate = exports.CampaignGroupBy = exports.CampaignCountAggregate = exports.CampaignAvgAggregate = exports.AggregateUser = exports.AggregateTask = exports.AggregateCampaign = exports.AffectedRowsOutput = void 0;
var AffectedRowsOutput_1 = require("./AffectedRowsOutput");
Object.defineProperty(exports, "AffectedRowsOutput", { enumerable: true, get: function () { return AffectedRowsOutput_1.AffectedRowsOutput; } });
var AggregateCampaign_1 = require("./AggregateCampaign");
Object.defineProperty(exports, "AggregateCampaign", { enumerable: true, get: function () { return AggregateCampaign_1.AggregateCampaign; } });
var AggregateTask_1 = require("./AggregateTask");
Object.defineProperty(exports, "AggregateTask", { enumerable: true, get: function () { return AggregateTask_1.AggregateTask; } });
var AggregateUser_1 = require("./AggregateUser");
Object.defineProperty(exports, "AggregateUser", { enumerable: true, get: function () { return AggregateUser_1.AggregateUser; } });
var CampaignAvgAggregate_1 = require("./CampaignAvgAggregate");
Object.defineProperty(exports, "CampaignAvgAggregate", { enumerable: true, get: function () { return CampaignAvgAggregate_1.CampaignAvgAggregate; } });
var CampaignCountAggregate_1 = require("./CampaignCountAggregate");
Object.defineProperty(exports, "CampaignCountAggregate", { enumerable: true, get: function () { return CampaignCountAggregate_1.CampaignCountAggregate; } });
var CampaignGroupBy_1 = require("./CampaignGroupBy");
Object.defineProperty(exports, "CampaignGroupBy", { enumerable: true, get: function () { return CampaignGroupBy_1.CampaignGroupBy; } });
var CampaignMaxAggregate_1 = require("./CampaignMaxAggregate");
Object.defineProperty(exports, "CampaignMaxAggregate", { enumerable: true, get: function () { return CampaignMaxAggregate_1.CampaignMaxAggregate; } });
var CampaignMinAggregate_1 = require("./CampaignMinAggregate");
Object.defineProperty(exports, "CampaignMinAggregate", { enumerable: true, get: function () { return CampaignMinAggregate_1.CampaignMinAggregate; } });
var CampaignSumAggregate_1 = require("./CampaignSumAggregate");
Object.defineProperty(exports, "CampaignSumAggregate", { enumerable: true, get: function () { return CampaignSumAggregate_1.CampaignSumAggregate; } });
var TaskCountAggregate_1 = require("./TaskCountAggregate");
Object.defineProperty(exports, "TaskCountAggregate", { enumerable: true, get: function () { return TaskCountAggregate_1.TaskCountAggregate; } });
var TaskGroupBy_1 = require("./TaskGroupBy");
Object.defineProperty(exports, "TaskGroupBy", { enumerable: true, get: function () { return TaskGroupBy_1.TaskGroupBy; } });
var TaskMaxAggregate_1 = require("./TaskMaxAggregate");
Object.defineProperty(exports, "TaskMaxAggregate", { enumerable: true, get: function () { return TaskMaxAggregate_1.TaskMaxAggregate; } });
var TaskMinAggregate_1 = require("./TaskMinAggregate");
Object.defineProperty(exports, "TaskMinAggregate", { enumerable: true, get: function () { return TaskMinAggregate_1.TaskMinAggregate; } });
var UserAvgAggregate_1 = require("./UserAvgAggregate");
Object.defineProperty(exports, "UserAvgAggregate", { enumerable: true, get: function () { return UserAvgAggregate_1.UserAvgAggregate; } });
var UserCountAggregate_1 = require("./UserCountAggregate");
Object.defineProperty(exports, "UserCountAggregate", { enumerable: true, get: function () { return UserCountAggregate_1.UserCountAggregate; } });
var UserGroupBy_1 = require("./UserGroupBy");
Object.defineProperty(exports, "UserGroupBy", { enumerable: true, get: function () { return UserGroupBy_1.UserGroupBy; } });
var UserMaxAggregate_1 = require("./UserMaxAggregate");
Object.defineProperty(exports, "UserMaxAggregate", { enumerable: true, get: function () { return UserMaxAggregate_1.UserMaxAggregate; } });
var UserMinAggregate_1 = require("./UserMinAggregate");
Object.defineProperty(exports, "UserMinAggregate", { enumerable: true, get: function () { return UserMinAggregate_1.UserMinAggregate; } });
var UserSumAggregate_1 = require("./UserSumAggregate");
Object.defineProperty(exports, "UserSumAggregate", { enumerable: true, get: function () { return UserSumAggregate_1.UserSumAggregate; } });
=======
'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.UserSumAggregate = exports.UserMinAggregate = exports.UserMaxAggregate = exports.UserGroupBy = exports.UserCountAggregate = exports.UserAvgAggregate = exports.AggregateUser = exports.AffectedRowsOutput = void 0;
var AffectedRowsOutput_1 = require('./AffectedRowsOutput');
Object.defineProperty(exports, 'AffectedRowsOutput', {
  enumerable: true,
  get: function () {
    return AffectedRowsOutput_1.AffectedRowsOutput;
  },
});
var AggregateUser_1 = require('./AggregateUser');
Object.defineProperty(exports, 'AggregateUser', {
  enumerable: true,
  get: function () {
    return AggregateUser_1.AggregateUser;
  },
});
var UserAvgAggregate_1 = require('./UserAvgAggregate');
Object.defineProperty(exports, 'UserAvgAggregate', {
  enumerable: true,
  get: function () {
    return UserAvgAggregate_1.UserAvgAggregate;
  },
});
var UserCountAggregate_1 = require('./UserCountAggregate');
Object.defineProperty(exports, 'UserCountAggregate', {
  enumerable: true,
  get: function () {
    return UserCountAggregate_1.UserCountAggregate;
  },
});
var UserGroupBy_1 = require('./UserGroupBy');
Object.defineProperty(exports, 'UserGroupBy', {
  enumerable: true,
  get: function () {
    return UserGroupBy_1.UserGroupBy;
  },
});
var UserMaxAggregate_1 = require('./UserMaxAggregate');
Object.defineProperty(exports, 'UserMaxAggregate', {
  enumerable: true,
  get: function () {
    return UserMaxAggregate_1.UserMaxAggregate;
  },
});
var UserMinAggregate_1 = require('./UserMinAggregate');
Object.defineProperty(exports, 'UserMinAggregate', {
  enumerable: true,
  get: function () {
    return UserMinAggregate_1.UserMinAggregate;
  },
});
var UserSumAggregate_1 = require('./UserSumAggregate');
Object.defineProperty(exports, 'UserSumAggregate', {
  enumerable: true,
  get: function () {
    return UserSumAggregate_1.UserSumAggregate;
  },
});
>>>>>>> 659b2b1e564d0d7f19b4d08e2a3d206cae328538
