import EventCreation from "./EventCreation";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Events from "./Events";
import EventsList from "./EventsList";


const EventStack = createNativeStackNavigator();

export function EventStackScreen() {
  return (
    <EventStack.Navigator>
      <EventStack.Screen name='Events' component={Events}/>
      <EventStack.Screen name='EventsList' component={EventsList}/>
      <EventStack.Screen name= 'EventsCreation' component ={EventCreation}/>
    </EventStack.Navigator>

  )
}

