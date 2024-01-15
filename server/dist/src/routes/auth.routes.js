"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_controller_1 = require("../controllers/auth.controller");
const validateResource_1 = __importDefault(require("../middleware/validateResource"));
const user_schema_1 = require("../schema/user.schema");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.post('/register', (0, validateResource_1.default)(user_schema_1.createUserSchema), auth_controller_1.createUserHandler);
router.post('/login', (0, validateResource_1.default)(user_schema_1.loginUserSchema), auth_controller_1.loginUserHandler);
router.get('/refresh', auth_controller_1.refreshTokenHandler);
exports.default = router;
