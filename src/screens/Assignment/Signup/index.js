import React, { useState } from "react";
import { styles } from "./style";
import { Button, Text, View } from "react-native";
import AuthHeader from "../../../compoments/AuthHeader";
import Input from "../../../compoments/input";
import Checkbox from "../../../compoments/Checkbox";
import Seperator from "../../../compoments/seperator";
import Googlelogin from "../../../compoments/googlelogin";

const SignUp = ({navigation}) => {
    const [checked, setChecked] = useState(false);
    const onSignIn = () => {
        navigation.navigate("SignIn");
    };

    const onBack = () => {
        navigation.goBack();
    };

    return (
        <View style = {styles.container}>
            <AuthHeader onBackPress = {onBack} title = "Sign Up"/>
            <Input label = "Name" placeholder = "Duy Khai"/>
            <Input label = "Email" placeholder = "khai@gmail.com"/>
            <Input label = "Password" placeholder = "******"/>
            {/* <Input isPassword label = "Password" placeholder = "******"/> */}
            <View style = {styles.checkRow}>
                <Checkbox checked = {checked} onCheck = {setChecked}></Checkbox>
                <Text style = {styles.checkText}>I agree with Terms & Privacy</Text>
            </View>
            <Button style = {styles.button} title = "Sign Up" onPress = {onSignIn}></Button>
            <Seperator text = "Or sign up with"></Seperator>
            <Googlelogin></Googlelogin>

            <Text style = {styles.footerText}>
                Already have an account?
                <Text 
                    onPress = {onSignIn}
                    style = {styles.footerLink}>
                    Sign In
                </Text>
            </Text>
        </View> 
    );
};

export default SignUp;