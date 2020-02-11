import stringIsJson from "../utils/string-is-json";
import serialize from "../utils/serialize";

const API_URL = "http://localhost:5000/api";

const request = async (path, method, body) =>
  fetch(`${API_URL}${path}`, {
    method,
    mode: "cors",
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    body: body ? JSON.stringify(body) : null
  })
    .then(response => {
      if (!response.ok) {
        throw response;
      }

      return response.json();
    })
    .catch(function(error) {
      console.log(error);
      error.text().then(errorMessage => ({
        error: true,
        status: error.status,
        data: stringIsJson(errorMessage) ? JSON.parse(errorMessage) : {}
      }));
    });

const get = (path, params) =>
  request(path + (params ? `?${serialize(params)}` : ""), "GET");

// calls
export function searchItem(term) {
  return get(`/items?q=${term}`);
}

export function getItem(id) {
  return get(`/items/${id}`);
}
