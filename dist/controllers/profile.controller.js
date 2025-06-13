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
Object.defineProperty(exports, "__esModule", { value: true });
exports.addProfileDetails = void 0;
const addProfileDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    console.log("hitting on the add profile function");
    const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
    console.log("userid ", userId);
    const { about, experience, education, phoneNumber, github } = req.body;
    console.log('req.body', req.body);
    const profileImage = ((_b = req.file) === null || _b === void 0 ? void 0 : _b.filename) || "";
    if (!userId) {
        res.status(404).json({ message: 'User not found' });
        return;
    }
});
exports.addProfileDetails = addProfileDetails;
