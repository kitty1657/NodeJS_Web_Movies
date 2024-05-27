import directorService from "../services/directorService";

const handleGetAllDirectors = async (req, res) => {
  let id = req.query.id;
  if (!id) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "Missing parameters",
      directors: [],
    });
  }

  let directors = await directorService.getAllDirectors(id);

  return res.status(200).json({
    errCode: 0,
    directors,
  });
};

const handleCreateNewDirector = async (req, res) => {
  let message = await directorService.createNewDirector(req.body);
  return res.status(200).json(message);
};

const handleEditDirector = async (req, res) => {
  let data = req.body;
  let message = await directorService.editDirector(data);
  console.log(data);
  return res.status(200).json(message);
};

const handleDeleteDirector = async (req, res) => {
  if (!req.body.directorID) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "Missing required parameters",
    });
  }
  console.log(req.body.directorID);
  let message = await directorService.deleteDirector(req.body.directorID);
  return res.status(200).json(message);
};

const handleSearchDirector = async (req, res) => {
  try {
    const keyword = req.query.keyword;

    const director = await directorService.searchDirector(keyword);

    return res.status(200).json({
      errCode: 0,
      director
    });
  } catch (error) {
    return res.status(500).json({
      errCode: 500,
      errMessage: "Internal server error",
    });
  }
};

module.exports = {
  handleGetAllDirectors: handleGetAllDirectors,
  handleCreateNewDirector: handleCreateNewDirector,
  handleEditDirector: handleEditDirector,
  handleDeleteDirector: handleDeleteDirector,
  handleSearchDirector: handleSearchDirector,
};
