import React from "react";

function Login() {
  return (
    <div className="main_login">
      <div className="recently">
        <div className="recently-text">
          <img
            src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
            className="recently-text-logo"
            alt="Facebook"
          />
          <div className="recently-text-login">Đăng nhập gần đây</div>
          <div className="recently-text-click">Nhấp vào ảnh của bạn hoặc thêm tài khoản</div>
        </div>
        <div className="login">
          <div className="img_login">
            <div className="img_login-delete">X</div>
            <img className="img_login-img" src="https://scontent-hkt1-2.xx.fbcdn.net/v/t1.6435-1/211722569_1444726509197341_3635302860825587961_n.jpg?stp=c11.5.1069.1070a_dst-jpg_s160x160&_nc_cat=106&ccb=1-5&_nc_sid=dbb9e7&_nc_ohc=1I7I79nL34AAX-zSQWj&_nc_ht=scontent-hkt1-2.xx&oh=00_AT8TV3qiH-Y0oEti0PGOkglGhz6h-xczo-FNCBwshn9Lxw&oe=62908291" />
            <div className="img_login-name">Huấn</div>
          </div>
          <div className="add_account">
            <div className="add_account-add"></div>
            <div>Thêm tài khoản</div>
          </div>
        </div>
      </div>
      <form>
        <input placeholder="Email hoặc số điện thoại" />
        <input placeholder="Mật khẩu" />
        <button>Đăng nhập</button>
        <a>Quên mật khẩu?</a>
        <button>Tạo tài khoản mới</button>
      </form>
    </div>
  );
}

export default Login;
