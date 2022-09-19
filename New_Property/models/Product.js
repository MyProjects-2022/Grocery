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
				type: DataTypes.STRING,
				allowNull:false,				
			},
			rating: {
				type: DataTypes.STRING,
				allowNull:false,				
			},
		},
		{
			// Other model options go here
			freezeTableName: true,
			//tableName: 'tablename',
			timestamps: true,
		}
	);
};
