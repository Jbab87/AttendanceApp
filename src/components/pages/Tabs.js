import React from 'react'
import { View, StyleSheet } from 'react-native'
import CurrentWeather from './CurrentWeather'
import UpcomingEvents from './UpcomingEvents'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'
import UserCreation from './UserCreation'
import EventCreation from './EventCreation'
import EventsList from './EventsList'
import { EventStackScreen } from './EventStackScreen'
import Events from './Events'
import EventDetails from './EventDetailsPage'



const Tab = createBottomTabNavigator()

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'tomato', 
        tabBarInactiveTintColor: 'grey',
        tabBarStyle: {
          backgroundColor: 'lightblue'
        },
        headerStyle: {
          backgroundColor: 'lightblue'
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 25
        },
        headerShown: false
      }}
    >
      <Tab.Screen
    name={"EventDetails"}
      component={EventDetails}
      options={{
        // headerShown: false
        tabBarIcon: ({ focused }) => (
          <Feather
            name={"calendar"}
            size={25}
            color={focused ? 'tomato' : 'black'}
          />
          
        )
        
      }}
    
    
    />
      <Tab.Screen
        name={"Current"}
        component={CurrentWeather}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'droplet'}
              size={25}
              color={focused ? 'tomato' : 'black'}
            />
          )
        }}
      />
      <Tab.Screen
        name={'Upcoming'}
        component={UpcomingEvents}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'anchor'}
              size={25}
              color={focused ? 'tomato' : 'black'}
            />
          )
        }}
      />
       <Tab.Screen
        name={'User'}
        component={UserCreation}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'anchor'}
              size={25}
              color={focused ? 'tomato' : 'black'}
            />
          )
        }}
      />
       {/* <Tab.Screen
        name={'EventsCreation'}
        component={EventCreation}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={"calendar"}
              size={25}
              color={focused ? 'tomato' : 'black'}
            />
          ),
          tabBarStyle: {display: "none"}

        }}
      /> */}
 {/* <Tab.Screen
        name={'EventsList'}
        component={EventsList}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={"calendar"}
              size={25}
              color={focused ? 'tomato' : 'black'}
            />
          ),
          tabBarStyle: {display: "none"}
        }}
      /> */}
    
    <Tab.Screen
    name={"Event"}
      component={EventStackScreen}
      options={{
        // headerShown: false
        tabBarIcon: ({ focused }) => (
          <Feather
            name={"calendar"}
            size={25}
            color={focused ? 'tomato' : 'black'}
          />
          
        )
        
      }}
    
    
    />
      
    </Tab.Navigator>
  )
}

export default Tabs
