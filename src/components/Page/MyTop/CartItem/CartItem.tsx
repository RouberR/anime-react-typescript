
import React, { FC } from "react";
import { Card } from "antd";
import { DeleteOutlined, PlusCircleTwoTone } from "@ant-design/icons";

type CartItemType = {
    imgSrc:string
    title:string
    synopsis:string
    mal_id:number
    onClickDeleteItem?:any
}
export const CartItem:FC<CartItemType> = ({imgSrc, title, synopsis, mal_id, onClickDeleteItem}) => {
    const onClickDelete = () => {
        onClickDeleteItem(mal_id)
    }
    const { Meta } = Card;
    return (
        <Card
        hoverable
        style={{ width: 240 }}
        cover={
          <img
            alt="example"
            src={imgSrc}
          />
        }
      >
        <Meta title={title} description={synopsis} />
        <DeleteOutlined onClick={onClickDelete} style={{ fontSize: '24px', color: 'red' }}/>
      </Card>
    )
}
