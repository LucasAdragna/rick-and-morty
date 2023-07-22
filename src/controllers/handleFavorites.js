/** @format */

let myFavorites = [];

const postFav = (req, res) => {
  myFavorites.push(req.body);
  res.status(200).json(myFavorites);
};

const deleteFav = (req, res) => {
  const { id } = req.params;
  const useDelete = myFavorites.filter((use) => use.id != id);
  myFavorites = useDelete;
  res.status(200).json(myFavorites);
};

module.exports = { postFav, deleteFav };
