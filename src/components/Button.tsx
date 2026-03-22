import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
  variant?: 'primary' | 'secondary' | 'danger';
}

export const Button = ({ title, onPress, style, variant = 'primary' }: ButtonProps) => {
  return (
    <TouchableOpacity 
      style={[
        styles.button, 
        variant === 'primary' && styles.primary,
        variant === 'secondary' && styles.secondary,
        variant === 'danger' && styles.danger,
        style
      ]} 
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={[
        styles.text,
        variant === 'secondary' && styles.secondaryText
      ]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 6,
  },
  primary: {
    backgroundColor: '#007AFF',
  },
  secondary: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#007AFF',
  },
  danger: {
    backgroundColor: '#FF3B30',
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryText: {
    color: '#007AFF',
  }
});
