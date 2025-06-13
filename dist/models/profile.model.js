"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const profileSchema = new mongoose_1.default.Schema({
    userName: { type: String },
    email: { type: String, required: true },
    password: { type: String, required: true },
    about: { type: String },
    experience: { type: String },
    education: { type: String },
    phoneNumber: { type: String },
    github: { type: String },
    profileImage: { type: String },
    resume: { type: String },
}, { timestamps: true });
exports.User = mongoose_1.default.model("User", profileSchema);
