import { Router } from "express";
import { getTitulos } from '../controllers/titulo.controller'

const router = Router();

router.get('/', getTitulos);

export default router;