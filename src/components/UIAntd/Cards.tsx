import React, { FC } from "react";
import { Card, Rate } from "antd";
import { DeleteOutlined, PlusCircleTwoTone } from "@ant-design/icons";
import { SearchOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Input } from "antd";
type CardsType = {
  imgSrc: string;
  title: string;
  synopsis: string;
  mal_id: number;
  onClickItem?: any;
  score?: number;
  url?: string;
  icons?: "delete" | "add";
  onClickUpdateSynopsis?: (mal_id: number, textArea: string) => void;
};
export const Cards: FC<CardsType> = ({
  imgSrc,
  title,
  synopsis,
  mal_id,
  score,
  onClickItem,
  icons,
  url,
  onClickUpdateSynopsis,
}) => {
  const [textArea, setTextArea] = React.useState<string>(synopsis);
  const onClickIconDelete = () => {
    onClickItem(mal_id);
  };
  const onClickIconAdd = () => {
    onClickItem(mal_id, title, synopsis, imgSrc, score, url, textArea);
  };

  const onClickChangeText = () => {
    onClickUpdateSynopsis!(mal_id, textArea);
  };
  const onChange = (e: any) => {
    setTextArea(e.target.value);
  };

  const { Meta } = Card;
  const { TextArea } = Input;

  return (
    <Card
      hoverable
      style={{ width: 280, marginRight: 2, padding: 0, marginBottom: 2 }}
      cover={<img alt="example" src={imgSrc} height={400} width={275} />}
    >
      <Meta title={title} />
      <TextArea
        bordered={false}
        allowClear
        rows={8}
        showCount
        maxLength={200}
        value={textArea}
        onChange={(e) => onChange(e)}
      />
      {onClickUpdateSynopsis && (
        <Button onClick={onClickChangeText} size="large" type="text" danger>
          Redit
        </Button>
      )}
      <Rate disabled count={5} defaultValue={score! / 2} />
      <p>Rating:{score}</p>

      <div className={"buttonCard"}>
        {icons === "delete" ? (
          <DeleteOutlined
            onClick={onClickIconDelete}
            style={{ fontSize: "24px", color: "red" }}
          />
        ) : (
          <PlusCircleTwoTone
            onClick={onClickIconAdd}
            style={{ fontSize: "24px" }}
          />
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
    </Card>
  );
};
