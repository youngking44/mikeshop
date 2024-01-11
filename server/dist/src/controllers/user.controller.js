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
exports.deleteUserHandler = exports.updateUserHandler = exports.getAllusersHandler = exports.getUserHandler = void 0;
const logger_utils_1 = __importDefault(require("../utils/logger.utils"));
const user_service_1 = require("../service/user.service");
const getUserHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const user = yield (0, user_service_1.getUserById)(id);
        res.status(200).json(user);
    }
    catch (err) {
        logger_utils_1.default.error(err);
        const message = err instanceof Error ? err.message : 'Unknown error ocurred';
        res.status(500).json({ message, error: err });
    }
});
exports.getUserHandler = getUserHandler;
const getAllusersHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, user_service_1.getAllUsers)();
        res.status(200).json(users);
    }
    catch (err) {
        logger_utils_1.default.error(err);
        const message = err instanceof Error ? err.message : 'Unknown error ocurred';
        res.status(500).json({ message, error: err });
    }
});
exports.getAllusersHandler = getAllusersHandler;
const updateUserHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const user = yield (0, user_service_1.updateUser)(id, req.body);
        if (!user) {
            return res.status(404).json({ message: 'No user with such ID' });
        }
        res.status(200).json(user);
    }
    catch (err) {
        logger_utils_1.default.error(err);
        const message = err instanceof Error ? err.message : 'Unknown error ocurred';
        res.status(500).json({ message, error: err });
    }
});
exports.updateUserHandler = updateUserHandler;
const deleteUserHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const user = yield (0, user_service_1.deleteUser)(id);
        if (!user) {
            return res.status(404).json({ message: 'No user with such ID' });
        }
        res.sendStatus(204);
    }
    catch (err) {
        logger_utils_1.default.error(err);
        const message = err instanceof Error ? err.message : 'Unknown error ocurred';
        res.status(500).json({ message, error: err });
    }
});
exports.deleteUserHandler = deleteUserHandler;
