// src/components/common/AppModal.js
import React from 'react';
import { Modal, View, StyleSheet } from 'react-native';

export default function AppModal({ visible, children }) {
  return (
    <Modal transparent visible={visible} animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.content}>{children}</View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex:1,
    backgroundColor:'rgba(0,0,0,0.5)',
    justifyContent:'center',
    alignItems:'center',
  },
  content: {
    backgroundColor:'white',
    padding:20,
    borderRadius:12,
    minWidth:300
  }
});
