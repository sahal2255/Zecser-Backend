"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const router = (0, express_1.Router)();
const SECRET = 'zecser';
router.get('/set-token', (req, res) => {
    console.log('hitting auth reoute');
    const token = jsonwebtoken_1.default.sign({ id: 'user123' }, SECRET, { expiresIn: '7d' });
    res.cookie('token', token, {
        secure: false
    });
    res.json({ message: 'dummy token set into the cookie', token });
});
exports.default = router;
