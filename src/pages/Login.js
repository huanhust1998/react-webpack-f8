import React from "react";

function Login() {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
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
        <div>
          <div className="img_login">
            <div className="img_login-delete">X</div>
            <img className="img_login-img" src="" />
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
