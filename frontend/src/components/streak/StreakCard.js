// src/components/streak/StreakCard.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../theme/colors';

export default function StreakCard({ title, count }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.count}>{count} 🔥</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding:16,
    backgroundColor:colors.white,
    borderRadius:10,
    marginVertical:8,
    shadowColor:'#000',
    shadowOpacity:0.1,
    shadowOffset:{width:0,height:2},
    shadowRadius:5,
    elevation:3
  },
  title:{ fontSize:16, fontWeight:'bold' },
  count:{ fontSize:20, marginTop:4, color:colors.primary }
});
