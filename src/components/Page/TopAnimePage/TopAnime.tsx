import { doc, getFirestore, setDoc } from "@firebase/firestore";
import axios from "axios";
import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { addItems } from "../../../API/AddItems";

import { useAuth } from "../../../firebase";
import { PaginationAnime } from "./PaginationAnime/PaginationAnime";
import { TopAnimeItem } from "./TopAnimeItem/TopAnimeItem";
export const TopAnime = () => {
  const [topAnime, setTopAnime] = useState<any[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [loading, setLoading] = useState(true);
  const currentUser:any = useAuth();
  const db = getFirestore();
  const getTopAnime = async () => {
    setLoading(true)
    const temp: any = await axios.get(`https://api.jikan.moe/v3/top/anime/${pageNumber}/bypopularity`)
    setTopAnime(temp.data.top);
    setLoading(false)
  };

  React.useEffect(() => {
    getTopAnime();
    console.log(topAnime)
  }, [pageNumber]);
  const onClickPagintor = (id: number) => {
    setPageNumber(id);
  };

//   const addItems = async(mal_id:number, title:string, synopsis:string, imgSrc:string, score:number) => {
//     try {
//         const docRef = await setDoc(doc(db, `/users/${currentUser.email}/anime`, `${mal_id}`), {
//             mal_id: mal_id,
//             title: title,
//             synopsis: synopsis,
//             imgSrc: imgSrc,
//             score: score
//         });
//         console.log("Document written with ID: ");
//         console.log()
//       } catch (e) {
//         console.error("Error adding document: ", e);
//       }
// }
  const onClickAdd = (mal_id:number, title:string, synopsis:string, imgSrc:string, score:number, url:string, textArea:string) => {
    addItems(mal_id, title, synopsis, imgSrc, score, url, textArea)
  }

  return (
      <Container>
        <Row xs={1} md={3} className="g-2">
          <TopAnimeItem items={topAnime} loading={loading} onClickAdd = {onClickAdd} />
        </Row>
        <Row>
          <PaginationAnime onClickPagintor={onClickPagintor} />
        </Row>
      </Container>
  );
};
