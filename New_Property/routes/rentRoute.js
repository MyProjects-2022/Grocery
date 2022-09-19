const { Router } = require('express');
const router = Router();

// Import Middlewares
const {
	validationCreate,

} = require('../middlewares/Rent');

// Import Controllers
const rentController = require('../controllers/rentController');
router.get('/rent/get_all_rent_property',rentController.get_all_rent_property); 
router.get('/rent/getrentProperty/:id', rentController.get_rent_property_byid);
router.post('/rent/add_rent_property',rentController.add_rent_property);
router.put('/rent/update_rent_property',rentController.update_rent_property);
router.delete('/rent/delete_rent_property', rentController.delete_rent_property);


module.exports = router;
