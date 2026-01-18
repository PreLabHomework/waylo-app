import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>🗺️</Text>
        <Text style={styles.title}>Waylo</Text>
        <Text style={styles.tagline}>Where Google Maps stops, Waylo starts</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>📍 Near You</Text>
        <Text style={styles.placeholder}>Location features coming in Phase 3!</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>⭐ Top Rated</Text>
        <Text style={styles.placeholder}>Reviews coming in Phase 4!</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    backgroundColor: '#0077BE',
    padding: 30,
    alignItems: 'center',
  },
  logo: {
    fontSize: 60,
    marginBottom: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  tagline: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.9,
  },
  section: {
    backgroundColor: '#fff',
    margin: 16,
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1A1A2E',
    marginBottom: 10,
  },
  placeholder: {
    color: '#6C757D',
    fontSize: 14,
  },
});