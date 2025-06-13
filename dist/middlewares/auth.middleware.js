"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const SECRET = 'zecser';
const authenticate = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        res.status(401).json({ message: 'Unautherized' });
        return;
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(token, SECRET);
        req.user = decoded;
        console.log('authenticated');
        console.log('decoded', decoded);
        next();
    }
    catch (error) {
        res.status(401).json({ message: 'unautherizedsd' });
        return;
    }
};
exports.authenticate = authenticate;
