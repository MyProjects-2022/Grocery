let yup = require('yup');
const { Product } = require('../db');
const { Op } = require('sequelize');

// ========================================================================

// Schema - Create
let schemaCreate = yup.object().shape({
	product_name: yup.string().required(),
	product_amount: yup.string().required(),
    product_discount_price: yup.string().required(),
	status: yup.number().default(0),
	description:yup.string().required(),
	tag:yup.string().required(),
	rating:yup.string().required(),
	is_weight_variable:yup.string().required(),
});

// Validation - Create
module.exports.validationCreate = (req, res, next) => {
	console.log("test33",req)
    res.send(req.body);

	
	// validations here
	// console.log('🐞 validationCreate');

	// schemaCreate
	// 	.validate(
	// 		{
	// 		},
	// 		{ abortEarly: false }
	// 	)
	// 	.then(function () {
	// 		next();
	// 	})
	// 	.catch(function (err) {
	// 		return next(err);
	// 	});
};

// Check if record exists - Create
module.exports.isTaskExistsCreate = async (req, res, next) => {
	try {
		const task = await Category.findOne({
			where: {
				category_name: req.body.category_name,
			},
		});

		if (task) {
			let err = new Error('Task already exists');
			err.field = 'task';
			return next(err);
		}

		next();
	} catch (err) {
		return next(err);
	}
};

// ========================================================================

// Schema - Update
let schemaUpdate = yup.object().shape({
	id: yup.number().required(),
	category_name: yup.string().required(),
	picture: yup.string(),
	status: yup.number().default(0),
});

// Validation - Update
module.exports.validationUpdate = (req, res, next) => { 
	// validations here
	console.log('🐞 validationUpdate');

	schemaUpdate
		.validate(
			{
				id: req.body.id,
				category_name: req.body.category_name,
			},
			{ abortEarly: false }
		)
		.then(function () {
			next();
		})
		.catch(function (err) {
			return next(err);
		});
};

// Check if record exists - Update
module.exports.isTaskExistsUpdate = async (req, res, next) => {
	try {
		const task = await Category.findOne({
			where: {
				category_name: req.body.category_name,
				id: {
					[Op.ne]: req.body.id,
				},
			},
		});

		if (task) {
			let err = new Error('category name already exists');
			err.field = 'category_name';
			return next(err);
		}

		next();
	} catch (err) {
		return next(err);
	}
};

// ========================================================================

// Schema - Delete
let schemaDelete = yup.object().shape({
	id: yup.number().required(),
});

// Validation - Delete
module.exports.validationDelete = (req, res, next) => {
	// validations here
	console.log('🐞 validationDelete');

	schemaDelete
		.validate(
			{
				id: req.body.id,
			},
			{ abortEarly: false }
		)
		.then(function () {
			next();
		})
		.catch(function (err) {
			return next(err);
		});
};
