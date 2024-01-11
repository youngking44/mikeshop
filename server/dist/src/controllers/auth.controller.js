"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.refreshTokenHandler = exports.loginUserHandler = exports.createUserHandler = void 0;
const auth_service_1 = require("../service/auth.service");
const token_utils_1 = __importDefault(require("../utils/token.utils"));
const logger_utils_1 = __importDefault(require("../utils/logger.utils"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("config"));
const user_service_1 = require("../service/user.service");
const maxAge = 3 * 24 * 60 * 60 * 1000;
const createUserHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newUser = yield (0, auth_service_1.createUser)(req.body);
        // I used newUser.toJSON() to convert the user document object to json before destructuring it.
        // I didn't use newUSer._doc when destructuring the user object to avoid typescript error.
        const _a = newUser.toJSON(), { password, token } = _a, user = __rest(_a, ["password", "token"]);
        const payload = { id: newUser._id, isAdmin: newUser.isAdmin };
        const accessToken = (0, token_utils_1.default)(payload, 'accessToken');
        const refreshToken = (0, token_utils_1.default)(payload, 'refreshToken');
        newUser.token = refreshToken;
        yield (0, user_service_1.updateUser)(newUser._id, newUser);
        res.cookie('jwt', refreshToken, { httpOnly: true, maxAge });
        res.status(201).json({ user, token: accessToken });
    }
    catch (err) {
        logger_utils_1.default.error(err);
        const message = err instanceof Error ? err.message : 'Unknown error ocurred';
        const statusCode = message.includes('Email has been used') ? 400 : 500;
        res.status(statusCode).json({ message, error: err });
    }
});
exports.createUserHandler = createUserHandler;
const loginUserHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const newUser = yield (0, auth_service_1.loginUser)(email, password);
        // I used newUser.toJSON() to convert the user document object to json before destructuring it.
        // I didn't use newUSer._doc when destructuring the user object to avoid typescript error.
        const _b = newUser.toJSON(), { password: pass, token } = _b, user = __rest(_b, ["password", "token"]);
        const payload = { id: newUser._id, isAdmin: newUser.isAdmin };
        const accessToken = (0, token_utils_1.default)(payload, 'accessToken');
        const refreshToken = (0, token_utils_1.default)(payload, 'refreshToken');
        newUser.token = refreshToken;
        yield (0, user_service_1.updateUser)(newUser._id, newUser);
        res.cookie('jwt', refreshToken, { httpOnly: true, maxAge });
        res.status(200).json({ user, token: accessToken });
    }
    catch (err) {
        logger_utils_1.default.error(err);
        const message = err instanceof Error ? err.message : 'Unknown error ocurred';
        let statusCode = 500;
        if (message.includes('No user found')) {
            statusCode = 404;
        }
        if (message.includes('Password does not match')) {
            statusCode = 400;
        }
        res.status(statusCode).json({ message, error: err });
    }
});
exports.loginUserHandler = loginUserHandler;
const refreshTokenHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _c;
    const refreshToken = (_c = req.cookies) === null || _c === void 0 ? void 0 : _c.jwt;
    const refreshTokenSecret = config_1.default.get('refreshToken');
    if (!refreshToken)
        return res.sendStatus(401);
    try {
        const decoded = jsonwebtoken_1.default.verify(refreshToken, refreshTokenSecret);
        const { id, isAdmin } = decoded;
        const user = yield (0, auth_service_1.getUserByToken)(refreshToken);
        if (!user)
            return res.sendStatus(403);
        const accessToken = (0, token_utils_1.default)({ id, isAdmin }, 'accessToken');
        res.status(200).json(accessToken);
    }
    catch (err) {
        res.sendStatus(403);
    }
});
exports.refreshTokenHandler = refreshTokenHandler;
