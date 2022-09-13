require('dotenv').config();
// Load model
const { Add_to_Cart } = require('../db');

const { Op, where } = require('sequelize');
const path = require('path');
const utils = require('../utils');
const nodemailer = require('nodemailer');
var formidable = require('formidable');
var fs = require('fs');
const { max, result } = require('lodash');
// const Sequelize = require('sequelize'); 
const Sequelize_db = require('../db');
const { array } = require('yup');
const IncomingForm = require('formidable');
const Sequelize = Sequelize_db.sequelize;

// const getPagingData = (data, page, limit) => {

// 	const { count: totalItems, rows: result } = data;

// 	const currentPage = page ? +page : 0;
// 	const totalPages = Math.ceil(totalItems / limit);


// 	if (result.length > 0) {

// 		return { totalItems, status: "success", message: "Get Data Successfully", image_url: process.env.IMAGE_URL, result, totalPages, currentPage };
// 	} else {
// 		return { status: "false", message: "No Data Found" }

// 	}
// };


// const getPagination = (page, size) => { 
// 	const limit = size ? +size : 3;
// 	const offset = page ? page * limit : 0;
// 	return { limit, offset };
// };

// // All product
// module.exports.getproduct = async (req, res, next) => {

// 	const { page, size, title } = req.query;
// 	var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
// 	const { limit, offset } = getPagination(page, size);
// 	Product.findAndCountAll({ limit, offset })
// 		.then(data => {
// 			const response = getPagingData(data, page, limit);

// 			res.send(response);

// 		})
// 		.catch(err => {
// 			res.status(500).send({
// 				message:
// 					err.message || "Some error occurred while retrieving tutorials."
// 			});
// 		});

// };




// // get product by id  
// module.exports.getproductbyid = async (req, res, next) => {
// 	try {
// 		const id = req.params.id;
// 		const products = await Product.findAll({
// 			where: {
// 				id: id,
// 			},
// 		});

// 		if (products.length > 0) {
// 			res.json({
// 				status: 'success',
// 				message: "Get Product by Id Successfully !",
// 				image_url: process.env.IMAGE_URL,
// 				result: products,
// 			});
// 		} else {
// 			res.json({
// 				status: 'false',
// 				message: "Products does not found",
// 			});

// 		}
// 	} catch (err) {
// 		return next(err);
// 	}
// };

// // get product by category id
// module.exports.get_productby_categoryid = async (req, res, next) => {
// 	const { category_id, page, size, title } = req.query;
// 	var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
// 	const { limit, offset } = getPagination(page, size, category_id);
// 	console.log("category_id", category_id)
// 	Product.findAndCountAll({ where: { category_id: category_id }, limit, offset })
// 		.then(data => {
// 			const response = getPagingData(data, page, limit);
// 			res.send(response);

// 		}).catch(err => {
// 			res.status(500).send({
// 				message:
// 					err.message || "Some error occurred while retrieving tutorials."
// 			});
// 		});

// };


// // get product details with multiple images

// module.exports.get_product_alldetails = async (req, res, next) => {
// 	try {
// 		const id = req.params.id;
// 		const products = await Product.findAll({
// 			where: {
// 				id: id,
// 			},
// 		});


// 		const product_id = req.params.id;
// 		const productsImg = await ProductImage.findAll({
// 			where: {
// 				product_id: product_id,
// 			},
// 		});

// 		const result = products.concat({ Image: productsImg })
// 		const data = products.concat(productsImg)

// 		if (data.length > 0) {
// 			res.json({
// 				status: 'success',
// 				message: "Get Product Details with all images Successfully !",
// 				image_url: process.env.IMAGE_URL,
// 				result: result

// 			});
// 		}
// 		else {
// 			res.json({
// 				status: 'false',
// 				message: "Products images does not found",
// 			});
// 		}

// 	} catch (err) {
// 		return next(err);
// 	}
// };



