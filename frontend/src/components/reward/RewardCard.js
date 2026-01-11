// src/components/reward/RewardCard.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../theme/colors';

export default function RewardCard({ name, points }) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.points}>{points} Coins</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card:{ padding:16, backgroundColor:colors.white, borderRadius:10, marginVertical:5 },
  name:{ fontSize:16, fontWeight:'bold' },
  points:{ fontSize:14, color:colors.secondary }
});
