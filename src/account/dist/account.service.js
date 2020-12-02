"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.AccountItemService = void 0;
var core_1 = require("@nestjs-query/core");
var account_entity_1 = require("./entities/account.entity");
var AccountItemService = /** @class */ (function (_super) {
    __extends(AccountItemService, _super);
    function AccountItemService(queryService) {
        var _this = _super.call(this) || this;
        _this.queryService = queryService;
        return _this;
    }
    //   createOne({
    //     name: title,
    //   }: AccountInputDTO): Promise<AccountDTO> {
    //     return this.queryService.createOne({ title, completed })
    //   }
    AccountItemService.prototype.createMany = function (items) {
        var newItems = items.map(function (_a) {
            var accountName = _a.accountName;
            return ({
                accountName: accountName
            });
        });
        return this.queryService.createMany(newItems);
    };
    AccountItemService.prototype.query = function (query) {
        return this.queryService.query(query);
    };
    AccountItemService.prototype.findById = function (id) {
        return this.queryService.findById(id);
    };
    AccountItemService.prototype.getById = function (id) {
        return this.queryService.getById(id);
    };
    AccountItemService.prototype.updateMany = function (update, filter) {
        return this.queryService.updateMany(update, filter);
    };
    AccountItemService.prototype.updateOne = function (id, update) {
        return this.queryService.updateOne(id, update);
    };
    AccountItemService.prototype.deleteMany = function (filter) {
        return this.queryService.deleteMany(filter);
    };
    AccountItemService.prototype.deleteOne = function (id) {
        return this.queryService.deleteOne(id);
    };
    AccountItemService = __decorate([
        __param(0, core_1.InjectQueryService(account_entity_1.AccountEntity))
    ], AccountItemService);
    return AccountItemService;
}(core_1.NoOpQueryService));
exports.AccountItemService = AccountItemService;
