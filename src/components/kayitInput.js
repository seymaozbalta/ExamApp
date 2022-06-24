import React, { Component } from 'react';
import { View, Text, StyleSheet,TextInput } from 'react-native';
//import { TextInput } from 'react-native-gesture-handler';



export default class kayitInput extends Component {
    state={
        text:''
    };
  render() {
    return (
      <View>
        <TextInput
        {...this.props}
        placeholderTextColor="#f1f1f1"
        style={styles.input}
        value={this.state.text}
        ref={this.inputRef}
        onChangeText={text=> this.setState({text})}
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
        borderColor:'#f1f1f1',
        alignItems:'center',
        color:'#999',
        marginBottom:8,
        fontSize:14,
        fontWeight:'100',
    }
});
