const AuthenticationController = require("../controllers/AuthenticationController");
const ExpensesController = require("../controllers/ExpenseController");
const CategoryController = require("../controllers/CategoryController");
const ProjectController = require("../controllers/ProjectController");

module.exports = (app) => {
  app.post("/login", AuthenticationController.login);

  app.post("/register", AuthenticationController.register);

  app.post("/expenses", AuthenticationController.register);

  app.post("/expense/add", ExpensesController.addExpenses);

  app.get("/catergory", CategoryController.getCategory);

  app.get("/project/:id", ProjectController.getCategory);

  app.get("/:whatYouwantToPut/", (req, res) => {
    console.log("hohooh", req.body, req.params, req.query);
    res.send("Hello World!");
  });
};
