"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var common_1 = require("@nestjs/common");
var graphql_1 = require("@nestjs/graphql");
var typeorm_1 = require("@nestjs/typeorm");
var tag_module_1 = require("./tag/tag.module");
// import { TodoItemModule } from './todo-item/todo-item.module';
// import { SubTaskModule } from './sub-task/sub-task.module';
var typeorm_helpers_1 = require("./common/helpers/typeorm.helpers");
var auth_module_1 = require("./auth/auth.module");
var user_module_1 = require("./user/user.module");
var account_module_1 = require("./account/account.module");
var order_module_1 = require("./order/order.module");
var job_module_1 = require("./job/job.module");
var redis_module_1 = require("./common/redis/redis.module");
var socket_module_1 = require("./common/socket/socket.module");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        common_1.Module({
            imports: [
                typeorm_1.TypeOrmModule.forRoot(typeorm_helpers_1.typeormOrmConfig('nestjs_query')),
                graphql_1.GraphQLModule.forRoot({
                    autoSchemaFile: 'schema.gql',
                    context: function (_a) {
                        var req = _a.req;
                        return ({
                            req: req
                        });
                    }
                }),
                auth_module_1.AuthModule,
                user_module_1.UserModule,
                account_module_1.AccountModule,
                order_module_1.OrderModule,
                job_module_1.JobModule,
                tag_module_1.TagModule,
                redis_module_1.RedisModule,
                socket_module_1.SocketModule,
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
