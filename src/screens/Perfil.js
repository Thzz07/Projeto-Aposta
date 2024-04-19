import { View, Text, Image, } from 'react-native';
import Logo from "../assets/cabra_logo.png";


export default function Perfil(){
    return(
        <View style={{width:"100%", height:"100%", backgroundColor:"#211D1D"}}>
        <Text style={{color:"#ffffff", fontWeight:'bold', marginTop: 80, left: 90, fontSize: 20,}}>Bem-vindo, Pereira</Text>
        <Image style={{position:"absolute", right:280, width:150, height:100, marginTop:45}} source={Logo} />
        <View style={{width:"85%", height:"78%", backgroundColor:"#cAD876", left:30, marginTop:50}}>
        <Text style={{fontWeight:'bold', fontSize:20, left:10, marginTop:35 }}>Carteira principal</Text>
        <Text style={{fontWeight:'bold', fontSize:15, left:10, marginTop:35 }}>R$ 10.390,90</Text>
        <View style={{width:"100%", height:1, backgroundColor:"#444", marginTop:20}}></View>
        <Text style={{fontWeight:'bold', fontSize:20, left:10, marginTop:35 }}>Gastos</Text>
        <Text style={{fontWeight:'bold', fontSize:15, left:10, marginTop:35 }}>R$ 500,00</Text>
        <View style={{width:"100%", height:1, backgroundColor:"#444", marginTop:20}}></View>
        <Text style={{fontWeight:'bold', fontSize:20, left:10, marginTop:35 }}>Histórico de apostas</Text>
        <View style={{width:"94%", height:"10%", backgroundColor:"#3C3838", left:10, marginTop:30, alignItems:"center"}}>
            <Text style={{color:"#ffffff", fontSize:15}}>Manchester City x Real Madrid</Text>
            <Text style={{color:"#ffffff", fontSize:15}}> (1.60x) | (2.40x)</Text>
            <Text style={{color:"#ffffff", fontSize:15}}> Inseriu: R$ 500,00 | Sacou R$ 1200,00</Text>
            
        </View>
        <View style={{width:"94%", height:"10%", backgroundColor:"#3C3838", left:10, marginTop:30, alignItems:"center"}}>
            <Text style={{color:"#ffffff", fontSize:15}}>Bayern de munique x Arsenal</Text>
            <Text style={{color:"#ffffff", fontSize:15}}> (2.74x) | (2.80x)</Text>
            <Text style={{color:"#ffffff", fontSize:15}}> Inseriu: R$ 500,00 | Perdeu R$ 500,00</Text>
            
        </View>
        <View style={{width:"94%", height:"10%", backgroundColor:"#3C3838", left:10, marginTop:30, alignItems:"center"}}>
            <Text style={{color:"#ffffff", fontSize:15}}>Palmeiras x Internacional</Text>
            <Text style={{color:"#ffffff", fontSize:15}}> (1.70x) | (6.20x)</Text>
            <Text style={{color:"#ffffff", fontSize:15}}> Inseriu: R$ 800,00 | Sacou R$ 4960,00</Text>
            
        </View>
        </View>
        </View>
        
        
    )
}