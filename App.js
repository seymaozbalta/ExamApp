import React, {Component} from 'react';
import HomeScreen from './src/pages/HomeScreen';
import Kayit from './src/pages/Kayit';
import {View} from "react-native";
import { NavigationContainer, StackActions } from '@react-navigation/native';
import {createNativeStackNavigator } from '@react-navigation/native-stack';
import TouchHistoryMath from 'react-native/Libraries/Interaction/TouchHistoryMath';
import Dersler from './src/pages/Dersler';
//import {createStackNavigator} from 'react-navigation-stack';

const Stack = createNativeStackNavigator();


export default class App extends Component {
  constructor(props){
    super(props);

    this.props = props;

    console.log("asd")
		fetch("http://10.0.2.2:3000/sorular").then((resp)=>resp.json()).then((obj)=>console.log(obj));
  }
 
render(){
  return(
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Kayit" component={Kayit}/>
        <Stack.Screen name="Dersler" component={Dersler}/>
      </Stack.Navigator>
      
      <View>
       
        </View>
    </NavigationContainer>
  );
}
}

