import React, {useState} from 'react'
import { GoogleAuthProvider } from "firebase/auth";
import { Form, Input, Button, Checkbox } from 'antd';
import { Container, Row } from 'react-bootstrap';
import { signup, useAuth } from '../../../firebase';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
const provider = new GoogleAuthProvider();
export const Authentication = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const currentUser:any = useAuth();
    
     async function onFinish(values: any){
        setLoading(true)
         try{
             await signup(values.username, values.password)
             console.log('Success:', values);
         } catch{
            alert("Ошибка") 
         }
         setLoading(false)
      };
     
      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };

    return (
        <Container>
            <div><h1>Добро пожаловать {currentUser ? (currentUser.email) : ("НААА")} </h1></div>
        <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>
  
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>
  
        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
  
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button disabled={loading || currentUser} type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
///////
<Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
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
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a href="">register now!</a>
      </Form.Item>
    </Form>

      </Container>
    )
}
