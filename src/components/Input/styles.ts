import {StyleSheet, Dimensions} from 'react-native';
import {colors, fonts, constants} from '../../core';
const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
    inputContainer: {
        marginHorizontal: constants.width * 0.04

    },
    label: {
        color: "black",
        fontFamily: fonts.semiBold,
        fontSize: 14,
    },
    textInput: {
        marginTop: constants.height * 0.01,
        borderRadius: 8,
        color: "black",
        borderWidth: 0.4,
        paddingHorizontal: constants.width * 0.04,
        fontFamily: fonts.semiBold,
        
    }

  
});

export default styles;
