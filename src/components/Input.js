import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';


export default class Input extends Component {
constructor(props){
  super(props);


  this.getText = this.getText.bind(this);
  this.props.getText(this.getText)

}

    state={
        text: ''
    };

  getText(){
    return this.state.text;
  }
 
  render() {
    return (
      <View>
        <TextInput
            {...this.props}//tüm propertleri al ve bu textInput içerisine yerleştir
            placeholderTextColor="#112f3d"
            style={styles.input}
            value={this.state.text}
            ref={this.props.inputRef}
            onChangeText={text=> this.setState({text})}//yukarıdaki state içindeki texti alttaki state e atar
        />
      </View>
    );
  }
}

const styles=StyleSheet.create({
    input:{
        height:40,
        paddingHorizontal:5,
        borderWidth:2,
        borderRadius:4,
        borderColor:'#124752',
        color:'#124752',
        marginBottom:8,
        fontSize:14,
        fontWeight:'600',
    
    }
});
   