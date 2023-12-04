import React, {memo, useEffect, useState} from 'react';
import { View, Text, Image, StatusBar, SafeAreaView, TouchableOpacity, ScrollView} from 'react-native';
import { images, colors, strings } from '../../core';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTranslation } from 'react-i18next';


const Login = memo(() => {
    const navigation = useNavigation();
    const { t } = useTranslation();
    
    

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                translucent 
                backgroundColor="transparent"
               
            />

            <View>
                <Text style={styles.loginText}>
                    { t('login') }
                </Text>
            </View>
           
            
            
        </SafeAreaView>
    );
});

export default Login;
