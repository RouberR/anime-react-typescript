
import React, { FC } from "react";
import { Card, Rate } from "antd";
import { DeleteOutlined, PlusCircleTwoTone } from "@ant-design/icons";
import { SearchOutlined } from '@ant-design/icons';
import { Button, Tooltip } from 'antd';
import { Input } from 'antd';
type CardsType = {
    imgSrc:string
    title:string
    synopsis:string
    mal_id:number
    score?:number
    onClickItem?:any
    url?:string
    onClickUpdateSynopsis?: any
    icons?:"delete" | "add"
}
export const Cards:FC<CardsType> = ({imgSrc, title, synopsis, mal_id, score, onClickItem, icons, url, onClickUpdateSynopsis}) => {
  const [textArea, setTextArea] = React.useState<string>(synopsis)
    const onClickIconDelete = () => {
        onClickItem(mal_id)
    }
    const onClickIconAdd = () => {
        onClickItem(mal_id, title, synopsis, imgSrc, score, url, textArea)
    }

    const onClickChangeText = () => {
      onClickUpdateSynopsis(mal_id)
    }
    const onChange = (e:any) => {
      setTextArea(e.target.value);
    };

    const { Meta } = Card;
    const { TextArea } = Input;

    return (
        <Card
        hoverable
        style={{ width: 280 }}
        //width: 240 
        cover={
          <img
            alt="example"
            src={imgSrc}
          />
        }
      >
        {/* description={synopsis} */}
        <Meta title={title}  />
        <TextArea bordered={false} allowClear rows={8} showCount maxLength={200} value={textArea} onChange={(e) => onChange(e)} />

                  <Rate disabled count={5} defaultValue={score!/2} /> 
                  <p>Rating:{score}</p>
                  
                
        {(icons === 'delete' ) 
        ? (<DeleteOutlined onClick={onClickIconDelete} style={{ fontSize: '24px', color: 'red' }}/>)
        : (<PlusCircleTwoTone onClick={onClickIconAdd} style={{ fontSize: "24px" }} />)}
          <Button href={url} target="_blank" type="primary" icon={<SearchOutlined/>}>Search</Button>
      </Card>
    )
}
