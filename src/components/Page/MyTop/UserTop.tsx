import { useState, useEffect } from "react";
import {
  collection,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { useAuth } from "../../../Firebase/firebase";
import { Container, Row } from "react-bootstrap";
import { doc, deleteDoc } from "firebase/firestore";
import { Cards } from "../../UIAntd/Cards";
import { Skeleton } from "../../UIAntd/Skeleton";
import { useNavigate } from "react-router-dom";
import { NullItem } from "../../UIAntd/NullItem";

export const UserTop = () => {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const currentUser: any = useAuth();
  const db = getFirestore();

  const onClickDeleteItem = async (mal_id: number) => {
    try {
       await deleteDoc(
        doc(db, `/users/${currentUser?.email}/anime`, `${mal_id}`)
      );
    } catch (e){
     alert(e);
    }
  };

  const onClickButton = () => {
    navigate("/search");
  };

  useEffect(() => {
    const showAnimeItems = async () => {
      setLoading(true);
      try {
        await onSnapshot(
          collection(db, `/users/${currentUser?.email}/anime`),
          (doc) => {
            setItems([]);
            doc.forEach((d: any) => {
              setItems((prev) => [...prev, d.data()]);
            });
            setLoading(false);
          }
        );
      } catch(e) {
        alert(e)
      }
    };
    showAnimeItems();
  }, [currentUser, db]);

  const onClickUpdateSynopsis = async (mal_id: number, textArea: string) => {
    try {
      await updateDoc(
        doc(db, `/users/${currentUser?.email}/anime`, `${mal_id}`),
        {
          synopsis: textArea,
        }
      );
    } catch {}
  };
  return (
    <Container>
      <Row xs={1} md={3} className="g-2">
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
              onClickItem={onClickDeleteItem}
              score={item.score}
              url={item.url}
              onClickUpdateSynopsis={onClickUpdateSynopsis}
              icons="delete"
            />
          ))
        ) : (
          <>
            <NullItem onClickButton={onClickButton} currentUser={currentUser} />
          </>
        )}
      </Row>
    </Container>
  );
};
