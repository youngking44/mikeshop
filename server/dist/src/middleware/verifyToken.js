"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyTokenAndAdmin = exports.verifyTokenAndAuthorization = exports.verifyToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("config"));
const accessToken = config_1.default.get('accessToken');
const verifyToken = (req, res, next) => {
    //req.headers.authorization || req.headers.Authorization i did this to allow the frontend developer to attach authorization to the headers with letter "a" either in lowercase or uppercase.
    const authHeader = req.headers.authorization || req.headers.Authorization;
    if (!authHeader)
        return res.status(401).json({ message: 'Not authenticated' });
    const token = authHeader.split(' ')[1];
    jsonwebtoken_1.default.verify(token, accessToken, (err, user) => {
        if (err) {
            res.status(403).json({ message: 'Token is not valid' });
        }
        else {
            req.user = user;
            next();
        }
    });
};
exports.verifyToken = verifyToken;
const verifyTokenAndAuthorization = (req, res, next) => {
    (0, exports.verifyToken)(req, res, () => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next();
        }
        else {
            res.status(403).json({ message: "You're not authorized" });
        }
    });
};
exports.verifyTokenAndAuthorization = verifyTokenAndAuthorization;
const verifyTokenAndAdmin = (req, res, next) => {
    (0, exports.verifyToken)(req, res, () => {
        if (req.user.isAdmin) {
            next();
        }
        else {
            res.status(403).json({ message: "You're not authorized" });
        }
    });
};
exports.verifyTokenAndAdmin = verifyTokenAndAdmin;
