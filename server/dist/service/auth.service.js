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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserByToken = exports.loginUser = exports.createUser = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const auth_utils_1 = __importDefault(require("../utils/auth.utils"));
const createUser = (input) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_model_1.default.findOne({ email: input.email });
        if (user) {
            throw Error('Email has been used');
        }
        return yield user_model_1.default.create(input);
    }
    catch (err) {
        throw err;
    }
});
exports.createUser = createUser;
const loginUser = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_model_1.default.findOne({ email });
        if (!user) {
            throw Error('No user found');
        }
        const matched = yield (0, auth_utils_1.default)(password, user.password);
        if (!matched) {
            throw Error('Password does not match');
        }
        return user;
    }
    catch (err) {
        throw err;
    }
});
exports.loginUser = loginUser;
const getUserByToken = (token) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_model_1.default.findOne({ token });
        return user;
    }
    catch (err) {
        throw err;
    }
});
exports.getUserByToken = getUserByToken;
