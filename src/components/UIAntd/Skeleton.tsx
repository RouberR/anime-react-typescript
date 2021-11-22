import { Card, Spin } from "antd";
import { FC } from "react";
type SkeletonType = {
  items: number;
};
export const Skeleton: FC<SkeletonType> = ({ items }) => {
  const skelet = Array.from(Array(items).keys());

  return (
    <>
      {skelet.map((item) => (
        <Card key={item} style={{ width: 300 }}>
          <p>
            <Spin /> Loading...
          </p>
        </Card>
      ))}
    </>
  );
};
