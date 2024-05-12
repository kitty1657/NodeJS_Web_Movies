import express from 'express';
import userController from '../controllers/userController';
import actorController from '../controllers/actorController';
import genreController from '../controllers/genreController';
import directorController from '../controllers/directorController';
import movieController from '../controllers/movieController';
import countryController from '../controllers/countryController';
import commentController from '../controllers/commentController';
import { checkUserJWT, checkUserPermission } from '../middleware/JWTAction';
const router = express.Router();

const checkUserLogin = (req, res, next)=>{
  const nonSecurePath = ['/api/login','/api/user/create-new-user']
  if(nonSecurePath.includes(req.path)) return next()

  next()
}

const initWebRoutes = (app) => {
  router.all('*', checkUserLogin)

	router.post('/api/login', userController.handleLogin);

	// * User
	router.get('/api/user/get-all-users', userController.handleGetAllUsers);
	router.post('/api/user/create-new-user', userController.handleCreateNewUser);
	router.put('/api/user/edit-user', userController.handleEditUser);
	router.delete('/api/user/delete-user', userController.handleDeleteUser);
	router.get('api/user-role', userController.handleGetAllUserRole);
	router.get('/api/user/get-search-user', userController.handleSearchUser);
	router.get('/api/user/count', userController.handleGetUserCount);

	// * Actor
	router.get('/api/actor/get-all-actors', actorController.handleGetAllActors);
	router.post('/api/actor/create-new-actor', actorController.handleCreateNewActor);
	router.put('/api/actor/edit-actor', actorController.handleEditActor);
	router.delete('/api/actor/delete-actor', actorController.handleDeleteActor);
	router.get('/api/actor/get-search-actor', actorController.handleSearchActor);

	// * Director
	router.get(
		'/api/director/get-all-directors',
		directorController.handleGetAllDirectors
	);
	router.post(
		'/api/director/create-new-director',
		directorController.handleCreateNewDirector
	);
	router.put('/api/director/edit-director', directorController.handleEditDirector);
	router.delete(
		'/api/director/delete-director',
		directorController.handleDeleteDirector
	);
	router.get(
		'/api/director/get-search-director',
		directorController.handleSearchDirector
	);

	// * Category
	router.get('/api/genre/get-all-genre',checkUserJWT,checkUserPermission, genreController.handleGetAllGenres);
	router.post('/api/genre/create-new-genre', genreController.handleCreateNewGenre);
	router.put('/api/genre/edit-genre', genreController.handleEditGenre);
	router.delete('/api/genre/delete-genre', genreController.handleDeleteGenre);
	router.get('/api/genre/get-search-genre', genreController.handleSearchGenre);

	// * Movie
	router.get('/api/movie/get-all-movies',checkUserJWT,checkUserPermission, movieController.handleGetAllMovies);
	router.post('/api/movie/create-new-movie', movieController.handleCreateNewMovie);
	router.put('/api/movie/edit-movie', movieController.handleEditMovie);
	router.delete('/api/movie/delete-movie', movieController.handleDeleteMovie);
	router.get('/api/movie/get-search-movie', movieController.handleSearchMovie);
	// * Movie Count
	router.get('/api/movies/count', movieController.handleGetMoviesCount);

	// * Movie Genre
	router.get(
		'/api/get-all-moviegenres',
		movieController.handleGetAllMovieGenres
	);

	// * Movie Actor
	router.get(
		'/api/get-all-movieactors',
		movieController.handleGetAllMovieActors
	);

	// * Movie Director
	router.get(
		'/api/get-all-moviedirectors',
		movieController.handleGetAllMovieDirectors
	);

	// * Country
	router.get('/api/get-all-countries', countryController.hanldeGetAllCountries);

	// * Comment
	router.get('/api/get-all-comments', commentController.handleGetAllComments);
	router.post(
		'/api/create-new-comment',
		commentController.handleCreateNewComment
	);

	return app.use('/', router);
};

module.exports = initWebRoutes;
