import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet, TextInput, KeyboardAvoidingView  } from "react-native";
import {SafeAreaView} from "react-native-safe-area-context"
import {Feather} from '@expo/vector-icons'
import {Firestore, collection, doc, setDoc} from "firebase/firestore"
import {database} from "../../database/FirebaseConfig"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const personRef = doc(database, "Person","BTTDXkhLITJKg7ZrQXEj")


const CustomButton = (props) => {
      
const onPress = () => {
  console.log('pressed')
}

  return (
      <TouchableOpacity style={styles.container} onPress={props.onPress}>
        <Text style={styles.text}>Confirm</Text>
      </TouchableOpacity>

  )




}

const styles = StyleSheet.create({
   container: {
    width: 100,
    height: 50,
    elevation: 8,
    backgroundColor: 'blue',
    borderRadius: 8,
    padding: 5,
    marginTop: 80,
    marginBottom: 200
   },

   text: {
    color: "white",
    textAlign: "center",
   }

})



export default CustomButton;