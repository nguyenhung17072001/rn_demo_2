import React, {memo, useContext} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {routes, constants, colors, fonts, images} from '../core';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import { ThemeContext } from '../core/ThemeContext';

//tabbar
import Home from '../screens/Home';
import Menu from '../screens/Menu';


//router




const Tab = createBottomTabNavigator();

function MyTabs() {
    const {theme, setTheme} = useContext(ThemeContext);

    const TabIcon = ({ focused, color, name }) => {
    
        return (
            <View style={[theme =="light"? styles.backgroundIcon:styles.backgroundIconDark,
                focused && {backgroundColor: theme =="light"?'green':'black', minHeight: 44, minWidth: 44}
            ]}>
                <Ionicons size={focused?28:20} color={color} name={name} style={styles.tabIcon} />
            </View>
        );
    }
    return (
        <Tab.Navigator 
        initialRouteName='Home'
        screenOptions={{
            
            headerShown: false,
            tabBarHideOnKeyboard: true,
            tabBarShowLabel: false,
            tabBarStyle: {
                height: constants.height*0.065,

                backgroundColor: 'white',
                borderWidth: 0,
            },
            tabBarLabelStyle: {
                marginLeft: 100
            }
        }}
        >
            <Tab.Screen 
                name={"Home"} 
                component={Home} 
                options={{
                    tabBarIcon: ({ focused, color }) => <TabIcon focused={focused} color={focused? "" : "" } name={"home"} />,
                    
                }}
            />
            <Tab.Screen 
                name={"CityList"} 
                component={View} 
                options={{
                    tabBarIcon: ({ focused, color }) => <TabIcon focused={focused} color={focused? "" : "" } name={"earth"} />,
                    
                }}
            />
            <Tab.Screen 
                name={"Menu"} 
                component={Menu} 
                options={{
                    tabBarIcon: ({ focused, color }) => <TabIcon focused={focused} color={focused? "" : "" } name={"menu"} />,
                    
                }}
            />
        </Tab.Navigator>
    );
}

const HomeStack = createStackNavigator();
const HomeNavigation = memo(() => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name={'MyTabs'}
                component={MyTabs}
                options={{headerShown: false}}
            />
            
            
        
        </HomeStack.Navigator>
    );
});



const styles = StyleSheet.create({
    homeLogo: {
        height: constants.width*0.095,
        width: constants.width*0.095,
        backgroundColor: "white",
        borderRadius: 100,
    },
    tabIcon: {
        
        //backgroundColor: "red"
    },
    backgroundIconDark: {
        backgroundColor: "grey",
        borderRadius: 15,
        padding: constants.width*0.012,
        minHeight: 40, 
        minWidth: 40,
        justifyContent: "center",
        alignItems: "center",
    },
    backgroundIcon: {
        backgroundColor: "#d0f0f0",
        borderRadius: 15,
        padding: constants.width*0.012,
        minHeight: 40, 
        minWidth: 40,
        justifyContent: "center",
        alignItems: "center",
    },
})
export default HomeNavigation;
