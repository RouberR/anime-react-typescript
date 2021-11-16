import axios from 'axios'
import React, {useState} from 'react'
import { Container, Row } from 'react-bootstrap'
import { CartItem } from './CartItem/CartItem'
import { InputSearch } from './InputSearchAnime/InputSearch'

export const SearchAnime = () => {
    const [animeList, setAnimeList] = useState<any[]>([])
    const [titleAnime, setTitleAnime] = useState<string>("Naruto")

    const getSearch = async() => {
        const temp = await axios.get(`https://api.jikan.moe/v3/search/anime?q=${titleAnime}&order_by=title&sort=asc&limit=30`)
        setAnimeList(temp.data.results)
        console.log(temp.data.results)
    }
    React.useEffect(()=>{
        getSearch()
        console.log(titleAnime)
    },[titleAnime])
    return (
        <Container>
            <InputSearch setTitleAnime={setTitleAnime}/>
            <Row xs={1} md={3} className="g-2">
            {animeList && animeList.map(item => 
               <CartItem 
               imgSrc={item.image_url}
               title={item.title}
               synopsis={item.synopsis}/>
            )}
                    
                    </Row>
        </Container>
    )
}
