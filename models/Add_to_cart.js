const { DataTypes } = require('sequelize');

module.exports.CartModel = (sequelize) => {
	return sequelize.define(
		'add_to_cart',
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			user_id : {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
            username: {
				type: DataTypes.STRING,
				allowNull: false,
			},
            product_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			quantity: {
				type: DataTypes.STRING,
				allowNull: true,
			},			
			status: {
				type: DataTypes.STRING,
				allowNull: false,
				// defaultValue: false,
			},
			price:{
				type: DataTypes.STRING,
				allowNull: false,
				// defaultValue: false,
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
