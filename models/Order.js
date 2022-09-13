const { DataTypes } = require('sequelize');

module.exports.OrderModel = (sequelize) => {
	return sequelize.define(
		'order',
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
			// price:{
			// 	type: DataTypes.STRING,
			// 	allowNull: false,
			// 	// defaultValue: false,
			// },
			discount_price : {
				type: DataTypes.STRING,
				allowNull: false,
				// defaultValue: false,
			},
			final_amount : {
				type: DataTypes.STRING,
				allowNull: false,
				// defaultValue: false,
			},
			total_amount : {
				type: DataTypes.STRING,
				allowNull: false,
				// defaultValue: false,
			},
			shipping_address : {
				type: DataTypes.STRING,
				allowNull: false,
				// defaultValue: false,
			},
			user_contact : {
				type: DataTypes.STRING,
				allowNull: false,
				// defaultValue: false,
			},
			pin_code : {
				type: DataTypes.STRING,
				allowNull: false,
				// defaultValue: false,
			},
			full_address : {
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
