"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const estoque_controller_1 = require("../controllers/estoque.controller");
const router = (0, express_1.Router)();
router.get('/', estoque_controller_1.getEstoques);
router.get('/:id', estoque_controller_1.getEstoque);
router.delete('/:id', estoque_controller_1.deleteEstoque);
router.post('/', estoque_controller_1.postEstoque);
router.put('/:id', estoque_controller_1.putEstoque);
exports.default = router;
