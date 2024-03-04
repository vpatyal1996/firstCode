// App.js
import React, {useEffect, useState} from 'react';
import {View, Text, Button, PermissionsAndroid, FlatList} from 'react-native';
import Contact from 'react-native-contacts';

const Contacts = () => {
  const [contacts,setContacts]=useState([]);
  useEffect(() => {
    getPermission();
  }, []);
  const getPermission = () => {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
      title: 'Contacts',
      message: 'This app would like to view your contacts.',
      buttonPositive: 'Please accept bare mortal',
    })
      .then(res => {
        console.log('clicked')
        if (res ===  PermissionsAndroid.RESULTS.GRANTED) {
          console.log('inside then')
          console.log('Permission: ', res);
        Contact.getAll()
          .then(contacts => {
            // work with contacts
            console.log(contacts);
            setContacts(contacts)
          })
          .catch(e => {
            console.log(e);
          });
        }
        
      })
      .catch(error => {
        console.error('Permission error: ', error);
      });
  };
  return (
    <View style={{ flex: 1 }}>
      <Text>Check the console for contacts log</Text>
      <FlatList
        data={contacts}
        renderItem={({ item, index }) => {
          const phoneNumbers = item.phoneNumbers.map((phoneNumber) => phoneNumber.number).join(', ');

          return (
            <View style={{ width: '100%' ,gap:10}}>
              <Text>name: {item.displayName}</Text>
              <Text>phone numbers: {phoneNumbers}</Text>
            </View>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};



export default Contacts;
