import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity,Button } from 'react-native';
import PropTypes from 'prop-types';
import { event } from 'react-native-reanimated';


export default class MyButton extends Component {
    //sign un now kısmını beyaz renk yapmanın daha kolay yolu olarak önce loginform içindeki button kısmında içinde color ve backgroundColor kısımları verilir.
    //daha sonra myButton.js dosyasından render içerisine const{color,backgroundColor}=this.props; verilir.
    //son olarak da touchableOpacity kısmında önce backgroudColor daha sonra da alt kısmına texte color eklenerek de yapılabilir.
 
  render() {
    const { navigate,push}= this.props.navigation;
    //statik olmayan metin oluşturup text içinde ne varsa karşıya gelmesi için propslu kısım yazılır
    return(
      <TouchableOpacity onPress={this.props.onClick}
       style={[styles.button, {backgroundColor:this.props.bgColor}]}>
      <Text style={{color:this.props.textColor}}>{this.props.text}</Text> 
     </TouchableOpacity> 
    ); 
  }
}


MyButton.propTypes={
    text:PropTypes.string.isRequired,
    bgColor:PropTypes.string,
    textColor:PropTypes.string,
   
};

const styles=StyleSheet.create({
    button:{
        paddingVertical:3,
        paddingHorizontal:3,
        paddingTop:8,
        paddingBottom:8,
        borderRadius:3,
        alignItems:'center',
      
        

    }
});