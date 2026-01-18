import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../config/firebase';
import { logOut } from '../services/authService';

export default function ProfileScreen({ navigation }) {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

useFocusEffect(
  React.useCallback(() => {
    fetchUserData();
  }, [])
);

  const fetchUserData = async () => {
    try {
      const user = auth.currentUser;
      if (user) {
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        if (userDoc.exists()) {
          setUserData(userDoc.data());
        }
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    const confirmed = window.confirm('Are you sure you want to logout?');
    
    if (confirmed) {
      const result = await logOut();
      if (result.success) {
        window.alert('Logged out successfully');
      } else {
        window.alert('Error: ' + result.error);
      }
    }
  };

  if (loading) {
    return (
      <View style={[styles.container, { justifyContent: 'center' }]}>
        <ActivityIndicator size="large" color="#0077BE" />
      </View>
    );
  }

  // Get first letter of name for avatar
  const firstLetter = userData?.displayName?.charAt(0).toUpperCase() || 'U';

  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{firstLetter}</Text>
      </View>
      <Text style={styles.name}>{userData?.displayName || 'User'}</Text>
      <Text style={styles.email}>{userData?.email || ''}</Text>
      <Text style={styles.level}>🏆 {userData?.currentLevel || 'Beginner Traveler'}</Text>
      <Text style={styles.points}>{userData?.totalPoints || 0} points</Text>

      <View style={styles.statsContainer}>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>{userData?.stats?.locationsAdded || 0}</Text>
          <Text style={styles.statLabel}>Locations</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>{userData?.stats?.reviewsWritten || 0}</Text>
          <Text style={styles.statLabel}>Reviews</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>{userData?.stats?.upvotesReceived || 0}</Text>
          <Text style={styles.statLabel}>Upvotes</Text>
        </View>
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.infoLabel}>Account Created</Text>
        <Text style={styles.infoValue}>
          {userData?.createdAt?.toDate?.()?.toLocaleDateString() || 'N/A'}
        </Text>
      </View>

      <TouchableOpacity 
  style={styles.editButton}
  onPress={() => navigation.navigate('EditProfile')}
>
  <Text style={styles.editButtonText}>Edit Profile</Text>
</TouchableOpacity>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    alignItems: 'center',
    padding: 20,
    paddingTop: 40,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#0077BE',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  avatarText: {
    fontSize: 40,
    color: '#fff',
    fontWeight: 'bold',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1A1A2E',
    marginBottom: 5,
  },
  email: {
    fontSize: 14,
    color: '#6C757D',
    marginBottom: 10,
  },
  level: {
    fontSize: 16,
    color: '#6C757D',
    marginBottom: 5,
  },
  points: {
    fontSize: 18,
    fontWeight: '600',
    color: '#00A896',
    marginBottom: 30,
  },
  statsContainer: {
    flexDirection: 'row',
    gap: 20,
    marginBottom: 30,
  },
  stat: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    minWidth: 90,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0077BE',
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 12,
    color: '#6C757D',
    textAlign: 'center',
  },
  infoSection: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    width: '100%',
    marginBottom: 20,
  },
  infoLabel: {
    fontSize: 12,
    color: '#6C757D',
    marginBottom: 5,
  },
  infoValue: {
    fontSize: 16,
    color: '#1A1A2E',
    fontWeight: '500',
  },
  editButton: {
    backgroundColor: '#0077BE',
    paddingHorizontal: 40,
    paddingVertical: 14,
    borderRadius: 12,
    marginBottom: 15,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  logoutButton: {
    backgroundColor: '#E63946',
    paddingHorizontal: 40,
    paddingVertical: 14,
    borderRadius: 12,
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});