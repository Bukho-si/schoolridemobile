import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BlurView } from 'expo-blur';
import { useFonts, Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { LayoutDashboard, Users, Bus, Menu } from 'lucide-react-native';
import { theme } from './src/theme';

// Import our screens
import { AdminDashboard } from './src/screens/admin/AdminDashboard';
import { PaymentSettings } from './src/screens/parents/PaymentSettings';

// Placeholder screen for missing tabs
const PlaceholderScreen = ({ name }: { name: string }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: theme.colors.surface }}>
    <Text style={theme.typography.headlineSm}>{name}</Text>
  </View>
);

const Tab = createBottomTabNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return null; // or a Splash Screen
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: styles.tabBar,
          tabBarBackground: () => (
            Platform.OS === 'ios' ? (
              <BlurView tint="light" intensity={80} style={StyleSheet.absoluteFill} />
            ) : (
              <View style={[StyleSheet.absoluteFill, { backgroundColor: theme.colors.surfaceContainerHighest }]} />
            )
          ),
          tabBarActiveTintColor: theme.colors.primary,
          tabBarInactiveTintColor: theme.colors.secondary,
          tabBarLabelStyle: {
            ...theme.typography.labelMd,
            fontSize: 10,
          },
        }}
      >
        <Tab.Screen 
          name="Dashboard" 
          component={AdminDashboard} 
          options={{
            tabBarIcon: ({ color }) => <LayoutDashboard color={color} size={24} />,
          }}
        />
        <Tab.Screen 
          name="Vehicles" 
          component={() => <PlaceholderScreen name="Vehicles" />} 
          options={{
            tabBarIcon: ({ color }) => <Bus color={color} size={24} />,
          }}
        />
        <Tab.Screen 
          name="Kids" 
          component={() => <PlaceholderScreen name="Kids" />} 
          options={{
            tabBarIcon: ({ color }) => <Users color={color} size={24} />,
          }}
        />
        {/* We reuse PaymentSettings here purely for demo purposes of the parent setting until a real menu is made */}
        <Tab.Screen 
          name="More" 
          component={PaymentSettings} 
          options={{
            tabBarIcon: ({ color }) => <Menu color={color} size={24} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    borderTopWidth: 0,
    elevation: 0,
    height: 85,
    paddingBottom: 20,
    paddingTop: 10,
    backgroundColor: Platform.OS === 'ios' ? 'transparent' : theme.colors.surfaceContainerHighest,
  }
});
