import { Router } from 'express';
import AutorController from '../controllers/AutorController.js';

const router = Router();

router.post('/', AutorController.create);
router.get('/', AutorController.getAll);
router.get('/:id', AutorController.getById);
router.put('/:id', AutorController.update);
router.delete('/:id', AutorController.delete);

export default router;
