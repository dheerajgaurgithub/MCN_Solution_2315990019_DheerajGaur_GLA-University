// src/components/squad/SquadMember.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SquadMember({ name, status }) {
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <Text>{status}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{ padding:8, margin:4, backgroundColor:'#EEE', borderRadius:8, flexDirection:'row', justifyContent:'space-between' }
});
