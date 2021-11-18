import React, {useState} from 'react'
import { GoogleAuthProvider } from "firebase/auth";
import { Form, Input, Button, Checkbox, Alert } from 'antd';
import { Container, Row } from 'react-bootstrap';
import { signup, useAuth } from '../../../firebase';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { doc, setDoc, getFirestore } from "firebase/firestore"; 
const provider = new GoogleAuthProvider();
export const Register = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)
    const currentUser:any = useAuth();
    const nabigate = useNavigate()
    const db = getFirestore();
     async function onFinish(values: any){
        setLoading(true)
         try{
             await signup(values.username, values.password)
             console.log('Success:', values);
             console.log("Пользователь создан")
             await setDoc(doc(db, "users", values.username), {});
             nabigate("/");
         } catch{
          setError(true)
         }
         setLoading(false)
      };
     

    return (
        <Container>
               {error && <Alert
          message="Error"
          description="Please enter a new valid email address. Please enter a new correct password"
          type="error"
          showIcon
          closable          
        />}
<Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your E-mail!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="E-mail" />
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
        <Button type="primary" htmlType="submit" className="login-form-button" disabled={loading} >
          Register
        </Button>
        {/* Or <a href="">login?!</a> */}
      </Form.Item>
    </Form>

      </Container>
    )
}
