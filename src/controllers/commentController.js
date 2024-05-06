import commentService from '../services/commentService';

const handleGetAllComments = async (req,res)=>{
    let id = req.query.id
    if(!id){
        return res.status(200).json({
            errCode: 1,
            errMessage: "Missing parameters",
            actors:[]
        })
    }

    let comments = await commentService.getAllComments(id)

    return res.status(200).json({
        errCode: 0,
        comments
    })
}

const handleCreateNewComment = async (req,res)=>{
    let message = await commentService.createComment(req.body)
    return res.status(200).json(message)
}

module.exports = {
    handleGetAllComments: handleGetAllComments,
    handleCreateNewComment: handleCreateNewComment
};
