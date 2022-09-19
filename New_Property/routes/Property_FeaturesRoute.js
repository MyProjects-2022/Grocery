const { Router } = require('express');
const router = Router();

// Import Middlewares
const {
	validationCreate,

} = require('../middlewares/Rent');

// Import Controllers
const PropertyFeaturesController = require('../controllers/PropertyFeaturesController');
router.post('/property_features/property_features_image',PropertyFeaturesController.add_property_features);
router.get('/property_features/get_property_features_alldetails/:id',PropertyFeaturesController.get_property_features_alldetails);
router.get('/property_features/get_all_images',PropertyFeaturesController.get_all_images);

router.put('/property_features/update_property_features_image',PropertyFeaturesController.update_property_features_image);
router.delete('/property_features/delete_property_Features_image/:id', PropertyFeaturesController.delete_property_Features_image);



module.exports = router;
