import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { theme } from '../../theme';
import { Card } from '../../components/Card';
import { Bell, User, CheckCircle2, Route, AlertTriangle, ChevronRight, Activity, MapPin } from 'lucide-react-native'; // Mock icons

// Mock Data
const stats = [
  { id: '1', title: 'ACTIVE DRIVERS', value: '24', icon: <User color={theme.colors.primary} size={20} />, bg: theme.colors.surfaceContainerLow, iconBg: '#E0E7FF' },
  { id: '2', title: 'KIDS ONBOARD', value: '312', icon: <CheckCircle2 color={theme.colors.tertiary} size={20} />, bg: theme.colors.surfaceContainerLowest, iconBg: '#D1FAE5' },
  { id: '3', title: 'TRIPS TODAY', value: '48', icon: <Route color="#6B7280" size={20} />, bg: theme.colors.surfaceContainerLowest, iconBg: '#F3F4F6' },
  { id: '4', title: 'PENDING ALERTS', value: '2', icon: <AlertTriangle color="#EF4444" size={20} />, bg: '#FEF2F2', valueColor: '#EF4444', iconBg: '#FEE2E2' }
];

const recentActivity = [
  { id: '1', title: 'Child picked up', subtitle: 'Lindiwe M. • Bus 04', time: '06:35 AM', type: 'success' },
  { id: '2', title: 'Route delay', subtitle: 'Traffic on N1 • Route B', time: '07:12 AM', type: 'error' }
];

const activeDrivers = [
  { id: '1', name: 'James M.', route: 'Route A\nG-Class 44', status: 'ACTIVE' },
  { id: '2', name: 'Sarah J.', route: 'Route C\nSprinter 12', status: 'ACTIVE' },
];

