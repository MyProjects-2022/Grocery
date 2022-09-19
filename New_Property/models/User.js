const { DataTypes } = require('sequelize');

module.exports.UserModel = (sequelize) => {
	return sequelize.define(
		're_accounts',
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			first_name: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			last_name: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			username:{
				type: DataTypes.STRING,
				allowNull: true,
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false,
			},			
			email_verify_token : {
				type: DataTypes.STRING,
				allowNull: true,
				defaultValue: false,
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			remember_token:{
				type: DataTypes.TEXT,
				allowNull: true,
			},
			description:{
				type:DataTypes.TEXT,
				allowNull: true,
			},
			gender:{
				type:DataTypes.STRING,
				allowNull: true,
			},
			avatar_id: {
				type: DataTypes.INTEGER,
				allowNull: true,
			},
			dob:{
				type: DataTypes.DATE,
				allowNull: true,
			},
			phone:{
				type: DataTypes.STRING,
				allowNull: true,
			},
			credits:{
				type: DataTypes.INTEGER,
				allowNull: true,
			},
			confirmedAt:{
				type: DataTypes.DATE,
				allowNull: true,

				
				
			},
			is_featured :{
				type: DataTypes.TINYINT,
				allowNull: true,
			},
			is_featured :{
				type: DataTypes.STRING,
				allowNull: true,
			},




			// super_user:{
			// 	type: DataTypes.TINYINT(1),
			// 	allowNull: true,
			// },
			// manage_supers:{
			// 	type: DataTypes.TINYINT(1),
			// 	allowNull: true,
			// },
			// permissions:{
			// 	type: DataTypes.STRING,
			// 	allowNull: true,
			// },
			// last_login:{
			// 	type: DataTypes.timestamps,
			// 	allowNull: false,
			// 	defaultValue: false,
			// },
			
			// stripe_id: {
			// 	type: DataTypes.INTEGER,
			// 	allowNull: true,
			// },
			// pm_type:{
			// 	type: DataTypes.INTEGER,
			// 	allowNull: true,
			// },
			
			// pm_last_four: {
			// 	type: DataTypes.STRING,
			// 	allowNull: true,
			// },
			// trial_ends_at:{
			// 	type: DataTypes.STRING,
			// 	allowNull: true,
			// },
			
			
			
		},
		{
			// Other model options go here
			freezeTableName: true,
			//tableName: 'tablename',
			timestamps: true,
		}
	);
};
