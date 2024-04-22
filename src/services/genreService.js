import { Op } from 'sequelize';
import genre from '../models/genre';
import db from '../models/index';

const getAllGenres = (genreID)=>{
    return new Promise(async (resolve, reject) => {
		try {
			let genres = '';
			if (genreID === 'ALL') {
				genres = await db.genre.findAll();
			}
			if (genreID && genreID !== 'ALL') {
				genres = await db.genre.findOne({
					where: { genreID: genreID },
				});
			}
			resolve(genres);
		} catch (error) {
			reject(error);
		}
	});
}

const createNewGenre = async (newGenreData) => {
	return new Promise(async (resolve, reject) => {
		try {
			const existingGenre = await db.genre.findOne({
				where: { name: newGenreData.name },
			});

			if (existingGenre) {
				resolve({
					errCode: 1,
					ereMessage: 'Genre already exists',
				});
			} else {
				const createdGenre = await db.genre.create(newGenreData);
				resolve({
					errCode: 0,
					ereMessage: 'Create Genre Success',
					createdGenre,
				});
			}
		} catch (error) {
			reject(error);
		}
	});
};

const editGenre = async (data) => {
	return new Promise(async (resolve, reject) => {
		try {
			if (!data.genreID) {
				resolve({
					errCode: 2,
					errMessage: 'Missing required parameters',
				});
			} else {
				let genre = await db.genre.findOne({
					where: { genreID: data.genreID },
					raw: false,
				});
				if (genre) {
					genre.name = data.name;
                    console.log(data.name)
					await genre.save();
					resolve({
						errCode: 0,
						errMessage: 'Update Success',
					});
				} else {
					resolve({
						errCode: 1,
						errMessage: `Genre isn't found`,
					});
				}
			}
		} catch (error) {
			reject(error);
		}
	});
};

const deleteGenre = (genreID) => {
	return new Promise(async(resolve, reject) => {
		let genre = await db.genre.findOne({
			where: {genreID: genreID}
		})
        console.log(genreID)
		if(!genre){
			resolve({
				errCode: 2,
				errMessage: `The genre isn't exist`
			})
		}
		await db.genre.destroy({
			where: {genreID: genreID}
		})
		resolve({
			errCode: 0,
			errMessage: 'Delete Success'
		})
	});
};

const searchGenre = async (keyword) => {
	try {
		let genresSearch = '';
		console.log(keyword)

		if (!keyword) {
			// Nếu không có từ khóa tìm kiếm, trả về tất cả các thể loại
			genresSearch = await db.genre.findAll();
		} else {
			// Nếu có từ khóa tìm kiếm, tìm kiếm thể loại theo từ khóa
			genresSearch = await db.genre.findAll({
				where: {
					name: {
						[Op.substring]: `%${keyword}%`, 
					},
				},
			});
		}

		return {
			errCode: 0,
			errMessage: 'Search Success',
			genresSearch,
		};
	} catch (error) {
		throw error;
	}
};

module.exports = {
	getAllGenres: getAllGenres,
	createNewGenre: createNewGenre,
	editGenre: editGenre,
	deleteGenre: deleteGenre,
	searchGenre: searchGenre,
};