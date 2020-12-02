"use strict";
exports.__esModule = true;
exports.HttpIntegrationService = void 0;
var common_1 = require("@nestjs/common");
var HttpIntegrationService = /** @class */ (function () {
    function HttpIntegrationService() {
    }
    HttpIntegrationService.prototype.isStatusCodeError = function (err, statusCode) {
        try {
            return err.response.status === statusCode;
        }
        catch (err) {
            return false;
        }
    };
    HttpIntegrationService.prototype.isNotFoundError = function (err) {
        return this.isStatusCodeError(err, common_1.HttpStatus.NOT_FOUND);
    };
    return HttpIntegrationService;
}());
exports.HttpIntegrationService = HttpIntegrationService;
