import React from 'react';
import { TextInput, View, Text, StyleSheet, TextInputProps } from 'react-native';

interface InputProps extends TextInputProps {
  label: string;
}

export const Input = ({ label, ...props }: InputProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput 
        style={styles.input}
        placeholderTextColor="#999"
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    color: '#333',
    marginBottom: 6,
    fontWeight: '500',
  },
  input: {
    borderWidth: 1,
    borderColor: '#E5E5EA',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    backgroundColor: '#FAFAFA',
  }
});
