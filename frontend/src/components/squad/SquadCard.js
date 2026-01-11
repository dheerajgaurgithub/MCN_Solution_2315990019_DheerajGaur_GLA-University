// src/components/squad/SquadCard.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../theme/colors';

export default function SquadCard({ name, members }) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.members}>{members.length} Members</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card:{ padding:16, backgroundColor:colors.white, borderRadius:10, marginVertical:5 },
  name:{ fontSize:16, fontWeight:'bold' },
  members:{ fontSize:14, color:colors.secondary }
});
