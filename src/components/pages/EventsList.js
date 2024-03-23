import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, StatusBar, ImageBackground  } from "react-native";
import {SafeAreaView} from "react-native-safe-area-context"
import {Feather} from '@expo/vector-icons'
import CustomButton from "../other/CustomButton";
import { EventService } from "../../services/EventService";
import { waitForPendingWrites } from "firebase/firestore";
import { Route } from "@react-navigation/native"; 




 


const Item = (props) => {
   
    return (
        <View style = {styles.eventListItem}>
            <Text>Event</Text>
            <Text>{props.id}</Text>
            <Text>{props.name}</Text>
            <Text>{props.recurring}</Text>
        </View>

    )
}



const EventsList = (props) => {
  [eventData, setEventData] = useState();
  // const showMe = () => {
  //   EventService.getAllEvents()
  // }
  

useEffect(() => {
 async function handleData() {
    const resultArray = await EventService.getAllEvents()
    setEventData(resultArray)
}
      handleData()
}
  , []
)
  

    const renderItem = ({item}) => (
      <View style={styles.eventListItemContainer}> 
      <View style={styles.eventListItem}>
      <Item 
      id ={item._document.data.value.mapValue.fields.id.stringValue}
        name={item._document.data.value.mapValue.fields.eventName.stringValue}
        recurring={(item._document.data.value.mapValue.fields.recurring.booleanValue).toString()}
        >{item}
          
        </Item>
        </View> 
        <View style={styles.eventListItemButton}>
          <CustomButton
          style = {styles.button}
          text= "View details"
          onPress={ ()=> {
            props.navigation.navigate("EventDetails", {
              eventId : "3"
          })
        }}
          > 
          </CustomButton>
          </View>
        </View>
    ) 


  return (
    <SafeAreaView style={styles.container}> 
            
        <Text style={styles.text}>
            Your Event
        </Text>
        <FlatList
        style= {styles.eventList}
            data ={eventData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => <View style={{backgroundColor: 'red'}}/>}
            ListEmptyComponent={() => <View><Text>Empty List</Text></View>}
        />
    </SafeAreaView>

  )




}

const styles = StyleSheet.create({
   

  container : {
    // marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'white',
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center'
  
  },

  text : {
    fontSize : 20,
    fontWeight: "bold"
  },

  eventList: {
    // borderWidth: 1,
    padding: 10,
    height: 200
  },
  eventListItemContainer: {
    flexDirection: "row",
    justifyContent: "center",
    borderWidth: 3,
    padding: 10,
    marginBottom: 15,
    backgroundColor: "orange",
    // height: 300
  },

  eventListItem: {
    borderWidth: 1,
    marginBottom: 15,
    marginRight: 20,
    width: 100,
    backgroundColor: "orange",
    // height: 300
  },
  eventListItemButton: {
    flexDirection: "row" ,
    borderWidth: 3,
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    width: 150,
  }, 

  button: {
    // alignSelf: "center",

  }
  



})



export default EventsList;