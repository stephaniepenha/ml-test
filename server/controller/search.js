const axios = require("axios").default;
const parser = require("../parser/search");

const search = (req, res) => {
  axios
    .get(`https://api.mercadolibre.com/sites/MLA/search?q=${req.query.q}`)
    .then(function(response) {
      res.json(parser(response.data));
    })
    .catch(function(error) {
      console.log(error);
      res.status(500).json({ error: error });
    });
};

module.exports = { search };
