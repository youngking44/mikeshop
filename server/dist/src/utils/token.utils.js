"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("config"));
const accessToken = config_1.default.get('accessToken');
const refreshToken = config_1.default.get('refreshToken');
const createToken = (payload, tokenType) => {
    const tokenSecret = tokenType === 'accessToken' ? accessToken : refreshToken;
    const expiresIn = tokenType === 'accessToken' ? '15m' : '3d';
    const token = jsonwebtoken_1.default.sign(payload, tokenSecret, { expiresIn });
    return token;
};
exports.default = createToken;
