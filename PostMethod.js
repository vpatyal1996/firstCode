import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { postUserAction } from './Redux/action';
import colors from './Colors';
import fontSize from './fontSize';
import TextInputForm from './TextInputForm';

const PostMethod = () => {
  const dispatch = useDispatch();
  const userPostState = useSelector((state) => state.userPost);

  const [title, setTitle] = useState('');


  const handlePost = async () => {
    try {
      
      if (title.trim() === '') {
        Alert.alert('please enter something');
        return;
      }
      const userObj = {
        title:title,
       
      };

      await dispatch(postUserAction(userObj))

      .then(() => {
        setTitle('');
        Alert.alert( `Title: ${userObj.title}`);
      })

    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  useEffect(() => {
    console.log('title :', userPostState.title);
  }, [userPostState.title]);
  
  return (
    <View style={{ backgroundColor: colors.backgroundColor, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={styles.textContainer}>
        <View style={{ alignItems: 'center', marginVertical: 10 }}>
          <Text style={{ fontSize: fontSize.heading, color: colors.Black, fontWeight: '500' }}>Post User Data</Text>
        </View>

        <TextInputForm
         textInputStyle={styles.textInput}
         valueText={title}
         onChangeText={(text)=>setTitle(text)}
         maxLengthInput={10}
         placeHolderText='enter the value'

        />
        <TouchableOpacity style={styles.postButton} onPress={handlePost}>
          <Text style={styles.buttonText}>Post Data</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    width: '80%',
  },
  textInput: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 10,
  },
  postButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
});

export default PostMethod;
