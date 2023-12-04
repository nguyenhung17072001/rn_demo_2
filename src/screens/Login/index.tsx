import React, {memo, useEffect, useState} from 'react';
import { View, Text, Image, StatusBar, SafeAreaView, TouchableOpacity, ScrollView, TextInput} from 'react-native';
import { images, colors, strings } from '../../core';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTranslation } from 'react-i18next';
import Input from '../../components/Input';

const Login = memo(() => {
    const navigation = useNavigation();
    const { t } = useTranslation();
    
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                translucent 
                backgroundColor="transparent"
               
            />
            <View />
            
            <View>
                <Text style={styles.loginText}>
                    { t('login') }
                </Text>
            </View>

            <View>
                <Input 
                    label="Email"
                    placeholder={t('enter your email')}
                    value={username}
                    onChangeText={(text) => setUsername(text)}
                />
                <Input 
                    label={t('password')}
                    placeholder={t('enter password')}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry={true}
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>
                        { t('login') }
                    </Text>
                </TouchableOpacity>
                <View style={styles.row}>
                    <Text onPress={() => navigation.navigate('Register')} style={styles.forgotPasswordText}>
                        {t('register')}
                    </Text>
                    <Text style={styles.forgotPasswordText}>
                        {t('forgot password')}
                    </Text>
                </View>
            </View>

            <View />
           
            
            
        </SafeAreaView>
    );
});

export default Login;
