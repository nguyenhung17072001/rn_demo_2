import {StyleSheet, Dimensions} from 'react-native';
import {colors, fonts, constants} from '../../core';
const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,

    },
    buttonText: {
        color: "blue",
        fontSize: 14
    }
    
  
});

export default styles;
