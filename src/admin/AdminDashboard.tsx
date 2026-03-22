import React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { Card } from '../components/Card';
import MapView, { Marker } from 'react-native-maps';

export const AdminDashboard = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Admin Dashboard</Text>
      </View>
      <View style={styles.mapContainer}>
        <MapView 
          style={styles.map}
          initialRegion={{
            latitude: -26.2041,
            longitude: 28.0473,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker coordinate={{ latitude: -26.2041, longitude: 28.0473 }} title="Vehicle 1" />
        </MapView>
      </View>
      <View style={styles.statsContainer}>
        <Card style={styles.statCard}>
          <Text style={styles.statLabel}>Total Vehicles</Text>
          <Text style={styles.statValue}>24</Text>
        </Card>
        <Card style={styles.statCard}>
          <Text style={styles.statLabel}>Active Routes</Text>
          <Text style={styles.statValue}>12</Text>
        </Card>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F2F2F7' },
  header: { padding: 16, backgroundColor: 'white' },
  title: { fontSize: 24, fontWeight: 'bold' },
  mapContainer: { height: 300, margin: 16, borderRadius: 12, overflow: 'hidden' },
  map: { flex: 1 },
  statsContainer: { flexDirection: 'row', padding: 16, gap: 16 },
  statCard: { flex: 1, alignItems: 'center' },
  statLabel: { fontSize: 14, color: '#8E8E93', marginBottom: 8 },
  statValue: { fontSize: 24, fontWeight: 'bold', color: '#007AFF' }
});
