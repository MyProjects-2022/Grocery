const { Router } = require('express');
const router = Router();

// Import Middlewares
const {
	validationCreate,
	isTaskExistsCreate,
	validationUpdate,
	isTaskExistsUpdate,
	validationDelete,
} = require('../middlewares/categoriesMiddleware');

// Import Controllers
const categoriesController = require('../controllers/categoriesController');

router.get('/categories', categoriesController.getAll);

router.get('/categories/:id', categoriesController.getOne);
router.post(
	'/categories',
	[validationCreate, isTaskExistsCreate],
	categoriesController.create
);
router.put(
	'/categories',
	[validationUpdate, isTaskExistsUpdate],
	categoriesController.update
);
router.delete('/categories', [validationDelete], categoriesController.delete);
router.post('/categories/update_picture', categoriesController.updatePicture);
router.post('/categories/send_email', categoriesController.sendEmail);

module.exports = router;
