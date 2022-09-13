const { DataTypes } = require('sequelize');

module.exports.ProductModel = (sequelize) => {
	return sequelize.define(
		'products',
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			product_name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
            product_amount: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
            product_discount_price: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
            category_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},

			product_image: {
				type: DataTypes.STRING,
				allowNull: true,
			},			
			status: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
				defaultValue: false,
			},
			description: {
				type: DataTypes.STRING,
				allowNull:false,				
			},
			tag: {
				type: DataTypes.STRING,
				allowNull:false,				
			},
			is_weight_variable: {
				type: DataTypes.BOOLEAN,
				allowNull:true,				
			},
			rating: {
				type: DataTypes.INTEGER,
				allowNull:true,				
			},
			brand: {
				type: DataTypes.STRING,
				allowNull:false,				
			},
			benefits: {
				type: DataTypes.STRING,
				allowNull:false,				
			},
			product_discount_percent: {
				type: DataTypes.INTEGER,
				allowNull:true,				
			},
			other_product_info: {
				type: DataTypes.STRING,
				allowNull:false,				
			},
			storage_and_usage: {
				type: DataTypes.STRING,
				allowNull:false,				
			},
			product_type: {
				type: DataTypes.STRING,
				allowNull:false,				
			},
			product_slug: {
				type: DataTypes.STRING,
				allowNull:true,				
			},
		},
		{
			// Other model options go here
			// freezeTableName: true,
			//tableName: 'tablename',
			// timestamps: true,
		}
	);
};
