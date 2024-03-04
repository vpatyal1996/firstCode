import React, { useMemo, useState } from 'react';
import { useColorScheme } from 'react-native';
 import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import App from './App';
import ShowData from './ShowData';
import PostMethod from './PostMethod';
import Confirmatation from './Confirmatation';
import HomePage from './HomePage';
import { navigationRef } from './RootNavigatation';
import FrontPage from './FrontPage';
import { Appearance } from 'react-native';
// import { theme } from './theme';

import DefaultTheme from './themes/DefaultTheme';
import DarkTheme from './themes/DarkTheme';
import { AppContext } from './themes/AppContext';

const Stack = createNativeStackNavigator();


function Navigation() {
  
  const [isDarkTheme,setIsDarkTheme]=useState(false);
  const appContext=useMemo(()=>{
    return{
      isDarkTheme,
      setIsDarkTheme
    }
  });


    return (
      <NavigationContainer ref={navigationRef} theme={isDarkTheme ? DarkTheme:DefaultTheme}>
        <AppContext.Provider value={appContext}>
        <Stack.Navigator  >
        {/* <Stack.Screen name="Front" component={FrontPage} /> */}
          <Stack.Screen name="Confirm" component={Confirmatation} />
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="ShowData" component={ShowData} />
          <Stack.Screen name="PostMethod" component={PostMethod} />
          {/* <Stack.Screen name="App" component={App} /> */}
        </Stack.Navigator>
        </AppContext.Provider>
      </NavigationContainer>
    );
  }
  export default Navigation;