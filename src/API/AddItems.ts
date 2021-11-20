
import { doc, getFirestore, setDoc } from "@firebase/firestore";
import { getAuth } from "firebase/auth";
const db = getFirestore();
const auth = getAuth();
export async function addItems(mal_id: number, title: string, synopsis: string, imgSrc: string, score: number, url: string, textArea: string) {
        const currentUser = auth.currentUser;
        try {
            const docRef = await setDoc(doc(db, `/users/${currentUser?.email}/anime`, `${mal_id}`), {
                mal_id: mal_id,
                title: title,
                synopsis: textArea,
                imgSrc: imgSrc,
                score: score,
                url: url
            });
            console.log("Document written with ID: ");
            console.log();
            return docRef;
        } catch (e) {
            console.error("Error adding document: ", e);
        }

    }
    ///переименовать папку в firebase и закинуть сюда js