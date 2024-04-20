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

const addGenreMovie = async (movieID, genreIDs) => {
	try {
		const movie = await getAllMovies(movieID);
		if (!movie) {
			console.log('Movie not found');
			return;
		}
		console.log(genreIDs)
		for (const genreID of genreIDs) {
			await db.moviegenre.create({
				movieID:  movieID ,
				genreID:  genreID ,
			});
		}
		console.log('Genres added successfully to the movie');
	} catch (error) {
		console.log(error);
	}
};

const createNewMovie = async (data) => {
	return new Promise(async (resolve, reject) => {
		try {
			const movieData = data.movie;
			const existingMovie = await db.movie.findOne({
				where: { title: movieData.title },
			});
			console.log(data.movie);
			if (existingMovie) {
				resolve({
					errCode: 1,
					ereMessage: 'Movie already exists',
				});
			} else {
				const createdMovie = await db.movie.create({
					title: movieData.name,
					description: movieData.description,
					countryID: movieData.countryID,
					release: movieData.release,
					duration: movieData.duration,
					thumbnail: movieData.thumbnail,
					videoURL: movieData.videoURL,
					html: movieData.html,
				});

				const createdMovieID = createdMovie.movieID;

				const movieGenre = await addGenreMovie(createdMovieID,movieData.genres)

				resolve({
					errCode: 0,
					ereMessage: 'Create Movie Success',
					createdMovie,
					movieGenre
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
					title = data.movie.name;
					description = data.movie.description;
					countryID = data.movie.countryID;
					release = data.movie.release;
					duration = data.movie.duration;
					thumbnail = data.movie.thumbnail;
					videoURL = data.movie.videoURL;
					html = data.movie.html;
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
	return new Promise(async (resolve, reject) => {
		let movie = await db.movie.findOne({
			where: { movieID: movieID },
		});
		if (!movie) {
			resolve({
				errCode: 2,
				errMessage: `The movie isn't exist`,
			});
		}
		await db.movie.destroy({
			where: { movieID: movieID },
		});
		resolve({
			errCode: 0,
			errMessage: 'Delete Success',
		});
	});
};

module.exports = {
	getAllMovies: getAllMovies,
	createNewMovie: createNewMovie,
	editMovie: editMovie,
	deleteMovie: deleteMovie,
};
