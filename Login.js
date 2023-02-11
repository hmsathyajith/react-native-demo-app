/* eslint-disable prettier/prettier */
import React, {useState} from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native";
import { Button, TextInput } from 'react-native-paper';



function Login() {

    const onLogin = () =>{
        console.log('email and password is ' + email + ' ' + password);
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View>
            <TextInput
                label="Email"
                mode="flat"
                value={email}
                onChangeText = {text => setEmail(text)}
            />

            <TextInput
                label="Password"
                mode="flat"
                value={password}
                onChangeText = {text => setPassword(text)}
            />

            <Button buttonColor="" mode="outlined" onPress={onLogin} style={styles.btn} >
                Sign in
            </Button>
        </View>

    )


}

const styles = StyleSheet.create({
    txt1:{
        width:'60%',
        marginLeft:'10%',
    },
    btn:{
        padding:'10%',
    },
});

export default Login;