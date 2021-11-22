import axios from "axios";
import { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { Button } from "antd/lib";
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

  };

  useEffect(() => {
    getSearch();
  }, []);

  return (
    <div className={"buttonCard"}>
      <Carousel fade className={"carousel"}>
        {animeList &&
          animeList.map((item) => (
            <Carousel.Item  key={item.mal_id}>    
              <div className={"textCarusel"}>
                <p>{item.title}</p>
                <p>Date start {item.start_date.split("T")[0]}</p>
                <p>Rating: {item.score}</p>
                <p>Episodes: {item.episodes}</p>
                {item.rated && <p>Rated: {item.rated}</p>}

                <p>{item.type}</p>
                <p>{item.synopsis}</p>
                <Button
                  target="_blank"
                  href={item.url}
                  size="small"
                  type="dashed"
                >
                  Search
                </Button>
              </div>
              <img
                className="caruselIMG d-block "
                src={item.image_url}
                alt="AnimeIMG"
                height="400"
                width="400"
              />
            </Carousel.Item>
          ))}
      </Carousel>
    </div>
  );
};
