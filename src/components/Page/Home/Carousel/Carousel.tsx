import axios from "axios";
import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { Row, Col } from "antd";
export const CarouselBody = () => {
  const [animeList, setAnimeList] = useState<any[]>([]);
  const getSearch = async () => {
    const dataNow = new Date().toISOString().split("T")[0];
    const dataPast = new Date(new Date().getTime() - 30 * 24 * 60 * 60 * 1000)
      .toISOString()
      .split("T")[0];
    const temp: any = await axios.get(
      `https://api.jikan.moe/v3/search/anime?q=&order_by=members&start_date=${dataPast}&end_date=${dataNow}&sort=desc&page=1&limit=10`
    );
    setAnimeList(temp.data.results);
    console.log(temp.data.results);
  };

  useEffect(() => {
    getSearch();
    console.log(animeList);
    console.log(animeList);

  }, []);

  return (
    <Carousel className={'carousel'}>
      {animeList &&
        animeList.map(item => (
          <Carousel.Item interval={2500}>
            <Row>
              <Col span={6}>
                <a target="_blank" href={item.url} >
                <img
                  className="d-block w-100"
                  src={item.image_url}
                  alt="AnimeIMG"
                  height="300"
                  width="1"
                />
                </a>
              </Col>
              <Col span={7}>
               
                  <p>{item.title}</p>
                  <p>Date start {item.start_date.split("T")[0]}</p>
                  <p>Rating: {item.score}</p>
                  <p>Episodes: {item.episodes}</p>
                  {item.rated && <p>Rated: {item.rated}</p>}
                  <p>{item.type}</p>

             
              </Col>
              <Col span={9}>
              
                  <h4>
                    {item.synopsis}
                  </h4>
            
              </Col>
            </Row>
          </Carousel.Item>
        ))}
    </Carousel>
  );
};
