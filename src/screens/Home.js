import { View, Text, Image, StyleSheet, TouchableOpacity, Button,ScrollView, StatusBar } from "react-native";
import Logo from '../assets/cabra_logo.png';
import { FontAwesome5, FontAwesome} from '@expo/vector-icons';
import { useEffect, useState } from "react";
import Foto from '../assets/foto.png'
import Foto2 from '../assets/foto4.png'
import { Almendra_400Regular, useFonts } from "@expo-google-fonts/almendra";

export default function Home() {
    const [times, setTimes] = useState([]);
    useEffect(() => {
        fetch("http://10.0.2.2:3000/eventos")
            .then((response) => response.json())
            .then((data) => setTimes(data));
    }, []);

    let [ fontsLoaded] = useFonts({
        Almendra_400Regular,
    });



    return (
        <ScrollView style={{ backgroundColor: "#211D1D", width: "100%", height: "100%" }}>
            <StatusBar
            barStyle = "dark-content"
            hidden = {false}
            backgroundColor = "#cAD876"
            translucent = {true}/>
            <Image source={Logo} style={{ width: 100, height: 200 }} />
            <Text style={{ color: "#ffffff", fontSize: 30, position: "absolute", marginTop: 90, marginLeft: 110, fontFamily:'Almendra_400Regular'}}>Goat.bet</Text>
            <View style={{ backgroundColor: "#cAD876", width: "100%", height: 100, position: "absolute", marginTop: 150 }}>
                <View style={{ flexDirection: "row", marginLeft: 20, marginTop: 10, }}>
                    <TouchableOpacity>
                        <FontAwesome name="soccer-ball-o" size={50} color="black" />
                    </TouchableOpacity>
                    <Text style={{ position: "absolute", marginTop: 55, fontSize: 15 }}>Futebol</Text>
                    <TouchableOpacity>
                        <FontAwesome5 name="baseball-ball" size={50} color="black" style={{ marginLeft: 30 }} />
                    </TouchableOpacity>
                    <Text style={{ position: "absolute", marginTop: 55, fontSize: 15, marginLeft: 85 }}>Tênis</Text>
                    <TouchableOpacity>
                        <FontAwesome5 name="basketball-ball" size={50} color="black" style={{ marginLeft: 30 }} />
                    </TouchableOpacity>
                    <Text style={{ position: "absolute", marginTop: 55, fontSize: 15, marginLeft: 150 }}>Basquete</Text>
                    <TouchableOpacity>
                        <FontAwesome5 name="volleyball-ball" size={50} color="black" style={{ marginLeft: 30 }} />
                    </TouchableOpacity>
                    <Text style={{ position: "absolute", marginTop: 55, fontSize: 15, marginLeft: 245 }}>Vôlei</Text>
                    <TouchableOpacity>
                        <FontAwesome5 name="golf-ball" size={50} color="black" style={{ marginLeft: 30 }} />
                    </TouchableOpacity>
                    <Text style={{ position: "absolute", marginTop: 55, fontSize: 15, marginLeft: 322 }}>Golf</Text>
                </View>
            </View>
            <View style={{ width: "90%", height: 100 }}>
                <Image source={Foto} style={{ height: 150, width: 200, marginLeft: 220, marginTop: 50 }} />
                <Text style={{ position: "absolute", marginTop: 70, fontSize: 28, fontWeight: "bold", color: "#ffffff" }}><Text style={{ color: "#cAD876" }}>10%</Text> DE CASHBACK</Text>
                <View style={{backgroundColor:"#cAD876", width:160, height:50, borderRadius:20, position:"absolute", marginTop:120, marginLeft:30, alignItems:"center"}}>
                    <Text style={{fontWeight:"900", fontSize:25, marginTop:7}}>Jogue Agora!</Text>
                </View>
            </View>

            <View style={{ backgroundColor: "#cAD876", width: "100%", height: 40, marginTop: 100 }}>
                <Text style={{ fontSize: 30, fontWeight: "900", textAlign: "center" }}>DESTAQUES</Text>
            </View>
            {times.map((time) => (
                <View>
                    <Text style={{ color: "#cAD876" , fontSize:20, marginLeft:5, }}>
                        {time.liga}
                    </Text>
                    <Text style={{ color: "#ffffff", position:"absolute", marginLeft:230, fontSize:15,marginTop:3}}>Casa x Empate x Visitante</Text>
                    <View style={{width:"100%", height:0.6, backgroundColor:"#cAD876"}}></View>
                    <Text style={{ color: "#ffffff", padding:5}}>
                        {time.equipes.casa}
                    </Text>
                    <Text style={{ color: "#ffffff", padding:5 }}>
                        {time.equipes.visitante}
                    </Text>
                    <Text style={{ color: "#211D1D", position:"absolute", marginLeft:234, marginTop:42, backgroundColor:"#cAD876", padding:5, fontWeight:"900"}}>
                        {time.cotações.vitória_casa}
                    </Text>
                    <Text style={{ color: "#211D1D", position:"absolute", marginLeft:295, marginTop:42, backgroundColor:"#cAD876",padding:5, fontWeight:"900"}}>
                        {time.cotações.empate}
                    </Text>
                    <Text style={{ color: "#211D1D", position:"absolute", marginLeft:360, marginTop:42, backgroundColor:"#cAD876", padding:5, fontWeight:"900"}}>
                        {time.cotações.vitória_visitante}
                    </Text>
                    <View style={{width:"100%", height:0.6, backgroundColor:"#cAD876"}}></View>
                </View>
            ))}
            <Image source={Foto2} style={{width:200, height:120, position:"absolute", marginTop:1130, zIndex:1}}/>
            <View style={{backgroundColor:"#cAD876", width:"80%", height:90,marginLeft:"10%", borderRadius:10, marginTop:20, marginBottom:30}}>
                <Text style={{fontWeight:"900", fontSize:30, marginLeft:150, marginTop:7}}>FAÇA SUAS APOSTAS!!</Text>
            </View>
        </ScrollView>


    );
}
