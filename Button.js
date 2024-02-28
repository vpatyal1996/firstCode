// import React from 'react';
// import { Text, TouchableOpacity } from 'react-native';
// import PropTypes from 'prop-types'; // Import PropTypes from prop-types

// function Button({
//   onPress,
//   label ,
//   textColor,
//   stylebutton,
// }) {
//   return (
//     <TouchableOpacity style={stylebutton} onPress={onPress}>
//       <Text style={textColor}>{label}</Text>
//     </TouchableOpacity>
//   );
// }

// Button.propTypes = {
//   onPress: PropTypes.func, // Use PropTypes from the prop-types library
//   label: PropTypes.string,
//   textColor: PropTypes.any,
//   stylebutton: PropTypes.any,
// };

// export default Button;
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import PropTypes from 'prop-types';
import colors from "./Colors";



function Button({
        onPress= ()=>{onPressFunc() },
        name = 'Click me',
        buttonStyle = styles.btn,
        textColor = styles.button,
        
      }) {

        return(
        
            <TouchableOpacity onPress={onPress} style={buttonStyle}>
                <Text style={textColor}>{name}</Text>
            </TouchableOpacity>
        
    )
}

Button.propTypes = {
    onPress: PropTypes.func,
    label: PropTypes.string,
    buttonStyle: PropTypes.any,
    textColor: PropTypes.any,
  }


function onPressFunc(){
    // console.log("Presseddd")
}

const styles = StyleSheet.create({
    button: {
        fontSize: 20,
        textAlign: "center",
        margin: 15,
        color:colors.White,
    },

    btn: {
        backgroundColor: colors.purple,
        marginHorizontal: 23,
        marginTop: 10,
        borderRadius: 8,
        marginBottom: 10,
    },
})
export default Button