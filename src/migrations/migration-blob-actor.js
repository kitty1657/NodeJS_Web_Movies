module.exports = {
	up: (queryInterface, Sequelize) => {
		return Promise.all([
			queryInterface.changeColumn('actor', 'image', {
				type: Sequelize.BLOB,
				allowNull : true
			}),
			queryInterface.changeColumn('director', 'image', {
				type: Sequelize.BLOB,
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
