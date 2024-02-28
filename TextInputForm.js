// TextInputForm.js
import React from 'react';
import { View, TextInput, Image } from 'react-native';
import PropTypes from 'prop-types';

function TextInputForm({
  viewStyle,
  // imageSource,
  textInputStyle,
  valueText,
  maxLengthInput,
  placeHolderText,
  placeHolderStyle,
  onChangeText, 
}) {
  return (
    <View style={viewStyle}>
     
      <TextInput
        style={textInputStyle}
        value={valueText}
        onChangeText={onChangeText} 
        maxLength={maxLengthInput}
        placeholder={placeHolderText}
        placeholderTextColor={placeHolderStyle}
     
      />
       {/* <Image source={imageSource} /> */}
    </View>
  );
}

TextInputForm.propTypes = {
  viewStyle: PropTypes.any,
  imageSource: PropTypes.any,
  textInputStyle: PropTypes.any,
  placeHolderText: PropTypes.any,
  maxLengthInput: PropTypes.number,
  placeHolderStyle: PropTypes.any,
  onChangeText: PropTypes.func, 
};

export default TextInputForm;
