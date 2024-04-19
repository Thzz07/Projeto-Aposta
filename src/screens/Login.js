import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, TextInput, View, Image, StyleSheet, StatusBar, } from "react-native";
import CustomButton from "../components/CustomButton";
import Logo from "../assets/cabra_logo.png";


export default function Login() {
    
    const [email, setEmail] = useState("");
    const [passoword, setPassoword] = useState("");
    const navigation = useNavigation();
    const credentialsEmail = "aluno@senai.com.br";


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
            borderWidth: 1,
            borderColor: "#eee",
            backgroundColor: "#3C3838",
            color: "#ffffff",
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
            barStyle = "dark-content"
            hidden = {false}
            backgroundColor = "#cAD876"
            translucent = {true}/>
            <Image style={styles.logo} source={Logo} />
            <Text style={{color:"#ffffff", fontFamily: "", fontSize:50, position:"absolute", marginTop:380}}>Goat.bet</Text>
            <Text style={{ color: "#ffffff", fontSize: 17, fontWeight: 'bold', marginBottom: 40, width: "100%" }}>Entre na ação e <Text style={{ color: "#cAD876" }}>aposte</Text> com confiança no nosso site de apostas!</Text>
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={(text) => setEmail(text)}
                placeholder="E-Mail"
                placeholderTextColor="#959ba3"
                keyboardType="email-address"
            />

            <TextInput
                style={styles.input}
                value={passoword}
                onChangeText={(text) => setPassoword(text)}
                placeholder="Senha"
                placeholderTextColor="#959ba3"
                secureTextEntry={true}
            />
            <Text style={{ color: "#ffffff", marginBottom: 15, marginRight: 257, fontSize: 12 }}>Esqueci minha senha</Text>
            <CustomButton title="Entrar" onPress={() => {
                handleSubmit()
            }} />
            {error && <Text style={styles.errorText}>{error}</Text>}
        </View>

    );

}