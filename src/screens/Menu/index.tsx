import React, {memo, useEffect, useRef} from 'react';
import { View, Text, ScrollView, StatusBar, SafeAreaView, TouchableOpacity} from 'react-native';
import { images, colors, strings } from '../../core';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Menu = memo(() => {
    const { t } = useTranslation();
    const navigation = useNavigation();
    const handleLogout = () => {
        AsyncStorage.removeItem("uid")
        .then(()=> {
            navigation.replace("AuthNavigation");
        })
        .catch((err)=> {
            console.log("err: ", err);
        })
        
    }
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                backgroundColor={"white"}
                barStyle={'dark-content'}
            />
            <TouchableOpacity onPress={handleLogout} style={{height: 300, backgroundColor: "red"}}>
                <Text>
                    {t('logout')}
                </Text>
            </TouchableOpacity>
        
        

      
      
        </SafeAreaView>
    );
});

export default Menu;
