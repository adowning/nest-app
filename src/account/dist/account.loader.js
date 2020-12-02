"use strict";
// // @flow
// import 'isomorphic-fetch';
// import Dataloader from 'dataloader';
// import { isString } from 'lodash';
// import { error, info } from 'console';
// const production: boolean = process.env.NODE_ENV === `production`;
// const ENV = {};
// const APIKEY = '';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AccountLoader = void 0;
// export function invariant(condition: boolean, message: string): boolean {
//   if (!production && typeof message !== `string`)
//     throw new Error(`invariant(...): Second argument must be a string.`);
//   if (!condition) {
//     const err = production
//       ? new Error(
//           `An error has occured. For more information please switch to a development build.`,
//         )
//       : new Error(message);
//     err.name = `Invariant Violation`;
//     throw err;
//   }
//   return true;
// }
// export function missingArgument<ArgName>(
//   argName: ArgName,
//   type?: string,
// ): string {
//   invariant(
//     !!argName &&
//       typeof argName === `object` &&
//       Object.keys(argName).length === 1,
//     `Missing Required Argument: Must pass a hash containing a single key.`,
//   );
//   if (
//     !!type &&
//     typeof type !== `string` &&
//     type!.match(/^(boolean|number|string|symbol|array|function|object)$/)
//   ) {
//     throw new Error(
//       `Optional argument 'Type' must be a string with one of these values: boolean, number, string, symbol, array, function, or object`,
//     );
//   }
//   if (ENV === `production`) return `Missing Required Argument`;
//   return `Missing Required Argument: '${
//     Object.keys(argName)[0]
//   }' cannot be empty.${!!type && ` Expected a value of type: ${type}`}`;
// }
// const snake = (str: string): string =>
//   str
//     .trim()
//     .split(``)
//     .map((char) => (/[A-Z]/.test(char) ? `_${char.toLowerCase()}` : char))
//     .join(``);
// export class Flickr {
//   apiKey: any;
//   loader: any;
//   constructor(apiKey) {
//     invariant(apiKey, missingArgument({ apiKey }));
//     this.apiKey = apiKey;
//     this.loader = new Dataloader(this.fetch.bind(this), { batch: false });
//   }
//   endpoint = `https://api.flickr.com/services/rest/`;
//   fetchResource(
//     method = ``,
//     args = {},
//     options = {},
//     requiresAuth = false,
//   ): Promise<any> {
//     try {
//       invariant(isString(method), missingArgument({ method }));
//       const required =
//         Object.entries(args)
//           .map(([key, value]) => {
//             invariant(
//               isString(value),
//               missingArgument({ [snake(`${key}`)]: key }),
//             );
//             return `&${snake(`${key}`)}=${value}`;
//           })
//           .join(``) || ``;
//       const optional =
//         Object.entries(options)
//           .map(([key, value]) => (value ? `&${snake(`${key}`)}=${value}` : ``))
//           .join(``) || ``;
//       const data = this.loader.load(`${method}${required}${optional}`);
//       if (data.stat === `fail`) throw new Error(data.message);
//       info(`Successfully fetched resource: ${method}`, {
//         method,
//         args,
//         options,
//         requiresAuth,
//       });
//       return data;
//     } catch (err) {
//       error(`Failed to fetch resource: ${method}`, err);
//       return err;
//     }
//   }
//   fetch = (urls: Array<string>): Promise<any> =>
//     Promise.all(
//       urls.map(
//         (url) =>
//           fetch(
//             `${this.endpoint}?method=${url}&api_key=${this.apiKey}&format=json&nojsoncallback=1`,
//           ).then((res) => res.json()), // eslint-disable-line
//       ),
//     );
// }
// export default new Flickr(APIKEY);
var DataLoader = require("dataloader");
var common_1 = require("@nestjs/common");
var AccountLoader = /** @class */ (function () {
    function AccountLoader(accountService) {
        this.accountService = accountService;
    }
    AccountLoader.prototype.generateDataLoader = function () {
        var _this = this;
        return new DataLoader(function (keys) {
            return _this.accountService.findByIds(keys);
        });
    };
    AccountLoader = __decorate([
        common_1.Injectable()
    ], AccountLoader);
    return AccountLoader;
}());
exports.AccountLoader = AccountLoader;