//Add to Cart Product 
module.exports.add_to_cart = async (req, res, next) => {
	var form = new formidable.IncomingForm();
	form.parse(req,async(err,fields,files) => {

		
		if(err) throw err


		// console.log("fields",fields)

		
		const user_id = fields.user_id;
		const username = fields.username;
		const product_id = fields.product_id;
		const status = fields.status;
		const quantity = fields.quantity;
		const price=fields.price
		
		// const result = await Product.findOne({
		// 	where: {
		// 		product_name: product_name,
		// 	},
		// });

		// if (result) {
		// 	if (fields.product_name == result.product_name) {
		// 		res.json({ status: 'false', message: 'Product name is already exits.' });
		// 	}
		// }
		
		const checkId=await Add_to_Cart.findAll({
			where:{user_id:user_id}
		})
		if(checkId)
		if(checkId.length>0)
		{
			res.json({ status: 'false', message: 'Product already added to cart' });
		}else{
	 	if (!product_id) {

				res.json({ status: 'false', message: 'Product id is null.' });
			}

			else if (!username) {
				res.json({ status: 'false', message: 'username is null.' });
			} 
			else if(!quantity){
				res.json({ status: 'false', message: 'quantity is null.' });

			}else if(!status){
				res.json({ status: 'false', message: 'status is null.' });
			}

						Add_to_Cart.create(
							{
								user_id:user_id,
								username: username,
								product_id: product_id,
								quantity:quantity,
								status: status,
								price:price 
									
							},

						).then((created) => {	
							console.log("created",created) 
							if(created!==0)	{					
								res.json({
									status: 'success',
									message: "Successfully Product Add to "+status+"",
									result:created,
								});
							}else{
								res.json({
									status: 'false',
									message: " Products no added",
									
							})
						
							}													
						})						
						.catch((err) => {
							return next(err);
						});
					}
				});

				}
module.exports.get_to_cart=async(req,res,next)=>{
	var form = new formidable.IncomingForm();
	form.parse(req,async (err,fields,files) => {
		if(err)throw err
		console.log("tst")
		const id =fields.id;
	
		const cart=await Add_to_Cart.findAll({
			where:{id:id}
		})
		if(cart.length>0){
			res.json({status:"success",message:"Successfully get data cart",result:cart})
		}else{
			res.json({status:"false",message:"no data found"})

		} 
	})
}

// // update product 
// module.exports.update_product = async (req, res, next) => {
// 	var form = new formidable.IncomingForm();
// 	form.parse(req, async (err, fields, files) => {
// 		const id = fields.id;
// 		const product_name = fields.product_name;
// 		const product_amount = fields.product_amount;
// 		const product_discount_price = fields.product_discount_price;
// 		const category_id = fields.category_id;
// 		const status = fields.status;
// 		const description = fields.description;
// 		const tag = fields.tag;
// 		const rating = fields.rating;
// 		const is_weight_variable = fields.is_weight_variable
// 		const product_type = fields.product_type;
// 		const product_slug = fields.product_slug;
// 		let item;
// 		const checkid = await Product.findOne({
// 			where: { id: id }
// 		})
// 		if (checkid) {

// 			if (files.property_cover_image) {

// 				if (!category_id) {
// 					var err = new Error('Please select category');
// 					return next(err);
// 				}

// 				// if (files.product_image.name &&!files.product_image.name.match(/\.(jpg|jpeg|png)$/i))
// 				//  {
// 				// 	var err = new Error('Please select .jpg or .png file only');
// 				// 	return next(err);
// 				// } 
// 				else if (files.product_image.size > 2097152) {
// 					var err = new Error('Please select file size < 2mb');
// 					return next(err);
// 				} else {
// 					var newFileName = utils.timestampFilename(files.product_image.name);

// 					var oldpath = files.product_image.path;
// 					var newpath = __basedir + '/public/uploads/pictures/' + newFileName;
// 					fs.rename(oldpath, newpath, function (err) {
// 						if (err) {
// 							return next(err);
// 						}
// 					})

