const { Router } = require('express');
const router = Router();

// Import Middlewares
const {
	validationCreate,

} = require('../middlewares/productMiddleware');

// Import Controllers
const productsController = require('../controllers/productsController');
router.get('/product/getproduct',productsController.getproduct); 
 
router.get('/product/getproduct/:id', productsController.getproductbyid);
router.get('/product/get_productby_categoryid', productsController.get_productby_categoryid);
router.get('/product/getproduct_details_with_mult_img/:id',productsController.get_product_alldetails); 

router.post('/product/add_product',productsController.add_product);
router.put('/product/update_product',productsController.update_product);
router.delete('/product/delete_product', productsController.delete_product);
router.post('/product/product_image_Upload',productsController.product_image_Upload);
router.get('/product/getimages',productsController.getimages);
router.put('/product/update_product_image',productsController.update_product_image);
router.delete('/product/delete_product_image', productsController.delete_product_image);
router.get('/product/get_featured_product/:product_type',productsController.get_featured_product);
router.get('/product/get_popular_product/:product_type',productsController.get_popular_product);
router.get('/product/get_similar_product/:product_slug',productsController.get_similar_product);
router.get('/product/get_product_filter',productsController.get_product_filter);
router.post('/product/get_search_products',productsController.get_search_products);




module.exports = router;
