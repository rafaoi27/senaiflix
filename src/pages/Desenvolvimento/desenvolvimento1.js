import React from "react";
import { View, Text, TouchableOpacity, Image, SafeAreaView } from "react-native";
import logoImg from "../../assets/logo.png";
import Style from "./style";
import { WebView } from 'react-native-webview';

export default function Logica({ navigation }) {
  return (
    <SafeAreaView style={Style.container}>
      <View style={Style.header}>
        <View style={Style.header}>
          <Image source={logoImg} />
        </View>
        <Text style={Style.title}>Desenvolvimento de Sistemas</Text>

         <View style={Style.body}>
            <View style={Style.player}>
                <WebView source={{ uri: 'https://www.youtube.com/watch?v=dojQWX0k8Qw'}} allowsFullscreenVideo={true} />
            </View>            
        </View>

        </View>
    </SafeAreaView>
  );
}  