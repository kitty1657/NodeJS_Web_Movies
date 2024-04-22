import db from '../models/index';

const getAllCountries = (countryID) => {
	return new Promise(async (resolve, reject) => {
		try {
			let countries = '';
			if (countryID === 'ALL') {
				countries = await db.country.findAll();
			}
			if (countryID && countryID !== 'ALL') {
				countries = await db.country.findOne({
					where: { countryID: countryID },
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