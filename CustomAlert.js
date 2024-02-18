import { Alert } from "react-native";
import { addPersonToDatabase, personService } from "./src/services/PersonService";
import UserCreation from "./src/components/UserCreation";



const createPersonSubmissionAlert = () =>
    Alert.alert('Confirm Submission', 'Click OK to proceed', [
      {
        text: 'Cancel',
        onPress: () => console.log("Cacel pressed"),
        style: 'cancel',
      },
      {text: 'OK', 
      onPress: () => {console.log('OK Pressed'); }
    
      },
    ]);

    const createEventSubmissionAlert = () =>
    Alert.alert('Confirm Submission', 'Click OK to proceed', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);


    export {createPersonSubmissionAlert, createEventSubmissionAlert}