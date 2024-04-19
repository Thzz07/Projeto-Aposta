import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, TextInput, View, Image, StyleSheet, StatusBar, } from "react-native";
import CustomButton from "../components/CustomButton";
import Logo from "../assets/cabra_logo.png";
import { Ionicons, Entypo } from '@expo/vector-icons';
import { Almendra_400Regular, useFonts } from "@expo-google-fonts/almendra";


export default function Login() {

    const [email, setEmail] = useState("");
    const [passoword, setPassoword] = useState("");
    const navigation = useNavigation();
    const credentialsEmail = "aluno@senai.com.br";
    let [ fontsLoaded] = useFonts({
        Almendra_400Regular,
    });


    const credentialsPassword = "aluno123";
    const [error, setError] = useState("")

    function handleSubmit() {
        setError("");
        if (!email.trim()) {
            setError("Por favor, insira um E-mail");
            return;
        }
        if (!passoword.trim()) {
            setError("Por favor, insira uma senha");
            return;
        }
        if (email !== credentialsEmail || passoword !== credentialsPassword) {
            setError("Credenciais Invalidas");
            setEmail("");
            setPassoword("");
        }
        navigation.navigate("Home", { username: credentialsEmail })
    }
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: "center",
            backgroundColor: "#211D1D",

        },
        logo: {
            width: 200,
            height: 500,
        },
        input: {
            width: "90%",
            marginBottom: 16,
            borderWidth: 1,
            padding: 10,
            fontSize: 20,
        },
        errorText: {
            color: "red",
            marginTop: 16,
            fontSize: 16,
        },
    });

    return (
        <View style={styles.container}>
            <StatusBar
                barStyle="dark-content"
                hidden={false}
                backgroundColor="#cAD876"
                translucent={true} />
            <Image style={styles.logo} source={Logo} />
            <Text style={{ color: "#ffffff", fontFamily: 'Almendra_400Regular', fontSize: 50, position: "absolute", marginTop: 380 }}>Goat.bet</Text>
            <View style={{width:"100%", height:1, backgroundColor:"#cAD876"}}></View>
            <Text style={{ color: "#ffffff", fontSize: 17, fontWeight: 'bold', marginBottom: 40, width: "100%" }}>Entre na ação e <Text style={{ color: "#cAD876" }}>aposte</Text> com confiança no nosso site de apostas!</Text>
            <View style={{
                flexDirection: 'row', marginHorizontal: 16, borderWidth: 1,
                borderColor: "#eee",
                backgroundColor: "#3C3838",
                padding: 10,
            }}>
                <Ionicons name="mail" size={24} color="black" />
                <TextInput
                    style={{ flex: 1, marginLeft: 16, }}
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    placeholder="E-Mail"
                    placeholderTextColor="#959ba3"
                    keyboardType="email-address"

                />
            </View>




            <View style={{
                flexDirection: 'row', marginHorizontal: 16, borderWidth: 1,
                borderColor: "#eee",
                backgroundColor: "#3C3838",
                padding: 10,
                marginTop: 20,
            }}>
                <Entypo name="lock" size={24} color="black" />
                <TextInput
                    style={{ flex: 1, marginLeft: 16, }}
                    value={passoword}
                    onChangeText={(text) => setPassoword(text)}
                    placeholder="Senha"
                    placeholderTextColor="#959ba3"
                    secureTextEntry={true}
                />
            </View>


            <Text style={{ color: "#ffffff", marginBottom: 15, marginRight: 257, fontSize: 12 }}>Esqueci minha senha</Text>
            <CustomButton title="Entrar" onPress={() => {
                handleSubmit()
            }} />
            {error && <Text style={styles.errorText}>{error}</Text>}
        </View>

    );

}