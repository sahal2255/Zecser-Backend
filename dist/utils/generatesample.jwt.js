"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const SECRET = 'zecser';
const dummyId = {
    id: 'user123'
};
const token = jsonwebtoken_1.default.sign(dummyId, SECRET, { expiresIn: '7d' });
console.log('dummy token', token);
