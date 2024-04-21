module.exports = {
	up: (queryInterface, Sequelize) => {
		return Promise.all([
			
			queryInterface.changeColumn('movie', 'html', {
				type: Sequelize.TEXT('long'),
				allowNull : true
			}),
		]);
	},

	down: (queryInterface, Sequelize) => {
		return Promise.all([
			
			queryInterface.changeColumn('movie', 'html', {
				type: Sequelize.STRING,
				allowNull : true
			}),
		]);
	},
};
