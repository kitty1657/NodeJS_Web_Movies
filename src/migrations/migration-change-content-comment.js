module.exports = {
	up: (queryInterface, Sequelize) => {
		return Promise.all([
			
			queryInterface.changeColumn('comment', 'content', {
				type: Sequelize.TEXT('medium'),
				allowNull : true
			}),
		]);
	},

	down: (queryInterface, Sequelize) => {
		return Promise.all([
			
			queryInterface.changeColumn('comment', 'content', {
				type: Sequelize.STRING,
				allowNull : true
			}),
		]);
	},
};
