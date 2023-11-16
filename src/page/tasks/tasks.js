import { useEffect, useState } from "react";
import "./tasks.css";
import axios from "axios";

export default function Tasks() {
  const [listTasks, setListTasks] = useState([]);
  const [tasks, setTasks] = useState({});
  const [count, setCount] = useState(0);
  const userLogin = JSON.parse(localStorage.getItem("userLogin")) || {};
  useEffect(() => {
    const fetchdata = async () => {
      const response = await getData("task");
      setListTasks(response);
    };
    fetchdata();
  }, [count]);
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
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTasks({ ...tasks, [name]: value });
  };
  const handleAddTask = () => {
    if (userLogin.role === 0) {
      return;
    } else {
      axios
        .post("http://localhost:9999/" + "task", tasks)
        .then((res) => {
          setCount(count + 1);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Task Scheduler</h1>
      </header>
      <main>
        <div className="task-form">
          <input
            type="text"
            id="task"
            placeholder="Enter task..."
            name="name"
            value={tasks.name}
            onChange={handleChange}
          />
          <select
            id="priority"
            name="priority"
            value={tasks.priority}
            onChange={handleChange}
          >
            <option value="top">Top Priority</option>
            <option value="middle">Middle Priority</option>
            <option value="low">Less Priority</option>
          </select>
          <input
            type="date"
            id="deadeline"
            name="deadeline"
            value={tasks.deadeline}
            onChange={handleChange}
          />
          <button id="add-task" onClick={handleAddTask}>
            Add Task
          </button>
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
