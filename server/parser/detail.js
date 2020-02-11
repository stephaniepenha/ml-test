const detail = (response, responseDescription) => {
  const parsedData = {
    author: {
      name: "",
      lastname: ""
    },
    item: buildItem(response, responseDescription)
  };

  return parsedData;
};

const buildItem = (item, description) => {
  return {
    id: item.id,
    title: item.title,
    price: {
      amount: item.price,
      currency: item.currency_id,
      decimals: 0
    },
    picture: item.pictures[0].url,
    condition: item.condition,
    free_shipping: item.shipping.free_shipping,
    sold_quantity: item.sold_quantity,
    description: description.plain_text
  };
};

module.exports = detail;
