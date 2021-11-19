import React, { FC } from "react";
import { Card } from "antd";
import { PlusCircleTwoTone } from "@ant-design/icons";

type CartItemType = {
  imgSrc: string;
  title: string;
  synopsis: string;
  mal_id: number;
  onClickAddItem?: any;
  icons?:any;
};
export const CartItem: FC<CartItemType> = ({
  imgSrc,
  title,
  synopsis,
  mal_id,
  onClickAddItem,
  icons,
}) => {
  const { Meta } = Card;
  const onClickAdd = () => {
    onClickAddItem(mal_id, title, synopsis, imgSrc);
  };
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt="example" src={imgSrc} />}
    >
      <Meta title={title} description={synopsis} />
      <PlusCircleTwoTone onClick={onClickAdd} style={{ fontSize: "24px" }} />
    </Card>
  );
};
