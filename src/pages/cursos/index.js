import React from "react";
import {useNavigation, useRoute} from '@react-navigation/native';
import styles from './style';
import Logo from '../../assets/logo';
import {View, Image} from 'react-native';

export default function Curso(){
    const navigation = useNavigation();
    const rout = useRoute();
    function navigationBack(){
        navigation.goBack();
        }

        return(
            <View style={styles.container}>
            <View style={styles.header}>
                <Image source={Logo}/>

                </View>
            </View>

        )
}