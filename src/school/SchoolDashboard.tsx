import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, Modal } from 'react-native';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { useStore } from '../store';
import { SchoolClass } from '../types';

export const SchoolDashboard = () => {
  const { classes, addClass, deleteClass } = useStore();
  const [modalVisible, setModalVisible] = useState(false);
  const [newClass, setNewClass] = useState<Partial<SchoolClass>>({});

  const handleAddClass = () => {
    if (newClass.grade && newClass.name) {
      addClass({
        id: Date.now().toString(),
        grade: newClass.grade,
        name: newClass.name,
        teacher: newClass.teacher || '',
        room: newClass.room || '',
        learnerCount: Number(newClass.learnerCount) || 0
      });
      setModalVisible(false);
      setNewClass({});
    }
  };

  const renderClass = ({ item }: { item: SchoolClass }) => (
    <Card style={styles.classCard}>
      <View style={styles.classInfo}>
        <Text style={styles.className}>Grade {item.grade} - {item.name}</Text>
        <Text style={styles.classDetails}>Teacher: {item.teacher} | Room: {item.room}</Text>
        <Text style={styles.classDetails}>Students: {item.learnerCount}</Text>
      </View>
      <Button title="Delete" variant="danger" onPress={() => deleteClass(item.id)} style={styles.deleteBtn} />
    </Card>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>School Dashboard</Text>
        <Button title="+ Add Class" onPress={() => setModalVisible(true)} />
      </View>

      <Text style={styles.sectionTitle}>Class Management</Text>
      <FlatList 
        data={classes}
        keyExtractor={item => item.id}
        renderItem={renderClass}
        contentContainerStyle={styles.list}
      />

      <Modal visible={modalVisible} animationType="slide" presentationStyle="pageSheet">
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Add New Class</Text>
          <Input label="Grade" placeholder="e.g. 8" value={newClass.grade} onChangeText={t => setNewClass({...newClass, grade: t})} />
          <Input label="Class Name" placeholder="e.g. 8A" value={newClass.name} onChangeText={t => setNewClass({...newClass, name: t})} />
          <Input label="Teacher" placeholder="Teacher Name" value={newClass.teacher} onChangeText={t => setNewClass({...newClass, teacher: t})} />
          <Input label="Room" placeholder="Room Number" value={newClass.room} onChangeText={t => setNewClass({...newClass, room: t})} />
          <Input label="Learner Count" placeholder="30" keyboardType="numeric" value={newClass.learnerCount?.toString()} onChangeText={t => setNewClass({...newClass, learnerCount: Number(t)})} />
          <Button title="Save Class" onPress={handleAddClass} />
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
  sectionTitle: { padding: 16, fontSize: 18, fontWeight: '600', color: '#8E8E93' },
  list: { padding: 16 },
  classCard: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  classInfo: { flex: 1 },
  className: { fontSize: 18, fontWeight: 'bold', marginBottom: 4 },
  classDetails: { color: '#8E8E93', fontSize: 14 },
  deleteBtn: { paddingVertical: 8, paddingHorizontal: 16 },
  modalContent: { flex: 1, padding: 24, backgroundColor: 'white' },
  modalTitle: { fontSize: 24, fontWeight: 'bold', marginBottom: 24 }
});
