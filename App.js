import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import MyAss from './src/screens/Assignment/ass';
import Home from './src/screens/Assignment/Home';
import Favorites from './src/screens/Assignment/Favorites';
import Profile from './src/screens/Assignment/Profile';
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
import CRUD from './src/screens/lab8/CRUD';

const Stack = createNativeStackNavigator();

const App = () => {
  return ( 
    <CRUD/>
    // <NavigationContainer independent = "true">
    //   <Stack.Navigator>
    //       <Stack.Screen name = "Home" component = {MyAss} options = {{headerShown: false}}/>
    //       <Stack.Screen name = "SignUp" component = {SignUp} options = {{headerShown: false}}/>
    //       <Stack.Screen name = "SignIn" component = {SignIn} options = {{headerShown: false}}/>
    //       <Stack.Screen name = "CRUD" component = {CRUD}/>
    //     </Stack.Navigator>
    // </NavigationContainer>
   );
};

export default App;

//git add .
//git commit -m "lab"
//git push -u origin main
//npx json-server db.json