export const AdminDashboard = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        
        {/* Header section */}
        <View style={styles.header}>
          <Text style={styles.greeting}>Welcome back, Admin!</Text>
          <Text style={styles.statusText}>System status is optimal. 12 buses currently in transit.</Text>
        </View>

        {/* Stats Grid */}
        <View style={styles.statsGrid}>
          {stats.map(stat => (
            <Card key={stat.id} style={[styles.statCard, { backgroundColor: stat.bg }]} variant="card">
              <View style={[styles.iconContainer, { backgroundColor: stat.iconBg }]}>
                 {stat.icon}
              </View>
              <Text style={[styles.statValue, stat.valueColor ? { color: stat.valueColor } : null]}>{stat.value}</Text>
              <Text style={styles.statTitle}>{stat.title}</Text>
            </Card>
          ))}
        </View>

        {/* Revenue Overview Placeholder */}
        <Text style={styles.sectionTitle}>Revenue Overview</Text>
        <Card style={styles.revenueCard}>
          <View style={styles.chartBarsRow}>
            {/* Simple mock bar chart */}
            {[40, 60, 50, 80, 70, 100].map((height, idx) => (
              <View key={idx} style={[styles.bar, { height: `${height}%`, backgroundColor: height === 100 ? theme.colors.primaryContainer : '#93C5FD' }]} />
            ))}
          </View>
        </Card>

        {/* Recent Activity */}
        <View style={styles.sectionHeaderRow}>
          <Text style={styles.sectionTitle}>Recent Activity</Text>
          <TouchableOpacity style={styles.viewAllBtn}>
            <Text style={styles.viewAllText}>View All</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.activityList}>
          {recentActivity.map(activity => (
            <Card key={activity.id} style={styles.activityItem} variant="section">
              <View style={styles.activityLeft}>
                <View style={[styles.activityIconWrapper, { backgroundColor: activity.type === 'success' ? theme.colors.tertiaryFixed : theme.colors.errorContainer }]}>
                  {activity.type === 'success' ? <CheckCircle2 color={theme.colors.tertiary} size={16} /> : <AlertTriangle color="#EF4444" size={16} />}
                </View>
                <View>
                  <Text style={styles.activityTitle}>{activity.title}</Text>
                  <Text style={styles.activitySubtitle}>{activity.subtitle}</Text>
                </View>
              </View>
              <Text style={styles.activityTime}>{activity.time}</Text>
            </Card>
          ))}
        </View>

        {/* Active Drivers */}
        <Text style={[styles.sectionTitle, { marginTop: theme.spacing.lg }]}>Active Drivers</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.driversScroll}>
          {activeDrivers.map(driver => (
            <Card key={driver.id} style={styles.driverCard}>
              <View style={styles.avatarPlaceholder} />
              <Text style={styles.driverName}>{driver.name}</Text>
              <Text style={styles.driverRoute}>{driver.route}</Text>
              <View style={styles.activePill}>
                <Text style={styles.activePillText}>{driver.status}</Text>
              </View>
            </Card>
          ))}
        </ScrollView>
        
        {/* Trips This Week */}
        <Text style={[styles.sectionTitle, { marginTop: theme.spacing.lg }]}>Trips This Week</Text>
        <Card style={styles.tripsCard}>
          <View style={styles.chartBarsRow}>
            {/* Simple mock bar chart for trips */}
            {[{day: 'MON', val: 40}, {day: 'TUE', val: 35}, {day: 'WED', val: 100}, {day: 'THU', val: 0}, {day: 'FRI', val: 40}, {day: 'SAT', val: 20}, {day: 'SUN', val: 15}].map((item, idx) => (
              <View key={idx} style={styles.barColumn}>
                <View style={[styles.bar, { height: `${Math.max(item.val, 10)}%`, backgroundColor: item.val === 100 ? theme.colors.primaryContainer : theme.colors.surfaceContainerLow }]} />
                <Text style={styles.barLabel}>{item.day}</Text>
              </View>
            ))}
          </View>
        </Card>

        {/* Padding for bottom nav */}
        <View style={{ height: 80 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.surface,
  },
  content: {
    padding: theme.spacing.lg,
  },
  header: {
    marginBottom: theme.spacing.xl,
  },
  greeting: {
    ...theme.typography.headlineSm,
    marginBottom: theme.spacing.sm,
  },
  statusText: {
    ...theme.typography.bodySm,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.xl,
  },
  statCard: {
    width: '48%',
    marginBottom: theme.spacing.md,
    padding: theme.spacing.lg,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },
  statValue: {
    ...theme.typography.headlineSm,
    fontFamily: theme.typography.fontFamilyBold,
    marginBottom: theme.spacing.sm,
  },
  statTitle: {
    ...theme.typography.labelMd,
    fontSize: 10,
    letterSpacing: 0.5,
  },
  sectionTitle: {
    ...theme.typography.titleMd,
    marginBottom: theme.spacing.lg,
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.lg,
  },
  viewAllBtn: {
    backgroundColor: theme.colors.surfaceContainerLow,
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.sm,
    borderRadius: theme.radius.full,
  },
  viewAllText: {
    ...theme.typography.labelMd,
    color: theme.colors.primary,
  },
  revenueCard: {
    height: 200,
    marginBottom: theme.spacing.xl,
    justifyContent: 'flex-end',
    paddingBottom: 0,
  },
  chartBarsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: '80%',
    marginHorizontal: theme.spacing.md,
  },
  bar: {
    width: '12%',
    borderTopLeftRadius: theme.radius.sm,
    borderTopRightRadius: theme.radius.sm,
  },
  activityList: {
    gap: theme.spacing.sm, // Using gap from flexbox to achieve no-line list
  },
  activityItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.md,
    borderRadius: theme.radius.lg, // slightly softer
  },
  activityLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  activityIconWrapper: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: theme.spacing.lg,
  },
  activityTitle: {
    ...theme.typography.bodySm,
    fontFamily: theme.typography.fontFamilyMedium,
    color: theme.colors.onSurface,
  },
  activitySubtitle: {
    ...theme.typography.labelMd,
    marginTop: 2,
  },
  activityTime: {
    ...theme.typography.labelMd,
  },
  driversScroll: {
    paddingBottom: theme.spacing.lg,
    gap: theme.spacing.md,
  },
  driverCard: {
    width: 140,
    alignItems: 'center',
    padding: theme.spacing.lg,
    marginRight: theme.spacing.md,
  },
  avatarPlaceholder: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: theme.colors.surfaceContainerLow,
    marginBottom: theme.spacing.md,
  },
  driverName: {
    ...theme.typography.bodySm,
    fontFamily: theme.typography.fontFamilyMedium,
    marginBottom: theme.spacing.sm,
  },
  driverRoute: {
    ...theme.typography.labelMd,
    textAlign: 'center',
    marginBottom: theme.spacing.md,
  },
  activePill: {
    backgroundColor: theme.colors.tertiaryFixed,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: 4,
    borderRadius: theme.radius.full,
  },
  activePillText: {
    ...theme.typography.labelMd,
    fontSize: 10,
    color: theme.colors.tertiary,
    fontFamily: theme.typography.fontFamilyBold,
  },
  tripsCard: {
    height: 180,
    marginBottom: theme.spacing.xl,
    paddingBottom: theme.spacing.md,
  },
  barColumn: {
    alignItems: 'center',
    width: '12%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  barLabel: {
    ...theme.typography.labelMd,
    fontSize: 10,
    marginTop: theme.spacing.sm,
  }
});
