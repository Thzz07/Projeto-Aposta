import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "./screens/Login";
import Home from "./screens/Home";
import Perfil from "./screens/Perfil";
import Details from "./screens/Details";
import { AntDesign, Feather } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function TabRoutes() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: { backgroundColor: "#cAD876" },
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    title: "Home",
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="home" size={30} color="black" />
                    ),
                }}
            />
            <Tab.Screen
                name="Perfil"
                component={Perfil}
                options={{
                    title: "Pesquisar",
                    tabBarIcon: ({ color }) => (
                        <Feather name="user" size={30} color="black" />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default function Routes() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={TabRoutes} />
            <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
    );
}