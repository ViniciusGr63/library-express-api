import { Router } from 'express';
import LivroController from '../controllers/LivroController.js';

const router = Router();


router.post('/', LivroController.create);
router.get('/', LivroController.getAll);
router.get('/:id', LivroController.getById);
router.put('/:id', LivroController.update);
router.delete('/:id', LivroController.delete);

export default router;
