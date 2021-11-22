import { Card, Spin } from "antd";
import { FC } from "react";
type SkeletonType = {
  items: number;
};
export const Skeleton: FC<SkeletonType> = ({ items }) => {
  const skelet = Array.from(Array(items).keys());
  console.log(skelet);

  return (
    <>
      {skelet.map((item) => (
        <Card style={{ width: 300 }}>
          <p>
            <Spin /> Loading...
          </p>
        </Card>
      ))}
    </>
  );
};
