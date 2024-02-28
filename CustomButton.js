// CustomButton.js

import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

const CustomButton = ({ onPress, title, color }) => {
  return (
    <View style={{ backgroundColor: color, height: 40, justifyContent: 'center', margin: 10, borderRadius: 20 }}>
      <TouchableOpacity style={{ alignItems: 'center' }} onPress={onPress}>
        <Text style={{ color: 'white' }}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;
