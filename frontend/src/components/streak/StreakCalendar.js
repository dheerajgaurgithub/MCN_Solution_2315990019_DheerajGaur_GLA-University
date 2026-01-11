// src/components/streak/StreakCalendar.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function StreakCalendar({ streaks }) {
  return (
    <View style={styles.container}>
      {streaks?.map((day, index) => (
        <View key={index} style={[styles.day, { backgroundColor: day.completed ? 'green' : 'gray' }]} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection:'row', flexWrap:'wrap' },
  day: { width:30, height:30, margin:2, borderRadius:4 }
});
