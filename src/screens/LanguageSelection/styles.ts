import {StyleSheet, Dimensions} from 'react-native';
import {colors, fonts, constants} from '../../core';
const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,

    },
    selectText: {
        fontSize: 14,
        color: 'black',
        fontFamily: fonts.bold
    },
    button: {
        borderRadius: 8,
        marginHorizontal: constants.width * 0.04,
        marginTop: constants.height * 0.01,
        borderColor: "grey",
        borderWidth: 0.6,
        paddingVertical: constants.height * 0.01,
        paddingHorizontal: constants.width * 0.02,
    },
    greenButton: {
        backgroundColor: "green",
    },
    confirmButton: {
        borderRadius: 8,
        marginHorizontal: constants.width * 0.04,
        marginTop: constants.height * 0.01,
        backgroundColor: "green",
        paddingVertical: constants.height * 0.01,
        paddingHorizontal: constants.width * 0.02,
        justifyContent: 'center',
        alignItems: "center",
    },
    confirmText: {
        fontSize: 15,
        color: 'white',
        fontFamily: fonts.bold
    }

    
  
});

export default styles;
