import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>🗺️</Text>
        <Text style={styles.title}>Waylo</Text>
        <Text style={styles.tagline}>Where Google Maps stops, Waylo starts</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.description}>
          Your budget-friendly travel companion for finding restrooms, parking, and affordable spots worldwide.
        </Text>

        <View style={styles.features}>
          <View style={styles.feature}>
            <Text style={styles.featureIcon}>🚻</Text>
            <Text style={styles.featureText}>Find restrooms</Text>
          </View>
          <View style={styles.feature}>
            <Text style={styles.featureIcon}>🅿️</Text>
            <Text style={styles.featureText}>Locate parking</Text>
          </View>
          <View style={styles.feature}>
            <Text style={styles.featureIcon}>💰</Text>
            <Text style={styles.featureText}>Save money</Text>
          </View>
        </View>
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity 
          style={styles.primaryButton}
          onPress={() => navigation.navigate('Signup')}
        >
          <Text style={styles.primaryButtonText}>Get Started</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.secondaryButton}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.secondaryButtonText}>I already have an account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    backgroundColor: '#0077BE',
    paddingTop: 60,
    paddingBottom: 40,
    alignItems: 'center',
  },
  logo: {
    fontSize: 80,
    marginBottom: 10,
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  tagline: {
    fontSize: 16,
    color: '#fff',
    opacity: 0.9,
  },
  content: {
    flex: 1,
    padding: 30,
  },
  description: {
    fontSize: 16,
    color: '#1A1A2E',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 40,
  },
  features: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  feature: {
    alignItems: 'center',
  },
  featureIcon: {
    fontSize: 40,
    marginBottom: 10,
  },
  featureText: {
    fontSize: 14,
    color: '#6C757D',
  },
  buttons: {
    padding: 20,
    paddingBottom: 40,
  },
  primaryButton: {
    backgroundColor: '#0077BE',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  secondaryButton: {
    padding: 16,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: '#0077BE',
    fontSize: 16,
    fontWeight: '500',
  },
});