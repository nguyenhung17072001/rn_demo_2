/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';

import {StyleSheet, Text, View, Platform} from 'react-native';
import RootNavigation from './src/navigation';
import { check, PERMISSIONS, request } from 'react-native-permissions';

import i18n from './src/i18n';
import { I18nextProvider } from 'react-i18next';



const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <RootNavigation />
    </I18nextProvider>

    
  )
};

const styles = StyleSheet.create({});

export default App;
