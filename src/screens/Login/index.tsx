import React, {memo, useEffect, useState} from 'react';
import { View, Text, Image, StatusBar, SafeAreaView, TouchableOpacity, ScrollView, TextInput, Alert} from 'react-native';
import { images, colors, strings } from '../../core';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTranslation } from 'react-i18next';
import Input from '../../components/Input';
import auth from '@react-native-firebase/auth';
import OverlayLoading from 'react-native-loading-spinner-overlay';
const Login = memo(() => {
    const navigation = useNavigation();
    const { t } = useTranslation();
    
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleLogin = () => {
        if(username && password) {
            setIsLoading(true);
            auth()
            .signInWithEmailAndPassword(username, password)
            .then(async(res)=> {
                setIsLoading(false);
                await AsyncStorage.setItem("uid", res.user.uid);
                navigation.replace("HomeNavigation");
            })
            .catch((error)=> {
                setIsLoading(false);
                Alert.alert("Đăng nhập thất bại");
                console.log("err: ", error);
            })
        }
    }
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
                <TouchableOpacity onPress={handleLogin} style={styles.button}>
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
           
            
            <OverlayLoading
                visible={isLoading}
            />
        </SafeAreaView>
    );
});

export default Login;
