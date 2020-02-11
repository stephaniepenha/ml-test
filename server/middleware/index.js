const cors = app =>
  app.use((cli, res, next) => {
    res.setHeader("Allow", "*");
    res.setHeader("Connection", "keep-alive");
    res.setHeader("Date", Date());
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Allow-Control-Allow-Methods", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

module.exports = { cors };
