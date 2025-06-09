const express = require('express');
const AutorController = require('../controllers/AutorController');

const router = express.Router();

router.post('/', AutorController.create);
router.get('/', AutorController.getAll);
router.get('/:id', AutorController.getById);
router.put('/:id', AutorController.update);
router.delete('/:id', AutorController.delete);

module.exports = router;
