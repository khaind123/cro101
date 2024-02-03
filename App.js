import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyAss from './src/screens/Assignment/ass';
import MyLab3 from './src/screens/lab3';
import MyB3L3 from './src/screens/lab3/bai3lab3';
import MyLab4 from './src/screens/lab4';
import MyLab5 from './src/screens/lab5';
import MyLab6 from './src/screens/lab6';
import SignUp from './src/screens/Assignment/Signup';
import SignIn from './src/screens/Assignment/Signin';
import MyB3L4 from './src/screens/lab4/bai3lab4';
import MyB2L5 from './src/screens/lab5/bai2lab5';
import MyB3L5 from './src/screens/lab5/bai3lab5';
import TopTap from './src/screens/lab7/topmenu';
import BottomTap from './src/screens/lab7/bottommenu';

// const Stack = createNativeStackNavigator();
const App = () => {
  return ( <MyLab6/>
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name = "Home" component = {MyAss}/>
    //     <Stack.Screen name = "SignUp" component = {SignUp}/>
    //     <Stack.Screen name = "SignIn" component = {SignIn}/>
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default App;

//git add .
//git commit -m "lab"
//git push -u origin main