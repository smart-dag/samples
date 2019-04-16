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
var sdag_js_1 = require("./sdag/main/index");
var bip39_1 = __importDefault(require("bip39"));
var events_1 = require("events");
var Wallet = /** @class */ (function (_super) {
    __extends(Wallet, _super);
    function Wallet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Wallet.prototype.configHub = function (address) {
        this.address = address;
    };
    Wallet.prototype.autoConfigHub = function (type) {
        this.address = type === 'mainnet' ? 'ws://hub.sdag.io:8086' : 'ws://10.168.3.131:6615';
    };
    Wallet.prototype.generateMnemonic = function () {
        return bip39_1.default.generateMnemonic();
    };
    Wallet.prototype.loginWithMnemonic = function (mnemonic, password) {
        return __awaiter(this, void 0, void 0, function () {
            var connected;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.keyman = new sdag_js_1.Keyman(mnemonic, password);
                        this.hub = new sdag_js_1.HubClient();
                        this.hub.peerId = this.keyman.mainAddress;
                        return [4 /*yield*/, this.hub.connect(this.address)];
                    case 1:
                        connected = _a.sent();
                        return [2 /*return*/, connected];
                }
            });
        });
    };
    Object.defineProperty(Wallet.prototype, "mainAddress", {
        get: function () {
            return this.keyman.mainAddress;
        },
        enumerable: true,
        configurable: true
    });
    Wallet.prototype.getAddress = function () {
        return this.keyman.mainAddress;
    };
    Wallet.prototype.getPrivateKey = function () {
        return this.keyman.mainXprivKey;
    };
    Wallet.prototype.getPublicKey = function () {
        return this.keyman.mainPubKey;
    };
    Wallet.prototype.getBalance = function () {
        return __awaiter(this, void 0, void 0, function () {
            var balance;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.hub.getBalance(this.getAddress())];
                    case 1:
                        balance = _a.sent();
                        if (balance.error)
                            throw Error(balance.error);
                        return [2 /*return*/, balance.balance];
                }
            });
        });
    };
    Wallet.prototype.getHistory = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.hub.getTxsByAddress(this.mainAddress, 200)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Wallet.prototype.getUnit = function (unitId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.hub.getJoint(unitId)];
                    case 1: return [2 /*return*/, (_a.sent()).joint];
                }
            });
        });
    };
    Wallet.prototype.send = function (args) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.hub.transfer({ from: this.mainAddress, to: args.to, amount: args.amount, signEcdsaPubkey: this.keyman.mainEcdsaPubKey, }, function (hash) { return _this.keyman.sign(hash); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Wallet.prototype.onAssetMessage = function (cb) {
        var _this = this;
        this.hub.watch([this.mainAddress], function (msg) { return _super.prototype.emit.call(_this, 'NotifyMessage', msg); });
        _super.prototype.addListener.call(this, 'NotifyMessage', cb);
    };
    Wallet.prototype.sign = function (text) {
        return this.keyman.signMessage(text);
    };
    Wallet.prototype.verify = function (text, signed) {
        return this.keyman.verifyMessage(text, signed);
    };
    Wallet.prototype.logout = function () {
        this.hub.close();
        this.keyman = null;
    };
    return Wallet;
}(events_1.EventEmitter));
exports.default = Wallet;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBNEM7QUFDNUMsZ0RBQTBCO0FBQzFCLGlDQUFzQztBQUd0QztJQUFvQywwQkFBWTtJQUFoRDs7SUE4RUEsQ0FBQztJQXhFRywwQkFBUyxHQUFULFVBQVUsT0FBZTtRQUNyQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUMzQixDQUFDO0lBRUQsOEJBQWEsR0FBYixVQUFjLElBQTJCO1FBQ3JDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLHdCQUF3QixDQUFDO0lBQzNGLENBQUM7SUFFRCxpQ0FBZ0IsR0FBaEI7UUFDSSxPQUFPLGVBQUssQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQ3BDLENBQUM7SUFFSyxrQ0FBaUIsR0FBdkIsVUFBd0IsUUFBZ0IsRUFBRSxRQUFpQjs7Ozs7O3dCQUN2RCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksZ0JBQU0sQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7d0JBQzdDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxtQkFBUyxFQUFFLENBQUM7d0JBQzNCLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDO3dCQUUxQixxQkFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUE7O3dCQUFoRCxTQUFTLEdBQUcsU0FBb0M7d0JBQ3BELHNCQUFPLFNBQVMsRUFBQzs7OztLQUNwQjtJQUVELHNCQUFJLCtCQUFXO2FBQWY7WUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENB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