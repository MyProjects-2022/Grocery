require('dotenv').config();
// Load model
const { Product } = require('../db');
const { ProductImage } = require('../db');
const { Op } = require('sequelize');
const path = require('path');
const utils = require('../utils');
const nodemailer = require('nodemailer');
var formidable = require('formidable');
var fs = require('fs');


const getPagingData = (data, page, limit) => {

	const { count: totalItems, rows: results } = data;
	const currentPage = page ? +page : 0;
	const totalPages = Math.ceil(totalItems / limit);
	if (results.length > 0) {
		// console.log("result",results);

		// results.map(function(ele){
		// 	results.products["image_url"]= process.env.IMAGE_URL;
		// 	console.log("resultsresults",results);
		// });
		// results.forEach(function (element) {

		// 	element.image_url= process.env.IMAGE_URL;
		// 	console.log("element",element[0])
		//   });
		//  console.log("results",results);
		return { totalItems, status: "success", message: "Get Data Successfully", image_url: process.env.IMAGE_URL, results, totalPages, currentPage };
	} else {
		return { status: "false", message: "No Data Found" }
	}
};


const getPagination = (page, size) => {
	const limit = size ? +size : 3;
	const offset = page ? page * limit : 0;
	return { limit, offset };
};

// All product
module.exports.getproduct = async (req, res, next) => {

	const { page, size, title } = req.query;
	var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
	const { limit, offset } = getPagination(page, size);
	Product.findAndCountAll({ limit, offset })
		.then(data => {
			const response = getPagingData(data, page, limit);

			res.send(response);

		})
		.catch(err => {
			res.status(500).send({
				message:
					err.message || "Some error occurred while retrieving tutorials."
			});
		});
	// console.log("test");
	// try {
	// 	const productAll = await Product.findAll();

	// 	if (productAll.length > 0) {
	// 		res.json({
	// 			status: 'success',
	// 			image_url: process.env.IMAGE_URL,
	// 			result: productAll,
	// 		});
	// 	} else {
	// 		res.json({
	// 			status: 'false',
	// 			message: "Product does not found",
	// 		});

	// 	}

	// 	//	console.log("Contact",await Contact.findAll());
	// 	// res.json({
	// 	// 	status: 'success',
	// 	// 	result: productAll,
	// 	// });
	// } catch (err) {
	// 	return next(err);
	// }
};




// by category product get
module.exports.getproductbyid = async (req, res, next) => {
	try {
		const category_id = req.params.id;
		const products = await Product.findAll({
			where: {
				category_id: category_id,
			},
		});

		if (products.length > 0) {
			res.json({
				status: 'success',
				message: "Get Product by Id Successfully !",
				image_url: process.env.IMAGE_URL,
				result: products,
			});
		} else {
			res.json({
				status: 'false',
				message: "Products does not found",
			});

		}
	} catch (err) {
		return next(err);
	}
};





// Create product
module.exports.add_product = async (req, res, next) => {
	var form = new formidable.IncomingForm();
	form.parse(req, (err, fields, files) => {
		console.log("fields", fields.product_name);
	});

	form.parse(req, async (err, fields, files) => {
		const product_name = fields.product_name;
		const product_amount = fields.product_amount;
		const product_discount_price = fields.product_discount_price;
		const product_image = fields.product_image;
		const category_id = fields.category_id;
		const status = fields.status;
		const description = fields.description;
		const tag = fields.tag;
		const rating = fields.rating;
		const is_weight_variable = fields.is_weight_variable

		const result = await Product.findOne({
			where: {
				product_name: product_name,
			},
		});

		if (result) {
			if (fields.product_name == result.product_name) {
				var err = new Error('Product name is already exits.');
				return next(err);
			}
		}
		if (!product_name) {

			var err = new Error('Product name is not found.');

			return next(err);
		}

		if (!product_amount) {

			var err = new Error('Product amount not found.');

			return next(err);

		} else {

			if (
				!files.product_image) {
				var err = new Error('Please select product image');
				return next(err);
			}
			if (
				!category_id) {
				var err = new Error('Please select category');
				return next(err);
			}

			if (
				files.product_image.name &&
				!files.product_image.name.match(/\.(jpg|jpeg|png)$/i)
			) {
				var err = new Error('Please select .jpg or .png file only');
				return next(err);
			} else if (files.product_image.size > 2097152) {
				var err = new Error('Please select file size < 2mb');
				return next(err);
			} else {
				var newFileName = utils.timestampFilename(files.product_image.name);

				var oldpath = files.product_image.path;
				var newpath = __basedir + '/public/uploads/pictures/' + newFileName;
				fs.rename(oldpath, newpath, function (err) {
					if (err) {
						return next(err);
					}

					Product.create(
						{
							picture: newFileName,
							product_name: product_name,
							product_amount: product_amount,
							product_discount_price: fields.product_discount_price,
							product_image: newFileName,
							category_id: category_id,
							status: status,
							description: description,
							tag: tag,
							rating: rating,
							is_weight_variable: is_weight_variable
						},

					).then((created) => {
						res.json({
							status: 'success',
							message: "Add Product Successfully !",
							result: {
								newFileName: newFileName,
								affectedRows: created,
							},
						});
					})
						.catch((err) => {
							return next(err);
						});
				});
			}
		}
	});

};
// update product 
module.exports.update_product = async (req, res, next) => {
	var form = new formidable.IncomingForm();
	form.parse(req, (err, fields, files) => {
		console.log("fields", fields.product_name);
	});

	form.parse(req, async (err, fields, files) => {
		const id = fields.id;
		const product_name = fields.product_name;
		const product_amount = fields.product_amount;
		const product_discount_price = fields.product_discount_price;
		const product_image = fields.product_image;
		const category_id = fields.category_id;
		const status = fields.status;
		const description = fields.description;
		const tag = fields.tag;
		const rating = fields.rating;
		const is_weight_variable = fields.is_weight_variable

		if (!product_name) {

			var err = new Error('Product name is not found.');

			return next(err);
		}

		if (!product_amount) {

			var err = new Error('Product amount not found.');

			return next(err);

		} else {

			if (
				!files.product_image) {
				var err = new Error('Please select product image');
				return next(err);
			}
			if (
				!category_id) {
				var err = new Error('Please select category');
				return next(err);
			}

			if (
				files.product_image.name &&
				!files.product_image.name.match(/\.(jpg|jpeg|png)$/i)
			) {
				var err = new Error('Please select .jpg or .png file only');
				return next(err);
			} else if (files.product_image.size > 2097152) {
				var err = new Error('Please select file size < 2mb');
				return next(err);
			} else {
				var newFileName = utils.timestampFilename(files.product_image.name);

				var oldpath = files.product_image.path;
				var newpath = __basedir + '/public/uploads/pictures/' + newFileName;
				fs.rename(oldpath, newpath, function (err) {
					if (err) {
						return next(err);
					}

					Product.update(
						{

							picture: newFileName,
							product_name: product_name,
							product_amount: product_amount,
							product_discount_price: fields.product_discount_price,
							product_image: newFileName,
							category_id: category_id,
							status: status,
							description: description,
							tag: tag,
							rating: rating,
							is_weight_variable: is_weight_variable

						},
						{
							where: {
								id: {
									[Op.eq]: id,
								},
							},
						}

					).then((updated) => {
						res.json({
							status: 'success',
							message: "Update Product Successfully !",
							result: {
								newFileName: newFileName,
								affectedRows: updated,
							},
						});
					})
						.catch((err) => {
							return next(err);
						});
				});
			}
		}
	});
};



