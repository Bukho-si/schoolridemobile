import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { useStore } from '../store';
import { Payment } from '../types';

export const PaymentTrackerScreen = () => {
  const { payments, updatePaymentStatus } = useStore();

  const handleMarkPaid = (id: string) => {
    updatePaymentStatus(id, 'paid');
  };

  const renderPayment = ({ item }: { item: Payment }) => (
    <Card style={styles.paymentCard}>
      <View style={styles.paymentInfo}>
        <Text style={styles.parentName}>{item.parentName}</Text>
        <Text style={styles.amount}>${item.amount}</Text>
      </View>
      <View style={styles.statusRow}>
        <View style={[styles.statusBadge, item.status === 'paid' ? styles.badgeSuccess : styles.badgeWarning]}>
          <Text style={[styles.statusText, item.status === 'paid' ? styles.textSuccess : styles.textWarning]}>
            {item.status.toUpperCase()}
          </Text>
        </View>
        {item.status !== 'paid' && (
          <Button title="Mark Paid" onPress={() => handleMarkPaid(item.id)} style={styles.actionBtn} />
        )}
      </View>
    </Card>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Payment Tracker</Text>
      </View>

      <FlatList 
        data={payments}
        keyExtractor={item => item.id}
        renderItem={renderPayment}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F2F2F7' },
  header: { padding: 16, backgroundColor: 'white' },
  title: { fontSize: 24, fontWeight: 'bold' },
  list: { padding: 16 },
  paymentCard: { marginBottom: 16 },
  paymentInfo: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 },
  parentName: { fontSize: 18, fontWeight: 'bold' },
  amount: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  statusRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  statusBadge: { paddingHorizontal: 12, paddingVertical: 6, borderRadius: 16 },
  badgeSuccess: { backgroundColor: '#E5F9E7' },
  badgeWarning: { backgroundColor: '#FFF4E5' },
  statusText: { fontSize: 12, fontWeight: 'bold' },
  textSuccess: { color: '#34C759' },
  textWarning: { color: '#FF9500' },
  actionBtn: { paddingVertical: 8, paddingHorizontal: 16 }
});
