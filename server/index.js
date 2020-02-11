const express = require("express");
const app = express();
const routes = require("./controller/routes");
const middleware = require("./middleware");

routes(app, express);
middleware.cors(app);

const port = process.env.PORT || 5000;
app.listen(port);

console.log("App is listening on port " + port);
