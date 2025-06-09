import { Router } from 'express';
import EmprestimoController from '../controllers/EmprestimoController.js';

const router = Router();

router.post('/', EmprestimoController.create);
router.get('/', EmprestimoController.getAll);
router.get('/:id', EmprestimoController.getById);
router.put('/:id', EmprestimoController.update);
router.delete('/:id', EmprestimoController.delete);

export default router;
