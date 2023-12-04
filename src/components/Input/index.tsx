
import React, {memo, useEffect, useRef} from 'react';
import { 
    View, 
    Text, 
    TextInput,
    TouchableOpacity
} from 'react-native';
import { images, colors, strings, constants } from '../../core';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';


interface InputProps {
    label?: string;
    placeholder?: string;
    secureTextEntry?: boolean;
    value: string;
    onChangeText: (text: string) => void;
}
const Input = memo((props: InputProps) => {
    
    return (
        <View style={styles.inputContainer}>
            { props.label ? 
            <Text style={styles.label}>
                {props.label}
            </Text>:null
            }
            
            <TextInput 
                style={styles.textInput}
                placeholder={props.placeholder}
                secureTextEntry={props.secureTextEntry}
                placeholderTextColor={"grey"}
                value={props.value}
                onChangeText={props.onChangeText}
            />
               
            
        </View>
    );
});

export default Input;
  