import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {styles} from './style'
import Button from '../../../compoments/button';

const MyAss = ({navigation}) => {
  return (
    <View>
      <Image
        resizeMode = "contain"
        style = {styles.img}
        source = {require('../../../assests/splash_image.jpeg')}/>
    
      <Text style = {styles.titleText}>FIND ALL</Text>
      <Text style = {[styles.titleText, styles.centerTitle]}>YOU NEED</Text>
      <Text style = {styles.titleText}>HERE!</Text>

      <Button 
        onPress = {() => navigation.navigate('SignUp')}
        title = "Sign Up"></Button>
      <Pressable onPress = {() => navigation.navigate('SignIn')}>
        <Text style = {styles.footerText}>Sign In</Text>
      </Pressable>
    </View>
  );
};

export default MyAss;