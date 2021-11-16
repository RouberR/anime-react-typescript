import React, { FC } from "react";
import { Card } from "antd";

type CartItemType = {
    imgSrc:string
    title:string
    synopsis:string
}
export const CartItem:FC<CartItemType> = ({imgSrc, title, synopsis}) => {
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
    </Card>
  );
};
