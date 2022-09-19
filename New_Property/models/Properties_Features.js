const { DataTypes } = require('sequelize');

module.exports.PropertiesFeaturesModel = (sequelize) => {
	return sequelize.define(
		'properties_features',
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			property_id : {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			property_type : {
				type: DataTypes.STRING,
				allowNull: true,
			},			           
			property_status: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
				defaultValue: false,				
			},
			property_images:{
				type: DataTypes.STRING,
				allowNull:true,				
			},
			property_tag :{
				type: DataTypes.STRING,
				allowNull:true,				
			}
		},
		{
			// Other model options go here
			freezeTableName: true,
			//tableName: 'tablename',
			timestamps: true,
		}
	);
};
