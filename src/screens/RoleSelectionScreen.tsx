import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { useStore } from '../store';
import { Role } from '../types';

export const RoleSelectionScreen = ({ navigation }: any) => {
  const setRole = useStore((state) => state.setRole);

  const handleRoleSelect = (role: Role) => {
    setRole(role);
    navigation.navigate(`${role}App`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>SchoolRide</Text>
        <Text style={styles.subtitle}>Select your portal</Text>
        
        <View style={styles.roles}>
          <Button title="Parent Portal" onPress={() => handleRoleSelect('Parent')} />
          <Button title="Driver Portal" onPress={() => handleRoleSelect('Driver')} />
          <Button title="School Administrator" onPress={() => handleRoleSelect('School')} variant="secondary" />
          <Button title="System Admin" onPress={() => handleRoleSelect('Admin')} variant="secondary" />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
  },
  content: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#1C1C1E',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: '#8E8E93',
    textAlign: 'center',
    marginBottom: 48,
  },
  roles: {
    gap: 16,
  }
});
