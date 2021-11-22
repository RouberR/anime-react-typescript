import { FC } from "react";
import { Skeleton } from "../../../UIAntd/Skeleton";
import { CardTop } from "./CardTop";
type TopAnimeItemType = {
  items: any[];
  loading: boolean;
  onClickAdd: any;
};
export const TopAnimeItem: FC<TopAnimeItemType> = ({
  items,
  loading,
  onClickAdd,
}) => {
  console.log(items);
  return (
    <>
      {loading ? (
        <Skeleton items={4} />
      ) : (
        items &&
        items.map((item) => (
          <CardTop
            key={item.mal_id}
            keys={item.mal_id}
            src={item.image_url}
            title={item.title}
            start_date={item.start_date}
            end_date={item.end_date}
            episodes={item.episodes}
            score={item.score}
            url={item.url}
            onClickAdd={onClickAdd}
          />
        ))
      )}
    </>
  );
};
