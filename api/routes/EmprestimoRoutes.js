const express = require('express');
const EmprestimoController = require('../controllers/EmprestimoController');

const router = express.Router();

router.post('/', EmprestimoController.create);
router.get('/', EmprestimoController.getAll);
router.get('/:id', EmprestimoController.getById);
router.put('/:id', EmprestimoController.update);
router.delete('/:id', EmprestimoController.delete);

module.exports = router;
