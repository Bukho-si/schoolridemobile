import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, Switch } from 'react-native';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { useStore } from '../store';
import { Child } from '../types';

export const DriverDashboard = () => {
  const [isOnline, setIsOnline] = useState(false);
  const children = useStore(state => state.children);

  const renderPickup = ({ item }: { item: Child }) => (
    <Card style={styles.childCard}>
      <Text style={styles.childName}>{item.name}</Text>
      <Text style={styles.childDetails}>{item.address}</Text>
      <View style={styles.actions}>
        <Button title="Pick Up" onPress={() => {}} style={{ flex: 1, marginRight: 8 }} />
        <Button title="Drop Off" onPress={() => {}} variant="secondary" style={{ flex: 1, marginLeft: 8 }} />
      </View>
    </Card>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Driver Route</Text>
        <View style={styles.toggleContainer}>
          <Text style={styles.toggleText}>{isOnline ? 'Online' : 'Offline'}</Text>
          <Switch value={isOnline} onValueChange={setIsOnline} trackColor={{ false: '#767577', true: '#34C759' }} />
        </View>
      </View>

      {!isOnline ? (
        <View style={styles.offlineContainer}>
          <Text style={styles.offlineText}>Go online to see your route</Text>
        </View>
      ) : (
        <FlatList 
          data={children}
          keyExtractor={item => item.id}
          renderItem={renderPickup}
          contentContainerStyle={styles.list}
          ListEmptyComponent={<Text style={styles.emptyText}>No pickups scheduled.</Text>}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F2F2F7' },
  header: { padding: 16, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold' },
  toggleContainer: { flexDirection: 'row', alignItems: 'center' },
  toggleText: { marginRight: 8, fontSize: 16, fontWeight: '500', color: '#8E8E93' },
  offlineContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  offlineText: { fontSize: 18, color: '#8E8E93' },
  list: { padding: 16 },
  childCard: { marginBottom: 16 },
  childName: { fontSize: 18, fontWeight: 'bold', marginBottom: 4 },
  childDetails: { color: '#8E8E93', fontSize: 14, marginBottom: 12 },
  actions: { flexDirection: 'row', justifyContent: 'space-between' },
  emptyText: { textAlign: 'center', marginTop: 40, color: '#8E8E93', fontSize: 16 }
});
