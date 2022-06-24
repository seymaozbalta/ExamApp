import React, { Component } from 'react';
import { View, Text,StyleSheet,TouchableOpacity ,ScrollView,TextInput,KeyboardAvoidingView} from 'react-native';


export default class Kayit extends Component {
  constructor(props){
    super(props);

    this.state = {
      AdSoyad:"",
      UsernameInput:"",
      PasswordInput:""
    };

    this.kayit = this.kayit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

    kayit(){
      console.log(this.state.AdSoyad);
      if(this.state.AdSoyad === "" || this.state.AdSoyad === NaN)
        return;
      if(this.state.UsernameInput === "" || this.state.UsernameInput === NaN)
        return;
      if(this.state.PasswordInput === "" || this.state.PasswordInput === NaN)
        return;
      
      let obj = {
        AdSoyad: this.state.AdSoyad,
        Username: this.state.UsernameInput,
        Password: this.state.PasswordInput
      }
      console.log(JSON.stringify(obj))
      fetch("http://10.0.2.2:3000/users", {method: 'POST',
      headers: {
               Accept: 'application/json',
               'Content-Type': 'application/json'
      },
     body:JSON.stringify(obj)}).then((resp)=>{console.log(resp);if(resp.status === 201)
    return this.props.navigation.push("Home")});
    }

    onChange(field, text){
      let obj = {};
      obj[field] = text;
      this.setState(obj);
    }

    render() {
      const { navigate,push,goBack}= this.props.navigation;
      
      return (
        <View style={styles.container}>
          <View style={styles.headBackground} />
  
          <KeyboardAvoidingView>
          <View>
          <Text style={styles.sayfaAdi}>Kayıt</Text>
        
          </View>
          <View style={styles.container2}>
          <ScrollView>
            <View style={styles.kayıtArea}>
              <Text style={styles.kayıtAreaTitle}>Kayıt olmak için aşağıdaki formu doldurunuz.</Text>
          
          <TextInput style={styles.input}
          returnKeyType={"next"}
          placeholder="Ad-Soyad"
          placeholderTextColor={'#000000'}
          onSubmitEditing={()=>this.UsernameInput.focus()}
          onChangeText={(e)=>this.onChange("AdSoyad",e)}
          />
          <TextInput style={styles.input}
          returnKeyType={"next"}
          placeholder="KullanıcıAdı"
          placeholderTextColor={'#000000'}
          onSubmitEditing={()=>this.PasswordInput.focus()}
          onChangeText={(e)=>this.onChange("UsernameInput",e)}

          />
          <TextInput style={styles.input}
          secureTextEntry={true}
          placeholder="Sifre"
          placeholderTextColor={'#000000'}
          onChangeText={(e)=>this.onChange("PasswordInput",e)}
          inputRef={input=>this.PasswordInput=input}
          />
          <TouchableOpacity onPress={()=>this.kayit()}>
                <View>
                 <Text style={styles.kaydolButon}>Kaydol</Text>
                 
                 </View>
              </TouchableOpacity>
            </View>
  
          </ScrollView>
        </View>
        </KeyboardAvoidingView>
        </View>
      
  
       /* <Button style={styles.button1}
        title="Giriş Sayfası"
        onPress={()=>push('Home')}
    />   */ 
          
  
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
      sayfaAdi:{
        textAlign:'center',
        fontSize:25,
        fontWeight:'bold',
        color:'#f2f2f2'
      },
      button1:{
        paddingVertical:.3,
        paddingHorizontal:.3,
        borderRadius:3,
        alignItems:'center',
        backgroundColor:'#fff'
  
      },
      kayıtArea:{
        marginHorizontal:30,
        marginVertical:30,
        backgroundColor:'#fff',
        padding: 20,
        borderRadius:5,
  
        shadowColor:'black',
        shadowOpacity:.2,
        shadowRadius:3,
        shadowOffset:{
          width:0,
          height:2
        },
        elevation:4
      },
      kayıtAreaTitle:{
        fontSize:14,
        textAlign:'justify',
        marginBottom:10,
        marginTop:5
  
      },
      input:{
        height:40,
        paddingHorizontal:10,
        borderWidth:2,
        borderRadius:4,
        borderColor:'#112f3d',
        alignItems:'center',
        color:'#999',
        marginBottom:8,
        marginTop:10,
        fontSize:14,
        fontWeight:'600',
    },
      kaydolButon:{
        marginTop:10,
        borderWidth:2,
        borderRadius:6,
        fontSize:15,
        textAlign:'center',
        backgroundColor:'#010f1c',
        color:'#fff',
        borderColor:'#034f3f',
        marginBottom:10,
        marginTop:10,
        paddingVertical:10,
        paddingHorizontal:10
    
      }
      });