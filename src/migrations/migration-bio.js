module.exports = {
	up: (queryInterface, Sequelize) => {
		return Promise.all([
			queryInterface.changeColumn('actor', 'biography', {
				type: Sequelize.TEXT('long'),
				allowNull : true
			}),
			queryInterface.changeColumn('director', 'biography', {
				type: Sequelize.TEXT('long'),
				allowNull : true
			}),
            queryInterface.changeColumn('movie', 'description', {
				type: Sequelize.TEXT('long'),
				allowNull : true
			}),
		]);
	},

	down: (queryInterface, Sequelize) => {
		return Promise.all([
			queryInterface.changeColumn('actor', 'biography', {
				type: Sequelize.STRING,
				allowNull : true
			}),
			queryInterface.changeColumn('director', 'biography', {
				type: Sequelize.STRING,
				allowNull : true
			}),
            queryInterface.changeColumn('movie', 'description', {
				type: Sequelize.STRING,
				allowNull : true
			}),
		]);
	},
};
