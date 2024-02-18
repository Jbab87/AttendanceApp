import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Feather } from '@expo/vector-icons';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import CustomButton from "./CustomButton";
import myAlert from "./Alert";
import { personService } from "../services/PersonService";



const UserCreation = () => {
    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')

  // not async because it does not return a promise - handled in Alert componenet
 const handlePersonSubmission = () => {
    if (first.length > 0 && last.length > 0) {
      // myAlert expects a function reference - not a Promise
          myAlert( () => personService.addPersonToDatabase(first, last));

  } else { console.log("Please enter names of at least 1 character!")
}
   
  }
   

  return (
    <KeyboardAwareScrollView > 
<View style={styles.container}>
    
      <Text style={styles.text}>
        Current Weather
      </Text>
      <Feather name="sun" size={100}></Feather>
      <TextInput 
      style={styles.input}
      placeholder="Input First Name"
      onChangeText={setFirst}
      value = {first}
      />
      <TextInput 
      style={styles.input}
      placeholder="Input Last Name"
      onChangeText={setLast}
      value = {last}
      /> 
     <CustomButton
        onPress = {handlePersonSubmission}
     ></CustomButton>
    </View>
</KeyboardAwareScrollView>

  )




}

const styles = StyleSheet.create({
   wrapper: {
    flex: 1
  },

  container : {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
  
  },

  text : {
    fontSize : 20,
    fontWeight: "bold",
  },

  input: {
    marginTop: 80,
    height: 40,
    width: 240,
    borderWidth: 1,
    padding: 10

  }



})



export default UserCreation;