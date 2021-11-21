import { collection, doc, getFirestore, onSnapshot, updateDoc } from '@firebase/firestore';
import React, { useState, useEffect, FC } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { addItems } from '../../../API/AddItems';
import { useAuth } from '../../../firebase';
import { Cards } from '../../UIAntd/Cards';
import { NullItem } from '../../UIAntd/NullItem';
import { Skeleton } from '../../UIAntd/Skeleton';
import { LeftBar } from './LeftBar/LeftBar';
type TopType = {
    activeUser:string
}
export const Top:FC<TopType> = ({activeUser}) => {
    const [items, setItems] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const currentUser:any = useAuth();
    const db = getFirestore();
    const showAnimeItems = async () => {
      setLoading(true)
      try{
          const querySnapshot = await onSnapshot(collection(db, `/users/${activeUser}/anime`), doc => {
              setItems([])
              doc.forEach((d:any) => {
                  setItems(prev => [...prev, d.data()])
              })
              setLoading(false)
          });
        }catch{
  
        }
       
  }

const changeSynopsis = async () => {
  const changeSynopsis = await updateDoc(doc(db, `/users/${activeUser}/anime`, "mal_id"), {
    capital: true
  });
}



const onClickAddItem = (mal_id:number,
  title:string, 
  synopsis:string,
   imgSrc:string,
    score:number, 
    url:string, 
    textArea:string) => {
     addItems(mal_id, title, synopsis, imgSrc, score, url, textArea)

}

  useEffect(() => {
    showAnimeItems()
  }, [activeUser])
  console.log(items)
    return (
        <Row>
 
            
        {loading ? (<Skeleton items={4}/>) : (items[0] ? (items.map(item => (
      <Cards
               key={item.mal_id}
               mal_id={item.mal_id}
               imgSrc={item.imgSrc}
               title={item.title}
               synopsis={item.synopsis}
               score={item.score}
               url={item.url}
               icons='add'
               onClickItem={onClickAddItem}
      />
        ))) : (<NullItem user={activeUser}/>) )}

       
  
        </Row>
    )
}
