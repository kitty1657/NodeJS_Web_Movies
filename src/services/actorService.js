import { Op, where } from 'sequelize';
import db from '../models/index';

const getAllActors = (actorID) => {
	return new Promise(async (resolve, reject) => {
		try {
			let actors = '';
			if (actorID === 'ALL') {
				actors = await db.actor.findAll();
			}
			if (actorID && actorID !== 'ALL') {
				actors = await db.actor.findOne({
					where: { actorID: actorID },
				});
			}
			resolve(actors);
		} catch (error) {
			reject(error);
		}
	});
};

const createNewActor = (data) => {
	return new Promise(async (resolve, reject) => {
		try {
			const existingActor = await db.actor.findOne({
				where: { name: data.actor.name },
			});
			console.log(data.actor);
			if (existingActor) {
				resolve({
					errCode: 1,
					ereMessage: 'Actor already exists',
				});
			} else {
				const createdActor = await db.actor.create({
					name: data.actor.name,
					birthdate: data.actor.birthdate,
					nationality: data.actor.nationality,
					biography: data.actor.biography,
					image: data.actor.image,
				});
				resolve({
					errCode: 0,
					ereMessage: 'Create Actor Success',
					createdActor,
				});
			}
		} catch (error) {
			reject(error);
		}
	});
};

const editActor = async (data) => {
	return new Promise(async (resolve, reject) => {
		try {
			console.log(data.actor.image);
			if (!data.actor.actorID) {
				resolve({
					errCode: 2,
					errMessage: 'Missing required parameters',
				});
			} else {
				let actor = await db.actor.findOne({
					where: { actorID: data.actor.actorID },
					raw: false,
				});

				if (actor) {
					actor.name = data.actor.name;
					actor.birthdate = data.actor.birthdate;
					actor.nationality = data.actor.nationality;
					actor.biography = data.actor.biography;
					actor.image = data.actor.image;
					await actor.save();
					resolve({
						errCode: 0,
						errMessage: 'Update Success',
					});
				} else {
					resolve({
						errCode: 1,
						errMessage: `Actor isn't found`,
					});
				}
			}
		} catch (error) {
			reject(error);
		}
	});
};

const deleteActor = (actorID) => {
	return new Promise(async (resolve, reject) => {
		let actor = await db.actor.findOne({
			where: { actorID: actorID },
		});
		if (!actor) {
			resolve({
				errCode: 2,
				errMessage: `The Actor isn't exist`,
			});
		}
		await db.actor.destroy({
			where: { actorID: actorID },
		});
		resolve({
			errCode: 0,
			errMessage: 'Delete Success',
		});
	});
};

const searchActor = async (keyword) => {
	try {
		let actorSearch = '';
		if (!keyword) {
			actorSearch = await db.actor.findAll();
		} else {
			actorSearch = await db.actor.findAll({
				where: {
					[Op.or]: [
						{
							name: {
								[Op.substring]: `%${keyword}%`,
							},
						},
						{
							nationality: {
								[Op.substring]: `%${keyword}%`,
							},
						},
					],
				},
			});
		}
		console.log(keyword);
		return {
			errCode: 0,
			errMessage: 'Search Success',
			actorSearch,
		};
	} catch (error) {
		throw error;
	}
};

module.exports = {
	getAllActors: getAllActors,
	createNewActor: createNewActor,
	editActor: editActor,
	deleteActor: deleteActor,
	searchActor: searchActor,
};
