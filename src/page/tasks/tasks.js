import { useEffect, useState } from "react";
import "./tasks.css";
import axios from "axios";

export default function Tasks() {
  const [listTasks, setListTasks] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const response = await getData("task");
      setListTasks(response);
    };
    fetchdata();
  }, []);
  const getData = async (resource) => {
    try {
      const response = await axios.get("http://localhost:9999/" + resource);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };
  const upcomingTasks = listTasks.filter((t) => t.done === 0);
  const completedTasks = listTasks.filter((t) => t.done === 1);

  return (
    <div className="App">
      <header>
        <h1>Task Scheduler</h1>
      </header>
      <main>
        <div className="task-form">
          <input type="text" id="task" placeholder="Enter task..." />
          <select id="priority">
            <option value="top">Top Priority</option>
            <option value="middle">Middle Priority</option>
            <option value="low">Less Priority</option>
          </select>
          <input type="date" id="deadline" />
          <button id="add-task">Add Task</button>
        </div>
        <h2 className="heading">Upcoming Tasks</h2>
        <div className="task-list" id="task-list">
          <table>
            <thead>
              <tr>
                <th>Task Name</th>
                <th>Priority</th>
                <th>Deadline</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {upcomingTasks.map((t) => (
                <tr key={t.id}>
                  <td>{t.name}</td>
                  <td>{t.priority}</td>
                  <td>{t.deadeline}</td>
                  <td>
                    {!t.done && (
                      <button className="mark-done">Mark Done</button>
                    )}
                  </td>
                </tr>
              ))}{" "}
            </tbody>
          </table>
        </div>
        <div className="completed-task-list">
          <h2 className="cheading">Completed Tasks</h2>
          <table>
            <thead>
              <tr>
                <th>Task Name</th>
                <th>Priority</th>
                <th>Deadline</th>
              </tr>
            </thead>
            <tbody>
              {completedTasks.map((t) => (
                <tr key={t.id}>
                  <td>{t.name}</td>
                  <td>{t.priority}</td>
                  <td>{t.deadeline}</td>
                </tr>
              ))}{" "}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
