import React, {memo, useEffect, useState} from 'react';
import { View, Text, Image, StatusBar, SafeAreaView, TouchableOpacity, ScrollView, TextInput} from 'react-native';
import { images, colors, strings } from '../../core';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import Input from '../../components/Input';
import auth from '@react-native-firebase/auth';


const Register = memo(() => {
    const navigation = useNavigation();
    const { t } = useTranslation();
    
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");


    const handleRegister = () => {
        auth()
            .createUserWithEmailAndPassword('jaene.doe@example.com', 'SuperSecretPassword!')
            .then(() => {
                console.log('User account created & signed in!');
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }

                console.error(error);
            });
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
                    label= {t('username')}
                    placeholder={t('enter your username')}
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
                <Input 
                    label={t('repassword')}
                    placeholder={t('repassword')}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry={true}
                />
                <TouchableOpacity onPress={handleRegister} style={styles.button}>
                    <Text style={styles.textButton}>
                        { t('register') }
                    </Text>
                </TouchableOpacity>
                
            </View>

            <View />
           
            
            
        </SafeAreaView>
    );
});

export default Register;
