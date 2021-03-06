import { useState, useEffect, FC } from "react";
import { getFirestore } from "@firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import { Button } from "antd";
type LeftBarType = {
  setActiveUser: any;
};
export const LeftBar: FC<LeftBarType> = ({ setActiveUser }) => {
  const [users, setUsers] = useState<any[]>([]);
  const db = getFirestore();

  const onClickItem = (item: any) => {
    setActiveUser(item);
  };
  useEffect(() => {
    const usersGet = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        setUsers(querySnapshot.docs.map((i) => i.id));
      } catch {
        console.log("Ошииибка");
      }
    };
    usersGet();
  }, [db]);


  return (
    <div>
      <h4>Users recommendation</h4>
      {users.map(item =>  
        <Button key={item} onClick={() => onClickItem(item)} block>
          {item}
        </Button>
      )}
    </div>
  );
};