// Delete Product 
module.exports.delete_product = async (req, res, next) => {
	try {
		const id = req.body.id;

		const deleted = await Product.destroy({
			where: {
				id: {
					[Op.eq]: id,
				},
			},
		});

		res.json({
			status: 'success',
			message:"Product Successfully Deleted !",
			result: {
				affectedRows: deleted,
			},
			
		});
	} catch (err) {
		return next(err);
	}
};
//***********************************************Product_images**************************************************** */




// get product_image	
module.exports.getimages = async (req, res, next) => {

	const { page, size, title } = req.query;
	var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
	const { limit, offset } = getPagination(page, size);
	ProductImage.findAndCountAll({ limit, offset })
		.then(data => {
			const response = getPagingData(data, page, limit);
			res.send(response);
		})
		.catch(err => {
			res.status(500).send({
				message:
					err.message || "Some error occurred while retrieving tutorials."
			});
		});
};

module.exports.product_image_Upload = async (req, res, next) => {
	var form = new formidable.IncomingForm();
	form.multiples = true;
	var oldpath;
	var newpath
	form.parse(req, (err, fields, files) => {
		const product_id = fields.product_id;
		if (!product_id) {

			var err = new Error('product id not found.');
			return next(err);

		}

		// image check
		if (files.product_image.length > 0) {

			for (j = 0; j < files.product_image.length; j++) {

				console.log("files", files.product_image[j].name);
				var newFileName = new Date().getTime() + '_' + files.product_image[j].name;
				//	var newFileName = utils.timestampFilename(files.product_image[j].name);
				oldpath = files.product_image[j].path;
				newpath = __basedir + '/public/uploads/pictures/' + newFileName;
				fs.rename(oldpath, newpath, function (err) {
					if (err) {
						return next(err);
					} else {
						// image inserting 

						ProductImage.create(
							{

								product_image: newFileName,
								product_id: product_id,
							},
						).then((created) => {
							res.json({
								status: 'success',
								message: 'Product Images Uploaded Sucessfully',
							});
						})
							.catch((err) => {
								return next(err);
							});

					}
				});

			} // loop end

		}

	});

}

//update Product Image

module.exports.update_product_image = async (req, res, next) => {
	var form = new formidable.IncomingForm();
	form.parse(req, async (err, fields, files) => {
		const id = fields.id;
		

		if (!files.product_image) {
			var err = new Error('Please select product image');
			return next(err);
		}
		if (
			files.product_image.name &&
			!files.product_image.name.match(/\.(jpg|jpeg|png)$/i)
		) {
			var err = new Error('Please select .jpg or .png file only');
			return next(err);
		} else if (files.product_image.size > 2097152) {
			var err = new Error('Please select file size < 2mb');
			return next(err);
		} else {
			var newFileName = utils.timestampFilename(files.product_image.name);

			var oldpath = files.product_image.path;
			var newpath = __basedir + '/public/uploads/pictures/' + newFileName;
			fs.rename(oldpath, newpath, function (err) {
				if (err) {
					return next(err);
				}

				ProductImage.update(
					{
						product_image: newFileName,

					},
					{
						where: {
							id: {
								[Op.eq]: id,
							},
						},
					}

				).then((updated) => {
					res.json({
						status: 'success',
						message: 'Product Images Updaded Sucessfully',
					});
				}).catch((err) => {
						return next(err);
					});
			});
		}

	});
};

// Delete Product Images
module.exports.delete_product_image = async (req, res, next) => {
	try {
		const id = req.body.id;

		const deleted = await ProductImage.destroy({
			where: {
				id: {
					[Op.eq]: id,
				},
			},
		});

		res.json({
			status: 'success',
			message:"Deleted Product Images Successfully !",
			result: {
				affectedRows: deleted,
			},
		});
	
	} catch (err) {
		return next(err);
	}
};