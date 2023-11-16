import LoginController from "../controllers/login.controller.js";
import TasksController from "../controllers/task.controller.js";

export function route(app) {
  const loginController = new LoginController();
  const tasksController = new TasksController();
  app.post("/login", loginController.login);
  // insert task
  app.post("/task", tasksController.insertTask);
  // get all tasks
  app.get("/task", tasksController.getAllTasks);
  //   update task
  app.put("/task/:id", tasksController.updateTask);
  //   delete tasks
  app.delete("/task/:id", tasksController.deleteTask);
}
