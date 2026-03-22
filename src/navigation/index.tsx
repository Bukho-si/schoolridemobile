import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RoleSelectionScreen } from '../screens/RoleSelectionScreen';
import { AdminDashboard } from '../admin/AdminDashboard';
import { SchoolDashboard } from '../school/SchoolDashboard';
import { ParentDashboard } from '../parent/ParentDashboard';
import { AddChildScreen } from '../parent/AddChildScreen';
import { DriverDashboard } from '../driver/DriverDashboard';
import { FuelTrackerScreen } from '../driver/FuelTrackerScreen';
import { PaymentTrackerScreen } from '../driver/PaymentTrackerScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// --- Role Tab Navigators ---

const AdminApp = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen name="AdminDash" component={AdminDashboard} options={{ title: 'Dashboard' }} />
  </Tab.Navigator>
);

const SchoolApp = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen name="SchoolDash" component={SchoolDashboard} options={{ title: 'Management' }} />
  </Tab.Navigator>
);

const DriverApp = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen name="Route" component={DriverDashboard} />
    <Tab.Screen name="Fuel" component={FuelTrackerScreen} />
    <Tab.Screen name="Payments" component={PaymentTrackerScreen} />
  </Tab.Navigator>
);

// Parent uses a stack inside its tab, or just plain stack since Add Child needs to go over the tabs.
const ParentDashStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="ParentHome" component={ParentDashboard} />
    <Stack.Screen name="AddChild" component={AddChildScreen} options={{ presentation: 'modal' }} />
  </Stack.Navigator>
);

const ParentApp = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen name="ParentDash" component={ParentDashStack} options={{ title: 'Home' }} />
  </Tab.Navigator>
);

// --- Root Navigator ---

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="RoleSelection">
        <Stack.Screen name="RoleSelection" component={RoleSelectionScreen} />
        <Stack.Screen name="AdminApp" component={AdminApp} />
        <Stack.Screen name="SchoolApp" component={SchoolApp} />
        <Stack.Screen name="DriverApp" component={DriverApp} />
        <Stack.Screen name="ParentApp" component={ParentApp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
