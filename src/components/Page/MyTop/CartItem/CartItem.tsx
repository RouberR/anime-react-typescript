
import React, { FC } from "react";
import { Card } from "antd";
import { DeleteOutlined, PlusCircleTwoTone } from "@ant-design/icons";

type CartItemType = {
    imgSrc:string
    title:string
    synopsis:string
    mal_id:number
    onClickItem?:any
    icons?:"delete" | "add"
}
export const CartItem:FC<CartItemType> = ({imgSrc, title, synopsis, mal_id, onClickItem, icons}) => {
    const onClickDelete = () => {
        onClickItem(mal_id)
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
        {(icons === 'delete' ) ? (<DeleteOutlined onClick={onClickDelete} style={{ fontSize: '24px', color: 'red' }}/>) : (<PlusCircleTwoTone onClick={onClickDelete} style={{ fontSize: "24px" }} />)}
      </Card>
    )
}
