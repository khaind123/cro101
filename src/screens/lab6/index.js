import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Icon from 'react-native-vector-icons/FontAwesome';

function HomeScreen({navigation}) {
  return (
    <View style = {{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress = {() => navigation.navigate('Notifications')}
              title = "Go to notifications"/>
    </View>
  );
}

function ArticleScreen({navigation}) {
  return (
    <View style = {{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress = {() => navigation.navigate('Home')}
              title = "Go to home"/>
    </View>
  );
}

function SettingScreen({navigation}) {
  return (
    <View style = {{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress = {() => navigation.navigate('Home')}
              title = "Go to home"/>
    </View>
  );
}

function HelpScreen({navigation}) {
  return (
    <View style = {{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress = {() => navigation.goBack()}
              title = "Go to home"/>
    </View>
  );
}

function NotificationsScreen({navigation}) {
  return (
    <View style = {{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress = {() => navigation.goBack()}
              title = "Go back Home Screen"/>
    </View>
  );
}

const Drawer = createDrawerNavigator();
const MyLab6 = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName = 'Home'>
        <Drawer.Screen name = "Home" component = {HomeScreen}
                      //  options = {{
                      //   drawerIcon: ({focused, size}) => (
                      //     <Icon
                      //       name = "home"
                      //       size = {size}
                      //       color = {focused}
                      //     />
                      //   ),
                      //  }}
                       />
        <Drawer.Screen name = "Article" component = {ArticleScreen}/>
        <Drawer.Screen name = "Setting" component = {SettingScreen}/>
        <Drawer.Screen name = "Help" component = {HelpScreen}/>
        <Drawer.Screen name = "Notifications" component = {NotificationsScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
    
  );
};

export default MyLab6;