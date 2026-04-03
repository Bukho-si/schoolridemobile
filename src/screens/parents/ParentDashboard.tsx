import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { theme } from '../../theme';
import { Card } from '../../components/Card';
import { UserPlus, ShieldCheck, MapPin, Navigation, Bell } from 'lucide-react-native';

const childrenData = [
  { id: '1', name: 'Lebo Khumalo', school: 'Bryanston Primary • Grade 5', status: 'Safe' },
  { id: '2', name: 'Thandi Khumalo', school: 'Bryanston Primary • Grade 3', status: 'Safe' }
];

export const ParentDashboard = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.greeting}>Parent Dashboard</Text>
          <Text style={styles.statusText}>Welcome, Nomsa Khumalo</Text>
        </View>

        {/* My Children */}
        <Text style={styles.sectionTitle}>My Children</Text>
        <Card style={styles.childrenCard}>
          <View style={styles.cardHeaderRow}>
             <Text style={theme.typography.labelMd}>2 enrolled</Text>
             <TouchableOpacity style={styles.addBtn}>
               <UserPlus color={'#fff'} size={14} />
               <Text style={styles.addBtnText}>Add Child</Text>
             </TouchableOpacity>
          </View>
          
          <View style={styles.listContainer}>
            {childrenData.map((child, idx) => (
              <View key={child.id} style={[styles.childItem, idx !== childrenData.length - 1 && styles.borderBottom]}>
                <View style={styles.childLeft}>
                  <View style={styles.avatarMock} />
                  <View>
                    <Text style={styles.childName}>{child.name}</Text>
                    <Text style={styles.childSchool}>{child.school}</Text>
                  </View>
                </View>
                <View style={styles.safeStatus}>
                  <View style={styles.safeDot} />
                  <Text style={styles.safeText}>{child.status}</Text>
                </View>
              </View>
            ))}
          </View>
        </Card>

        {/* Assigned Transport */}
        <Text style={styles.sectionTitle}>Driver & Vehicle Info</Text>
        <Card style={styles.driverCard}>
          <Text style={theme.typography.labelMd}>Your assigned transport</Text>
          
          <View style={styles.driverSubCard}>
            <View style={styles.driverInfoRow}>
              <View style={styles.driverAvatarMock} />
              <View>
                 <Text style={theme.typography.titleMd}>James Mokoena</Text>
                 <Text style={theme.typography.labelMd}>⭐ 4.8 • 342 trips</Text>
              </View>
            </View>
            <Text style={[theme.typography.labelMd, { marginTop: theme.spacing.md }]}>📞 +27 82 345 6789</Text>
          </View>

          <View style={styles.vehicleSubCard}>
            <View style={styles.vehicleRow}>
               <View style={styles.vehicleIconBg}>
                  <MapPin color={theme.colors.tertiary} size={20} />
               </View>
               <View>
                 <Text style={theme.typography.titleMd}>Toyota HiAce</Text>
                 <Text style={theme.typography.labelMd}>GP 234 ABC</Text>
               </View>
            </View>
            <Text style={[theme.typography.labelMd, { marginTop: theme.spacing.md }]}>White • 2023 • 14 seats</Text>
          </View>

          <TouchableOpacity style={styles.trackBtn}>
            <Navigation color={'#fff'} size={16} />
            <Text style={styles.trackBtnText}>Track Vehicle Live</Text>
          </TouchableOpacity>
        </Card>

        {/* Recent Notifications */}
        <View style={styles.sectionHeaderRow}>
          <Text style={styles.sectionTitle}>Recent Notifications</Text>
          <TouchableOpacity><Text style={{...theme.typography.labelMd, color: theme.colors.primary}}>View All {'>'}</Text></TouchableOpacity>
        </View>
        <Card style={styles.notifCard} variant="section">
           <View style={styles.notifRow}>
             <View style={styles.notifIconBg}>
               <ShieldCheck color={theme.colors.tertiary} size={16} />
             </View>
             <View>
               <Text style={theme.typography.titleMd}>Child picked up</Text>
               <Text style={theme.typography.labelMd}>Lebo boarded successfully at 06:35 AM</Text>
             </View>
           </View>
        </Card>

        <View style={{ height: 100 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.surface },
  content: { padding: theme.spacing.lg },
  header: { marginBottom: theme.spacing.xl },
  greeting: { ...theme.typography.headlineSm, marginBottom: 4 },
  statusText: { ...theme.typography.bodySm },
  
  sectionTitle: { ...theme.typography.headlineSm, fontSize: 20, marginBottom: theme.spacing.md },
  sectionHeaderRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: theme.spacing.md },
  
  childrenCard: { marginBottom: theme.spacing.xl, padding: theme.spacing.lg },
  cardHeaderRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: theme.spacing.lg },
  addBtn: { flexDirection: 'row', alignItems: 'center', backgroundColor: theme.colors.primary, paddingHorizontal: theme.spacing.md, paddingVertical: 6, borderRadius: theme.radius.full },
  addBtnText: { ...theme.typography.labelMd, color: '#fff', marginLeft: 6 },
  
  listContainer: { gap: theme.spacing.sm },
  childItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: theme.spacing.md },
  borderBottom: { borderBottomWidth: 1, borderBottomColor: theme.colors.surfaceContainerLow },
  childLeft: { flexDirection: 'row', alignItems: 'center' },
  avatarMock: { width: 40, height: 40, borderRadius: 20, backgroundColor: theme.colors.surfaceContainerLow, marginRight: theme.spacing.md },
  childName: { ...theme.typography.titleMd },
  childSchool: { ...theme.typography.labelMd },
  safeStatus: { flexDirection: 'row', alignItems: 'center', backgroundColor: theme.colors.surfaceContainerLow, paddingHorizontal: 8, paddingVertical: 4, borderRadius: theme.radius.full },
  safeDot: { width: 6, height: 6, borderRadius: 3, backgroundColor: theme.colors.tertiary, marginRight: 4 },
  safeText: { ...theme.typography.labelMd, color: theme.colors.tertiary },
  
  driverCard: { marginBottom: theme.spacing.xl, padding: theme.spacing.lg },
  driverSubCard: { backgroundColor: theme.colors.surfaceContainerLow, padding: theme.spacing.md, borderRadius: theme.radius.xl, marginTop: theme.spacing.md },
  driverInfoRow: { flexDirection: 'row', alignItems: 'center' },
  driverAvatarMock: { width: 48, height: 48, borderRadius: 24, backgroundColor: '#cbd5e1', marginRight: theme.spacing.md },
  
  vehicleSubCard: { backgroundColor: theme.colors.surfaceContainerHighest, padding: theme.spacing.md, borderRadius: theme.radius.xl, marginTop: theme.spacing.md, borderWidth: 1, borderColor: theme.colors.surfaceContainerLow },
  vehicleRow: { flexDirection: 'row', alignItems: 'center' },
  vehicleIconBg: { backgroundColor: '#D1FAE5', padding: theme.spacing.md, borderRadius: theme.radius.lg, marginRight: theme.spacing.md },
  
  trackBtn: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: theme.colors.primaryContainer, paddingVertical: theme.spacing.md, borderRadius: theme.radius.xl, marginTop: theme.spacing.lg },
  trackBtnText: { ...theme.typography.titleMd, color: '#fff', marginLeft: theme.spacing.sm },
  
  notifCard: { padding: theme.spacing.lg, borderRadius: theme.radius.lg },
  notifRow: { flexDirection: 'row', alignItems: 'center' },
  notifIconBg: { backgroundColor: theme.colors.surfaceContainerLowest, padding: theme.spacing.sm, borderRadius: theme.radius.full, marginRight: theme.spacing.md }
});
