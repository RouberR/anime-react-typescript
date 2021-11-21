import { Card, Spin } from 'antd';
import React, { FC } from 'react'
import { PlusCircleTwoTone, SearchOutlined } from "@ant-design/icons";
import { Rate} from "antd";
import { Button } from "antd/lib";
type SkeletonType = {
    items:number
}
export const Skeleton:FC<SkeletonType> = ({items}) => {
    const skelet = Array.from(Array(items).keys());
    console.log(skelet)

    return (
        <>
   { skelet.map((item) => (
          <Card style={{ width: 300 }}>
          
            <p><Spin /> Loading...</p>
            </Card>
          ))}
          </>
    )
}
