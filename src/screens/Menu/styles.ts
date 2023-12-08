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
    buttonText: {
        color: "white",
        fontSize: 14,
        fontFamily: fonts.bold
    },
    
    
  
});

export default styles;
