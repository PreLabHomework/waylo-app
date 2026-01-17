import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import { db } from './config/firebase';
import { collection, getDocs } from 'firebase/firestore';

export default function App() {
  const [firebaseStatus, setFirebaseStatus] = useState('Connecting...');

  useEffect(() => {
    // Test Firebase connection
    const testConnection = async () => {
      try {
        // Try to access Firestore
        const testCollection = collection(db, 'test');
        await getDocs(testCollection);
        setFirebaseStatus('✅ Firebase Connected!');
      } catch (error) {
        setFirebaseStatus('❌ Firebase Error: ' + error.message);
      }
    };

    testConnection();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>🗺️</Text>
      <Text style={styles.title}>Waylo</Text>
      <Text style={styles.tagline}>Where Google Maps stops, Waylo starts</Text>
      
      <View style={styles.statusBox}>
        <Text style={styles.statusText}>{firebaseStatus}</Text>
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0077BE',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    fontSize: 80,
    marginBottom: 20,
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
    marginBottom: 40,
  },
  statusBox: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  statusText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});