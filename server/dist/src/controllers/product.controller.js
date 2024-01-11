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
exports.deleteProductHandler = exports.updateProductHandler = exports.getAllProductsHandler = exports.getProductHandler = exports.createProductHandler = void 0;
const product_service_1 = require("../service/product.service");
const logger_utils_1 = __importDefault(require("../utils/logger.utils"));
const createProductHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield (0, product_service_1.createProduct)(req.body);
        res.status(201).json(product);
    }
    catch (err) {
        logger_utils_1.default.error(err);
        const message = err instanceof Error ? err.message : 'Unknown error ocurred';
        res.status(500).json({ message, error: err });
    }
});
exports.createProductHandler = createProductHandler;
const getProductHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const product = yield (0, product_service_1.getProduct)(id);
        res.status(200).json(product);
    }
    catch (err) {
        logger_utils_1.default.error(err);
        const message = err instanceof Error ? err.message : 'Unknown error ocurred';
        res.status(500).json({ message, error: err });
    }
});
exports.getProductHandler = getProductHandler;
const getAllProductsHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield (0, product_service_1.getAllProducts)();
        res.status(200).json(products);
    }
    catch (err) {
        logger_utils_1.default.error(err);
        const message = err instanceof Error ? err.message : 'Unknown error ocurred';
        res.status(500).json({ message, error: err });
    }
});
exports.getAllProductsHandler = getAllProductsHandler;
const updateProductHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const product = yield (0, product_service_1.updateProduct)(id, req.body);
        if (!product) {
            return res.status(404).json({ message: 'No product with such ID' });
        }
        res.status(200).json(product);
    }
    catch (err) {
        logger_utils_1.default.error(err);
        const message = err instanceof Error ? err.message : 'Unknown error ocurred';
        res.status(500).json({ message, error: err });
    }
});
exports.updateProductHandler = updateProductHandler;
const deleteProductHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const product = yield (0, product_service_1.deleteProduct)(id);
        if (!product) {
            return res.status(404).json({ message: 'No product with such ID' });
        }
        res.sendStatus(204);
    }
    catch (err) {
        logger_utils_1.default.error(err);
        const message = err instanceof Error ? err.message : 'Unknown error ocurred';
        res.status(500).json({ message, error: err });
    }
});
exports.deleteProductHandler = deleteProductHandler;