// 					item = newFileName
// 				}
// 			} else {

// 			}
// 			Product.update(
// 				{

// 					picture: newFileName,
// 					product_name: product_name,
// 					product_amount: product_amount,
// 					product_discount_price: product_discount_price,
// 					product_image: item,
// 					category_id: category_id,
// 					status: status,
// 					description: description,
// 					tag: tag,
// 					rating: rating,
// 					is_weight_variable: is_weight_variable,
// 					product_type: product_type,
// 					product_slug: product_slug,

// 				},
// 				{
// 					where: {
// 						id: {
// 							[Op.eq]: id,
// 						},
// 					},
// 				}

// 			).then((updated) => {
// 				res.json({
// 					status: 'success',
// 					message: "Update Product Successfully !",
// 					result: {
// 						newFileName: newFileName,
// 						affectedRows: updated,
// 					},
// 				});
// 			})
// 				.catch((err) => {
// 					return next(err);
// 				});


// 		} else {
// 			res.json({
// 				status: 'false',
// 				message: "id does not exists!"
// 			})
// 		}
// 	});
// };



// // Delete Product 
// module.exports.delete_product = async (req, res, next) => {
// 	try {
// 		const id = req.body.id;
// 		const checkid = await Product.findOne({
// 			where: { id: id }
// 		})
// 		if (checkid) {


// 			const deleted = await Product.destroy({
// 				where: {
// 					id: {
// 						[Op.eq]: id,
// 					},
// 				},
// 			});

// 			res.json({
// 				status: 'success',
// 				message: "Product Successfully Deleted !",
// 				result: {
// 					affectedRows: deleted,
// 				},

// 			});
// 		}
// 		else {
// 			res.json({
// 				status: 'false',
// 				message: "id does not exits !",
// 			})
// 		}
// 	} catch (err) {
// 		return next(err);
// 	}
// };
// //***********************************************Product_images**************************************************** */




// // get product_images	
// module.exports.getimages = async (req, res, next) => {
// 	console.log("test")
// 	const { page, size, title } = req.query;
// 	var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
// 	const { limit, offset } = getPagination(page, size);


// 	ProductImage.findAndCountAll({ limit, offset })
// 		.then(data => {
// 			const response = getPagingData(data, page, limit);
// 			res.send(response);
// 		})
// 		.catch(err => {
// 			res.status(500).send({
// 				message:
// 					err.message || "Some error occurred while retrieving tutorials."
// 			});
// 		});
// };

// module.exports.product_image_Upload = async (req, res, next) => {

// 	var form = new formidable.IncomingForm();
// 	form.multiples = true;
// 	var oldpath;
// 	var newpath
// 	form.parse(req, async (err, fields, files) => {
// 		const product_id = fields.product_id;

// 		const result = await Product.findOne({
// 			where: {
// 				id: product_id,
// 			},
// 		});


// 		if (!product_id) {
// 			res.json({ status: false, message: 'Entered product id ' })
// 		}

// 		if (!result) {

// 			res.json({ status: false, message: 'No product available this id' });
// 		}
// 		// console.log("files.product_image.length",files.product_image)

// 		if (!files.product_image[0] > 0) {
// 			res.json({ message: 'Please select product image' });
// 		}
// 		// if (!files.product_image) {
// 		// 	var err = new Error('Please select product image');
// 		// 	return next(err);
// 		// }


// 		// image check
// 		if (files.product_image.length > 0) {


// 			for (j = 0; j < files.product_image.length; j++) {

// 				// console.log("files", files.product_image[j].name);

// 				var newFileName = new Date().getTime() + '_' + files.product_image[j].name;
// 				//	var newFileName = utils.timestampFilename(files.product_image[j].name);
// 				oldpath = files.product_image[j].path;
// 				newpath = __basedir + '/public/uploads/pictures/' + newFileName;

