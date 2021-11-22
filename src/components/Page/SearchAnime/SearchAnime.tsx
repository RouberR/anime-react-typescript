import axios from "axios";
import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { InputSearch } from "./InputSearchAnime/InputSearch";
import { useAuth } from "../../../Firebase/firebase";
import { Cards } from "../../UIAntd/Cards";
import { addItems } from "../../../Firebase/addItems";
import { Skeleton } from "../../UIAntd/Skeleton";

export const SearchAnime = () => {
  const [animeList, setAnimeList] = useState<any[]>([]);
  const [titleAnime, setTitleAnime] = useState<string>("Naruto");
  const [loading, setLoading] = useState(true);

  const currentUser: any = useAuth();

  React.useEffect(() => {
    const getSearch = async () => {
      setLoading(true);
      const temp = await axios.get(
        `https://api.jikan.moe/v3/search/anime?q=${titleAnime}&order_by=title&sort=asc&limit=30`
      );
      setAnimeList(temp.data.results);
      setLoading(false);
    };  
    getSearch();
  }, [titleAnime]);

  const onClickAddItem = (
    mal_id: number,
    title: string,
    synopsis: string,
    imgSrc: string,
    score: number,
    url: string,
    textArea: string
  ) => {
    currentUser
      ? addItems(mal_id, title, synopsis, imgSrc, score, url, textArea)
      : alert("Please login to your account for add this anime in your list");
  };

  return (
    <Container className={"search"}>
      <InputSearch setTitleAnime={setTitleAnime} />
      <Row xs={1} md={3} className="g-1">
        {loading ? (
          <Skeleton items={24} />
        ) : (
          animeList &&
          animeList.map((item) => (
            <Cards
              key={item.mal_id}
              mal_id={item.mal_id}
              imgSrc={item.image_url}
              title={item.title}
              synopsis={item.synopsis}
              score={item.score}
              url={item.url}
              onClickItem={onClickAddItem}
            />
          ))
        )}
      </Row>
    </Container>
  );
};
