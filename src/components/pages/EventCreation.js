import React, { useState, useRef} from "react";
import { View, Text, StyleSheet, TextInput, Alert,  } from "react-native";
import { Picker } from "@react-native-picker/picker"; 
import {Feather} from '@expo/vector-icons'
import { doc, setDoc} from "firebase/firestore"
import {database} from "../../database/FirebaseConfig"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import CustomButton from "../other/CustomButton";
import { createEventSubmissionAlert } from "../../../CustomAlert";
import myAlert from "../other/Alert";
import { EventService } from "../../services/EventService";



const EventCreation = () => {
    const [eventName, setEventName] = useState('')
    const [recurring, setRecurring] = useState(null)

     const handleEventSubmission = ()  => {
        if (eventName.length > 0 && recurring !== null) {
            myAlert(() => EventService.addEventToDatabase(eventName, recurring))
        } else { 
          console.log("Please enter names of at least 1 character or select an option")
    }
       
    }

  
  return (
    <KeyboardAwareScrollView style={styles.wrapper} > 
<View style={styles.container}>
    
      <Text style={styles.text}>
        Create an Event
      </Text>
      <Text style={styles.label}>Event name</Text>
      <TextInput 
      style={styles.input}
      placeholder="Input Event Name"
      onChangeText={setEventName}
      value = {eventName}
      />
            <Text style={styles.text}>Select an option:</Text>
      <Picker
      style = {styles.dropdown}
        selectedValue={recurring}
        onValueChange={(itemValue) => setRecurring(itemValue)}
        prompt="Is this event recurring?"
      >
      
      < Picker.Item label="Is this event recurring" value={null} enabled={false}/>
        <Picker.Item label="true" value={true}/>
        <Picker.Item label="false" value= {false}/>

      </Picker>

      
     <CustomButton
        onPress = {handleEventSubmission}
     ></CustomButton>
    </View>
</KeyboardAwareScrollView>

  )




}

const styles = StyleSheet.create({
   wrapper: {
    flex: 1,
    backgroundColor: "white"
  },

  container : {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    // borderWidth: 10

  
  },

  text : {
    fontSize : 20,
    fontWeight: "bold",
    marginTop: 30
  },

  input: {
    marginTop: 20,
    height: 40,
    width: 240,
    borderWidth: 1,
    padding: 10

  }, 

  label: {
    borderWidth: 1,
    alignSelf: "baseline",
    marginTop: 20,
    marginLeft: 60

  },

  dropdown: {
    marginTop: 50,
    height: 60,
    width: 240,
    backgroundColor: "white",
    borderWidth: 5,
    borderStyle: "solid",
    borderColor: "black"
  }



})



export default EventCreation;