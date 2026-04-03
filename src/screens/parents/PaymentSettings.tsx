import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { theme } from '../../theme';
import { Card } from '../../components/Card';
import { ArrowLeft, Download, CreditCard, Clock, MoreVertical } from 'lucide-react-native'; // Assuming lucide is used for icons

export const PaymentSettings = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <ArrowLeft color={theme.colors.primary} size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Payment Settings</Text>
        <View style={{ width: 24 }} /> {/* Spacer */}
      </View>

      {/* Upcoming Payment Card */}
      <Card variant="section" style={styles.upcomingCard}>
        <Text style={styles.label}>UPCOMING PAYMENT</Text>
        <View style={styles.amountRow}>
          <Text style={styles.amountText}>R850.00</Text>
          <View style={styles.dueContainer}>
            <Text style={styles.dueText}>Due</Text>
            <Text style={styles.dueDateText}>March 1,{'\n'}2024</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.payEarlyButton}>
          <Text style={styles.payEarlyButtonText}>Pay Early</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.detailedStatementButton}>
          <Clock color={theme.colors.onSurface} size={16} />
          <Text style={styles.detailedStatementText}>View Detailed Statement</Text>
        </TouchableOpacity>
      </Card>

      {/* Add more sections like Auto-Pay Active, Payment Methods, Recent Activity... */}
      <Card variant="card" style={[styles.autoPayCard, { backgroundColor: theme.colors.tertiary }]}>
         {/* Implement Auto pay card */}
      </Card>

    </ScrollView>
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.xl,
  },
  backButton: {
    padding: theme.spacing.sm,
  },
  headerTitle: {
    ...theme.typography.headlineSm,
  },
  upcomingCard: {
    marginBottom: theme.spacing.xl,
  },
  label: {
    ...theme.typography.labelMd,
    marginBottom: theme.spacing.md,
  },
  amountRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.xl,
  },
  amountText: {
    ...theme.typography.displayLg,
    marginRight: theme.spacing.md,
  },
  dueContainer: {
    justifyContent: 'center',
  },
  dueText: {
    ...theme.typography.bodySm,
  },
  dueDateText: {
    ...theme.typography.bodySm,
  },
  payEarlyButton: {
    backgroundColor: theme.colors.primary, // Could implement gradient here
    paddingVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.xl,
    borderRadius: theme.radius.full,
    alignItems: 'center',
    marginBottom: theme.spacing.md,
    alignSelf: 'flex-start',
  },
  payEarlyButtonText: {
    ...theme.typography.bodySm,
    fontFamily: theme.typography.fontFamilyBold,
    color: '#ffffff',
  },
  detailedStatementButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.surfaceContainerLowest,
    paddingVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.lg,
    borderRadius: theme.radius.full,
    alignSelf: 'flex-start',
  },
  detailedStatementText: {
    ...theme.typography.bodySm,
    fontFamily: theme.typography.fontFamilyMedium,
    marginLeft: theme.spacing.sm,
  },
  autoPayCard: {
    padding: theme.spacing.lg,
    borderRadius: theme.radius.xl,
  }
});
