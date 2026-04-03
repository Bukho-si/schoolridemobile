import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, Switch, TouchableOpacity } from 'react-native';
import { theme } from '../../theme';
import { Card } from '../../components/Card';
import { Navigation, Users, MapPin, Truck, Fuel, DollarSign, CheckCircle2, AlertCircle } from 'lucide-react-native';

export const DriverDashboard = () => {
  const [isOnline, setIsOnline] = React.useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.greeting}>Driver Dashboard</Text>
          <Text style={styles.statusText}>Welcome, James Mokoena</Text>
        </View>

        {/* Status Toggle */}
        <Card style={styles.statusCard}>
          <View style={styles.statusLeft}>
            <View style={[styles.iconWrapper, { backgroundColor: isOnline ? theme.colors.tertiaryFixed : theme.colors.surfaceContainerLow }]}>
              <Navigation color={isOnline ? theme.colors.tertiary : theme.colors.secondary} size={20} />
            </View>
            <View>
              <Text style={styles.statusTitle}>Driver Status</Text>
              <Text style={styles.statusSubtitle}>{isOnline ? 'You are currently online and accepting trips' : 'You are offline'}</Text>
            </View>
          </View>
          <Switch
            trackColor={{ false: theme.colors.secondary, true: theme.colors.tertiary }}
            thumbColor={'#fff'}
            onValueChange={setIsOnline}
            value={isOnline}
          />
        </Card>

        {/* Stats Row */}
        <View style={styles.statsRow}>
          <Card style={[styles.statBox, { width: '48%' }]}>
            <View style={styles.boxHeaderRow}>
              <Navigation color={theme.colors.primary} size={16} />
              <Text style={styles.boxLabel}>ASSIGNED ROUTE</Text>
            </View>
            <Text style={styles.boxMainValue}>Sandton to{'\n'}Bryanston</Text>
            <Text style={styles.boxSubValue}>18 km • 35 min</Text>
          </Card>
          <Card style={[styles.statBox, { width: '48%' }]}>
            <View style={styles.boxHeaderRow}>
              <Users color={theme.colors.primary} size={16} />
              <Text style={styles.boxLabel}>TOTAL CHILDREN</Text>
            </View>
            <Text style={[styles.boxMainValue, { fontSize: 32 }]}>4</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <CheckCircle2 color={theme.colors.tertiary} size={14} />
              <Text style={[styles.boxSubValue, { color: theme.colors.tertiary, marginLeft: 4 }]}>All accounted for</Text>
            </View>
          </Card>
        </View>

        <View style={styles.statsRow}>
          <Card style={[styles.statBox, { width: '48%' }]}>
            <View style={styles.boxHeaderRow}>
              <MapPin color={'#F59E0B'} size={16} />
              <Text style={styles.boxLabel}>DISTANCE TO PICKUP</Text>
            </View>
            <Text style={[styles.boxMainValue, { fontSize: 24 }]}>0.0 km</Text>
            <Text style={styles.boxSubValue}>Next: Lebo Khumalo</Text>
          </Card>
          <Card style={[styles.statBox, { width: '48%' }]}>
            <View style={styles.boxHeaderRow}>
              <Truck color={'#8B5CF6'} size={16} />
              <Text style={styles.boxLabel}>MY VEHICLE</Text>
            </View>
            <Text style={[styles.boxMainValue, { fontSize: 18 }]}>Toyota HiAce</Text>
            <Text style={styles.boxSubValue}>GP 234 ABC</Text>
          </Card>
        </View>

        {/* Fuel Tracker */}
        <Card style={styles.fullWidthCard}>
          <View style={styles.cardHeaderWithBtn}>
             <Text style={styles.sectionTitle}>Fuel Tracker</Text>
             <TouchableOpacity style={styles.actionBtn}>
               <Text style={styles.actionBtnText}>+ Add Fuel Entry</Text>
             </TouchableOpacity>
          </View>
          <View style={styles.fuelStatusRow}>
            <Fuel color={theme.colors.tertiary} size={24} />
            <View style={{ marginLeft: theme.spacing.md }}>
              <Text style={theme.typography.titleMd}>46L in tank</Text>
              <Text style={theme.typography.labelMd}>57% full for Toyota HiAce</Text>
            </View>
          </View>
          {/* Progress Bar Mock */}
          <View style={styles.progressBarBg}>
            <View style={[styles.progressBarFill, { width: '57%' }]} />
          </View>
        </Card>

        {/* Payment Tracker */}
        <Card style={styles.fullWidthCard}>
          <View style={styles.cardHeaderWithBtn}>
             <Text style={styles.sectionTitle}>Parent Payment Tracker</Text>
             <TouchableOpacity style={styles.actionBtn}>
               <Text style={styles.actionBtnText}>+ Record Payment</Text>
             </TouchableOpacity>
          </View>
          <View style={styles.paymentPillsRow}>
            <View style={[styles.paymentPill, { backgroundColor: '#D1FAE5' }]}>
               <Text style={[styles.pillLabel, { color: '#047857' }]}>COLLECTED</Text>
               <Text style={[styles.pillVal, { color: '#047857' }]}>R3500</Text>
            </View>
            <View style={[styles.paymentPill, { backgroundColor: '#DBEAFE' }]}>
               <Text style={[styles.pillLabel, { color: '#1D4ED8' }]}>PENDING</Text>
               <Text style={[styles.pillVal, { color: '#1D4ED8' }]}>R1800</Text>
            </View>
            <View style={[styles.paymentPill, { backgroundColor: '#FEF3C7' }]}>
               <Text style={[styles.pillLabel, { color: '#D97706' }]}>OUTSTANDING</Text>
               <Text style={[styles.pillVal, { color: '#D97706' }]}>R3400</Text>
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
  
  statusCard: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: theme.spacing.lg },
  statusLeft: { flexDirection: 'row', alignItems: 'center', flexShrink: 1 },
  iconWrapper: { padding: theme.spacing.md, borderRadius: theme.radius.full, marginRight: theme.spacing.md },
  statusTitle: { ...theme.typography.titleMd },
  statusSubtitle: { ...theme.typography.labelMd, marginTop: 2, paddingRight: theme.spacing.sm },
  
  statsRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: theme.spacing.md },
  statBox: { padding: theme.spacing.lg },
  boxHeaderRow: { flexDirection: 'row', alignItems: 'center', marginBottom: theme.spacing.md },
  boxLabel: { ...theme.typography.labelMd, fontSize: 10, marginLeft: theme.spacing.sm, letterSpacing: 0.5 },
  boxMainValue: { ...theme.typography.titleMd, marginBottom: theme.spacing.sm },
  boxSubValue: { ...theme.typography.labelMd },
  
  fullWidthCard: { marginBottom: theme.spacing.lg, padding: theme.spacing.lg },
  cardHeaderWithBtn: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: theme.spacing.lg },
  sectionTitle: { ...theme.typography.titleMd },
  actionBtn: { backgroundColor: theme.colors.surfaceContainerLow, paddingHorizontal: theme.spacing.md, paddingVertical: 6, borderRadius: theme.radius.full },
  actionBtnText: { ...theme.typography.labelMd, color: theme.colors.primary },
  
  fuelStatusRow: { flexDirection: 'row', alignItems: 'center', marginBottom: theme.spacing.lg },
  progressBarBg: { height: 8, backgroundColor: theme.colors.surfaceContainerLow, borderRadius: 4 },
  progressBarFill: { height: '100%', backgroundColor: theme.colors.tertiary, borderRadius: 4 },
  
  paymentPillsRow: { flexDirection: 'row', justifyContent: 'space-between' },
  paymentPill: { width: '31%', padding: theme.spacing.md, borderRadius: theme.radius.md },
  pillLabel: { ...theme.typography.labelMd, fontSize: 9, letterSpacing: 0.5, marginBottom: 4 },
  pillVal: { ...theme.typography.titleMd }
});
