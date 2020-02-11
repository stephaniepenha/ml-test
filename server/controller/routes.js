const SearchController = require("./search");
const ProductController = require("./product");
const path = require("path");

const Routes = (app, express) => {
  app.use(express.static(path.join(__dirname, "./../../client/build")));

  app.get("/api/items", SearchController.search);
  app.get("/api/items/:id", ProductController.get);

  app.get("*", (req, res) => {
    console.log(__dirname);
    console.log(__dirname + "./../../client/build/index.html");
    console.log(path.join(__dirname + "./../../client/build/index.html"));
    res.sendFile(path.join(__dirname + "./../../client/build/index.html"));
  });
};

module.exports = Routes;
