import{Component} from "react";
import {Platform,StyleSheet, Text, View,Button,KeyboardAvoidingView,ScrollView,TouchableOpacity,Image} from 'react-native';
import React from "react";
import LoginForm from './LoginForm';
import Kayit from "./Kayit";
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


//'react-native'

export default class HomeScreen extends Component {
  constructor(props){
    super(props);

    this.props = props;
  }
	
render() {
  const { navigate,push}= this.props.navigation;
  return (
    <View style={styles.container}>
      <View style={styles.headBackground} />

      <KeyboardAvoidingView behavior={"position"}>
      <View>
        <Text style={styles.logo}>THINK</Text>
        <Text style={styles.logoDescription}>Ders&Sınav</Text>
      </View>
      
  <ScrollView>
    <View style={styles.loginArea}>
            <Text style={styles.loginAreaTitle}>Sınavlarınızı yanıtlayabilir veya derslerinizi görüntüleyebilirsiniz.</Text>
      <Text style={styles.loginAreaDescription}>
        Ders veya sınavlarınızı görüntülemek için giriş yapınız</Text>
       
  <LoginForm navigation={this.props.navigation}/>
    </View>
  </ScrollView>
  
  <View style={styles.signUpArea}>
    <Text style={styles.signUpDescription}>Hesabınız yok mu?</Text>
  
    <TouchableOpacity onPress={()=>this.props.navigation.push("Kayit")}>
      <View>
       <Text style={styles.signUpText}>Sign Up</Text>
       </View>
    </TouchableOpacity>	 

  
   
  </View>
  </KeyboardAvoidingView>
</View>//KeyboardAvoidingView- diğer inputlara klavyeden veri girilirken klavye altında kalmayıp input penceresine tıklandığında yukarı çıkmasını sağlar
);
}
}

const styles = StyleSheet.create({
  container:{
    flex:3,
    backgroundColor:'#010f1c',
    paddingVertical:30,
},
headBackground:{
  position:'absolute',//havada durması için
  top:0,
  left:0,
  height:250,
  width:'100%',
  backgroundColor:'#034f3f'
},
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  logo:{
    textAlign:'center',
    fontSize:40,
    fontWeight:'bold',
    color:'#f2f2f2'
  },
  logoDescription:{
    textAlign:'center',
    color:'#f2f2f2'
  },
  loginArea:{
    marginHorizontal:40,
    marginVertical:40,
    backgroundColor:'#fff',
    padding:15,
    borderRadius:5,
    shadowColor:'black',
    shadowOpacity:.2,
    shadowOffset:{
      width:0,
      height:2
    },
    elevation:4
  },
  loginAreaTitle:{
    fontSize:16,
    color:'#3d3d3d',
    textAlign:'center',

  },
  loginAreaDescription:{
    fontSize:15,
    color:'#3d3d3d',
    textAlign:'center',
    marginVertical:5
  },
  signUpArea:{
    alignItems:'center',
  },
  signUpDescription:{
    color:'#999'
  },
  signUpText:{
    color:'#fff'
  }
});


