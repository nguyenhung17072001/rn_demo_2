import {StyleSheet, Dimensions} from 'react-native';
import {colors, fonts, constants} from '../../core';
const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
    header: {
        //backgroundColor: Colors.backgroundColor,
        //backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 35,
        paddingVertical: constants.height * 0.012,
        paddingHorizontal: constants.width * 0.04
    },
    headerName: {
        color: "#000000",
        fontFamily: fonts.bold,
        fontSize: 15,
    }

  
});

export default styles;
