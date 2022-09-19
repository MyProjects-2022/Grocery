const { DataTypes } = require('sequelize');

module.exports.ProductImageModel = (sequelize) => {
	return sequelize.define(
		'products_images',
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			product_image: {
				type: DataTypes.STRING,
				allowNull: false,
			},
            product_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},			
			status: {
				type: DataTypes.INTEGER,
				allowNull: true,
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
