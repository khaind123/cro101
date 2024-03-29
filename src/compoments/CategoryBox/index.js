import React from "react";
import { Pressable, View, Text, Image } from "react-native";
import { styles } from "./style";

const CategoryBox = ({title, image, onPress}) => {
    return(
        <Pressable onPress = {onPress} style = {styles.container}>
            <View style = {styles.imgaeContainer}>
                <Image style = {styles.image} source = {{uri: image}}/>
            </View>
            <Text style = {styles.title}>{title}</Text>
        </Pressable>
    );
};

export default React.memo(CategoryBox);