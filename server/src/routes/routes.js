const AuthenticationController = require("../controllers/AuthenticationController");
const ExpensesController = require("../controllers/ExpenseController");
const CategoryController = require("../controllers/CategoryController");
const ProjectController = require("../controllers/ProjectController");

module.exports = (app) => {
  app.post("/login", AuthenticationController.login);

  app.post("/register", AuthenticationController.register);

  app.put("/expense/update", ExpensesController.updateExpenses);

  app.post("/expense/add", ExpensesController.addExpenses);

  app.put("/project/:id", ExpensesController.updateExpenses);

  app.get("/catergory", CategoryController.getCategory);

  app.post("/project", ProjectController.addProject);

  app.get("/project/:id", ProjectController.getProjectBasedOnUser);
};
