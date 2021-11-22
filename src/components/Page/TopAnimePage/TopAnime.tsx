import axios from "axios";
import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { addItems } from "../../../Firebase/addItems";
import { useAuth } from "../../../Firebase/firebase";
import { PaginationAnime } from "./PaginationAnime/PaginationAnime";
import { TopAnimeItem } from "./TopAnimeItem/TopAnimeItem";

export const TopAnime = () => {
  const [topAnime, setTopAnime] = useState([]);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [loading, setLoading] = useState(true);
  const currentUser: string[] | undefined = useAuth();
  const getTopAnime = async () => {
    setLoading(true);
    const temp: any = await axios.get(
      `https://api.jikan.moe/v3/top/anime/${pageNumber}/bypopularity`
    );
    setTopAnime(temp.data.top);
    setLoading(false);
  };

  React.useEffect(() => {
    getTopAnime();
  }, [pageNumber]);
  const onClickPagintor = (id: number) => {
    setPageNumber(id);
  };

  const onClickAdd = (
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
    <Container>
      <Row xs={1} md={3} className="g-0">
        <TopAnimeItem
          items={topAnime}
          loading={loading}
          onClickAdd={onClickAdd}
        />
      </Row>
      <Row>
        <PaginationAnime onClickPagintor={onClickPagintor} />
      </Row>
    </Container>
  );
};
