import React, { useState } from 'react';
import { View, Text, useColorScheme, TouchableOpacity, StyleSheet } from 'react-native';

const Theme = () => {
  const systemTheme = useColorScheme();
  const [isDarkTheme, setIsDarkTheme] = useState(systemTheme === 'dark');

  const changeTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  return (
    <View
      style={[
        {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: isDarkTheme ? 'black' : 'white',
        },
      ]}>
      <Text style={{ color: isDarkTheme ? 'white' : 'black' }}>
        This is a demo of default dark/light theme using appearance.
      </Text>
      <TouchableOpacity onPress={changeTheme} style={styles.Button}>
        <Text style={{ color: 'white' }}>Change theme</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Theme;

const styles = StyleSheet.create({
  Button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
});
