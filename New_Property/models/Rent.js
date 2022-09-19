const { DataTypes } = require('sequelize');

module.exports.RentModel = (sequelize) => {
	return sequelize.define(
		'rent_properties',
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			property_name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
            property_owner_name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
            property_contact_no: {
				type: DataTypes.STRING,
				allowNull: false,
			},
            property_owner_alternate_no: {
				type: DataTypes.STRING,
				allowNull: false,
			},

			property_sub_type: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			property_descriptions: {
				type: DataTypes.STRING,
				allowNull: false,
				
			},
			property_type: {
				type: DataTypes.STRING,
				allowNull:false,				
			},
			rent_amount: {
				type: DataTypes.INTEGER,
				allowNull:false,				
			},
			property_address: {
				type: DataTypes.STRING,
				allowNull:false,				
			},
			latitude: {
				type: DataTypes.STRING,
				allowNull:false,				
			},
			longitude: {
				type: DataTypes.STRING,
				allowNull:false,				
			},
			property_area: {
				type: DataTypes.INTEGER,
				allowNull:false,				
			},
			property_near_by_locations: {
				type: DataTypes.STRING,
				allowNull:false,				
			},
			property_status: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
				defaultValue: false,				
			},
			property_cover_image:{
				type: DataTypes.STRING,
				allowNull:true,				
			},
			property_features:{
				type: DataTypes.STRING,
				allowNull:true,				
			},
			property_category:{
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
