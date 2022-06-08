/* eslint-disable prettier/prettier */
import * as React from 'react';
import { StatusBar } from 'react-native';
import './config/ReactotronConfig';
import Routes from './routes'
//import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <>
    <StatusBar barStyle="light-content" backgroundColor="#254e6b" />
    
    <Routes />
    </>
  );
}