import { doc,setDoc } from "firebase/firestore";
import { database } from "../database/FirebaseConfig";



const eventCollectionPath = "/Organisation/BTTDXkhLITJKg7ZrQXEj/Event";


const EventService = {
    addEventToDatabase : async (eventName, recurring) => {
            await setDoc(doc(database, eventCollectionPath , "event4"), {
                eventName : eventName,
                recurring: recurring
            });
    }

}


// const docSnap = await getDoc(docRef)

// if (docSnap.exists()) {
//     console.log("Document data:", docSnap.data());
// } else {
//     console.log("No such document")
// }

export {EventService}