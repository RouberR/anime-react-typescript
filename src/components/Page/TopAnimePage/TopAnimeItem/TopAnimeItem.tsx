import { PlusCircleTwoTone, SearchOutlined } from "@ant-design/icons";
import { Rate } from "antd";
import { Button } from "antd/lib";
import { FC } from "react";
import { Card } from "react-bootstrap";
import { Skeleton } from "../../../UIAntd/Skeleton";
type TopAnimeItemType = {
  items: any[];
  loading: boolean;
  onClickAdd: any;
};
export const TopAnimeItem: FC<TopAnimeItemType> = ({
  items,
  loading,
  onClickAdd,
}) => {
  const onClickIcon = (
    mal_id: number,
    title: string,
    synopsis: string,
    imgSrc: string,
    score: number,
    url: string,
    textArea: string = ""
  ) => {
    onClickAdd(mal_id, title, synopsis, imgSrc, score, url, textArea);
  };

  return (
    <>
      {loading ? (
        <Skeleton items={4} />
      ) : (
        items &&
        items.map((item) => (
          <Card
            key={item.mal_id}
            border="info "
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
              <div className={"buttonCard"}>
                <PlusCircleTwoTone
                  onClick={() =>
                    onClickIcon(
                      item.mal_id,
                      item.title,
                      item.episodes,
                      item.image_url,
                      item.score,
                      item.url
                    )
                  }
                  style={{ fontSize: "24px" }}
                />
                <Button
                  href={item.url}
                  target="_blank"
                  type="primary"
                  icon={<SearchOutlined />}
                >
                  Search
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))
      )}
    </>
  );
};
