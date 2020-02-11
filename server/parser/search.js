const search = response => {
  const parsedData = {
    author: {
      name: "",
      lastname: ""
    },
    categories: parsedCategory(response),
    items: []
  };

  parsedData.items.push(searchItem(response.results[0]));
  parsedData.items.push(searchItem(response.results[1]));
  parsedData.items.push(searchItem(response.results[2]));
  parsedData.items.push(searchItem(response.results[3]));

  // SLOW PERFORMANCE
  //   response.results.forEach((item, index) => {
  //     if (index < 4) {
  //       parsedData.items.push();
  //     }
  //   });
  return parsedData;
};

const parsedCategory = response => {
  const categories = response.available_filters.find(
    filter => filter.id == "category"
  );

  let parsedCategory = [];
  if (categories) {
    parsedCategory = categories.values.map(category => category.id);
  }
  return parsedCategory;
};

const searchItem = item => {
  return {
    id: item.id,
    title: item.title,
    price: {
      amount: item.price,
      currency: item.currency_id,
      decimals: 0
    },
    picture: item.thumbnail,
    condition: item.condition,
    free_shipping: item.shipping.free_shipping,
    address: item.address.state_name
  };
};

module.exports = search;
