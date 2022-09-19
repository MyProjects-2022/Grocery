const { DataTypes } = require('sequelize');

module.exports.ContactModel = (sequelize) => {
	return sequelize.define(
		'contact',
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			task: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		
		},
		{
			// Other model options go here
		//	freezeTableName: true,
			//tableName: 'tablename',
		//	timestamps: true,
		}
	);
};
