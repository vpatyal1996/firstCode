

import React, {useRef,useEffect} from 'react';
import {AppState} from 'react-native';
import { navigate } from './RootNavigatation';
import Navigation from './Navigation';
// import { ThemeProvider } from './themeContext';


const App = () => {
  // ***********************************  we are using app state here ***********************************************************//

  const appState = useRef(AppState.currentState);
  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      
      console.log('previous',appState.current)

      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      )
       {
        console.log('App has come to the foreground!');
        
        navigate('Confirm')
      }

      appState.current = nextAppState;
      console.log('AppState', appState.current);
    });

    return () => {
      subscription.remove();
    };
  }, []);
  return(
    // <ThemeProvider>
    <Navigation/>
    // </ThemeProvider>
  );
}
  //*****************************************end here*************************************************************************************//
  export default App