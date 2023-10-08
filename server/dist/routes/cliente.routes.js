"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cliente_controller_1 = require("../controllers/cliente.controller");
const router = (0, express_1.Router)();
// const middlewares = (req: Request, res: Response, next: NextFunction) => {
//     req.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
//     console.log(res.header)
//     next();
// }
// // L
router.get('/', cliente_controller_1.getClientes);
router.get('/:id', cliente_controller_1.getCliente);
router.delete('/:id', cliente_controller_1.deleteCliente);
router.post('/', cliente_controller_1.postCliente);
router.put('/:id', cliente_controller_1.putCliente);
exports.default = router;
