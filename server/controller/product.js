const axios = require("axios").default;
const parser = require("../parser/detail");

const get = async (req, res) => {
  const response = await axios.get(
    `https://api.mercadolibre.com/items/${req.params.id}`
  );

  const responseDescription = await axios.get(
    `https://api.mercadolibre.com/items/${req.params.id}/description`
  );

  res.json(parser(response.data, responseDescription.data));
};

module.exports = { get };
