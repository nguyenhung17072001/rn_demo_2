import {StyleSheet, Dimensions} from 'react-native';
import {colors, fonts} from '../../core';
const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: width * 0.3,
    width: width * 0.3,

    marginBottom: height * 0.02,
  },
  appNameText: {
    color: "white",
    fontFamily: fonts.bold,
    fontSize: 28,
    
  },
  sloganText: {
    color: "grey",
    fontSize: 11,
    fontFamily: fonts.regular,
  },
});

export default styles;
