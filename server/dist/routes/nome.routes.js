"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const nome_controller_1 = require("../controllers/nome.controller");
const router = (0, express_1.Router)();
router.get('/', nome_controller_1.getNome);
exports.default = router;
