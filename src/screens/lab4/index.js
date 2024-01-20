import React, { useState } from 'react';
import {FlatList, Image, SafeAreaView, Text, Touchable, TouchableOpacity, View} from 'react-native';
import { styles } from './style';

const DATA = [
  {
      id: '1',
      title: 'Charlie',
      gmail: 'charlie@gmail.com',
      image: require('../../assests/anh1.jpg'),
  },

  {
      id: '2',
      title: 'Tom',
      gmail: 'tom@gmail.com',
      image: require('../../assests/anh3.jpg'),
  },

  {
      id: '3',
      title: 'Michael',
      gmail: 'michael@gmail.com',
      image: require('../../assests/anh2.jpg'),
  },

  {
      id: '4',
      title: 'Thomas',
      gmail: 'thomas@gmail.com',
      image: require('../../assests/anh3.jpg'),
  },

  {
      id: '5',
      title: 'Jerry',
      gmail: 'jerry@gmail.com',
      image: require('../../assests/anh1.jpg'),
  },

  {
      id: '6',
      title: 'Mile',
      gmail: 'mile@gmail.com',
      image: require('../../assests/anh1.jpg'),
  },
];

const Item = ({title, gmail, image}) => (
  <View style = {styles.item}>
    <Text style = {styles.title}>{title}</Text>
    <Text style = {styles.gmail}>{gmail}</Text>
    <Image source = {image} style = {styles.avatar}></Image>
  </View>
);

const MyLab4 = () => {
  return (
    <SafeAreaView style = {styles.container}>
      <FlatList
        data = {DATA}
        renderItem = {({item}) => <Item title = {item.title} 
                                        gmail = {item.gmail} 
                                        image = {item.image}/>}
        keyExtractor = {item => item.id}
      />
    </SafeAreaView>
  );
};

export default React.memo(MyLab4);