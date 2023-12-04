import React, {memo, useEffect, useState, useContext} from 'react';
import { 
    View, 
    Text, 
    Image, 
    StatusBar, 
    SafeAreaView, 
    ScrollView,
    ImageBackground,
    Button
} from 'react-native';
import { connect } from 'react-redux';
import { images, colors, strings, constants } from '../../core';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../../components/HomeHeader';
import Geolocation from '@react-native-community/geolocation';
import moment from 'moment';
import counterStore from '../../flow/store';
import { observer } from 'mobx-react-lite';
import { ThemeContext } from '../../core/ThemeContext';
//action



moment.locale('vi');
interface HomeProps {
    
}

const Home = memo((props: HomeProps) => {
    const navigation = useNavigation();
    const { count, increment, decrement } = counterStore;
    const {theme, setTheme}= useContext(ThemeContext);
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                translucent 
                backgroundColor="transparent"
                //backgroundColor={Colors.backgroundColor}
                //barStyle={'dark-content'}
            />
            
            <ScrollView>
                <Header headerName={"Home"} />
                <Text>Count: {count}</Text>
                <Button title="Increment" onPress={increment} />
                <Button title="Decrement" onPress={decrement} />
            </ScrollView>
        
        

      
      
        </SafeAreaView>
    );
});




export default Home;
