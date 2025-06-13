"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authController_1 = require("../controllers/authController");
const router = (0, express_1.Router)();
router.get('/joblisting', authController_1.jobListingUser);
router.get('/profile', authController_1.getUserProfile);
exports.default = router;
