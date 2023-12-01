import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Tạo một Context mới

type ThemeType = {
    theme: string;
    setTheme: (theme: string) => void;
}
const initialContext: ThemeType = {
    theme: 'light',
    setTheme: () => {}
};
export const ThemeContext = createContext<ThemeType>(initialContext);




interface ThemeProviderProps {
    children: string | JSX.Element | JSX.Element[];
}
const ThemeProvider = (props: ThemeProviderProps) => {
    const [theme, setThemeValue] = useState('light'); // Chủ đề mặc định là light

    useEffect(() => {
        AsyncStorage.getItem('theme').then(theme => {
            if (theme) {
                setThemeValue(theme);
            }
        }).catch((err)=> {
            console.log('error when getting theme: ', err)
        })
    }, []);
    const setTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setThemeValue(newTheme);
        AsyncStorage.setItem('theme', newTheme);
    };


    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {props.children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
