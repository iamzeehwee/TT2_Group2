const AuthenticationController = require("../controllers/AuthenticationController");
const ExpensesController = require("../controllers/ExpenseController");
const CategoryController = require("../controllers/CategoryController");
const ProjectController = require("../controllers/ProjectController");

module.exports = (app) => {
  app.post("/login", AuthenticationController.login);

  app.post("/register", AuthenticationController.register);

  app.get("/user/:id", AuthenticationController.getUserInfo);

  // app.put("/expense/update", ExpensesController.updateExpenses);

  app.post("/expense/add", ExpensesController.addExpenses);

  app.get("/expense/:id", ExpensesController.getExpenseByProjectId);  // Pass in project Id

  app.put("/expense/update/:id", ExpensesController.updateExpenses); // Pass in expense Id

  app.delete("/expense/:id", ExpensesController.deleteExpense); 

  app.get("/category", CategoryController.getCategory);

  app.post("/project", ProjectController.addProject);

  app.get("/project/:id", ProjectController.getProjectBasedOnUser); // Pass in User Id
};
