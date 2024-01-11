"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUserSchema = exports.updateUserSchema = exports.createUserSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.createUserSchema = zod_1.default
    .object({
    name: zod_1.default.string().min(1, 'Name is required'),
    email: zod_1.default.string().min(1, 'Email is required').email('Not a valid email'),
    password: zod_1.default.string().min(6, 'Password length must be greater than 6'),
    confirmPassword: zod_1.default.string().min(1, 'Confirm password field is required'),
    phone: zod_1.default.string().min(1, 'Phone number is required'),
    address: zod_1.default.string().min(1, 'Address is required'),
})
    .refine((data) => data.password === data.confirmPassword, { path: ['confirmPassword'], message: "Password don't match" });
exports.updateUserSchema = zod_1.default.object({
    name: zod_1.default.string().min(1, 'Name is required'),
    email: zod_1.default.string().min(1, 'Email is required').email('Not a valid email'),
    password: zod_1.default.string().min(6, 'Password length must be greater than 6'),
    phone: zod_1.default.string().min(1, 'Phone number is required'),
    address: zod_1.default.string().min(1, 'Address is required'),
});
exports.loginUserSchema = zod_1.default.object({
    email: zod_1.default.string().min(1, 'Email is required').email('Not a valid email'),
    password: zod_1.default.string().min(6, 'Password length must be greater than 6'),
});
