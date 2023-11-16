import { useState } from "react";
import "./login.css";
import axios from "axios";
export default function Login() {
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit =  (e) => {
    e.preventDefault();
    
    axios
      .post ('http://localhost:9999/login', formData)
      .then((res) => {
        localStorage.setItem("userLogin", JSON.stringify(res.data));
        window.location = "/tasks";
      })
      .catch((err) => console.error(err));
  };
 
  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Đăng nhập</h2>
      <hr />
      <label htmlFor="username">username:</label>
      <input
        className="input-form"
        type="text"
        name="name"
        placeholder="name"
        value={formData.name}
        onChange={handleChange}
      />
      <p className="error" id="error-email" />
      <label htmlFor="password">Mật khẩu:</label>
      <input
        className="input-form"
        type="password"
        name="password"
        placeholder="password"
        value={formData.password}
        onChange={handleChange}
      />
      <p className="error" id="error-password" />
      <div id="btn-form-login">
        <button type="submit">Đăng nhập</button>
      </div>
      <p id="navigation">
        Bạn chưa đăng ký tài khoản?
        <a>Đăng ký</a>
      </p>
    </form>
  );
}
