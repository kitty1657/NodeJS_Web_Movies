import db from '../models/index';

const getAllMovies = (movieID) => {
	return new Promise(async (resolve, reject) => {
		try {
			let movies = '';
			if (movieID === 'ALL') {
				movies = await db.movie.findAll();
			}
			if (movieID && movieID !== 'ALL') {
				movies = await db.movie.findOne({
					where: { movieID: movieID },
				});
			}
			resolve(movies);
		} catch (error) {
			reject(error);
		}
	});
};  

const createNewMovie = async (data) => {
	return new Promise(async (resolve, reject) => {
		try {
			const existingMovie = await db.movie.findOne({
				where: { title: data.movie.title },
			});
			console.log(data.movie)
			if (existingMovie) {
				resolve({
					errCode: 1,
					ereMessage: 'Movie already exists',
				});
			} else {
				const createdMovie = await db.movie.create({
					title: data.movie.name,
					description: data.movie.description,
                    countryID: data.movie.countryID,
                    release: data.movie.release,
                    duration: data.movie.duration,
                    thumbnail: data.movie.thumbnail,
                    videoURL: data.movie.videoURL,
                    html: data.movie.html
				});
				resolve({
					errCode: 0,
					ereMessage: 'Create Movie Success',
					createdMovie,
				});
			}
		} catch (error) {
			reject(error);
		}
	});
};

const editMovie = async (data) => {
	return new Promise(async (resolve, reject) => {
		try {
			if (!data.movie.movieID) {
				resolve({
					errCode: 2,
					errMessage: 'Missing required parameters',
				});
			} else {
				let movie = await db.movie.findOne({
					where: { movieID: data.movie.movieID },
					raw: false,
				});
				
				if (movie) {
					title = data.movie.name,
					description = data.movie.description,
                    countryID = data.movie.countryID,
                    release = data.movie.release,
                    duration = data.movie.duration,
                    thumbnail = data.movie.thumbnail,
                    videoURL = data.movie.videoURL,
                    html = data.movie.html
					await movie.save();
					resolve({
						errCode: 0,
						errMessage: 'Update Success',
					});
				} else {
					resolve({
						errCode: 1,
						errMessage: `Movie isn't found`,
					});
				}
			}
		} catch (error) {
			reject(error);
		}
	});
};

const deleteMovie = (movieID) => {
	return new Promise(async(resolve, reject) => {
		let movie = await db.movie.findOne({
			where: {movieID: movieID}
		})
		if(!movie){
			resolve({
				errCode: 2,
				errMessage: `The movie isn't exist`
			})
		}
		await db.movie.destroy({
			where: {movieID: movieID}
		})
		resolve({
			errCode: 0,
			errMessage: 'Delete Success'
		})
	});
};

module.exports = {
	getAllMovies: getAllMovies,
	createNewMovie: createNewMovie,
	editMovie: editMovie,
	deleteMovie: deleteMovie
};
