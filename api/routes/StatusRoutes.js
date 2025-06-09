const express = require('express');
const StatusController = require('../controllers/StatusController');

const router = express.Router();

router.post('/', StatusController.create);
router.get('/', StatusController.getAll);
router.get('/:id', StatusController.getById);
router.delete('/:id', StatusController.delete);

module.exports = router;
