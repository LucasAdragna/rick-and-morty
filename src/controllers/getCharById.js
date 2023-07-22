/** @format */

const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = (req, res) => {
  const { id } = req.params;

  axios(`${URL}${id}`)
    .then(({ data }) => {
      if (data.error) {
        res.send(404).json(data.error);
      }
      let character = {
        id: data.id,
        status: data.sattus,
        name: data.name,
        species: data.species,
        origin: data.origin,
        image: data.image,
        gender: data.gender,
      };
      return res.status(200).json(character);
    })
    .catch((error) => {
      res.status(500).send({ error: error.message });
    });
};

module.exports = { getCharById };
