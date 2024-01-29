import React from "react";
import { ImageBackground, View, Text, StatusBar, TouchableOpacity } from "react-native";
import { styles } from "./style";

const MyB3L5 = () => {
    return (
        <View style = {styles.container2}>
            <View style = {styles.f1}>
                <StatusBar translucent backgroundColor = "rgba(0,0,0,0)"/>
                <ImageBackground 
                    source = {require('../../assests/hoi_an.png')}
                    style = {styles.img}>
                    <View>
                        <Text style = {styles.textHA}>PHỐ CỔ HỘI AN</Text>
                    </View>
                </ImageBackground>
            </View>
            <View style = {styles.f2}></View>
            <View style = {styles.f3}>
                <View>
                    <Text style = {styles.textGia}>$100/Ngày</Text>
                    <TouchableOpacity style = {styles.buttonGia}>
                        <Text style = {styles.buttonText2}>Đặt ngay</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default MyB3L5;