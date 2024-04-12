module.exports = {
	up: (queryInterface, Sequelize) => {
		return Promise.all([
			queryInterface.changeColumn('actor', 'image', {
				type: Sequelize.TEXT('long'),
				allowNull : true
			}),
			queryInterface.changeColumn('director', 'image', {
				type: Sequelize.TEXT('long'),
				allowNull : true
			}),
		]);
	},

	down: (queryInterface, Sequelize) => {
		return Promise.all([
			queryInterface.changeColumn('actor', 'image', {
				type: Sequelize.STRING,
				allowNull : true
			}),
			queryInterface.changeColumn('director', 'image', {
				type: Sequelize.STRING,
				allowNull : true
			}),
		]);
	},
};
