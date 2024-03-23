import EventCreation from "./EventCreation";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Events from "./Events";
import EventsList from "./EventsList";
import EventDetails from "./EventDetailsPage";



const EventsListStack = createNativeStackNavigator();

export function EventsListStackScreen() {
  return (
    <EventsListStack.Navigator>
          <EventsListStack.Screen name= 'EventsList' component ={EventsList}
          />
      <EventsListStack.Screen name= 'EventDetails' component ={EventDetails}/>
    </EventsListStack.Navigator>

  )
}

