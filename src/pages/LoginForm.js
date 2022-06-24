import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, useState } from 'react-native';
import Input from '../components/Input';
import MyButton from '../components/MyButton';
import { Formik } from "formik";



export default class LoginForm extends Component {

    //const [errorMessages,setErrorMessages]=(props)=> useState({});

    constructor(props) {
        super(props);

        this.props = props;

        this.login = this.login.bind(this);
    }

    login(){
        if(this.getUsername() === "" || this.getUsername() === NaN)
            return;

        if(this.getPassword() === "" || this.getPassword() === NaN)
            return;

        fetch("http://10.0.2.2:3000/users?Username="+this.getUsername()+"&Password="+this.getPassword() , {method: 'GET',
        headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
        }}).then((resp)=>{console.log(resp);if(resp.status === 200)
        return resp.json()}).then(json=>{
            if(json.length !== 1)
                return;
            this.props.navigation.push("Dersler")
            
        });
    }

    /*<Formik
              initialValues={{ username: '' }}
          >
              {({ values, handleChange }) => (
                 

              )} */

    onChange(field, text){
        let obj = {};
        obj[field] = text;
        this.setState(obj);
    }

    render() {

        return (
            <View>
                <Text style={styles.signInText}>Sign In</Text>
                <View>
                    <Input
                        returnKeyType={"next"}//enter yerine ileri geçme tuşu klavyede
                        placeholder="Username"
                        onSubmitEditing={() => this.passwordInput.focus()}//butona
                        //basıldığında alttaki password alanına odaklan demek.
                        getText={(getText)=>this.getUsername = getText}
                    />
                    <Input
                        returnKeyType={"go"}//klavyede ileri değil git yazsın
                        secureTextEntry={true}
                        placeholder="Password"
                        inputRef={input => this.passwordInput = input}
                        //yukarıdan gelen inputu Input.js componentinde kullanırız
                        getText={(getText)=>this.getPassword = getText}

                    />
                </View>



                <MyButton
                    navigation={this.props.navigation}
                    textColor={"#f1f1f1"}
                    bgColor={"#66d196"}
                    onClick={this.login}
                    text="Sign In Now" />

            </View>
        );
    }
}
const styles = StyleSheet.create({
    signInText: {
        marginVertical: 10,
        fontSize: 15,
        color: '#003540'
    },
    MyButton: {
        paddingBottom: .3,
        paddingTop: .3,
        alignItems: 'center',

    }

});