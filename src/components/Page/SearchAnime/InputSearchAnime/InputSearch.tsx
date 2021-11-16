import React, { FC, useState } from 'react'
import { Input } from 'antd';

type InputSearchType = {
    setTitleAnime:any
}

export const InputSearch:FC<InputSearchType> = ({setTitleAnime}) => {
    const [searchAnime, setSearchAnime] = useState<string>("")
    const onSearchText = (e:any) => {
        setSearchAnime(e.target.value)
    }
    const onSearchButton = (value:string) => {
        setTitleAnime(value)
        setSearchAnime("")
    }
    const { Search } = Input;
    return (
        <Search  
        
        value={searchAnime} 
        onChange={(e) => onSearchText(e)}
         placeholder="input search text"
          enterButton={true}
           size="large"
            loading = {false}
            allowClear
            onSearch={(value) => onSearchButton(value)}
            />
    )
}
