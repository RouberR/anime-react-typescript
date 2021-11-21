import { Result, Button } from 'antd'
import React, { FC } from 'react'
import animeSadGierl from "../../assets/animeSadGirl2.png";
type NullItemType = {
    onClickButton?:() => void
    user?:string
}
export const NullItem:FC<NullItemType> = ({onClickButton, user="You"}) => {
    const title = (`${user?.split("@")[0]} haven't anime list :(`)
    return (
      
        <Result
        icon={<img src={animeSadGierl} alt="SadGirl" width={250} />}
        title={title}
        extra={
         onClickButton && <Button onClick={onClickButton} type="primary" danger>Search</Button>
        }
      />
    )
   
}
