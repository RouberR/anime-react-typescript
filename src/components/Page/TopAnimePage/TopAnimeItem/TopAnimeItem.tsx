import { PlusCircleTwoTone, SearchOutlined } from "@ant-design/icons";
import { Rate, Spin } from "antd";
import { Button } from "antd/lib";
import React, { FC } from "react";
import { Card } from "react-bootstrap";
type TopAnimeItemType = {
  items: any[];
  loading: boolean;
  onClickAdd: any
};
export const TopAnimeItem: FC<TopAnimeItemType> = ({ items, loading, onClickAdd }) => {
  const skelet = [1, 2, 3, 4];

  const onClickIcon = (mal_id: number, title:string, synopsis:string, imgSrc:string, score:number, url:string, textArea:string = "") => {
    onClickAdd(mal_id, title, synopsis, imgSrc, score, url, textArea)
  }

  return (
    <>
      {loading
        ? skelet.map((item) => (
            <Card
              key={item}
              border="info"
              className="mb-2"
              style={{ width: "20rem" }}
            >
              <Spin className="example" size={"large"} spinning={loading} />
              <Card.Body>
                <Card.Title>Загрузка данных</Card.Title>
              </Card.Body>
            </Card>
          ))
        : items &&
          items.map((item) => (
            
            <Card
              key={item.mal_id}
              border="info"
              className="mb-2"
              style={{ width: "20rem" }}
            >
              <Card.Img
                variant="top"
                width="330"
                height="450"
                src={item.image_url}
              />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  Data {item.start_date} - {item.end_date}
                </Card.Text>
                <Card.Text>Episodes: {item.episodes}</Card.Text>
                <Card.Text>
                  <Rate disabled count={10} defaultValue={item.score} /> Rating:{" "}
                  {item.score}
                </Card.Text>
                <PlusCircleTwoTone onClick={() => onClickIcon(item.mal_id,
                   item.title,
                    item.episodes,
                     item.image_url,
                      item.score,
                      item.url)}  style={{ fontSize: "24px" }} />
                <Button href={item.url} target="_blank" type="primary" icon={<SearchOutlined/>}>Search</Button>
              </Card.Body>
            </Card>
          ))}
    </>
  );
};
