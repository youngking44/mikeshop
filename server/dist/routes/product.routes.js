"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Product_controller_1 = require("../controllers/Product.controller");
const validateResource_1 = __importDefault(require("../middleware/validateResource"));
const verifyToken_1 = require("../middleware/verifyToken");
const product_schema_1 = require("../schema/product.schema");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/', Product_controller_1.getAllProductsHandler);
router.post('/', (0, validateResource_1.default)(product_schema_1.ProductSchema), verifyToken_1.verifyTokenAndAdmin, Product_controller_1.createProductHandler);
router.get('/:id', Product_controller_1.getProductHandler);
router.put('/:id', (0, validateResource_1.default)(product_schema_1.ProductSchema), verifyToken_1.verifyTokenAndAdmin, Product_controller_1.updateProductHandler);
router.delete('/:id', verifyToken_1.verifyTokenAndAdmin, Product_controller_1.deleteProductHandler);
exports.default = router;