// 				fs.rename(oldpath, newpath, function (err) {
// 					if (err) {
// 						//return next(err);
// 					} else {
// 						// image inserting 

// 					}

// 				});
// 				console.log("newFileName", newFileName)
// 				ProductImage.create(
// 					{

// 						product_image: newFileName,
// 						product_id: product_id,
// 					},
// 				).then((created) => {
// 					res.json({
// 						status: 'success',
// 						message: 'Product Images Uploaded Sucessfully',
// 						affectedRows: created,
// 					});
// 				})
// 					.catch((err) => {
// 						return next(err);
// 					});



// 			} // loop end

// 		}

// 	});

// }

// //update Product Image

// module.exports.update_product_image = async (req, res, next) => {
// 	var form = new formidable.IncomingForm();
// 	form.parse(req, async (err, fields, files) => {
// 		const id = fields.id;
// 		const checkid = await Product.findOne({
// 			where: { id: id }
// 		})
// 		if (checkid) {
// 			if (!files.product_image) {
// 				res.json({ status: false, message: 'Please select product image' });

// 			}
// 			// if (files.product_image.name &&!files.product_image.name.match(/\.(jpg|jpeg|png)$/i)) 
// 			// {
// 			// 	var err = new Error('Please select .jpg or .png file only');
// 			// 	return next(err);
// 			// } 
// 			else if (files.product_image.size > 2097152) {
// 				var err = new Error('Please select file size < 2mb');
// 				return next(err);
// 			} else {
// 				var newFileName = utils.timestampFilename(files.product_image.name);

// 				var oldpath = files.product_image.path;
// 				var newpath = __basedir + '/public/uploads/pictures/' + newFileName;
// 				fs.rename(oldpath, newpath, function (err) {
// 					if (err) {
// 						return next(err);
// 					}

// 					ProductImage.update(
// 						{
// 							product_image: newFileName,

// 						},
// 						{
// 							where: {
// 								id: {
// 									[Op.eq]: id,
// 								},
// 							},
// 						}

// 					).then((updated) => {
// 						res.json({
// 							status: 'success',
// 							message: 'Product Images Updaded Sucessfully',
// 							affectedRows: updated,

// 						});
// 					}).catch((err) => {
// 						return next(err);
// 					});
// 				});
// 			}
// 		}
// 		else {
// 			res.json({
// 				status: 'false',
// 				message: 'Product id does not exists'
// 			})
// 		}

// 	});
// };

// // Delete Product Images
// module.exports.delete_product_image = async (req, res, next) => {
// 	try {
// 		const id = req.body.id;


// 		const deleted = await ProductImage.destroy({
// 			where: {
// 				id: {
// 					[Op.eq]: id,
// 				},
// 			},
// 		});
// 		if (deleted) {
// 			res.json({
// 				status: 'success',
// 				message: "Deleted Product Images Successfully !",
// 				result: {
// 					affectedRows: deleted,
// 				},
// 			});
// 		} else {
// 			res.json({
// 				status: 'false',
// 				message: "No any Changes !",
// 				result: {
// 					affectedRows: deleted,
// 				},
// 			})
// 		}

// 	} catch (err) {
// 		return next(err);
// 	}
// };

// //Get  Featured product

// module.exports.get_featured_product = async (req, res, next) => {
// 	try {
// 		const product_type = req.params.product_type;
// 		const feature_products = await Product.findAll({
// 			where: {
// 				product_type: product_type,
// 			},
// 		});

// 		res.json({
// 			status: 'success',
// 			message: "Features Product Successfully get!",
// 			result: feature_products

// 		});

// 	} catch (err) {
// 		return next(err);
// 	}
// };

// //Get Popular product

// module.exports.get_popular_product = async (req, res, next) => {
// 	try {
// 		const product_type = req.params.product_type;
// 		const popular_products = await Product.findAll({
// 			where: {
// 				product_type: product_type,
// 			},
// 		});

