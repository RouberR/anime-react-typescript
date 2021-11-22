import { FC, useState } from "react";
import { Input } from "antd";
import useDebounce from "../../../../hooks/useDebounce";

type InputSearchType = {
  setTitleAnime: any;
};

export const InputSearch: FC<InputSearchType> = ({ setTitleAnime }) => {
  const [searchAnime, setSearchAnime] = useState<string>("");
  const debouncedCallback = useDebounce(setTitleAnime, 1000);
  const onSearchText = (e: any) => {
    setSearchAnime(e.target.value);
    debouncedCallback(searchAnime);
  };
  const onSearchButton = (value: string) => {
    setTitleAnime(value);
    setSearchAnime("");
  };
  const { Search } = Input;
  return (
    <Search
      value={searchAnime}
      onChange={(e) => onSearchText(e)}
      placeholder="Input search text exemple 'naruto'"
      enterButton={true}
      size="large"
      loading={false}
      allowClear
      onSearch={(value) => onSearchButton(value)}
    />
  );
};
