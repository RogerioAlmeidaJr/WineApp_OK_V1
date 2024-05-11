import React, { useEffect, useRef } from "react";
import { Animated, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Estilos from "./src/estilos/Estilos";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./src/app/Login";
import Sobre from "./src/app/Sobre";
import CatalogoVinhos from "./src/app/CatalogoVinhos";
import VinhoTinto from "./src/app/VinhoTinto";
import VinhoBranco from "./src/app/Tela_Vinho_Branco";
import VinhoRose from "./src/app/Tela_Vinho_Rose";
import VinhoDessert from "./src/app/VinhoDessert";
import DetalhesTinto4 from "./src/app/DetalhesTinto4";
import DetalhesTinto5 from "./src/app/DetalhesTinto5";
import DetalhesTinto6 from "./src/app/DetalhesTinto6";
import PedidoEfetuado from "./src/app/PedidoEfetuado";

const Stack = createNativeStackNavigator();

const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 2500,
        useNativeDriver: true,
      },
    ).start();
  }, [fadeAnim]);

  return (
    <Animated.View
      style={{
        ...props.style,
        opacity: fadeAnim,
      }}>
      {props.children}
    </Animated.View>
  );
};

const Main = ({navigation}) => (
  <View style={Estilos.appContainer}>
    <ImageBackground source={require("./src/imagens/background.jpg")}
                     resizeMode="cover" style={Estilos.appImage} imageStyle={{opacity: 0.3}}>
      <FadeInView style={Estilos.appFadein}>
        <Image style={Estilos.logo} source={require("./src/imagens/marvelLogo.png")} />
        <View><Text></Text></View>
        <TouchableOpacity style={Estilos.entrarButton} onPress={() => navigation.navigate("Login")}>
          <Text style={Estilos.buttonText}>Entrar</Text>
        </TouchableOpacity>
        <View><Text></Text></View>
        <TouchableOpacity style={Estilos.sobreButton} onPress={() => navigation.navigate("Sobre")}>
          <Text style={Estilos.buttonText}>Sobre</Text>
        </TouchableOpacity>
      </FadeInView>
    </ImageBackground>
  </View>
);

export default () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Main" screenOptions={
      {
        headerStyle: {
          backgroundColor: "#181212",
        },
        headerTintColor: "#fff",
      }
    }>
      <Stack.Screen name="Main" component={Main} options={{ title: "Wine - Login", headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={{ title: "Wine - Login" }} />
        <Stack.Screen name="CatalogoVinhos" component={CatalogoVinhos} options={
      {
        title: "Catálogo de Vinhos - Catalógo de Vinhos",
      }
    }
    />
        <Stack.Screen name="VinhoTinto" component={VinhoTinto} options={{ title: "Vinho Tinto" }} />
         <Stack.Screen name="VinhoBranco" component={VinhoBranco} options={{ title: "Vinho Branco" }} />
         <Stack.Screen name="VinhoRose" component={VinhoRose} options={{ title: "Vinho Rose" }} />
         <Stack.Screen name="VinhoDessert" component={VinhoDessert} options={{ title: "Vinho Dessert" }} />
        <Stack.Screen name="DetalhesTinto4" component={DetalhesTinto4} options={{ title: "viejo Vinedo" }} />
                <Stack.Screen name="DetalhesTinto5" component={DetalhesTinto5} options={{ title: "4 The Stress" }} />
                <Stack.Screen name="DetalhesTinto6" component={DetalhesTinto6} options={{ title: "Jacobe Chris" }} />
                        <Stack.Screen name="PedidoEfetuado" component={PedidoEfetuado} options={{ title: "Pedido Efetuado" }} />




      <Stack.Screen name="Sobre" component={Sobre} options={{ title: "Marvel App - Sobre" }} />
    </Stack.Navigator>
  </NavigationContainer>
);