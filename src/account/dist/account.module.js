"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AccountModule = void 0;
var query_graphql_1 = require("@nestjs-query/query-graphql");
var query_typeorm_1 = require("@nestjs-query/query-typeorm");
var common_1 = require("@nestjs/common");
var account_dto_1 = require("./dto/account.dto");
var create_account_dto_1 = require("./dto/create-account.dto");
var update_account_input_1 = require("./dto/update-account.input");
var account_entity_1 = require("./entities/account.entity");
var jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
var AccountModule = /** @class */ (function () {
    function AccountModule() {
    }
    AccountModule = __decorate([
        common_1.Module({
            imports: [
                query_graphql_1.NestjsQueryGraphQLModule.forFeature({
                    imports: [query_typeorm_1.NestjsQueryTypeOrmModule.forFeature([account_entity_1.AccountEntity])],
                    resolvers: [
                        {
                            DTOClass: account_dto_1.AccountDTO,
                            EntityClass: account_entity_1.AccountEntity,
                            CreateDTOClass: create_account_dto_1.AccountInput,
                            UpdateDTOClass: update_account_input_1.UpdateAccountInput,
                            enableTotalCount: true,
                            enableAggregate: true,
                            guards: [jwt_auth_guard_1.JwtAuthGuard]
                        },
                    ]
                }),
            ]
        })
    ], AccountModule);
    return AccountModule;
}());
exports.AccountModule = AccountModule;
