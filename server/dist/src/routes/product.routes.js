"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_controller_1 = require("../controllers/product.controller");
const validateResource_1 = __importDefault(require("../middleware/validateResource"));
const verifyToken_1 = require("../middleware/verifyToken");
const product_schema_1 = require("../schema/product.schema");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/', product_controller_1.getAllProductsHandler);
router.post('/', (0, validateResource_1.default)(product_schema_1.ProductSchema), verifyToken_1.verifyTokenAndAdmin, product_controller_1.createProductHandler);
router.get('/:id', product_controller_1.getProductHandler);
router.put('/:id', (0, validateResource_1.default)(product_schema_1.ProductSchema), verifyToken_1.verifyTokenAndAdmin, product_controller_1.updateProductHandler);
router.delete('/:id', verifyToken_1.verifyTokenAndAdmin, product_controller_1.deleteProductHandler);
exports.default = router;
