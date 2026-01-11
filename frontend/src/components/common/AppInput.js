// src/components/common/AppInput.js
import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import colors from '../../theme/colors';

export default function AppInput({ style, ...props }) {
  return <TextInput style={[styles.input, style]} {...props} />;
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 8,
    padding: 10,
    marginVertical: 5,
  },
});
