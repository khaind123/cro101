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
                        <TouchableOpacity style = {styles.buttonHeart}></TouchableOpacity>
                    </View>
                    <View>
                        <Text style = {styles.textHA}>PHỐ CỔ HỘI AN</Text>
                    </View>
                    <View style = {styles.f2}>
                        <Text style = {styles.textQN}>Quảng Nam</Text>
                        <Text style = {styles.textTT}>Thông tin chuyến đi</Text>
                        <Text style = {styles.textTTS}>Hội An là một thành phố trực thuộc tỉnh Quảng Nam, Việt Nam. 
                                                    Phố cổ Hội An từng là một thương cảng quốc tế sầm uất, 
                                                    gồm những di sản kiến trúc đã có từ hàng trăm năm trước, 
                                                    được UNESCO công nhận là di sản văn hóa thế giới từ năm 1999.</Text>
                    </View>
                </ImageBackground>  
            </View>
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