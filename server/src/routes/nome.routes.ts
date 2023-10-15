import { Router } from "express";
import { getNome } from '../controllers/nome.controller'

const router = Router();

router.get('/', getNome);

export default router;