import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DataItem = ({ label, value, style }) => {
  return (
    <View style={[styles.spaceData, style]}>
      <View style={{ width: '50%' }}>
        <Text style={styles.label}>{label} : </Text>
      </View>
      <View style={{ width: '50%', alignItems: 'flex-end' }}>
        <Text style={styles.labelData}>{value}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  spaceData: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    // fontFamily:'BebasNeue-Regular',
    fontSize:18
    // color:'red'
  },
  labelData: {
    marginLeft: 5,
  },
});

export default DataItem;
