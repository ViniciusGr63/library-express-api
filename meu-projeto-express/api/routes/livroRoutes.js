const express = require('express');
const LivroController = require('../controllers/LivroController');

const router = express.Router();


router.post('/', LivroController.create);       
router.get('/', LivroController.getAll);        
router.get('/:id', LivroController.getById);    
router.put('/:id', LivroController.update);     
router.delete('/:id', LivroController.delete);  

module.exports = router;