// 		res.json({
// 			status: 'success',
// 			message: "Popular Product Successfully get!",
// 			result: popular_products

// 		});

// 	} catch (err) {
// 		return next(err);
// 	}
// };

// //Get slug product
// module.exports.get_similar_product = async (req, res, next) => {
// 	try {
// 		const product_slug = req.params.product_slug;
// 		const similar_products = await Product.findAll({
// 			where: {
// 				product_slug: product_slug,
// 			},
// 		});

// 		res.json({
// 			status: 'success',
// 			message: "Similar Product Successfully get!",
// 			result: similar_products

// 		});

// 	} catch (err) {
// 		return next(err);
// 	}
// };


// //get product filter api atribute 
// module.exports.get_product_filters = async (req, res, next) => {
// 	try {
// 		const products = await Product.findAll({

// 			attributes: [
// 				[Sequelize.fn('min', Sequelize.col('product_amount')), 'MinPrice'],
// 				[Sequelize.fn('max', Sequelize.col('product_amount')), 'MaxPrice'],
// 				[Sequelize.fn('min', Sequelize.col('product_discount_price')), 'MinDiscountPrice'],
// 				[Sequelize.fn('max', Sequelize.col('product_discount_price')), 'MaxDiscountPrice'],
// 			],
// 		}, { raw: true });// console.log("Product",products)			

// 		const Brand = await Product.findAll({
// 			attributes: [[Sequelize.literal('distinct `brand`'), 'Brand'],]
// 		}, { distinct: true, raw: true });


// 		var data = products.concat(Brand)


// 		if (data.length > 0) {
// 			res.json({
// 				status: 'success',
// 				message: "Get Product Filter Successfully !",
// 				image_url: process.env.IMAGE_URL,
// 				result: data,
// 			});
// 		} else {
// 			res.json({
// 				status: 'false',
// 				message: "Products does not found",
// 			});

// 		}
// 	} catch (err) {
// 		return next(err);
// 	}
// };

// module.exports.get_product_filter = async (req, res, next) => {

// 	const products = await Product.findAll({

// 		attributes: [
// 			[Sequelize.fn('min', Sequelize.col('product_amount')), 'MinPrice'],
// 			[Sequelize.fn('max', Sequelize.col('product_amount')), 'MaxPrice'],
// 			[Sequelize.fn('min', Sequelize.col('product_discount_price')), 'MinDiscountPrice'],
// 			[Sequelize.fn('max', Sequelize.col('product_discount_price')), 'MaxDiscountPrice'],
// 		],
// 	}, { raw: true });
// 	var sql = 'SELECT  GROUP_CONCAT (DISTINCT brand SEPARATOR ",") as Brand from products'
// 	Sequelize.query(sql).then(function (results) {
// 		const data = products.concat(results[0]);
// 		if (data.length > 0) {
// 			res.json({
// 				status: 'success',
// 				message: "Get Product Filter Successfully !",
// 				image_url: process.env.IMAGE_URL,
// 				result: data,
// 			});
// 		} else {
// 			res.json({
// 				status: 'false',
// 				message: "Products does not found",
// 			});
// 		}
// 	})
// }


// module.exports.get_search_products = (req, res) => {


// 	let sql = 'select * from products where  product_name LIKE "%' + req.body.search + '%" OR product_amount LIKE"%' + req.body.search + '%" OR category_id LIKE"%' + req.body.search + '%"';
// 	Sequelize.query(sql,null,{ raw: true, type: Sequelize.query.SELECT}).then(function (results,err) {
// 		if(err) throw err 

// 	  if (results[0].length > 0) {
	
// 		return res.send({ statuscode: 200, message: ' Successfully Search Products data !!!',data:results[0] });
// 	  } else {
// 		return res.send({ "status": "false", message: 'no data found ' });
// 	  }
// 	})
//   }

 




