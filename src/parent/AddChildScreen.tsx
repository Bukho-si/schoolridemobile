import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { useStore } from '../store';
import { Child } from '../types';

export const AddChildScreen = ({ navigation }: any) => {
  const addChild = useStore(state => state.addChild);
  const classes = useStore(state => state.classes);
  
  const [formData, setFormData] = useState<Partial<Child>>({
    name: '',
    school: '',
    grade: '',
    className: '',
    address: '',
    pickupTime: '07:00 AM'
  });

  const handleSave = () => {
    if (formData.name && formData.school) {
      addChild({
        id: Date.now().toString(),
        name: formData.name,
        school: formData.school,
        grade: formData.grade || '',
        className: formData.className || '',
        address: formData.address || '',
        pickupTime: formData.pickupTime || '07:00 AM'
      });
      navigation.goBack();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Add Child</Text>
        <Text style={styles.subtitle}>Enter your child's information for school transport.</Text>

        <Input label="Full Name" placeholder="e.g. John Doe" value={formData.name} onChangeText={t => setFormData({...formData, name: t})} />
        <Input label="School Name" placeholder="e.g. Springfield High" value={formData.school} onChangeText={t => setFormData({...formData, school: t})} />
        <Input label="Grade" placeholder="e.g. 8" value={formData.grade} onChangeText={t => setFormData({...formData, grade: t})} />
        <Input label="Class" placeholder="e.g. 8A" value={formData.className} onChangeText={t => setFormData({...formData, className: t})} />
        <Input label="Home Address (Pickup Location)" placeholder="123 Main St" value={formData.address} onChangeText={t => setFormData({...formData, address: t})} />
        <Input label="Preferred Pickup Time" placeholder="07:00 AM" value={formData.pickupTime} onChangeText={t => setFormData({...formData, pickupTime: t})} />

        <Button title="Save Child" onPress={handleSave} style={styles.saveBtn} />
        <Button title="Cancel" variant="secondary" onPress={() => navigation.goBack()} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F2F2F7' },
  content: { padding: 24 },
  title: { fontSize: 32, fontWeight: 'bold', marginBottom: 8 },
  subtitle: { fontSize: 16, color: '#8E8E93', marginBottom: 24 },
  saveBtn: { marginTop: 16 }
});
