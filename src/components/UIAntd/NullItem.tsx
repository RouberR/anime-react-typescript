import { Result, Button } from "antd";
import { FC } from "react";
import animeSadGierl from "../../assets/animeSadGirl2.png";
import animeGirlPlease from "../../assets/animeGirlPlease.png";
import { Link } from "react-router-dom";
type NullItemType = {
  onClickButton?: () => void;
  user?: string;
  currentUser?: string;
};
export const NullItem: FC<NullItemType> = ({
  onClickButton,
  user = "You",
  currentUser,
}) => {
  const title = `${user?.split("@")[0]} haven't anime list :(`;
  return (
    <>
      {currentUser && user ? (
        <Result
          icon={<img src={animeSadGierl} alt="SadGirl" width={250} />}
          title={title}
          extra={
            onClickButton && (
              <Button onClick={onClickButton} type="primary" danger>
                Search
              </Button>
            )
          }
        />
      ) : (
        <Result
          icon={<img src={animeGirlPlease} alt="SadGirl" width={250} />}
          title="Please login to your account"
          extra={
            <Link to="/login">
              <Button onClick={onClickButton} type="primary" danger>
                Login
              </Button>
            </Link>
          }
        />
      )}
    </>
  );
};
