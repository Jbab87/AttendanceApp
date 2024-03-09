import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, StatusBar, ImageBackground, TouchableOpacity  } from "react-native";
import {SafeAreaView} from "react-native-safe-area-context"
import {Feather} from '@expo/vector-icons'
import CustomButton from "../other/CustomButton";
import { EventService } from "../../services/EventService";
import { waitForPendingWrites } from "firebase/firestore";
import { Link } from "@react-navigation/native";




 


const Item = (props) => {
   
    return (
        <View style = {styles.eventListItem}>
            <Text>Event</Text>
            <Text>{props.name}</Text>
            <Text>{props.recurring}</Text>
        </View>

    )
}



const Events = (props) => {
 

  return (
    <SafeAreaView style={styles.container}> 
            
        
        <Text style={styles.text}>
            Your Events
        </Text>
        
        
       
          <TouchableOpacity style={styles.box} onPress={()=> props.navigation.navigate("EventsCreation")}>
            <View >
              <Text>Create Event</Text>
            </View>
          </TouchableOpacity>


          <TouchableOpacity style={styles.box} onPress={()=> props.navigation.navigate("EventsList")}>
            <View >
              <Text>View Events</Text>
            </View>
          </TouchableOpacity>
        
       
    </SafeAreaView>

  )




}

const styles = StyleSheet.create({
   

  container : {
    // marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'white',
    flex: 1,
    padding: 15
    // alignItems: 'center',
    // justifyContent: 'center'
  
  },

    box : {
      borderWidth: 1,
      padding: 10,
      marginTop: 10,
      marginBottom: 50,
      height: 100,
      

    },

  text : {
    fontSize : 20,
    fontWeight: "bold"
  },

  border: {
    borderWidth: 2
  }


})



export default Events;