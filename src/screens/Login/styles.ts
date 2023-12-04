import {StyleSheet, Dimensions} from 'react-native';
import {colors, fonts, constants} from '../../core';
const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,

    },
    loginText: {
        fontSize: 19,
        fontFamily: fonts.bold,
        color: colors.colorOptions.green,
    }
  

    
  
});

export default styles;
