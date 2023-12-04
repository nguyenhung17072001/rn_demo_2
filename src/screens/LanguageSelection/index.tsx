import React, {memo, useEffect, useState} from 'react';
import {View, Text, Image, StatusBar, SafeAreaView, TouchableOpacity} from 'react-native';
import { images, colors, strings } from '../../core';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/HomeHeader';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';

const LanguageSelectionScreen = memo(() => {
    const navigation = useNavigation();
    const { t } = useTranslation();
    const [language, setLanguage] = useState<string>("vi");
    const handleLanguage = async () => {
        await i18n.changeLanguage('vi');
        navigation.replace('HomeNavigation');
    }
    

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                translucent 
                backgroundColor="transparent"
               
            />
            <Header headerName={t('selection language')} />
            <View>
                <TouchableOpacity onPress={()=> setLanguage('vi')} style={[styles.button, 
                    language=='vi' && {backgroundColor: "green"}
                ]}>
                    <Text style={[styles.selectText,
                        language=='vi' && {color: "white"} 
                    ]}>
                        {t('vi')}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> setLanguage('en')} style={[styles.button, 
                    language=='en' && {backgroundColor: "green"}
                ]}>
                     <Text style={[styles.selectText,
                        language=='en' && {color: "white"} 
                    ]}>
                        {t('en')}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleLanguage} style={styles.confirmButton}>
                    <Text style={styles.confirmText}>
                        {t('confirm')}
                    </Text>
                </TouchableOpacity>
            </View>
            
        </SafeAreaView>
    );
});

export default LanguageSelectionScreen;
