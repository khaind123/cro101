import React from "react";
import { ImageBackground, Text, View, Image } from "react-native";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";

const CustomDrawer = (props) => {
    return(
        <View style = {{flex: 1}}>
            <DrawerContentScrollView {...props}>
                <ImageBackground style = {{padding: 20}}>
                    <Image
                           source = {require("../../assests/anh1.jpg")}
                           style = {{height: 80, width: 80, borderRadius: 40, marginBottom: 10}}/>
                </ImageBackground>
                <DrawerItemList {...props}/>
            </DrawerContentScrollView>
        </View>
        
    );
};

export default CustomDrawer;