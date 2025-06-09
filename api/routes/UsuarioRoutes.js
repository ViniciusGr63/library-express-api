import { Router } from 'express';
import UsuarioController from '../controllers/UsuarioController.js';

const router = Router();

router.post('/', UsuarioController.create);
router.get('/', UsuarioController.getAll);
router.get('/:id', UsuarioController.getById);
router.put('/:id', UsuarioController.update);
router.delete('/:id', UsuarioController.delete);

export default router;
