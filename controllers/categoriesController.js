require('dotenv').config();
// Load model
const { Category } = require('../db');
const { Op } = require('sequelize');

const utils = require('../utils');
const nodemailer = require('nodemailer');
var formidable = require('formidable');
var fs = require('fs');
const { update } = require('lodash');


const getPagingData = (data, page, limit) => {
	console.log("data", data)
	const { count: totalItems, rows: result } = data;

	const currentPage = page ? +page : 0;
	const totalPages = Math.ceil(totalItems / limit);

	console.log("result.length==", result.length)
	if (result.length > 0) {
		console.log("result.length==", result.length)
		return { totalItems, status: "success11", message: "Get Data Successfully", image_url: process.env.IMAGE_URL, result, totalPages, currentPage };
	} else {

		return { status: "false", message: "No Data Found" }

	}
};


const getPagination = (page, size) => {
	const limit = size ? +size : 3;
	const offset = page ? page * limit : 0;
	return { limit, offset };
};

// Get All
module.exports.getAll = async (req, res, next) => {
	try {
		const Categoryies = await Category.findAll();
		console.log("res.json", res.json)

		res.json({
			status: 'success',
			result: Categoryies,

		});
	} catch (err) {
		return next(err);
	}
};

module.exports.letsgo = async (req, res, next) => {

};
// Get One
module.exports.getOne = async (req, res, next) => {

	try {
		const id = req.params.id;
		const task = await Category.findOne({
			where: {
				id: id,
			},
		});

		if (task) {
			res.json({
				status: 'success',
				result: task,
			});
		}
		else {
			res.json({
				status: 'false',
				message: "no data found",
			})
		}

	} catch (err) {
		return next(err);
	}
};

// categories_add
module.exports.categories_add = async (req, res, next) => {
	try {
		const category_name = req.body.category_name;
		const record = await Category.create({
			category_name: category_name,
		});

		res.json({

			status: 'success',
			message: "Category Successfully Created !",
			result: {
				record: record,
			},
		});
	} catch (err) {
		return next(err);
	}
};

// categories_update
module.exports.categories_update = async (req, res) => {
	// try {
	const id = req.body.id;
	const category_name = req.body.category_name;
	const status = req.body.status;
	const checkid = await Category.findOne({
		where: {
			id: id
		}
	})
	if (checkid) {


		const record = await Category.update(
			{
				category_name: category_name,
			},
			{
				where: {
					id: {
						[Op.eq]: id,
					},
				},
			}
		);
		res.json({
			status: 'success',
			message: "Category Successfully Updeted !",
			result: {
				record: req.body,
			},
		});
	}
	else {

		res.json({
			status: 'false',
			message: "No any Updates||id does not exists"
		})
	}
	// } catch (err) {
	// 	return next(err);
	// }
};

// categories_delete
module.exports.categories_delete = async (req, res) => {
	// try {
	const id = req.body.id;

	const deleted = await Category.destroy({
		where: {
			id: {
				[Op.eq]: id,
			},
		},
	});
	if (deleted) {
		res.json({
			status: 'success',
			message: "Category Successfully Deleted !",
			result: {
				affectedRows: deleted,
			},
		});
	} else {
		res.json({
			status: 'false',
			message: "No any changes !",
			affectedRows: deleted,

		})
	}
	// } catch (err) {
	// 	return next(err);
	// }
};

// Update Picture
module.exports.updatePicture = (req, res, next) => {
	var form = new formidable.IncomingForm();
	form.parse(req, async(err, fields, files) => {
		const id = fields.id;
		const checkid=await Category.findOne({
			where:{id:id}
		})
if(checkid){
		if (!id) {
			var err = new Error('ID not found.');
			return next(err);
		} else {
			if (
				files.filetoupload.name &&
				!files.filetoupload.name.match(/\.(jpg|jpeg|png)$/i)
			) {
				var err = new Error('Please select .jpg or .png file only');
				return next(err);
			} else if (files.filetoupload.size > 2097152) {
				var err = new Error('Please select file size < 2mb');
				return next(err);
			} else {
				var newFileName = utils.timestampFilename(files.filetoupload.name);

				var oldpath = files.filetoupload.path;
				var newpath = __basedir + '/public/uploads/pictures/' + newFileName;
				fs.rename(oldpath, newpath, function (err) {
					if (err) {
						return next(err);
					}

					Category.update(
						{
							picture: newFileName,
						},
						{
							where: {
								id: {
									[Op.eq]: id,
								},
							},
						}
					)
						.then((updated) => {
							res.json({
								status: 'success',
								message: "Category Image Updated Successfully !",
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
			}}
		}else{
			res.json({
				status: 'false',
				message: "id does not exits no any updates !",
				
			});
		}
	});
};

// Send email
module.exports.sendEmail = async (req, res, next) => {
	try {
		const id = req.body.id;
		const result = await Category.findOne({
			where: {
				id: id,
			},
		});

		var transporter = nodemailer.createTransport({
			host: process.env.MAIL_HOST,
			port: process.env.MAIL_POST,
			auth: {
				user: process.env.MAIL_AUTH_USER,
				pass: process.env.MAIL_AUTH_PASS,
			},
		});

		var mailOptions = {
			from: process.env.MAIL_FROM,
			to: 'test@example.com',
			subject: 'Test email',
			html: `Hi there! <br/><br/>
			This is just a test email from boilerplate code<br/><br/>
			Your task is: ${result.task}<br/><br/>
			Thank You.`,
		};

		await transporter.sendMail(mailOptions);

		res.json({
			status: 'success',
			result: result,
		});
	} catch (err) {
		return next(err);
	}
};
