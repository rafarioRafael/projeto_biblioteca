import { Router } from "express";
import { deleteLivro, getLivro, getLivros, postLivro, putLivro } from '../controllers/livro.controller'

const router = Router();

router.get('/', getLivros);
router.get('/:id', getLivro);
router.delete('/:id', deleteLivro);
router.post('/', postLivro);
router.put('/:id', putLivro);

export default router;