import React, { useState } from "react";
import { styles } from "./style";
import { Button, Text, View } from "react-native";
import AuthHeader from "../../../compoments/AuthHeader";
import Input from "../../../compoments/input";
import Seperator from "../../../compoments/seperator";
import Googlelogin from "../../../compoments/googlelogin";

const SignIn = ({navigation}) => {
    const onSignIn = () => {
        navigation.navigate("SignUp");
    };

    const onBack = () => {
        navigation.goBack();
    }; 

    return (
        <View style = {styles.container}>
            <AuthHeader onBackPress = {onBack} title = "Sign In"/>
            <Input label = "Email" placeholder = "khai@gmail.com"/>
            <Input label = "Password" placeholder = "******"/>
            {/* <Input isPassword label = "Password" placeholder = "******"/> */}
            
            <Button style = {styles.button} title = "Sign In"></Button>
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