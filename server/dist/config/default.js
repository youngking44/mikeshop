"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
}
const PORT = process.env.PORT || 1337;
const DB_URI = process.env.DB_URI;
const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;
const JWT_SECRET = process.env.JWT_SECRET;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;
const SALT_WORK_FACTOR = 10;
exports.default = {
    port: PORT,
    dbUri: DB_URI,
    webhookSecret: WEBHOOK_SECRET,
    accessToken: JWT_SECRET,
    refreshToken: REFRESH_TOKEN,
    saltWorkFactor: SALT_WORK_FACTOR,
};
