import React, { FC } from "react";
import { Card } from "antd";

type CartItemType = {
    imgSrc:string
    title:string
    synopsis:string
    key:number
}
export const CartItem:FC<CartItemType> = ({imgSrc, title, synopsis, key}) => {
  const { Meta } = Card;
  return (
    <Card
      key={key}
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
    </Card>
  );
};
