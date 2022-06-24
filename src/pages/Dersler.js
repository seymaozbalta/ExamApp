import{Component} from "react";
import {Platform,StyleSheet, Text, View,Button,KeyboardAvoidingView,ScrollView,TouchableOpacity,Image} from 'react-native';
import React,{useEffect,useState} from "react";
import axios from 'axios';



export default class Dersler extends Component {
    /*const [dersler,setDersler] = useState([]);

   useEffect(() => {
    fetch("http://localhost:3000/dersler")
        .then(response=>response.json())
        .then(response=>console.log(response));
   },[] );*/
   //destructing

   constructor(props){
    super(props);

    this.state = {data:[],    dersID:"",
    dersAdi:"",}
   }
  
   getDers(){
    fetch("http://10.0.2.2:3000/dersler" , {method: 'GET',
    headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
    }}).then((resp)=>{if(resp.status === 200)
    return resp.json()}).then(json => this.setState({data:json})
    );
   }
   componentDidMount(){
    this.getDers();
   }

   onSubmit(e){
    e.preventDefault();
    const ders={
        dersID:this.state.dersID,
        dersAdi:this.state.dersAdi
    }
    

   }

   
    render(props) {
        const {dersID,dersAdi,dersEgitmeni}=this.props;
        const { navigate,push,goBack}= this.props.navigation;
        return(
            <View style={styles.container}>
            <TouchableOpacity onPress={()=>push("Home")}>
                <Text>Push</Text>
            </TouchableOpacity>
            <ScrollView>
            { this.state.data.map((elem)=>(
                <View key={elem.dersID} style={styles.derslerArea}>
                   
                    <Text style={styles.dersBorder}>Ders id:
                    <Text>{elem.dersID} </Text> </Text>
                                   
                    <Text style={styles.dersBorder}>Ders Adı: 
                    <Text>{elem.dersAdi}</Text></Text>

                    <Text style={styles.dersBorder}>Ders Eğitmeni:
                    <Text>{dersEgitmeni}</Text> </Text>
                </View>))}
            </ScrollView>
            
            </View>
            
            
        );
    }
}
const styles=StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor:'#010f1c',
            paddingVertical:30
        },
        dersBorder:{
            borderRadius:5,
            backgroundColor:'#fff',
            padding:16,
            borderColor:'#fff',
            margin:5,
            shadowColor:'white',
            color:'#000',
            shadowOpacity:.2,
            shadowRadius:3,
            shadowOffset:{
                width:0,
                height:2
            },
            elevation:4
        },
       
       
    }
);