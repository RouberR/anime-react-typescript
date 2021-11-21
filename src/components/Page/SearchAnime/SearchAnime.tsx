import axios from 'axios'
import React, {useState} from 'react'
import { Container, Row } from 'react-bootstrap'
import { InputSearch } from './InputSearchAnime/InputSearch'
import { collection, setDoc, doc } from "firebase/firestore"; 
import { getFirestore } from "firebase/firestore"
import { getAuth } from '@firebase/auth'
import { useAuth } from '../../../firebase'
import { Cards } from '../../UIAntd/Cards'
import { addItems } from '../../../API/AddItems';
import { Skeleton } from '../../UIAntd/Skeleton';


export const SearchAnime = () => {
    const [animeList, setAnimeList] = useState<any[]>([])
    const [titleAnime, setTitleAnime] = useState<string>("Naruto")
    const [loading, setLoading] = useState(true)
    const auth = getAuth()
    const currentUser:any = useAuth();
    const getSearch = async() => {
        setLoading(true)
        const temp = await axios.get(`https://api.jikan.moe/v3/search/anime?q=${titleAnime}&order_by=title&sort=asc&limit=30`)
        setAnimeList(temp.data.results)
        console.log(temp.data.results)
        setLoading(false)
    }
    React.useEffect(()=>{
        getSearch()
        console.log(titleAnime)
        console.log(auth)
       
    },[titleAnime])

    // const db = getFirestore();
    // const addItems = async(mal_id:number, title:string, synopsis:string, imgSrc:string, score:number, url:string, textArea:string) => {
    //     try {
    //         const docRef = await setDoc(doc(db, `/users/${currentUser.email}/anime`, `${mal_id}`), {
    //             mal_id: mal_id,
    //             title: title,
    //             synopsis: textArea,
    //             imgSrc: imgSrc,
    //             score: score,
    //             url:url
    //         });
    //         console.log("Document written with ID: ");
    //         console.log()
    //       } catch (e) {
    //         console.error("Error adding document: ", e);
    //       }
    // }

    const onClickAddItem = (mal_id:number,
         title:string, 
         synopsis:string,
          imgSrc:string,
           score:number, 
           url:string, 
           textArea:string) => {
            addItems(mal_id, title, synopsis, imgSrc, score, url, textArea)
   
    }


    return (
        <Container>
            <InputSearch setTitleAnime={setTitleAnime}/>
            <Row xs={1} md={3} className="g-2">
                {loading ? (<Skeleton items={4}/>) : (animeList && animeList.map(item => 
                         
                         <Cards
                         key={item.mal_id}
                         mal_id={item.mal_id}
                         imgSrc={item.image_url}
                         title={item.title}
                         synopsis={item.synopsis}
                         score={item.score}
                         url={item.url}
                         onClickItem={onClickAddItem}/>
                      ))}

                    
                    </Row>
        </Container>
    )
}
