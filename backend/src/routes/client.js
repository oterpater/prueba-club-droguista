const router = require('express').Router();
const clientController = require('../controllers/client.controller');

router.route('/').get(clientController.getAll);
router.route('/').post(clientController.create);
router.route('/:id').get(clientController.getOne);
router.route('/:id').put(clientController.update);
router.route('/:id').delete(clientController.delete);

module.exports = router;