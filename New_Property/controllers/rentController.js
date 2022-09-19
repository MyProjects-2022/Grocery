require('dotenv').config();
// Load model
const { Rent } = require('../db')
const { Op } = require('sequelize');
const path = require('path');
const utils = require('../utils');
const nodemailer = require('nodemailer');
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

//get all rent property
module.exports.get_all_rent_property = async (req, res, next) => {

	const { page, size, title } = req.query;
	var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
	const { limit, offset } = getPagination(page, size);
	Rent.findAndCountAll({ limit, offset })
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
	}



//get rent property by id
module.exports.get_rent_property_byid = async (req, res, next) => {
	try {
		const id = req.params.id;
		const rent = await Rent.findAll({
			where: {
				id: id,
			},
		});

		if (rent.length > 0) {
			res.json({
				status: 'success',
				message: "Rent Property Get  by id Successfully !",
				image_url: process.env.IMAGE_URL,
				result: rent,
			});
		} else {
			res.json({
				status: 'false',
				message: "Rent Property does not found",
			});

		}
	} catch (err) {
		return next(err);
	}
};



// Create rent property
module.exports.add_rent_property = async (req, res, next) => {
	var form = new formidable.IncomingForm();
	form.multiples = true;
	form.parse(req, async (err, fields, files) => {
		const property_name = fields.property_name;
		const property_owner_name = fields.property_owner_name;
		const product_discount_price = fields.product_discount_price;
		const property_contact_no = fields.property_contact_no;
		const property_owner_alternate_no = fields.property_owner_alternate_no;
		const property_sub_type = fields.property_sub_type;
		const property_descriptions = fields.property_descriptions;
		const property_type = fields.property_type;
		const rent_amount = fields.rent_amount;
		const property_address = fields.property_address;
		const latitude = fields.latitude;
		const longitude = fields.longitude;
		const property_area = fields.property_area;
		const property_near_by_locations = fields.property_near_by_locations;
		const property_status = fields.property_status;
		const property_features=fields.property_features;
		const property_category=fields.property_category;
		

		if (!property_name) {

			var err = new Error('property name is not found.');

			return next(err);
		}

		if (!property_owner_name) {

			var err = new Error('property owner name not found.');

			return next(err);

		}
		
		if (!rent_amount) {

			var err = new Error('rent amount not found.');

			return next(err);

		}
		
		if (!property_type) {

			var err = new Error('property type not found.');

			return next(err);

		}
		 else {

			if (
				!files.property_cover_image) {
				var err = new Error('Please select property cover image');
				return next(err);
			}
			if (
				files.property_cover_image.name &&
				!files.property_cover_image.name.match(/\.(jpg|jpeg|png)$/i)
			) {
				var err = new Error('Please select .jpg or .png file only');
				return next(err);
			} else if (files.property_cover_image.size > 2097152) {
				var err = new Error('Please select file size < 2mb');
				return next(err);
			} else {
				var newFileName = utils.timestampFilename(files.property_cover_image.name);

				var oldpath = files.property_cover_image.path;
				var newpath = __basedir + '/public/uploads/pictures/' + newFileName;
				fs.rename(oldpath, newpath, function (err) {
					if (err) {
						return next(err);
					}

					Rent.create(
						{
							
							property_name:property_name,
							property_owner_name :property_owner_name,
							product_discount_price :product_discount_price,
							property_contact_no :property_contact_no,
							property_owner_alternate_no :property_owner_alternate_no,
							property_sub_type :property_sub_type,
							property_descriptions :property_descriptions,
							property_type :property_type,
							rent_amount :rent_amount,
							property_address :property_address,
							latitude :latitude,
							longitude :longitude,
							property_area :property_area,
							property_near_by_locations :property_near_by_locations,
							property_status :property_status,
							property_cover_image:newFileName,
							property_features:property_features,
							property_category:property_category
									
						
						},

					).then((created) => {
						
						res.json({
							status: 'success',
							message: "Property Successfully Added !",
							result: {
								image_url:process.env.IMAGE_URL,
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

// Update rent property

module.exports.update_rent_property = async (req, res, next) => {
	var form = new formidable.IncomingForm();
	form.parse(req, async (err, fields, files) => {
		const id=fields.id
		const property_name = fields.property_name;
		const property_owner_name = fields.property_owner_name;
		const product_discount_price = fields.product_discount_price;
		const property_contact_no = fields.property_contact_no;
		const property_owner_alternate_no = fields.property_owner_alternate_no;
		const property_sub_type = fields.property_sub_type;
		const property_descriptions = fields.property_descriptions;
		const property_type = fields.property_type;
		const rent_amount = fields.rent_amount;
		const property_address = fields.property_address;
		const latitude = fields.latitude;
		const longitude = fields.longitude;
		const property_area = fields.property_area;
		const property_near_by_locations = fields.property_near_by_locations;
		const property_status = fields.property_status;
		const property_features=fields.property_features;
		const property_category=fields.property_category
		let item;
	
		if(files.property_cover_image)
		{
			console.log("image selected")

			 if (
				files.property_cover_image.name &&
				!files.property_cover_image.name.match(/\.(jpg|jpeg|png)$/i)
			) {
				var err = new Error('Please select .jpg or .png file only');
				return next(err);
			} else if (files.property_cover_image.size > 2097152) {
				var err = new Error('Please select file size < 2mb');
				return next(err);
			} else {
				var newFileName = utils.timestampFilename(files.property_cover_image.name);

				var oldpath = files.property_cover_image.path;
				var newpath = __basedir + '/public/uploads/pictures/' + newFileName;
				fs.rename(oldpath, newpath, function (err) {
					if (err) {
						return next(err);
					}
					
		})
		item=newFileName
		console.log("item12345",item)
	}
		
}
		else{

			console.log("image not selected")

		}				
					Rent.update(
						{
							
							property_name:property_name,
							property_owner_name :property_owner_name,
							product_discount_price :product_discount_price,
							property_contact_no :property_contact_no,
							property_owner_alternate_no :property_owner_alternate_no,
							property_sub_type :property_sub_type,
							property_descriptions :property_descriptions,
							property_type :property_type,
							rent_amount :rent_amount,
							property_address :property_address,
							latitude :latitude,
							longitude :longitude,
							property_area :property_area,
							property_near_by_locations :property_near_by_locations,
							property_status :property_status,
							property_cover_image:item,
							property_features:property_features,
							property_category:property_category
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
							message: "Rent Property Successfully Updated!",
							result: {
								image_url:process.env.IMAGE_URL,
								affectedRows: updated,
							},
						});
					})
						.catch((err) => {
							return next(err);
						});
				
	});
};


// Delete rent property 
module.exports.delete_rent_property = async (req, res, next) => {
	try {
		const id = req.body.id;

		const deleted = await Rent.destroy({
			where: {
				id: {
					[Op.eq]: id,
				},
			},
		});

		res.json({
			status: 'success',
			message: "Rent Property Successfully Deleted !",
			result: {
				affectedRows: deleted,
			},

		});
	} catch (err) {
		return next(err);
	}
};

