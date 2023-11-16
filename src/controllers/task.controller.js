import { connection } from "../DB/config.js";
class TasksController {
  // thêm mới tasks
  insertTask(req, res) {
    const { name, priority, deadeline, done } = req.body;
    connection.query(
      `INSERT INTO tasks (name,priority,deadeline,done) VALUES ('${name}','${priority}','${deadeline}','${done}')`,
      (error, results, fields) => {
        if (error) throw error;
        console.log(`Inserted task with name: ${name}`);
      }
    );
  }
  // get all task
  getAllTasks(req, res) {
    connection.query(`select *  from tasks`, function (err, result, fields) {
      if (err) throw err;
      console.log("Result: ", result);
      res.status(200).json(result);
      return result;
    });
  }
  //   update status Task
  updateTask(req, res) {
    connection.query(
      `UPDATE tasks
    SET done=1
    WHERE id=${req.params.id}`,
      function (err, result, fields) {
        if (err) throw err;
        console.log("Result: ", result);
        return result;
      }
    );
  }
  //   delete Task by id
  deleteTask(req, res) {
    connection.query(
      `delete from tasks
       WHERE id=${req.params.id}`,
      function (err, result, fields) {
        if (err) throw err;
        console.log("Result: ", result);
        return result;
      }
    );
  }
}
export default TasksController;
