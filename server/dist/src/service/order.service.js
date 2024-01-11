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
exports.updateOrder = exports.createOrder = void 0;
const order_models_1 = __importDefault(require("../models/order.models"));
//* CREATE ORDER
const createOrder = (input) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newOrder = yield order_models_1.default.create(input);
        console.log('New order...', newOrder);
        return newOrder;
    }
    catch (err) {
        throw err;
    }
});
exports.createOrder = createOrder;
//* UPDATE ORDER
const updateOrder = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order = yield order_models_1.default.findOneAndUpdate({ orderId: id }, payload, { new: true });
        console.log('Updated Order...', order);
        return order;
    }
    catch (err) {
        throw err;
    }
});
exports.updateOrder = updateOrder;
