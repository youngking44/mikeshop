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
const app_1 = __importDefault(require("./app"));
const config_1 = __importDefault(require("config"));
const connect_1 = __importDefault(require("./db/connect"));
const logger_utils_1 = __importDefault(require("./utils/logger.utils"));
const port = config_1.default.get('port');
const dbUri = config_1.default.get('dbUri');
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, connect_1.default)(dbUri);
        app_1.default.listen(port, () => logger_utils_1.default.info(`App running on port ${port}`));
    }
    catch (err) {
        logger_utils_1.default.error(err);
        process.exit(1);
    }
});
startServer();
