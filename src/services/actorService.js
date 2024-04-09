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

const createNewActor = async (newActorData) => {
	return new Promise(async (resolve, reject) => {
		try {
			const existingActor = await db.actor.findOne({
				where: { name: newActorData.name },
			});

			if (existingActor) {
				resolve({
					errCode: 1,
					ereMessage: 'Actor name already exists',
				});
			} else {
				const createdActor = await db.actor.create(newActorData);
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
			console.log(data.actor.image)
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
	return new Promise(async(resolve, reject) => {
		let actor = await db.actor.findOne({
			where: {actorID: actorID}
		})
		if(!actor){
			resolve({
				errCode: 2,
				errMessage: `The Actor isn't exist`
			})
		}
		await db.actor.destroy({
			where: {actorID: actorID}
		})
		resolve({
			errCode: 0,
			errMessage: 'Delete Success'
		})
	});
};

module.exports = {
	getAllActors: getAllActors,
	createNewActor: createNewActor,
	editActor: editActor,
	deleteActor: deleteActor
};
