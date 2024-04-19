import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import Logo from "../assets/cabra_logo.png";
import { useNavigation } from "@react-navigation/native";

export default function Details({route}) {
    const {time} = route.params;
    const navigation = useNavigation();

    return (
        <View style={{ width: "100%", height: "100%", backgroundColor: "#211D1D" }}>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Image style={{ position: "absolute", right: 290, width: 150, height: 100, marginTop: 45 }} source={Logo} />
            </TouchableOpacity>
            <Text style={{ color: "#ffffff", fontWeight: 'bold', marginTop: 80, left: 90, fontSize: 30, }}>Goat.bet</Text>
            <View style={{ alignItems:"center",width: "100%", height: "13%", backgroundColor: "#cAD876", marginTop: 20 }}>
                <Text style={{fontSize:40, fontWeight:"900", marginTop:30}}>{time.liga}</Text>
            </View>
            <View style={{ alignItems:"center",width: "100%", height: "2%", backgroundColor: "#cAD876", marginTop: 145 }}>
                <Text style ={{fontWeight:"900"}}>{time.equipes.casa}          x          {time.equipes.visitante}</Text>
            </View>
            <View style={{ width: "100%", height: 4, backgroundColor: "#5F6926", marginTop: 1 }}></View>
            <Text style={{ color: "#ffffff", fontWeight: 'bold', marginTop: 10, left: 10, fontSize: 35, }}>Faça sua aposta!</Text>
            <View style={{ width: "100%", height: 1, backgroundColor: "#444", marginTop: 20 }}></View>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: "#ffffff", fontWeight: 'bold', marginTop: 10, left: 10, fontSize: 20, }}>Valor da aposta:</Text>
                <TextInput
                    style={{
                        marginLeft: 16, borderWidth: 1,
                        borderColor: "#eee",
                        backgroundColor: "#3C3838",
                        marginTop: 5,
                        width: 250,
                        height: 40,
                        borderRadius: 10
                    }}
                    placeholder="Insira aqui o valor da sua aposta"
                    placeholderTextColor="#ffffff"
                />
            </View>
            <View style={{width:"100%", height:1, backgroundColor:"#444", marginTop:15}}></View>
            <View style={{ alignItems:"center"}}>
            <Text style={{ color: "#ffffff", fontWeight: 'bold', marginTop: 10, fontSize: 20, }}>Escolha sua aposta:</Text>
            </View>
            <View style={{flexDirection:"row", justifyContent:"space-around", marginTop:20}}>
            <View style={{width:100,alignItems:"center"}}>
                <Text style={{color:"#ffffff", backgroundColor:"#cAD876",fontSize:30,padding:10, fontWeight:"900",borderRadius:13}}>{time.cotações.vitória_casa}</Text>
            </View>
            <View style={{width:100,alignItems:"center"}}>
                <Text style={{color:"#ffffff", backgroundColor:"#cAD876",fontSize:30,padding:10, fontWeight:"900",borderRadius:13}}>{time.cotações.empate}</Text>
            </View>
            <View style={{width:100,alignItems:"center"}}>
                <Text style={{color:"#ffffff", backgroundColor:"#cAD876",fontSize:30,padding:10, fontWeight:"900",borderRadius:13}}>{time.cotações.vitória_visitante}</Text>
            </View>
            </View>
        </View>

    )
}
