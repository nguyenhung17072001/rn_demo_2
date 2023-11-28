import React, {memo, useEffect, useRef} from 'react';
import {View, Text, Image, StatusBar, SafeAreaView} from 'react-native';
import {Images, Colors, Strings} from '../../core';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';


const Splash = memo(() => {
  const navigation = useNavigation();
  

  useEffect(() => {
    clearTimeout(timeout);
    const timeout = setTimeout(() => {
      
      
        navigation.replace('HomeNavigation');
      
    }, 1500);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
        <StatusBar
            backgroundColor={Colors.backgroundColor}
            barStyle={'dark-content'}
        />
        
        <Image
            resizeMode="contain"
            style={[styles.logo]}
            source={Images.logo}
        />
        <Text style={styles.appNameText}>
            {Strings.appName}
        </Text>
        

      
      
    </SafeAreaView>
  );
});

export default Splash;
