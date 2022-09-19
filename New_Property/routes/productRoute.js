const { Router } = require('express');
const router = Router();

// Import Middlewares
const {
	validationCreate,

} = require('../middlewares/productMiddleware');

// Import Controllers
const productsController = require('../controllers/productsController');
router.get('/product/getproduct',productsController.getproduct); 
 
router.get('/product/:id', productsController.getproductbyid);
router.post('/product/add_product',productsController.add_product);
router.put('/product/update_product',productsController.update_product);
router.delete('/product/delete_product', productsController.delete_product);
router.post('/product/product_image_Upload',productsController.product_image_Upload);
router.get('/product/getimages',productsController.getimages);
router.put('/product/update_product_image',productsController.update_product_image);
router.delete('/product/delete_product_image', productsController.delete_product_image);





module.exports = router;
