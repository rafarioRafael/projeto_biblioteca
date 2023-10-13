"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const titulo_controller_1 = require("../controllers/titulo.controller");
const router = (0, express_1.Router)();
router.get('/', titulo_controller_1.getTitulos);
exports.default = router;
