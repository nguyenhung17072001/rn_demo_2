import React, {memo, useEffect, useState} from 'react';
import { View, Text, Image, StatusBar, SafeAreaView, Alert, TouchableOpacity, ScrollView, TextInput} from 'react-native';
import { images, colors, strings } from '../../core';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import Input from '../../components/Input';
import auth from '@react-native-firebase/auth';
import OverlayLoading from 'react-native-loading-spinner-overlay';

const Register = memo(() => {
    const navigation = useNavigation();
    const { t } = useTranslation();
    
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [repassword, setRepassword] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleRegister = () => {
        if(email && password) {
            setIsLoading(true);
            auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
                setIsLoading(false);
                Alert.alert('Sign Up Success');
                console.log('User account created & signed in!');
            })
            .catch(error => {
                setIsLoading(false);
                if (error.code === 'auth/email-already-in-use') {
                    Alert.alert('That email address is already in use!')
                    console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    Alert.alert('That email address is invalid!');
                    console.log('That email address is invalid!');
                }

                console.error(error);
            });
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
                    { t('register') }
                </Text>
            </View>

            <View>
                <Input 
                    label= {"Email"}
                    placeholder={t('enter your email')}
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <Input 
                    label={t('password')}
                    placeholder={t('enter password')}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry={true}
                />
                <Input 
                    label={t('repassword')}
                    placeholder={t('repassword')}
                    value={repassword}
                    onChangeText={(text) => setRepassword(text)}
                    secureTextEntry={true}
                />
                <TouchableOpacity onPress={handleRegister} style={styles.button}>
                    <Text style={styles.textButton}>
                        { t('register') }
                    </Text>
                </TouchableOpacity>
                
            </View>

            <View />
           
            
            <OverlayLoading
                visible={isLoading}
            />
        </SafeAreaView>
    );
});

export default Register;
