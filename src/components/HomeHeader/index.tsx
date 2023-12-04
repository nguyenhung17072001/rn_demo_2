import React, {memo, useEffect, useRef} from 'react';
import { 
    View, 
    Text, 
    Image, 
    StatusBar, 
    SafeAreaView, 
    TouchableOpacity
} from 'react-native';
import { images, colors, strings, constants } from '../../core';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';


interface HeaderProps {
    headerName: string;
    action?: boolean;
    backAction?: boolean;
}
const Header = memo((props: HeaderProps) => {
    const navigation = useNavigation();
  
    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={()=> navigation.goBack()}>
            {
                props.backAction ?
                <Icon name="arrow-back" size={28} color={"red"} />
                : null
            }
            </TouchableOpacity>
            <Text style={styles.headerName}>
                {props.headerName}
            </Text>
            {props.action ?
            <TouchableOpacity onPress={()=>navigation.navigate("SearchCity")}>
                <Icon name="add" size={28} color={"#000000"} />
            </TouchableOpacity>
            : <View/>}
        </View>
    );
});

export default Header;
  