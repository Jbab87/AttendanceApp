import { collection, doc,getDoc,getDocs,setDoc } from "firebase/firestore";
import { database } from "../database/FirebaseConfig";
import { isSearchBarAvailableForCurrentPlatform } from "react-native-screens";



const eventCollectionPath = "/Organisation/BTTDXkhLITJKg7ZrQXEj/Event";

//Retrieves a single document in a collection
const docRefPerson = doc(database, "Person", "a9bvYYkSMG3hhzW7wrMx")
const docRefEvent = doc(database, "Organisation", "BTTDXkhLITJKg7ZrQXEj", "Event", "event4")






const EventService = {
    
    // no event handling - if doc does not exist - it will be created
    addEventToDatabase : async (eventName, recurring) => {
            await setDoc(doc(database, eventCollectionPath , "event4"), {
                eventName : eventName,
                recurring: recurring
            });
    },

    getSingleEvent : async () => {
        const docSnapEvents = await getDoc(docRefEvent)
        if (docSnapEvents.exists()) {
            console.log(docSnapEvents.data())
        }
        else {console.log("Cannot be found")}
    },
    getAllEvents : async () => {
        const querySnapshotEvent = await getDocs(collection(database,"Organisation", "BTTDXkhLITJKg7ZrQXEj", "Event"));
        if (!querySnapshotEvent.empty) { 
            //console.log(querySnapshotEvent.docs[0]._document.data.value.mapValue.fields.recurring.booleanValue)
            return querySnapshotEvent.docs
                }

 
        },
    
// querySnapshotEvent.docs[0]._document.data.value.mapValue.fields




}


// const docSnap = await getDoc(docRef)

// if (docSnap.exists()) {
//     console.log("Document data:", docSnap.data());
// } else {
//     console.log("No such document")
// }

export {EventService}