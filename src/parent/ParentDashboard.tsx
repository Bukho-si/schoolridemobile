import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { useStore } from '../store';
import { Child } from '../types';

export const ParentDashboard = ({ navigation }: any) => {
  const children = useStore(state => state.children);

  const renderChild = ({ item }: { item: Child }) => (
    <Card style={styles.childCard}>
      <Text style={styles.childName}>{item.name}</Text>
      <Text style={styles.childDetails}>{item.school}</Text>
      <Text style={styles.childDetails}>Grade {item.grade} - Class {item.className}</Text>
      <View style={styles.etaContainer}>
        <Text style={styles.etaLabel}>Pickup Time:</Text>
        <Text style={styles.etaValue}>{item.pickupTime}</Text>
      </View>
      <Button title="Track Vehicle" onPress={() => {}} style={{ marginTop: 12 }} />
    </Card>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Parent Dashboard</Text>
        <Button title="+ Add Child" onPress={() => navigation.navigate('AddChild')} />
      </View>

      <FlatList 
        data={children}
        keyExtractor={item => item.id}
        renderItem={renderChild}
        contentContainerStyle={styles.list}
        ListEmptyComponent={<Text style={styles.emptyText}>No children added yet.</Text>}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F2F2F7' },
  header: { padding: 16, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold' },
  list: { padding: 16 },
  childCard: { marginBottom: 16 },
  childName: { fontSize: 20, fontWeight: 'bold', marginBottom: 4 },
  childDetails: { color: '#8E8E93', fontSize: 16, marginBottom: 2 },
  etaContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 12, padding: 12, backgroundColor: '#F2F2F7', borderRadius: 8 },
  etaLabel: { fontSize: 14, fontWeight: '600', color: '#333' },
  etaValue: { fontSize: 16, fontWeight: 'bold', color: '#007AFF' },
  emptyText: { textAlign: 'center', marginTop: 40, color: '#8E8E93', fontSize: 16 }
});
