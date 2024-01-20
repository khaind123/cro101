import React from "react";
import { RefreshControl, ScrollView, StatusBar, Text } from "react-native";
import { styles } from "./style";

const MyB2L4 = () => {
    return (
        <ScrollView
            style = {styles.container2}
            refreshControl = {
                <RefreshControl refreshing = {refreshing} onRefresh = {onRefresh}/>
            }>
            <StatusBar
                barStyle = {barStyle}
                translucent
                backgroundColor = {'transparent'}/>

            <Text style = {styles.text}>Kéo xuống để đổi màu StatusBar</Text>
        </ScrollView>
    );
};

export default MyB2L4;