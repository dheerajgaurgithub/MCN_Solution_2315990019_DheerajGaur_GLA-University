// src/components/reward/BadgeIcon.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function BadgeIcon({ title }) {
  return (
    <View style={styles.badge}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge:{
    backgroundColor:'#FFD700',
    padding:8,
    borderRadius:20,
    margin:4
  },
  text:{ color:'#000', fontWeight:'bold', fontSize:12 }
});
