require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const ejs = require('ejs');

const app = express();

app.use(helmet());
app.use(morgan('tiny'));
app.use(
	cors({
		//origin: process.env.CLIENT_URL
	})
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public')); // folder to upload files
app.set('view engine', 'ejs')
app.get('/template', (req, res) => {
    res.render('emailTemplate/welcome')
})

global.__basedir = __dirname; // very important to define base directory of the project. this is useful while creating upload scripts

// Routes
app.get('/', (req, res, next) => {
	try {
		res.json({
			status: 'success',
			message: 'Server is on Listning : 3333',
		});
	} catch (err) {
		return next(err);
	}
});


app.get('/template', (req, res) => {
    res.render('emailTemplate/welcome.ejs')
})





const categoriesRoute = require('./routes/categoriesRoute');
const userRoute = require('./routes/userRoute');
const contactRoute = require('./routes/contactRoute');
const productRoute = require('./routes/productRoute');
const rentRoute=require('./routes/rentRoute');
const PropertiesFeaturesRoute=require('./routes/Property_FeaturesRoute')
app.use([categoriesRoute, userRoute,contactRoute,productRoute,rentRoute,PropertiesFeaturesRoute]); // you can add more routes in this array

//404 error
app.get('*', function (req, res) {
	res.status(404).json({
		message: 'What?? 🙅',
	});
});

//An error handling middleware
app.use((err, req, res, next) => {
	console.log('🐞 Error Handler');

	err.statusCode = err.statusCode || 500;
	err.status = err.status || 'error';

	res.status(err.statusCode).json({
		status: err.status,
		message: err.message,
		err: err,
	});
});

// Run the server
const port = process.env.PORT || 3000;
app.listen(port, () =>
	console.log(`🐹 app listening on http://localhost:${port}`)
);
