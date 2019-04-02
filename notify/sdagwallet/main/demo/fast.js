"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import Wallet from 'sdagwallet.js';
var index_1 = __importDefault(require("../index"));
var sdag_js_1 = require("sdag.js");
function demo() {
    return __awaiter(this, void 0, void 0, function () {
        var code, wallet, key, _a, _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    code = 'sea absorb guilt regular retire fire invest urge tone peace enroll asthma';
                    wallet = new index_1.default();
                    wallet.configHub('ws://10.168.3.131:6615');
                    return [4 /*yield*/, wallet.loginWithMnemonic(code)];
                case 1:
                    _d.sent();
                    key = new sdag_js_1.Keyman(code);
                    console.log(wallet.mainAddress, key.mainAddress);
                    // console.log('Balance: ', await wallet.getBalance());
                    // console.log('Send to FVC55XN6VRX7BUJKJXM73EBGTUYB3YJT', (await wallet.send({ amount: 1, to: 'FVC55XN6VRX7BUJKJXM73EBGTUYB3YJT', text: 'Hello' })).joint.unit.unit);
                    // await (new Promise((resolve) => setTimeout(resolve, 3000)));
                    // console.log('Balance: ', await wallet.getBalance());
                    wallet.onAssetMessage(function (msg) { return console.log(msg); });
                    // await wallet.send({ amount: 2, to: wallet.mainAddress });
                    // await (new Promise((resolve) => setTimeout(resolve, 3000)));
                    _b = (_a = console).log;
                    _c = ['Balance: '];
                    return [4 /*yield*/, wallet.getBalance()];
                case 2:
                    // await wallet.send({ amount: 2, to: wallet.mainAddress });
                    // await (new Promise((resolve) => setTimeout(resolve, 3000)));
                    _b.apply(_a, _c.concat([_d.sent()]));
                    return [2 /*return*/];
            }
        });
    });
}
demo();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kZW1vL2Zhc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNDQUFzQztBQUN0QyxtREFBOEI7QUFDOUIsbUNBQWlDO0FBRWpDLFNBQWUsSUFBSTs7Ozs7O29CQUNYLElBQUksR0FBRywyRUFBMkUsQ0FBQztvQkFDbkYsTUFBTSxHQUFHLElBQUksZUFBTSxFQUFFLENBQUM7b0JBRTFCLE1BQU0sQ0FBQyxTQUFTLENBQUMsd0JBQXdCLENBQUMsQ0FBQztvQkFDM0MscUJBQU0sTUFBTSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxFQUFBOztvQkFBcEMsU0FBb0MsQ0FBQztvQkFFakMsR0FBRyxHQUFHLElBQUksZ0JBQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztvQkFFakQsdURBQXVEO29CQUV2RCxzS0FBc0s7b0JBQ3RLLCtEQUErRDtvQkFDL0QsdURBQXVEO29CQUV2RCxNQUFNLENBQUMsY0FBYyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBaEIsQ0FBZ0IsQ0FBQyxDQUFDO29CQUUvQyw0REFBNEQ7b0JBQzVELCtEQUErRDtvQkFDL0QsS0FBQSxDQUFBLEtBQUEsT0FBTyxDQUFBLENBQUMsR0FBRyxDQUFBOzBCQUFDLFdBQVc7b0JBQUUscUJBQU0sTUFBTSxDQUFDLFVBQVUsRUFBRSxFQUFBOztvQkFGbEQsNERBQTREO29CQUM1RCwrREFBK0Q7b0JBQy9ELHdCQUF5QixTQUF5QixHQUFDLENBQUM7Ozs7O0NBRXZEO0FBRUQsSUFBSSxFQUFFLENBQUMifQ==