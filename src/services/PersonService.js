import { doc,setDoc } from "firebase/firestore";
import { database } from "../database/FirebaseConfig";



const personCollectionPath = "Person";



const personService = {
    addPersonToDatabase : async (first, last) => {
            await setDoc(doc(database, personCollectionPath , "person3"), {
                first : first,
                last: last
            });
    }

}


// const docSnap = await getDoc(docRef)

// if (docSnap.exists()) {
//     console.log("Document data:", docSnap.data());
// } else {
//     console.log("No such document")
// }

export {personService}