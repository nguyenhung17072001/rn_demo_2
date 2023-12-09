import React, {memo, useState, useContext} from 'react';
import { View, Switch, Text, ScrollView, StatusBar, SafeAreaView, TouchableOpacity} from 'react-native';
import { images, colors, strings } from '../../core';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThemeContext } from '../../core/ThemeContext';
import i18n from '../../i18n';
const Menu = memo(() => {
    const { t } = useTranslation();
    const {theme, setTheme} = useContext(ThemeContext);
    const navigation = useNavigation();
    const [isEnabled, setIsEnabled] = useState<boolean>(theme=="dark"?true : false);
    const [language, setLanguage] = useState<string>('vi');


    const handleLogout = () => {
        AsyncStorage.removeItem("uid")
        .then(()=> {
            navigation.replace("AuthNavigation");
        })
        .catch((err)=> {
            console.log("err: ", err);
        })
        
    }

    const onChangeSwitch =()=> {
        setIsEnabled(previousState => !previousState)
        if(isEnabled == false) {
            setTheme('dark');
        } else if(isEnabled) {
            setTheme('light');
        }
    }
    return (
        <View style={theme=="light"?styles.container:styles.containerDark}>
            <StatusBar
                backgroundColor={theme=="light"?"white": "#242526"}
                barStyle={theme=="light"?"dark-content": "light-content"}
            />
            <View style={theme=="light"?styles.switchButton:styles.switchButtonDark}>
                <Text style={styles.buttonText}>
                  {t('theme')}
                </Text>
                <Switch
                    trackColor={{false: 'white', true: 'white'}}
                    thumbColor={isEnabled ? '#3a3b3c' : 'green'}
                    onValueChange={onChangeSwitch}
                    value={isEnabled}
                    //style={styles.switch}
                />
            </View>
            <View style={styles.row}>
                <TouchableOpacity onPress={()=>i18n.changeLanguage('vi')} style={theme=="light"?
                    [styles.languageButton, i18n.language=='en' && {backgroundColor: "grey", borderColor: "green", borderWidth: 1}]
                    : 
                    [styles.languageButtonDark, i18n.language=='vi' && {backgroundColor: "grey", borderWidth: 1}]
                }
                    
                    >
                    <Text style={styles.buttonText}>{t('vi')}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>i18n.changeLanguage('en')} style={theme=="light"?
                    [styles.languageButton, i18n.language=='vi' && {backgroundColor: "grey", borderColor: "green", borderWidth: 1}]
                    :
                    [styles.languageButtonDark, i18n.language=='en' && {backgroundColor: "grey", borderWidth: 1}]
                }
                    
                    >
                    <Text style={styles.buttonText}>{t('en')}</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={handleLogout} style={theme=="light"?styles.button:styles.buttonDark}>
                <Text style={styles.buttonText}>
                    {t('logout')}
                </Text>
            </TouchableOpacity>
        
        

      
      
        </View>
    );
});

export default Menu;
