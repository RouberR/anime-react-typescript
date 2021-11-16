import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Form, Input, Button, Checkbox } from "antd";
import {logout, useAuth, login} from '../../../firebase';
import { UserOutlined, LockOutlined } from "@ant-design/icons";
export const Login = () => {
    const currentUser:any = useAuth();
    const [loading, setLoading] = useState<boolean>(false)
    async function onFinish(values: any){
        setLoading(true)
         try{
             await login(values.username, values.password)
             console.log('Success:', values);
         } catch{
            alert("Ошибка") 
         }
         setLoading(false)
      };

      async function handleLogout() {
        setLoading(true)
          try{
              await logout()
          } catch{
              alert("Ошибочка")
          }
          setLoading(false)
      }

  return (
    <Container>
        <h1>{currentUser?.email}</h1>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          {/* <a className="login-form-forgot" href="">
          Forgot password
        </a> */}
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          Or <a href="">register now!</a>
          <Button
            type="primary"
            onClick={handleLogout}
            className="login-form-button"
          >
            LogOut
          </Button>
        </Form.Item>
      </Form>
    </Container>
  );
};
