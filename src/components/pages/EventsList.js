import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, StatusBar, ImageBackground  } from "react-native";
import {SafeAreaView} from "react-native-safe-area-context"
import {Feather} from '@expo/vector-icons'
import CustomButton from "../other/CustomButton";
import { EventService } from "../../services/EventService";
import { waitForPendingWrites } from "firebase/firestore";




 


const Item = (props) => {
   
    return (
        <View style = {styles.eventListItem}>
            <Text>Event</Text>
            <Text>{props.name}</Text>
            <Text>{props.recurring}</Text>
        </View>

    )
}



const EventsList = () => {
  [eventData, setEventData] = useState();

  const showMe = () => {
    EventService.getAllEvents()
  }

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
        <Item 
        name={item._document.data.value.mapValue.fields.eventName.stringValue}
        recurring={(item._document.data.value.mapValue.fields.recurring.booleanValue).toString()}
        >{item}
          
        </Item>
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
            // keyExtractor={(item)}
            ItemSeparatorComponent={() => <View style={{backgroundColor: 'red'}}/>}
            ListEmptyComponent={() => <View><Text>Empty List</Text></View>}
        />
        <CustomButton onPress ={showMe}></CustomButton>
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

  image : {
    width: 450,
    height: 750,
    flex: 1,

  },

  text : {
    fontSize : 20,
    fontWeight: "bold"
  },

  eventList: {
    borderWidth: 10,
  },

  eventListItem: {
    marginBottom: 20
  }
  



})



export default EventsList;