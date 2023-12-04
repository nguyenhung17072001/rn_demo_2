import React, {memo, useEffect, useRef} from 'react';
import {View, Text, Image, StatusBar, SafeAreaView} from 'react-native';
import { images, colors, strings } from '../../core';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = memo(() => {
  const navigation = useNavigation();
  

  useEffect(() => {
    clearTimeout(timeout);
    const timeout = setTimeout( async() => {
      const uid = await AsyncStorage.getItem("uid");
      const languageValue = await AsyncStorage.getItem("isSelectedlanguage")
      if(languageValue != "isSelectedlanguage") {
        navigation.replace('LanguageSelection');
      } else if(languageValue == "isSelectedlanguage" && uid) {
        navigation.replace("HomeNavigation");
      }
      else {
        navigation.replace('AuthNavigation');
      }
        
    }, 1500);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
        <StatusBar
            backgroundColor={"white"}
            barStyle={'dark-content'}
        />
        
        <Image
            resizeMode="contain"
            style={[styles.logo]}
            source={images.logo}
        />
        <Text style={styles.appNameText}>
            {strings.appName}
        </Text>
        

      
      
    </SafeAreaView>
  );
});

export default Splash;
