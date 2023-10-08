import { NextFunction, Router } from "express";
import { deleteCliente, getCliente, getClientes, postCliente, putCliente } from '../controllers/cliente.controller'

const router = Router();

// const middlewares = (req: Request, res: Response, next: NextFunction) => {
//     req.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
//     console.log(res.header)
//     next();
// }
// // L


router.get('/', getClientes);
router.get('/:id', getCliente);
router.delete('/:id', deleteCliente);
router.post('/', postCliente);
router.put('/:id', putCliente);

export default router;