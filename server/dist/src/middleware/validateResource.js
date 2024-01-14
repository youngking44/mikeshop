"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validateResource = (schema) => (req, res, next) => {
    try {
        schema.parse(req.body);
        next();
    }
    catch (e) {
        const message = 'Validation error';
        res.status(400).json({ message, error: e.errors });
    }
};
exports.default = validateResource;
