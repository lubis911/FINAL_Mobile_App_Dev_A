import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.title}>Carwash</Text>
      <Text style={styles.text}>© 2024 Car wash. Ezer car wash Agency</Text>
      <Text style={styles.text}>All rights reserved. Privacy Policy.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    marginTop: 24,
    backgroundColor: '#000',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  text: {
    color: '#aaa',
    fontSize: 12,
    marginTop: 4,
  },
});
