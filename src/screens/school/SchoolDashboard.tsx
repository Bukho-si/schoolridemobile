import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { theme } from '../../theme';
import { Card } from '../../components/Card';
import { Settings, Users, GraduationCap, Bus, FileText, AlertTriangle, Calendar } from 'lucide-react-native';

const bellTimes = [
  { grade: 'Grade R', time: '12:30' },
  { grade: 'Grade 1', time: '13:00' },
  { grade: 'Grade 2', time: '13:00' },
  { grade: 'Grade 3', time: '13:30' },
];

export const SchoolDashboard = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.greeting}>School Dashboard</Text>
          <Text style={styles.statusText}>Bryanston Primary - 90 Bryanston Dr, Bryanston</Text>
        </View>

        {/* Academic Setup Banner */}
        <Card style={styles.bannerCard} variant="section">
          <View style={styles.bannerContent}>
            <View style={{ flex: 1 }}>
              <Text style={theme.typography.titleMd}>Academic Setup</Text>
              <Text style={[theme.typography.labelMd, { marginTop: 4, marginBottom: theme.spacing.md }]}>Manage Grades 8 to 12, add more classes, and assign class teachers.</Text>
              <TouchableOpacity style={styles.openSettingsBtn}>
                <Settings color={'#fff'} size={14} />
                <Text style={styles.openSettingsText}>Open Settings</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.bannerIconWrapper}>
              <GraduationCap color={theme.colors.primary} size={48} opacity={0.2} />
            </View>
          </View>
        </Card>

        {/* Stats Grid */}
        <View style={styles.statsGrid}>
          <Card style={styles.statCard}>
             <View style={styles.iconRow}>
                <Users color={theme.colors.tertiary} size={20} />
                <Text style={styles.statLabel}>PARENTS REGISTERED</Text>
             </View>
             <Text style={styles.statValue}>2</Text>
             <Text style={[styles.statDetail, { color: theme.colors.tertiary }]}>Active families</Text>
          </Card>
          <Card style={styles.statCard}>
             <View style={styles.iconRow}>
                <GraduationCap color={theme.colors.primary} size={20} />
                <Text style={styles.statLabel}>STUDENTS REGISTERED</Text>
             </View>
             <Text style={styles.statValue}>4</Text>
             <Text style={[styles.statDetail, { color: theme.colors.primary }]}>13 grades</Text>
          </Card>
          <Card style={styles.statCard}>
             <View style={styles.iconRow}>
                <Bus color={'#D97706'} size={20} />
                <Text style={styles.statLabel}>ASSOCIATED DRIVERS</Text>
             </View>
             <Text style={styles.statValue}>1</Text>
             <Text style={[styles.statDetail, { color: '#D97706' }]}>School verified</Text>
          </Card>
          <Card style={styles.statCard}>
             <View style={styles.iconRow}>
                <FileText color={'#8B5CF6'} size={20} />
                <Text style={styles.statLabel}>TRANSPORT REQUESTS</Text>
             </View>
             <Text style={styles.statValue}>1</Text>
             <Text style={styles.statDetail}>0 pending</Text>
          </Card>
        </View>

        {/* Bottom Section Row */}
        <View style={styles.bottomSections}>
          {/* Grade Bell Times */}
          <Card style={styles.bellCard} variant="card">
            <Text style={theme.typography.titleMd}>Grade Bell Times</Text>
            <Text style={[theme.typography.labelMd, { marginBottom: theme.spacing.lg }]}>Dismissal schedule by grade</Text>
            
            <View style={styles.bellList}>
              {bellTimes.map((item, idx) => (
                <View key={idx} style={styles.bellRow}>
                  <Text style={theme.typography.bodySm}>{item.grade}</Text>
                  <Text style={[theme.typography.titleMd, { fontSize: 14 }]}>{item.time}</Text>
                </View>
              ))}
            </View>
          </Card>

          {/* Announcements */}
          <Card style={styles.announcementCard} variant="card">
             <Text style={theme.typography.titleMd}>Announcements</Text>
             <Text style={[theme.typography.labelMd, { marginBottom: theme.spacing.lg }]}>3 announcements</Text>

             <View style={styles.announcementItem}>
               <View style={styles.announcementIconBg}>
                 <AlertTriangle color={'#D97706'} size={16} />
               </View>
               <View style={{ flex: 1, marginLeft: theme.spacing.sm }}>
                 <Text style={theme.typography.titleMd}>Early closing today</Text>
                 <Text style={[theme.typography.labelMd, { marginTop: 2 }]}>All grades dismiss at 13:00 due to staff training.</Text>
                 <Text style={[theme.typography.labelMd, { fontSize: 10, marginTop: 4, color: theme.colors.secondary }]}>11 Mar</Text>
               </View>
             </View>
             
             <View style={[styles.announcementItem, { marginTop: theme.spacing.lg }]}>
               <View style={[styles.announcementIconBg, { backgroundColor: theme.colors.surfaceContainerLow }]}>
                 <Calendar color={theme.colors.primary} size={16} />
               </View>
               <View style={{ flex: 1, marginLeft: theme.spacing.sm }}>
                 <Text style={theme.typography.titleMd}>Sports Day Friday</Text>
                 <Text style={[theme.typography.labelMd, { marginTop: 2 }]}>Reminder: Annual sports day this Friday...</Text>
                 <Text style={[theme.typography.labelMd, { fontSize: 10, marginTop: 4, color: theme.colors.secondary }]}>10 Mar</Text>
               </View>
             </View>
          </Card>
        </View>

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
  
  bannerCard: { marginBottom: theme.spacing.lg },
  bannerContent: { flexDirection: 'row', alignItems: 'center' },
  openSettingsBtn: { flexDirection: 'row', alignItems: 'center', backgroundColor: theme.colors.primaryContainer, alignSelf: 'flex-start', paddingHorizontal: theme.spacing.md, paddingVertical: 8, borderRadius: theme.radius.full },
  openSettingsText: { ...theme.typography.labelMd, color: '#fff', marginLeft: 6 },
  bannerIconWrapper: { marginLeft: theme.spacing.md },
  
  statsGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginBottom: theme.spacing.lg },
  statCard: { width: '48%', marginBottom: theme.spacing.md, padding: theme.spacing.lg },
  iconRow: { flexDirection: 'row', alignItems: 'center', marginBottom: theme.spacing.md },
  statLabel: { ...theme.typography.labelMd, fontSize: 8, marginLeft: theme.spacing.sm, flexShrink: 1 },
  statValue: { ...theme.typography.displayLg, fontSize: 32, marginBottom: 4 },
  statDetail: { ...theme.typography.labelMd, fontSize: 10 },
  
  bottomSections: { flexDirection: 'column', gap: theme.spacing.lg },
  bellCard: { padding: theme.spacing.lg },
  bellList: { gap: theme.spacing.md },
  bellRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: theme.colors.surfaceContainerLow, paddingBottom: theme.spacing.sm },
  
  announcementCard: { padding: theme.spacing.lg },
  announcementItem: { flexDirection: 'row', alignItems: 'flex-start' },
  announcementIconBg: { backgroundColor: '#FEF3C7', padding: theme.spacing.sm, borderRadius: theme.radius.lg }
});
