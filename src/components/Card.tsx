import React from 'react';
import { View, ViewProps, StyleSheet } from 'react-native';
import { theme } from '../theme';

interface CardProps extends ViewProps {
  children: React.ReactNode;
  variant?: 'base' | 'section' | 'card';
  style?: any;
}

export const Card: React.FC<CardProps> = ({ children, variant = 'card', style, ...props }) => {
  const getBackgroundColor = () => {
    switch (variant) {
      case 'base': return theme.colors.surface;
      case 'section': return theme.colors.surfaceContainerLow;
      case 'card': return theme.colors.surfaceContainerLowest;
      default: return theme.colors.surfaceContainerLowest;
    }
  };

  return (
    <View 
      style={[
        styles.container, 
        { backgroundColor: getBackgroundColor() },
        variant === 'card' ? styles.cardShadow : {},
        style
      ]} 
      {...props}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: theme.radius.xl,
    padding: theme.spacing.lg,
  },
  cardShadow: {
    shadowColor: theme.shadows.ambient.shadowColor,
    shadowOffset: theme.shadows.ambient.shadowOffset,
    shadowOpacity: theme.shadows.ambient.shadowOpacity,
    shadowRadius: theme.shadows.ambient.shadowRadius,
    elevation: theme.shadows.ambient.elevation,
  }
});
