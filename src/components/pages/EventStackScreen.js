import EventCreation from "./EventCreation";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Events from "./Events";
import EventsList from "./EventsList";
import EventDetails from "./EventDetailsPage";
import { EventsListStackScreen } from "./EventsListStack";


const EventStack = createNativeStackNavigator();

export function EventStackScreen() {
  return (
    <EventStack.Navigator>
      <EventStack.Screen name='Events' component={Events}/>
      <EventStack.Screen name='EventsListStack' component={EventsListStackScreen}
       options={{headerShown: false}}
      />
      <EventStack.Screen name= 'EventsCreation' component ={EventCreation}/>

    </EventStack.Navigator>

  )
}


