const { DataTypes } = require('sequelize');

module.exports.CategoryModel = (sequelize) => {
	return sequelize.define(
		'categories',
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			category_name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			picture: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			is_active: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
				defaultValue: false,
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
