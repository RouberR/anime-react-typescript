import {
  CheckCircleOutlined,
  PlusCircleTwoTone,
  SearchOutlined,
} from "@ant-design/icons";
import { Rate } from "antd";
import { Button } from "antd/lib";
import { FC, useState } from "react";
import { Card } from "react-bootstrap";
type CardTopType = {
  keys: number;
  src: string;
  title: string;
  start_date: number;
  end_date: number;
  episodes: number;
  score: number;
  url: string;
  onClickAdd: any;
  textArea?: string;
  synopsis?: string;
};
export const CardTop: FC<CardTopType> = ({
  keys,
  synopsis = " ",
  src,
  title,
  start_date,
  end_date,
  episodes,
  score,
  url,
  onClickAdd,
  textArea = " ",
}) => {
  const [iconAdd, setIaconAdd] = useState(true);
  const onClickIcon = () => {
    onClickAdd(keys, title, synopsis, src, score, url, textArea);
    setIaconAdd(false);
  };
  return (
    <Card border="info " className="mb-2" style={{ width: "20rem" }}>
      <Card.Img variant="top" width="330" height="450" src={src} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          Data {start_date} - {end_date}
        </Card.Text>
        <Card.Text>Episodes: {episodes}</Card.Text>
        <Card.Text>
          <Rate disabled count={10} defaultValue={score} /> Rating: {score}
        </Card.Text>
        <div className={"buttonCard"}>
          {iconAdd ? (
            <PlusCircleTwoTone
              onClick={onClickIcon}
              style={{ fontSize: "24px" }}
            />
          ) : (
            <CheckCircleOutlined style={{ fontSize: "24px", color: "green" }} />
          )}

          <Button
            href={url}
            target="_blank"
            type="primary"
            icon={<SearchOutlined />}
          >
            Search
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};
