import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./page/login/login";
import Tasks from "./page/tasks/tasks";

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/tasks" element={<Tasks />} />
      </Routes>
    </>
  );
}

export default App;
