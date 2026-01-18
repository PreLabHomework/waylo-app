import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function AddLocationScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>➕</Text>
      <Text style={styles.title}>Add Location</Text>
      <Text style={styles.subtitle}>Coming in Phase 3</Text>
      <Text style={styles.description}>
        Help other travelers by adding restrooms, parking spots, and budget-friendly locations you discover!
      </Text>
      <Text style={styles.points}>✨ Earn +10 points for each location you add</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  icon: {
    fontSize: 80,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0077BE',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#6C757D',
    marginBottom: 20,
  },
  description: {
    fontSize: 14,
    color: '#6C757D',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 20,
  },
  points: {
    fontSize: 14,
    color: '#52B788',
    fontWeight: '600',
  },
});