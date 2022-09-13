require('dotenv').config();
// Load model
const { Contact } = require('../db');
const { Op } = require('sequelize');

const utils = require('../utils');
const nodemailer = require('nodemailer');
var formidable = require('formidable');
var fs = require('fs');



// Login
module.exports.letsgo = async (req, res, next) => {
	console.log("test");
	try {
		const UserContacts = await Contact.findAll();
	//	console.log("Contact",await Contact.findAll());
		res.json({
			status: 'success',
			
			result: UserContacts,
		});
	} catch (err) {
		return next(err);
	}
};