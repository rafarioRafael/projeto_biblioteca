import { Router } from "express";
import { deleteEstoque, getEstoque, getEstoques, postEstoque, putEstoque } from '../controllers/estoque.controller'

const router = Router();

router.get('/', getEstoques);
router.get('/:id', getEstoque);
router.delete('/:id', deleteEstoque);
router.post('/', postEstoque);
router.put('/:id', putEstoque);

export default router;