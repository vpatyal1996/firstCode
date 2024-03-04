import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Button } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';

export default function SwipeableList() {
  const [names, setNames] = useState([]);
  const [name, setName] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  const handleAddItem = () => {
    if (name.trim() !== '') {
      if (editingIndex !== null) {
        // If editing, update the name at the specified index
        const updatedNames = [...names];
        updatedNames[editingIndex] = name;
        setNames(updatedNames);
        setEditingIndex(null);
      } else {
    
        setNames((prevNames) => [...prevNames, name]);
      }

      setName('');
    }
  };

  const handleEditItem = (index) => {
    
    setName(names[index]);
    setEditingIndex(index);
  };

  const handleDeleteItem = (index) => {
    const updatedNames = [...names];
    updatedNames.splice(index, 1);
    setNames(updatedNames);
  };

  const deleteAll = () => {
    setNames([]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>SwipeableList</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Enter your name here'
          style={styles.input}
          onChangeText={(text) => setName(text)}
          value={name}
        />
        <TouchableOpacity style={styles.submitButton} onPress={handleAddItem}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>

      <SwipeListView
        data={names}
        renderItem={({ item, index }) => (
          <View style={styles.rowFront}>
            <Text>Hello {item}</Text>
          </View>
        )}
        renderHiddenItem={({ index }) => (
          <View style={styles.rowBack}>
            <View style={styles.insideRow}>
            <TouchableOpacity onPress={() => handleEditItem(index)}>
              <Text style={{ color: 'white' }}>Edit</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleDeleteItem(index)}>
              <Text style={{ color: 'white' }}>Delete</Text>
            </TouchableOpacity>
            </View>
          </View>
        )}
        // leftOpenValue={200}
        rightOpenValue={-200}
      />

      <Button onPress={deleteAll} title='Delete' />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#3498db',
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    color: 'white',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#3498db',
    borderWidth: 1,
    marginRight: 10,
    paddingLeft: 10,
  },
  submitButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
  },
  submitButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  rowFront: {
    alignItems: 'center',
    backgroundColor: '#CCC',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    justifyContent: 'center',
    height: 50,
    margin: 5,
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: 'black',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 15,
    margin: 5,
  },
  insideRow:{
    width:'50%',
    flexDirection:'row',
    justifyContent:'space-between',
    padding:10

  }
});
