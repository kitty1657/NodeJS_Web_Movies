const db = require('../models');

const getAllComments = (commentID) => {
	return new Promise(async (resolve, reject) => {
		try {
			let comments = '';
			if (commentID === 'ALL') {
				comments = await db.comment.findAll();
			}
			if (commentID && commentID !== 'ALL') {
				comments = await db.comment.findOne({
					where: { commentID: commentID },
				});
			}
			resolve(comments);
		} catch (error) {
			reject(error);
		}
	});
};

const getUserNameByUserID = async (userID) => {
	try {
		console.log(userID)
		const response = await db.user.findOne({
			where: { userID: userID },
			attributes: {
				exclude: ['password'],
			},
		});
		return response.fullName
	} catch (error) {
		console.log(error);
	}
};

const createComment = (data) => {
	return new Promise(async (resolve, reject) => {
		try {
			const userID = await db.user.findOne({
				where: {
					userID: data.userID,
				},
			});
			if (!userID) {
				resolve({
					errCode: 1,
					errMessage: "If you don't have account, sign up to comment",
				});
			} else {
				const createdComment = await db.comment.create({
					movieID: data.movieID,
					userID: data.userID,
					userName:await getUserNameByUserID(data.userID),
					content: data.content,
					commentDate: new Date()
				});
				resolve({
					errCode: 0,
					errMessage: 'Comment Success',
					createdComment
				})
			}
		} catch (error) {
			console.log(error);
			reject(error)
		}
	});
};

module.exports = {
	getAllComments: getAllComments,
	createComment: createComment
};
