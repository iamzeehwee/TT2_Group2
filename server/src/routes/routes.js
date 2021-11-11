const AuthenticationController = require("../controllers/AuthenticationController");
// const AuthenticationControllerPolicy = require("./policies/AuthenticationControllerPolicy");

module.exports = (app) => {
  app.post(
    "/login",
    AuthenticationController.login
  );

  app.post(
    "/register",
    AuthenticationController.register
  );

  app.get("/:whatYouwantToPut/", (req, res) => {
    console.log("hohooh", req.body, req.params, req.query)
    res.send("Hello World!");
  });
};
