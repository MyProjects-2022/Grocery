require('dotenv').config();
const  Sequelize  = require('sequelize');

const sequelize = new Sequelize(
	process.env.DB_NAME,
	process.env.DB_USER,
	process.env.DB_PASSWORD,
	{
		host: 'localhost',
		dialect: 'mysql' /* 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
	}
);

(async () => {
	try {
		await sequelize.authenticate();
		console.log('💾 Database connection has been established successfully.');
	} catch (error) {
		console.error('Unable to connect to the database:', error);
	}
})();

// Create Models
const { CategoryModel } = require('./models/Categories');
const Category = CategoryModel(sequelize);

const { UserModel } = require('./models/User');
const User = UserModel(sequelize);



const { ContactModel } = require('./models/Contact');
const Contact = ContactModel(sequelize);


const { ProductModel } = require('./models/Product');
const Product = ProductModel(sequelize);

const { ProductImageModel } = require('./models/Product_images');
const ProductImage = ProductImageModel (sequelize);


const {CartModel } = require('./models/Add_to_cart');
const Add_to_Cart = CartModel (sequelize);

const {OrderModel } = require('./models/Order');
const Order = OrderModel (sequelize);



if (process.env.MIGRATE_DB == 'TRUE') {
	sequelize.sync().then(() => {
		console.log(`All tables synced!`);
		process.exit(0);
	});
}

module.exports = {
	Category,
	User,
	Contact,
	Product,
	ProductImage,
	sequelize,
	Add_to_Cart,
	Order
	
};
