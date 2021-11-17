import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Form, Input, Button, Checkbox } from "antd";
import {logout, useAuth, login} from '../../../firebase';
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate } from 'react-router-dom';
import { Alert } from 'antd';

export const Login = () => {
    const currentUser:any = useAuth();
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)
    const nabigate = useNavigate()
    async function onFinish(values: any){
        setLoading(true)
         try{
             await login(values.username, values.password)
             console.log('Success:', values);
             nabigate("/");
         } catch(e){
          setError(true)
         }
         setLoading(false)
      };



  return (
    <Container>
     {error && <Alert
          message="Error"
          description="Please enter a valid email address. Please enter a valid password"
          type="error"
          showIcon
          closable          
        />}
        <h1>{currentUser?.email}</h1>
      <Form
        name="normal_E-mail"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your E-mail!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="E-mail"
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
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            disabled={loading}
          >
            Log in
          </Button>
          
          {/* Or <Link to="/register">register now!</Link> */}
        </Form.Item>
      </Form>
    </Container>
  );
};
