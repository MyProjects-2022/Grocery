const { Router } = require('express');
const router = Router();

// Import Middlewares
const {
	validationCreate,

} = require('../middlewares/productMiddleware');

// Import Controllers
const cartControllers = require('../controllers/cartController');


 
// router.get('/product/getproduct/:id', add_to_cart.getproductbyid);
// router.get('/product/get_productby_categoryid', add_to_cart.get_productby_categoryid);
// router.get('/product/getproduct_details_with_mult_img/:id',add_to_cart.get_product_alldetails); 

router.post('/cart/add_to_cart',cartControllers.add_to_cart);
router.get('/cart/get_to_cart',cartControllers.get_to_cart); 
// router.put('/product/update_product',add_to_cart.update_product);
// router.delete('/product/delete_product', add_to_cart.delete_product);
// router.post('/product/product_image_Upload',add_to_cart.product_image_Upload);
// router.get('/product/getimages',add_to_cart.getimages);
// router.put('/product/update_product_image',add_to_cart.update_product_image);
// router.delete('/product/delete_product_image', add_to_cart.delete_product_image);
// router.get('/product/get_featured_product/:product_type',add_to_cart.get_featured_product);
// router.get('/product/get_popular_product/:product_type',add_to_cart.get_popular_product);
// router.get('/product/get_similar_product/:product_slug',add_to_cart.get_similar_product);
// router.get('/product/get_product_filter',add_to_cart.get_product_filter);
// router.get('/product/get_search_products',add_to_cart.get_search_products);




module.exports = router;
