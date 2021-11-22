import {
  collection,
  doc,
  getFirestore,
  onSnapshot,
  updateDoc,
} from "@firebase/firestore";
import { useState, useEffect, FC } from "react";
import { Row } from "react-bootstrap";
import { useAuth } from "../../../Firebase/firebase";
import { addItems } from "../../../Firebase/addItems";
import { Cards } from "../../UIAntd/Cards";
import { NullItem } from "../../UIAntd/NullItem";
import { Skeleton } from "../../UIAntd/Skeleton";
type TopType = {
  activeUser: string;
};
export const Top: FC<TopType> = ({ activeUser }) => {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const currentUser: any = useAuth();
  const db = getFirestore();
  const showAnimeItems = async () => {
    setLoading(true);
    try {
      await onSnapshot(collection(db, `/users/${activeUser}/anime`), (doc) => {
        setItems([]);
        doc.forEach((d: any) => {
          setItems((prev) => [...prev, d.data()]);
        });
        setLoading(false);
      });
    } catch (e) {
      alert(e);
    }
  };

  // const changeSynopsis = async () => {
  //   await updateDoc(doc(db, `/users/${activeUser}/anime`, "mal_id"), {
  //     capital: true,
  //   });
  // };

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

  useEffect(() => {
    showAnimeItems();
  }, [activeUser]);
  return (
    <Row>
      {loading ? (
        <Skeleton items={4} />
      ) : items[0] ? (
        items.map((item) => (
          <Cards
            key={item.mal_id}
            mal_id={item.mal_id}
            imgSrc={item.imgSrc}
            title={item.title}
            synopsis={item.synopsis}
            score={item.score}
            url={item.url}
            icons="add"
            onClickItem={onClickAddItem}
          />
        ))
      ) : (
        <NullItem user={activeUser} currentUser={currentUser} />
      )}
    </Row>
  );
};
