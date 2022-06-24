import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView,KeyboardAvoidingView,TouchableOpacity} from 'react-native';

import {Formik} from 'formik';

const instructions = Platform.select({});

export default class Login extends Component {
	constructor(props){
		super(props);

		console.log("asd")
		fetch("http://10.0.2.2:3000/sorular").then((resp)=>resp.json()).then((obj)=>console.log(obj));
	}

  render() {
    return (
      <View style={styles.container}>
				<View style={styles.headBackground} />
				
				<KeyboardAvoidingView behavior={"position"}>
				<View>
					<Text style={styles.logo}>THINK</Text>
					<Text style={styles.logoDescription}>Ders&Sınav</Text>
					<hr/>
				</View>
	  <ScrollView>
		  <View style={styles.loginArea}>
              <Text style={styles.loginAreaTitle}>Sınavlarınızı yanıtlayabilir veya derslerinizi görüntüleyebilirsiniz.</Text>
			  <Text style={styles.loginAreaDescription}>
			  	Ders veya sınavlarınızı görüntülemek için giriş yapınız</Text>
         
		  <LoginForm/>
		  </View>
	  </ScrollView>
	  <View style={styles.signUpArea}>
		  <Text style={styles.signUpDescription}>Hesabınız yok mu?</Text>
		  <TouchableOpacity>
			  <Text style={styles.signUpText}>Kaydol</Text>
		  </TouchableOpacity>
		  	<Text>Sign Up</Text>
	  </View>
	  </KeyboardAvoidingView>
	</View>//KeyboardAvoidingView- diğer inputlara klavyeden veri girilirken klavye altında kalmayıp input penceresine tıklandığında yukarı çıkmasını sağlar
  );
}
}

const styles= StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:'#010f1c',
		paddingVertical:80
	},
	headBackground:{
		position:'absolute',
		top:0,
		left:0,
		height:250,
		width:'100%',
		backgroundColor:'#034f3f'//034c46
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
		padding:20,
		borderRadius:5,//köşeyi törpüleme

		shadowColor:'black',
		shadowOpacity:.2,//0.2
		shadowRadius:3,//gölgeyi yayıyor büyüdükçe
		shadowOffset:{
			width:0,//sağa doğru gölge verir
			height:2//büyüdükçe gölgeyi aşağı doğru yayar
	},
		elevation:4//androide geçilince gölgeler görünmüyorsa bu yapı arttırılarak görüntülenebilir.
	},
	loginAreaTitle: {
		fontSize:16,
		color:'#3d3d3d',
		textAlign:'center'
		
	},
	loginAreaDescription: {
		fontSize: 15,
		color: '#3d3d3d',
		textAlign:'center',
		marginVertical:10
	},
	signUpArea:{
		alignItems:'center',
	},
	signUpDescription:{
		color:'#999'
	},
	signUpText:{
		color:'#fff'
	},


}
);//react-native rename kurulumu ile uygulama ismi değiştirilebilir.
//imageMagick ile uygulama iconu değiştirilebilir.