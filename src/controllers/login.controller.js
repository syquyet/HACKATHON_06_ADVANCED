import { getData } from "../until/DBUntil.js";

class LoginController {
  async login(req, res) {
    const dataUsers = await getData("users");
    let isLogined = false;
    let userLogin;
    dataUsers.forEach((user) => {
      if (user.username === req.body.name) {
        if (user.password === req.body.password) {
          isLogined = true;
          userLogin = { ...user };
        }
      }
    });
    if (isLogined) {
        return {
        status: true,
        message: "đăng nhập thành công",
        data: userLogin,
      };
    } else {
      return {
        status: false,
        message: "đăng nhập thất bại",
        data: null,
      };
    }
  }
}
export default LoginController;
