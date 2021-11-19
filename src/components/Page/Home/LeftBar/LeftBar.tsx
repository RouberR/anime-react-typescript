import React, { useState, useEffect, FC } from "react";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import { Button } from "antd";
type LeftBarType = {
  setActiveUser:any
}
export const LeftBar:FC<LeftBarType> = ({setActiveUser}) => {
  const [users, setUsers] = useState<any[]>([]);
  const db = getFirestore();
  const usersGet = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "users"));
      setUsers(querySnapshot.docs.map((i) => i.id));
    } catch {
      console.log("Ошииибка");
    }
  };
  const onClickItem = (item:any) => {
    setActiveUser(item)
  }
  useEffect(() => {
    usersGet();
  }, []);

  console.log(users);
  return (
    <div>
      <h4>Users recommendation</h4>
      {users.map((item) => (
        <Button onClick={() => onClickItem(item)} block>{item}</Button>
      ))}
    </div>
  );
};
