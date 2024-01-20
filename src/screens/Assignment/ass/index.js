import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {styles} from './style'
import Button from '../../../compoments/button';

const MyAss = () => {
  return (
    <View>
      <Image
        resizeMode = "contain"
        style = {styles.img}
        source = {require('../../../assests/splash_image.png')}/>
    
      <Text style = {styles.titleText}>FIND ALL</Text>
      <Text style = {[styles.titleText, styles.centerTitle]}>YOU NEED</Text>
      <Text style = {styles.titleText}>HERE!</Text>

      <Button title = "Sign Up"></Button>
      <Pressable>
        <Text style = {styles.footerText}>Sign In</Text>
      </Pressable>
    </View>
  );
};

export default MyAss;