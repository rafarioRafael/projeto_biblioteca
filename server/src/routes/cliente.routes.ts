import { Router } from "express";
import { deleteCliente, getCliente, getClientes, postCliente, putCliente } from '../controllers/cliente.controller'

const router = Router();

router.get('/', getClientes);
router.get('/:id', getCliente);
router.delete('/:id', deleteCliente);
router.post('/', postCliente);
router.put('/:id', putCliente);

export default router;