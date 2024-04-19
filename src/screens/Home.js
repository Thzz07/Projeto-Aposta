import {View , Text, Image, StyleSheet, TouchableOpacity} from "react-native";
import Logo from '../assets/cabra_logo.png';
import { FontAwesome5, FontAwesome , AntDesign} from '@expo/vector-icons';
import { useEffect, useState } from "react";
import Foto from '../assets/foto.png'

export default function Login(){
    
    return(
        <View style={{backgroundColor:"#211D1D", width:"100%", height:"100%"}}>
            <Image source={Logo} style={{width:100, height:200}}/>
            <Text style={{color:"#ffffff", fontSize: 30, position:"absolute", marginTop:90, marginLeft:110}}>Goat.bet</Text>
            <FontAwesome name="user-circle-o" size={50} color="white"  style={{position:"absolute", marginLeft:"83%", marginTop:80}} />
            <View style={{backgroundColor:"#cAD876",width:"100%", height:100, position: "absolute", marginTop:150}}>
            <View style={{flexDirection:"row",marginLeft:20,marginTop:10 ,}}>
            <FontAwesome name="soccer-ball-o" size={50} color="black"/>
            <Text style={{position:"absolute", marginTop:55, fontSize:15}}>Futebol</Text>
            <FontAwesome5 name="baseball-ball" size={50} color="black" style={{marginLeft:30}}/>
            <Text style={{position:"absolute", marginTop:55, fontSize:15, marginLeft:86}}>Tênis</Text>
            <FontAwesome5 name="basketball-ball" size={50} color="black" style={{marginLeft:30}}/>
            <Text style={{position:"absolute", marginTop:55, fontSize:15, marginLeft:150}}>Basquete</Text>
            <AntDesign name="staro" size={50} color="black" style={{marginLeft:30}}/>
            <Text style={{position:"absolute", marginTop:55, fontSize:15, marginLeft:230}}>Favoritos</Text>
            <AntDesign name="search1" size={50} color="black" style={{marginLeft:30}}/>
            <Text style={{position:"absolute", marginTop:55, fontSize:15, marginLeft:310}}>Pesquisar</Text>
            </View>
            <View style={{width:"100%", height:100}}>
                <Image source={Foto} style={{height:150, width:200, marginLeft:220, marginTop:37}}/>
                <Text style={{position:"absolute", marginTop:60, fontSize:28, fontWeight:"bold", color:"#ffffff"}}><Text style={{color:"#cAD876"}}>10%</Text> DE CASHBACK</Text>
            </View>
            <View style={{backgroundColor:"#cAD876", width:"100%", height:40, marginTop:87}}>
                <Text style={{fontSize:30, fontWeight:"bold", textAlign:"center"}}>DESTAQUES</Text>
            </View>
            <View>

            </View>
            </View>
        </View>

        
    ); 
}
