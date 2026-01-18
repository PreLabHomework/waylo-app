import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function MapScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>🗺️</Text>
      <Text style={styles.title}>Map View</Text>
      <Text style={styles.subtitle}>Coming in Phase 3</Text>
      <Text style={styles.description}>
        This will show all nearby restrooms, parking spots, and budget-friendly locations on an interactive map.
      </Text>
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
  },
});