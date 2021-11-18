import axios from 'axios'
import React, {useState} from 'react'
import { Container, Row } from 'react-bootstrap'
import { CartItem } from './CartItem/CartItem'
import { InputSearch } from './InputSearchAnime/InputSearch'
import { collection, setDoc, doc } from "firebase/firestore"; 
import { getFirestore } from "firebase/firestore"
import { getAuth } from '@firebase/auth'
import { useAuth } from '../../../firebase'
export const SearchAnime = () => {
    const [animeList, setAnimeList] = useState<any[]>([])
    const [titleAnime, setTitleAnime] = useState<string>("Naruto")
    const [addItem, setAddItem] = useState<any>([])
    const auth = getAuth()
    const currentUser:any = useAuth();
    const getSearch = async() => {
        const temp = await axios.get(`https://api.jikan.moe/v3/search/anime?q=${titleAnime}&order_by=title&sort=asc&limit=30`)
        setAnimeList(temp.data.results)
        console.log(temp.data.results)
    }
    React.useEffect(()=>{
        getSearch()
        console.log(titleAnime)
        console.log(auth)
       
    },[titleAnime])

    const db = getFirestore();
    const addItems = async(mal_id:number, title:string, synopsis:string, imgSrc:string) => {
        try {
            const docRef = await setDoc(doc(db, `/users/${currentUser?.email}/anime`, `${mal_id}`), {
                mal_id: mal_id,
                title: title,
                synopsis: synopsis,
                imgSrc: imgSrc,
            });
            console.log("Document written with ID: ");
            console.log()
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }

    const onClickAddItem = (mal_id:number, title:string, synopsis:string, imgSrc:string) => {
        console.log('click')
        setAddItem([mal_id, title, synopsis, imgSrc])
        console.log(addItem)
        addItems(mal_id, title, synopsis, imgSrc)
   
    }


    return (
        <Container>
            <InputSearch setTitleAnime={setTitleAnime}/>
            <Row xs={1} md={3} className="g-2">
            {animeList && animeList.map(item => 
                         
               <CartItem 
               key={item.mal_id}
               mal_id={item.mal_id}
               imgSrc={item.image_url}
               title={item.title}
               synopsis={item.synopsis}
               onClickAddItem={onClickAddItem}/>
            )}
                    
                    </Row>
        </Container>
    )
}
