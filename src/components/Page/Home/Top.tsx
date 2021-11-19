import { collection, getFirestore, onSnapshot } from '@firebase/firestore';
import React, { useState, useEffect, FC } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useAuth } from '../../../firebase';
import { CartItem } from '../MyTop/CartItem/CartItem'
import { LeftBar } from './LeftBar/LeftBar';
type TopType = {
    activeUser:string
}
export const Top:FC<TopType> = ({activeUser}) => {
    const [items, setItems] = useState<any[]>([]);
   console.log(activeUser)
   console.log(activeUser)
    const currentUser:any = useAuth();
    const db = getFirestore();
    const showAnimeItems = async () => {
        try{
          const querySnapshot = await onSnapshot(collection(db, `/users/${activeUser}/anime`), doc => {
              setItems([])
              doc.forEach((d:any) => {
                  setItems(prev => [...prev, d.data()])
              })
          });
        }catch{
  
        }
       
  }
  useEffect(() => {
    showAnimeItems()
  }, [activeUser])
  console.log(items)
    return (
        <Row>
 
            
        
        {items && items.map(item => (
      <CartItem
               key={item.mal_id}
               mal_id={item.mal_id}
               imgSrc={item.imgSrc}
               title={item.title}
               synopsis={item.synopsis}
               icons='add'
      />
        ))}
       
  
        </Row>
    )
}
