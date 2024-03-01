import React, { useState } from "react";
import { styles } from "./style";
import { Button, Text, View } from "react-native";
import AuthHeader from "../../../compoments/AuthHeader";
import Input from "../../../compoments/input";
import Seperator from "../../../compoments/seperator";
import Googlelogin from "../../../compoments/googlelogin";

const SignIn = ({navigation}) => {
    const onSignUp = () => {
        navigation.navigate("SignUp");
    };

    const onCRUD = () => {
        navigation.navigate("CRUD");
    };

    const onBack = () => {
        navigation.goBack();
    }; 

    return (
        <View style = {styles.container}>
            <AuthHeader onBackPress = {onBack} title = "Sign In"/>
            <Input label = "Email"/>
            <Input label = "Password"/>
            {/* <Input isPassword label = "Password" placeholder = "******"/> */}
            
            <Button style = {styles.button} title = "Sign In" 
                    onPress = {onCRUD}>
            </Button>
            <Seperator text = "Or sign up with"></Seperator>
            <Googlelogin></Googlelogin>

            <Text style = {styles.footerText}>
                Don't have an account?
                <Text 
                    onPress = {onSignUp}
                    style = {styles.footerLink}>
                    Sign Up
                </Text>
            </Text>
        </View> 
    );
};

export default SignIn;