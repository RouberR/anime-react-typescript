import React, { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import { Button } from "antd";
export const LeftBar = () => {
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

  useEffect(() => {
    usersGet();
  }, []);

  console.log(users);
  return (
    <div>
      <h3>Users re</h3>
      {users.map((item) => (
        <Button block>{item}</Button>
      ))}
    </div>
  );
};
