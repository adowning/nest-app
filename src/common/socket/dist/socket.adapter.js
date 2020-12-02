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
exports.__esModule = true;
exports.CustomRedisIoAdapter = void 0;
var platform_socket_io_1 = require("@nestjs/platform-socket.io");
var socket_io_redis_1 = require("socket.io-redis");
// import config from 'config';
var redisSettings = {
    use: true,
    host: 'localhost',
    port: 6379,
    password: ''
};
var ria = socket_io_redis_1["default"].createAdapter('redis://localhost:6379');
// const redisSettings = config.get<IRedisSettings>('REDIS_SETTINGS');
var CustomRedisIoAdapter = /** @class */ (function (_super) {
    __extends(CustomRedisIoAdapter, _super);
    function CustomRedisIoAdapter(app, subClient, pubClient) {
        var _this = 
        // @ts-ignore
        _super.call(this, app) || this;
        _this.subClient = subClient;
        _this.pubClient = pubClient;
        return _this;
    }
    CustomRedisIoAdapter.prototype.createIOServer = function (port, options) {
        var server = _super.prototype.createIOServer.call(this, port, options);
        server.adapter(ria({
            host: redisSettings.host,
            port: redisSettings.port,
            auth_pass: redisSettings.password,
            // key: redisSettings.key,
            pubClient: this.pubClient,
            subClient: this.subClient
        }));
        return server;
    };
    return CustomRedisIoAdapter;
}(platform_socket_io_1.IoAdapter));
exports.CustomRedisIoAdapter = CustomRedisIoAdapter;
