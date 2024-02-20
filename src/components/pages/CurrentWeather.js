import React from "react";
import { View, Text, StyleSheet  } from "react-native";
import {SafeAreaView} from "react-native-safe-area-context"
import {Feather} from '@expo/vector-icons'
const CurrentWeather = () => {

  return (
    <SafeAreaView style={styles.wrapper}>
<View style={styles.container}>
      <Text style={styles.text}>
        Current Weather
      </Text>
      <Feather name="sun" size={100}></Feather>
    </View>

    </SafeAreaView>

  )




}

const styles = StyleSheet.create({
   wrapper: {
    flex: 1
  },

  container : {
    backgroundColor: 'pink',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  
  },

  text : {
    fontSize : 20,
    fontWeight: "bold"
  }



})



export default CurrentWeather;