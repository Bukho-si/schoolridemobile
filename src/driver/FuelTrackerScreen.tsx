import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, Modal } from 'react-native';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { useStore } from '../store';
import { FuelLog } from '../types';

export const FuelTrackerScreen = () => {
  const { fuelLogs, addFuelLog } = useStore();
  const [modalVisible, setModalVisible] = useState(false);
  const [form, setForm] = useState<Partial<FuelLog>>({ litres: '', cost: '', date: new Date().toISOString().split('T')[0] });

  const handleSave = () => {
    if (form.litres && form.cost) {
      addFuelLog({
        id: Date.now().toString(),
        litres: form.litres,
        cost: form.cost,
        date: form.date || new Date().toISOString().split('T')[0]
      });
      setModalVisible(false);
      setForm({ litres: '', cost: '', date: new Date().toISOString().split('T')[0] });
    }
  };

  const renderLog = ({ item }: { item: FuelLog }) => (
    <Card style={styles.logCard}>
      <View style={styles.logInfo}>
        <Text style={styles.logMain}>{item.litres}L - ${item.cost}</Text>
        <Text style={styles.logDate}>{item.date}</Text>
      </View>
    </Card>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Fuel Tracker</Text>
        <Button title="+ Add Fuel" onPress={() => setModalVisible(true)} />
      </View>

      <FlatList 
        data={fuelLogs}
        keyExtractor={item => item.id}
        renderItem={renderLog}
        contentContainerStyle={styles.list}
      />

      <Modal visible={modalVisible} animationType="slide" presentationStyle="pageSheet">
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Add Fuel Entry</Text>
          <Input label="Litres" placeholder="0.0" keyboardType="numeric" value={form.litres} onChangeText={t => setForm({...form, litres: t})} />
          <Input label="Cost" placeholder="0.00" keyboardType="numeric" value={form.cost} onChangeText={t => setForm({...form, cost: t})} />
          <Input label="Date" placeholder="YYYY-MM-DD" value={form.date} onChangeText={t => setForm({...form, date: t})} />
          
          <Button title="Save Entry" onPress={handleSave} style={{ marginTop: 24 }} />
          <Button title="Cancel" variant="secondary" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F2F2F7' },
  header: { padding: 16, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold' },
  list: { padding: 16 },
  logCard: { marginBottom: 12 },
  logInfo: { flexDirection: 'row', justifyContent: 'space-between' },
  logMain: { fontSize: 18, fontWeight: 'bold' },
  logDate: { color: '#8E8E93', fontSize: 16 },
  modalContent: { flex: 1, padding: 24, backgroundColor: 'white' },
  modalTitle: { fontSize: 24, fontWeight: 'bold', marginBottom: 24 }
});
