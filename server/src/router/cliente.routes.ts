import { Router } from "express";
import { getClientes } from '../controllers/cliente.controller'

const router = Router();

router.get('/', getClientes);

export default router;