import {StyleSheet, Dimensions} from 'react-native';
import {colors, fonts, constants} from '../../core';
const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
        justifyContent: 'space-evenly',

    },
    loginText: {
        fontSize: 19,
        fontFamily: fonts.bold,
        color: colors.colorOptions.green,
        textAlign: 'center',
    },
    forgotPasswordText: {
        color: "grey",
        textAlign: "right",
        marginHorizontal: constants.width * 0.04,
        marginTop: constants.height * 0.01,
    },
    button: {
        backgroundColor: colors.colorOptions.green,
        marginHorizontal: constants.width * 0.04,
        marginTop: constants.height * 0.03,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: constants.height * 0.01,
        borderRadius: 8,
    },
    textButton: {
        color: "white",
        fontSize: 14,
        fontFamily: fonts.bold,
    }

  

    
  
});

export default styles;
