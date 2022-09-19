require('dotenv').config();
// Load model
const { User } = require('../db');
const { Op, where } = require('sequelize');

const utils = require('../utils');
const nodemailer = require('nodemailer');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const { NULL, DATETIME, TIMESTAMP } = require('mysql2/lib/constants/types');
const { DATE } = require('sequelize');
const { timeStamp } = require('console');
const { date } = require('yup');
const { DATEONLY } = require('sequelize');
const ejs = require('ejs');



// SignUp
module.exports.signUp = async (req, res, next) => {

	try {
		const first_name = req.body.first_name;
		const last_name = req.body.last_name;
		const email = req.body.email;
		var password = req.body.password;
		const confirm_password = req.body.confirm_password;
		const username = req.body.username;

		// encrypt password
		var salt = bcrypt.genSaltSync(10);
		var hash = bcrypt.hashSync(req.body.password, salt);
		password = hash;

		const token = crypto.randomBytes(16).toString('hex');
		const email_verify_token = token;


		const record = await User.create({
			email: email,
			password: password,
			first_name: first_name,
			last_name: last_name,
			confirm_password: confirm_password,
			username: username,
			email_verify_token: email_verify_token,
		})

		// Send the email
		if (record) {
			let transporter = nodemailer.createTransport({
				host: process.env.MAIL_HOST,
				port: process.env.MAIL_PORT,
				secure: true,
				auth: {
					user: process.env.MAIL_AUTH_USER,
					pass: process.env.MAIL_AUTH_PASS,
				},
			});
			// console.log("transporter=",transporter)


			var verificationLink = `${process.env.CLIENT_URL}/user/signup/verify/:token?email_verify_token=${email_verify_token}`;
			let mailOptions
			if (transporter) {

				var receiver, content

				ejs.renderFile('./emailTemplate/welcome.ejs', { receiver, content }, (err, data) => {
					if (err) {
						console.log(err);
					} else {
						mailOptions = {
							from: process.env.MAIL_FROM,

							to: email,
							subject: 'Thank you for signing up',
							html: data
						};

						transporter.sendMail(mailOptions, (error, info) => {
							if (error) {
								console.log(error);
								return res.json({ status: "success", message: "User Registration Successfull", record });
							}

							if (info.messageId) {
								return res.json({ status: "success", message: "User Registration Successfull Verification Link Send Your email", record });
							} else {
								return res.json({ status: "False", message: "Registration Failed", error });
							}
						});
					}
				})
			}
		}
	}
	catch (err) {
		return next(err);
	}
}
// var mailOptions = {
// 	from:process.env.MAIL_FROM,
// 	to:email,
// 	subject: 'Thank you for signing up',
// 	html: `Congratulations!<br/>
// You have successfully signed up. Please click the link below to verify your account:<br/>
// <a href="${verificationLink}" target="_blank">Verify your email</a><br/><br/>
// Thank you.`,
// };
// }
// const success = transporter.sendMail(mailOptions, async (error, sent) => {
// 	if (error) {
// 	  return res.json ({status :"False",message:"Registration Failed",error});
// 	}else
// 	return res.json ({status :"success",message:"User Registration Successfull Verification Link Send Your email",record });

//   });  }  };


//testing use code
// module.exports.verify = async function (req, res) {
// 	const email_verify_token = req.params.email_verify_token;
// 	try {
// 		const user = await User.findOne({
// 			where: {
// 				id: 110,
// 			},

// 		});
// 		if (user) {
// 			let record = await User.update(
// 				{
// 					email_verify_token: '112',
// 					confirmedAt: new Date()
// 				},
// 				{
// 					where: {
// 						id: {
// 							[Op.eq]: 110,
// 						},

// 					},

// 				}

// 			);
// 			if (record == 1) {

// 				const newuser = await User.findOne({
// 					where: {
// 						id: 110,
// 					},

// 				});
// 				res.send(newuser)
// 			}

// 		} else {
// 			res.send(failed)
// 		}
// 	} catch (err) {
// 		if (err) throw err
// 	}
// }
// Verify Signup Link
module.exports.signUpVerify = async (req, res, next) => {
	try {
		const email_verify_token = req.params.email_verify_token;
		const user = await User.findOne(
			{
				where: {
					email_verify_token: email_verify_token,
				},
			});
		if (user) {
			const record = await User.update(
				{
					email_verify_token: null,
					confirmedAt: new Date()

				},
				{
					where: {
						id: {
							[Op.eq]: user.id,
						},
					},
				},
			);
			if (record == 1) {
				const newdata = await User.findOne({
					where: ({
						id: user.id
					})
				})
				res.send({
					status: 'success',
					message: 'E-mail Verification SuccessfullY Complete',
					result: newdata
				})
			}
		} else {
			let err = new Error('User already Verified');
			err.field = 'token';
			return next(err);
		}
	} catch (err) {
		if (err)
			return next(err);
	}

};

