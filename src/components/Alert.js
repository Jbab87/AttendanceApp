import {Alert} from 'react-native'



const myAlert =  (perfomDBOperation) => {



Alert.alert('Confirm Submission', 'Click OK to proceed', [
            {
              text: 'Cancel',
              onPress: () => console.log("Cancel pressed"),
              style: 'cancel',
            },
            {text: 'OK', 
            onPress: async  () => {  
              await perfomDBOperation(); 
              //When OK is pressed I want the actual function to execute
              // Because the actual function deals with the DB, it returns a promise 
              // SO I use await because I want the DB operation to complete before console.log
              // Only the first part of the process
              // Need to deal with it in UI side
              console.log('Submission complete'); 

            }
          
            },
          ])


        

            
}

export default myAlert 