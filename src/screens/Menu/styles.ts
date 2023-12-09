import {StyleSheet, Dimensions} from 'react-native';
import {colors, fonts, constants} from '../../core';
const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,

    },
    containerDark: {
        backgroundColor: "#242526",
        flex: 1,

    },
    switchButton: {
        marginTop: 50,
        flexDirection: "row",
        marginHorizontal: constants.width*0.04,
        paddingVertical: constants.width*0.04,
        justifyContent: "space-between",
        paddingHorizontal: constants.width*0.04,
        alignItems: "center",
        backgroundColor: "green",
        borderRadius: 10,
    },
    switchButtonDark: {
        marginTop: 50,
        flexDirection: "row",
        marginHorizontal: constants.width*0.04,
        paddingVertical: constants.width*0.04,
        justifyContent: "space-between",
        paddingHorizontal: constants.width*0.04,
        alignItems: "center",
        backgroundColor: "#3a3b3c",
        borderRadius: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginHorizontal: constants.width*0.04,
    },
    button: {
        marginTop: 20,
        marginHorizontal: constants.width*0.04,
        paddingVertical: constants.width*0.04,
        justifyContent: "center",
        alignItems: 'flex-start',
        backgroundColor: "green",
        borderRadius: 10,
        paddingHorizontal: constants.width*0.04,

    },
    buttonDark: {
        marginTop: 20,
        marginHorizontal: constants.width*0.04,
        paddingVertical: constants.width*0.04,
        justifyContent: "center",
        alignItems: 'flex-start',
        backgroundColor: "#3a3b3c",
        borderRadius: 10,
        paddingHorizontal: constants.width*0.04,

    },
    languageButton: {
        marginTop: 20,
        //marginHorizontal: constants.width*0.04,
        paddingVertical: constants.width*0.04,
        justifyContent: "center",
        alignItems: 'flex-start',
        backgroundColor: "green",
        borderRadius: 10,
        paddingHorizontal: constants.width*0.04,

    },
    languageButtonDark: {
        marginTop: 20,
        //marginHorizontal: constants.width*0.04,
        paddingVertical: constants.width*0.04,
        justifyContent: "center",
        alignItems: 'flex-start',
        backgroundColor: "#3a3b3c",
        borderRadius: 10,
        paddingHorizontal: constants.width*0.04,

    },
    buttonText: {
        color: "white",
        fontSize: 14,
        fontFamily: fonts.bold
    },


    //

 
    dropdown: {
        marginTop: 20,
        height: 50,
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
        marginHorizontal: constants.width*0.04,
        backgroundColor: "green"
    },
    placeholderStyle: {
        color: "white",
        fontFamily: fonts.semiBold,
    },
    itemTextStyle: {
        color: "red"
    }
    
    
    
  
});

export default styles;
