import React from "react";
import { View, Text, StyleSheet, FlatList, StatusBar, ImageBackground  } from "react-native";
import {SafeAreaView} from "react-native-safe-area-context"
import {Feather} from '@expo/vector-icons'

const DATA = [
    {},
    {},
    {}
]

const Item = (props) => {
    const {} = props;
    return (
        <View>
            <Text>Hello</Text>
        </View>

    )
}

const UpcomingEvents = () => {
    const renderItem = ({item}) => (
        <Item>{item}</Item>
    )


  return (
    <SafeAreaView style={styles.container}> 
            <ImageBackground source={require("../../../assets/city.jpg")} style={styles.image}>

        <Text style={styles.text}>
            Upcoming Events
        </Text>
        <Feather name="sun" size={100}></Feather>
        <FlatList
            data ={DATA}
            renderItem={renderItem}
            // keyExtractor={(item)}
            ItemSeparatorComponent={() => <View style={{backgroundColor: 'red'}}/>}
            ListEmptyComponent={() => <View><Text>Empty List</Text></View>}
        />
        </ImageBackground> 
    </SafeAreaView>

  )




}

const styles = StyleSheet.create({
   

  container : {
    // marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'blue',
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

  



})



export default UpcomingEvents;