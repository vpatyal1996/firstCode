import { StyleSheet, Text, View } from 'react-native'
import {  useSelector } from 'react-redux';
import React from 'react'

export default function ShowData() {

  const user = useSelector((state) => state.user);
  
  const { usersData } = user;
  console.log(usersData)
  return (
    <View style={{flex:1,justifyContent:'center'}}>
      <Text style={{textAlign:'center',fontSize:30}}>Data is in console</Text>
    </View>
  )
}

const styles = StyleSheet.create({})