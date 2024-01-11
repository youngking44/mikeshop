"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_controller_1 = require("../controllers/user.controller");
const validateResource_1 = __importDefault(require("../middleware/validateResource"));
const verifyToken_1 = require("../middleware/verifyToken");
const user_schema_1 = require("../schema/user.schema");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/', verifyToken_1.verifyTokenAndAdmin, user_controller_1.getAllusersHandler);
router.get('/:id', verifyToken_1.verifyTokenAndAdmin, user_controller_1.getUserHandler);
router.put('/:id', (0, validateResource_1.default)(user_schema_1.updateUserSchema), verifyToken_1.verifyTokenAndAuthorization, user_controller_1.updateUserHandler);
router.delete('/:id', verifyToken_1.verifyTokenAndAuthorization, user_controller_1.deleteUserHandler);
exports.default = router;
