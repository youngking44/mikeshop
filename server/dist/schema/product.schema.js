"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.ProductSchema = zod_1.default.object({
    title: zod_1.default.string().min(1, 'Product title is required'),
    desc: zod_1.default.string().min(1, 'Product description is required'),
    color: zod_1.default.string().array().min(1, 'Product color is required'),
    category: zod_1.default.string().min(1, 'Product category is required'),
    brand: zod_1.default.string().min(1, 'Product brand is required'),
    price: zod_1.default
        .number({
        invalid_type_error: 'Product price must be a number',
    })
        .min(1, 'Product price is required'),
    img: zod_1.default.string().min(1, 'Product image is required'),
});
