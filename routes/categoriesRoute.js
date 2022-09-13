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

router.get('/get_all_categories', categoriesController.getAll);

router.get('/get_categories_byid/:id', categoriesController.getOne);
// router.post(
// 	'/categories',
// 	[validationCreate, isTaskExistsCreate],
// 	categoriesController.create
// );
// router.put(
// 	'/categories',
// 	[validationUpdate, isTaskExistsUpdate],
// 	categoriesController.update
// );
router.post('/categories_add',[validationCreate, isTaskExistsCreate],categoriesController.categories_add);
router.put('/categories_update',categoriesController.categories_update);
// router.delete('/categories_delete', [validationDelete], categoriesController.categories_delete);
router.delete('/categories_delete', categoriesController.categories_delete);
router.post('/categories/update_picture', categoriesController.updatePicture);
router.post('/categories/send_email', categoriesController.sendEmail);

module.exports = router;
