require('dotenv').config();
// Load model
const {Rent}=require('../db');
const { PropertiesFeatures } = require('../db')
const { Op } = require('sequelize');
const path = require('path');
const utils = require('../utils');
var formidable = require('formidable');
var fs = require('fs');
const { NULL } = require('mysql2/lib/constants/types');


const getPagingData = (data, page, limit) => {

	const { count: totalItems, rows: results } = data;
	const currentPage = page ? +page : 0;
	const totalPages = Math.ceil(totalItems / limit);
	if (results.length > 0) {
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

//***********************************************Property Features_images**************************************************** */




// get Property Features image	
module.exports.get_all_images = async (req, res, next) => {

	const { page, size, title } = req.query;
	var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
	const { limit, offset } = getPagination(page, size);
	PropertiesFeatures.findAndCountAll({ limit, offset })
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

//add Property Features multiple Images Upload

module.exports.add_property_features = async (req, res, next) => {
	var form = new formidable.IncomingForm();
	form.multiples = true;
	var oldpath;
	var newpath
	form.parse(req, (err, fields, files) => {
		const property_id = fields.property_id;
		const property_type=fields.property_type;
		const property_status=fields.property_status
		const property_tag=fields.property_tag
		if (!property_id) {

			var err = new Error('property id not found.');
			return next(err);

		}

		// image check
		if (files.property_images.length > 0) {

			for (j = 0; j < files.property_images.length; j++) {

				console.log("files", files.property_images[j].name);
				var newFileName = new Date().getTime() + '_' + files.property_images[j].name;
				//	var newFileName = utils.timestampFilename(files.product_image[j].name);
				oldpath = files.property_images[j].path;
				newpath = __basedir + '/public/uploads/pictures/' + newFileName;
				fs.rename(oldpath, newpath, function (err) {
					if (err) {
						return next(err);
					} else {
						// image inserting 

						PropertiesFeatures.create(
							{

								property_images: newFileName,
								property_id: property_id,
								property_type:property_type,
								property_status:property_status,
							 	property_tag:property_tag,
							},
						).then((created) => {
							res.json({
								status: 'success',
								message: 'Property Features Images Uploaded Sucessfully',
								affectedRows: created,
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
// get property features multiple images 
module.exports.get_property_features_alldetails = async (req, res, next) => {
	try {
		const id = req.params.id;
		const rentdata = await Rent.findAll({
			where: {
				id:id,
			},
		});
	
	
		const property_id = req.params.id;
		const propertyImg = await PropertiesFeatures.findAll({
			where: {
				property_id:property_id,
			},
		});
		const result=rentdata.concat({Image:propertyImg}
			 )
			res.json({
				status: 'success',
				message: "Get Property Features Details with all images Successfully !",
				image_url: process.env.IMAGE_URL,
				result:result
	 
			});
	
	} catch (err) {
		return next(err);
	}
	};
	

//update property features image 

module.exports.update_property_features_image = async (req, res, next) => {
	var form = new formidable.IncomingForm();
	form.parse(req, async (err, fields, files) => {
		const id = fields.id;
		
		if (!fields.id) {
			var err = new Error('property id is not selected');
			return next(err);
		}

		if (!files.property_images) {
			var err = new Error('Please select property images');
			return next(err);
		}
		if (
			files.property_images.name &&
			!files.property_images.name.match(/\.(jpg|jpeg|png)$/i)
		) {
			var err = new Error('Please select .jpg or .png file only');
			return next(err);
		} else if (files.property_images.size > 2097152) {
			var err = new Error('Please select file size < 2mb');
			return next(err);
		} else {
			var newFileName = utils.timestampFilename(files.property_images.name);

			var oldpath = files.property_images.path;
			var newpath = __basedir + '/public/uploads/pictures/' + newFileName;
			fs.rename(oldpath, newpath, function (err) {
				if (err) {
					return next(err);
				}

				PropertiesFeatures.update(
					{
						property_images: newFileName,

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
						message: 'property Features images Updaded Sucessfully',
						affectedRows: updated,
					});
				}).catch((err) => {
					return next(err);
				});
			});
		}

	});
};

// Delete property Features Images
module.exports.delete_property_Features_image = async (req, res, next) => {
	try {
		const id = req.params.id;

		const deleted = await PropertiesFeatures.destroy({
			where: {
				id: {
					[Op.eq]: id,
				},
			},
		});

		res.json({
			status: 'success',
			message: "Deleted Property Features Images Successfully !",
			result: {
				affectedRows: deleted,
			},
		});

	} catch (err) {
		return next(err);
	}
};