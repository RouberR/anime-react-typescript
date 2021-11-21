import React, {useState} from 'react'
import { Popover, Button } from 'antd';
import { StarOutlined, UserOutlined, StarTwoTone } from '@ant-design/icons';
import {useAuth, logout} from '../../firebase';
import { Link } from 'react-router-dom';
export const Account = () => {
    const currentUser:any = useAuth();
    const [visible, setVisible] = useState<boolean>(false)
    const onVisibleClick = () => {
        setVisible(!visible)
    }
    const content = (
        <div>
          <a onClick={handleLogout}>Log out</a>
        
        </div>
      );
      async function handleLogout() {
          try{
              await logout()
          } catch{
              alert("Ошибочка")
          }
      }
    return (
        <>
        {currentUser ? (<Popover
        content={content}
        title={`Welcome ${currentUser?.email}`}
        trigger="click"
        visible={visible}
        onVisibleChange={onVisibleClick}
      >
        <UserOutlined style={{ fontSize: '24px', color: '#08c' }} />
      </Popover>) 
      :
       (
        <Link to="/login">
        <Button  type="primary" danger>
            Login/Register
        </Button></Link>

        
     )}

      </>
    )
}
