import db from '../models/index';

const getAllCountries = (id) => {
	return new Promise(async (resolve, reject) => {
		try {
			let countries = '';
			if (id === 'ALL') {
				countries = await db.country.findAll();
			}
			if (id && id !== 'ALL') {
				countries = await db.country.findOne({
					where: { countryID: id },
				});
			}
			resolve(countries);
		} catch (error) {
			reject(error);
		}
	});
}; 

module.exports = {
    getAllCountries: getAllCountries
}