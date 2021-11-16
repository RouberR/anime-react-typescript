import axios from "axios";
import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { PaginationAnime } from "./PaginationAnime/PaginationAnime";
import { TopAnimeItem } from "./TopAnimeItem/TopAnimeItem";
export const TopAnime = () => {
  const [topAnime, setTopAnime] = useState<any[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    const getTopAnime = async () => {
      setLoading(true)
      const temp: any = await axios.get(`https://api.jikan.moe/v3/top/anime/${pageNumber}/bypopularity`)
      setTopAnime(temp.data.top);
      setLoading(false)
    };
    getTopAnime();
    // console.log(topAnime);
  }, [pageNumber]);
  const onClickPagintor = (id: number) => {
    setPageNumber(id);
  };
  return (
    <>
      <Container>
        <Row xs={1} md={3} className="g-2">
          <TopAnimeItem items={topAnime} loading={loading} />
        </Row>
        <Row>
          <PaginationAnime onClickPagintor={onClickPagintor} />
        </Row>
      </Container>
    </>
  );
};
