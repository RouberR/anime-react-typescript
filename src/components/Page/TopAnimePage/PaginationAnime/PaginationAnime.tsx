import { Pagination } from "antd";
import { FC } from "react";

type PaginationAnimeType = {
  onClickPagintor: any;
};
export const PaginationAnime: FC<PaginationAnimeType> = ({
  onClickPagintor,
}) => {
  const onClickActiv = (e: any) => {
    onClickPagintor(e);
  };

  return (
    <Pagination
      defaultCurrent={1}
      defaultPageSize={1}
      total={50}
      onChange={(current) => onClickActiv(current)}
      showQuickJumper
    />
  );
};
