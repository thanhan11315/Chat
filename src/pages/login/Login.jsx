import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { Row, Col } from "antd";
import Banner from "../../assets/images/Banner-login.png";
import SuperShipLogo from "../../assets/images/SuperShip-Logo.png";
import TabTitle from "../TapTitle";
import React from "react";
import { useEffect } from "react";
import { message } from "antd";

const Login = () => {
  TabTitle("Login");

  const passWordWarning = () => {
    message.error({
      content: "Bạn Nhập sai Passwork",
      className: "custom-class",
      style: {
        marginTop: "20vh",
      },
    });
  };

  const userNameWarning = () => {
    message.error({
      content: "Bạn Nhập sai UserName",
      className: "custom-class",
      style: {
        marginTop: "20vh",
      },
    });
  };

  const userPassWordWarning = () => {
    message.error({
      content: "Bạn Nhập sai User Name và PassWord",
      className: "custom-class",
      style: {
        marginTop: "20vh",
      },
    });
  };

  var navigate = useNavigate();
  const onFinish = (values) => {
    var adminPassword = values.password;
    var adminUsername = values.username;
    if (adminPassword === "123456" && adminUsername === "thanhan") {
      navigate("/chat");
      localStorage.setItem("dzzshasddf", JSON.stringify("zndkeadeeqwrmf"));
    } else if (adminPassword !== "123456" && adminUsername === "thanhan") {
      passWordWarning();
    } else if (adminPassword === "123456" && adminUsername !== "thanhan") {
      userNameWarning();
    } else if (adminPassword !== "123456" && adminUsername !== "thanhan") {
      userPassWordWarning();
    }
  };

  const refreshPage = () => {
    const getLocalUsername = JSON.parse(localStorage.getItem("dzzshasddf"));
    console.log(getLocalUsername);
    if (getLocalUsername === "zndkeadeeqwrmf") {
      navigate("/chat");
    } else {
      navigate("/");
    }
  };

  useEffect(() => {
    refreshPage();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Row>
        <Col lg={16} sm={24} xs={24}>
          <div className="align-box-login">
            <div className="wrapper-login">
              <div className="boxtitle-logo">
                <div className="">
                  <h4 className="title">Login</h4>
                  <p className="p-title">SuperShip Chat.</p>
                </div>
                <img
                  src={SuperShipLogo}
                  alt="img not load"
                  style={{ width: "60px", height: "60px", borderRadius: "5px" }}
                />
              </div>
              <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
              >
                <Form.Item
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Username!",
                    },
                  ]}
                >
                  <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Username"
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Password!",
                    },
                  ]}
                >
                  <Input.Password
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                  />
                </Form.Item>
                <Form.Item>
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                  </Form.Item>

                  <Link className="login-form-forgot" to="/ResetPassword">
                    Forgot password?
                  </Link>
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                  >
                    Log in
                  </Button>
                  <div>
                    Or <Link to="/Register">register now!</Link>
                  </div>
                </Form.Item>
              </Form>
            </div>
            <Link className="hidden" to="/LoginSuccess">
              register now!
            </Link>
          </div>
        </Col>
        <Col lg={8} sm={0} xs={0}>
          <div className="Login-box-item">
            <h4 className="title-item">Biệt Đội Giao Hàng Siêu Đẳng</h4>
            <img src={Banner} alt="img not load" style={{ width: "100%" }} />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Login;
