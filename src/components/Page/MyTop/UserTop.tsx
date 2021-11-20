import React, { useState, useEffect } from "react";
import { Button } from "antd";
import { collection, getDocs, query, onSnapshot } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { useAuth } from '../../../firebase'
import { Container, Row } from "react-bootstrap";
import { doc, deleteDoc } from "firebase/firestore";
import { Cards } from "../../CardAntd/Cards";
export const UserTop = () => {
  const [items, setItems] = useState<any[]>([]);
  const currentUser:any = useAuth();
  const db = getFirestore();
  const showAnimeItems = async () => {
      try{
        const querySnapshot = await onSnapshot(collection(db, `/users/${currentUser?.email}/anime`), doc => {
            setItems([])
            doc.forEach((d:any) => {
                setItems(prev => [...prev, d.data()])
            })
        });
      }catch{

      }
}
    const onClickDeleteItem = async (mal_id:number) => {
      try{
        const deleteDocs = await deleteDoc(doc(db, `/users/${currentUser?.email}/anime`, `${mal_id}`));
        console.log("Удаление удачное")
      }catch{
        console.log("Неудачное удаление")
      }
    }



  useEffect(()=>{
    showAnimeItems()
    console.log(items)
    console.log(items)
  },[currentUser])

  return (
    <Container>
         <Row xs={1} md={3} className="g-2">
    {items && items.map(item => 
      <Cards
       key={item.mal_id}
       mal_id={item.mal_id}
       imgSrc={item.imgSrc}
       title={item.title}
       synopsis={item.synopsis}
       onClickItem={onClickDeleteItem}
       score={item.score}
       url={item.url}
       icons="delete"
       />
       )}
        </Row>
    </Container>
  );
};
