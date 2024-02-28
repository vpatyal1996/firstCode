import React from 'react';
 import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import App from './App';
import ShowData from './ShowData';
import PostMethod from './PostMethod';
import Confirmatation from './Confirmatation';
import HomePage from './HomePage';
import { navigationRef } from './RootNavigatation';
import FrontPage from './FrontPage';

const Stack = createNativeStackNavigator();

function Navigation() {
    return (
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator  >
        {/* <Stack.Screen name="Front" component={FrontPage} /> */}
          <Stack.Screen name="Confirm" component={Confirmatation} />
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="ShowData" component={ShowData} />
          <Stack.Screen name="PostMethod" component={PostMethod} />
          {/* <Stack.Screen name="App" component={App} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  export default Navigation;