// Login
module.exports.login = async (req, res, next) => {

	try {
		const { email, username, password } = req.body
		const user = await User.findOne({
			where: {
				[Op.or]: [{ email: email }, { username: username }],
			}
		})
		if (user) {
			const isMatched = await bcrypt.compare(password, user.password);
			if (isMatched === true) {
				const userData = {
					id: user.id,
					email: user.email,
					first_name: user.first_name,
					last_name: user.last_name,
					username: user.username,
				}
 if (userData.id) {

					const remember_token = jwt.sign(userData,process.env.AUTH_SECRET, { expiresIn: "2h", });

// save user token
					const token = await User.update({
						remember_token: remember_token,
					},
						{
							where: {
								id: userData.id
							},
						})
					if (token == 1) {
						const new_user = await User.findOne({
							where: { id: userData.id }
						})
						if (new_user) {
							return res.json({
								status: "success", message: "User Login Successfully",
								user: new_user,								
							})
						}
					}
				}
			} else {
				return res.json({
					status: "false", message: "Something went wrong",
				});
			}
		}
	} catch (err) {
		if (err) throw err
	}
};

// Get Logged in user
module.exports.getLoggedInUser = (req, res, next) => {
	var token = req.headers.authorization;
	if (token) {
		// verifies secret and checks if the token is expired
		jwt.verify(
			token.replace(/^Bearer\s/, ''),
			process.env.AUTH_SECRET,
			(err, decoded) => {
				if (err) {
					let err = new Error('Unauthorized');
					err.field = 'login';
					return next(err);
				} else {
					return res.json({ status: 'success', user: decoded });
				}
			}
		);
	} else {
		let err = new Error('Unauthorized');
		err.field = 'login';
		return next(err);
	}
};

// Update Profile
module.exports.updateProfile = async (req, res, next) => {
	try {
		
		var { id,first_name,last_name,email,description,gender,avatar_id,dob,phone,credits,username}=req.body;

		const result = await User.update(
			{
				first_name: first_name,
				last_name: last_name,
				email: email,
				description:description,
				gender:gender,
				avatar_id:avatar_id,
				dob:dob,
				phone:phone,
				credits:credits,
				username:username,
			},
			{
				where: {
					id: {
						[Op.eq]: id,
					},
				},
			}
		);
		
if(result==1){

		return res.json({
			status: 'success',
			message:'Profile Successfully Update',
			result: req.body,
		});
	}else{
		return res.json({status: 'success',message:'Profile Successfully Updated'});
		}
	}
	 catch (err) {
		return next(err);
	}
};

// Change Password
module.exports.changePassword = async(req, res, next) => {
	try {
		var id = req.user.id;

		// encrypt password
		var salt = bcrypt.genSaltSync(10);
		var hash = bcrypt.hashSync(req.body.new_password, salt);
		const new_password = hash;

		const result =await User.update(
			{
				password: new_password,
			},
			{
				where: {
					id: {
						[Op.eq]: id,
					},
				},
			}
		);
		return res.json({
			status: 'success',
			message:"Successfully Change Password ",
			result: req.user,
		});
	} catch (err) {
		return next(err);
	}
};

// Forgot Password
module.exports.forgotPassword = async (req, res, next) => {
	try {
		var email = req.body.email;
		var token = crypto.randomBytes(16).toString('hex');

		const result = await User.update(
			{
				token: token,
			},
			{
				where: {
					email: {
						[Op.eq]: email,
					},
				},
			}
		);

		// Send the email
		var transporter = nodemailer.createTransport({
			host: process.env.MAIL_HOST,
			port: process.env.MAIL_POST,
			auth: {
				user: process.env.MAIL_AUTH_USER,
				pass: process.env.MAIL_AUTH_PASS,
			},
		});

		var verificationLink = `${process.env.CLIENT_URL}/forgot-password-verify/?token=${token}`;

		var mailOptions = {
			from: process.env.MAIL_FROM,
			to: email,
			subject: 'Reset password',
			html: `Hi there! <br/><br/>
			Please click on the link below to reset your password:<br/>
			<a href="${verificationLink}" target="_blank">${verificationLink}</a><br/><br/>
			Thank You.`,
		};

		await transporter.sendMail(mailOptions);

		return res.json({
			status: 'success',
			result: result,
		});
	} catch (err) {
		return next(err);
	}
};

// Forgot Password Verify Link
module.exports.forgotPasswordVerify = async (req, res, next) => {
	try {
		var token = req.params.token;

		const user = await User.findOne({
			where: {
				token: token,
			},
		});

		if (user) {
			return res.json({
				message: 'Validation link passed',
				type: 'success',
			});
		} else {
			let err = new Error('Invalid token provided');
			err.field = 'token';
			return next(err);
		}
	} catch (err) {
		return next(err);
	}
};

// Reset Password
module.exports.resetPassword = async (req, res, next) => {
	try {
		var token = req.body.token;
		// encrypt password
		var salt = bcrypt.genSaltSync(10);
		var hash = bcrypt.hashSync(req.body.new_password, salt);
		const new_password = hash;

		const result = await User.update(
			{
				password: new_password,
				token: '',
			},
			{
				where: {
					token: {
						[Op.eq]: token,
					},
				},
			}
		);

		return res.json({
			status: 'success',
			result: result,
		});
	} catch (err) {
		return next(err);
	}
};


