import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import styles from './AppNavigator.styles';

// --- Types for navigation ---
export type RootStackParamList = {
  MainTabs: undefined;
  PlaceDetails: { placeId: string };
};

export type MainTabsParamList = {
  Search: undefined;
  Map: undefined;
  History: undefined;
};

// --- Placeholder Screens ---
const SearchScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Search Screen</Text>
  </View>
);
const MapScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Map Screen</Text>
  </View>
);
const HistoryScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>History Screen</Text>
  </View>
);
const PlaceDetailsScreen = ({ route }: NativeStackScreenProps<RootStackParamList, 'PlaceDetails'>) => (
  <View style={styles.container}>
    <Text style={styles.text}>Place Details for {route.params.placeId}</Text>
  </View>
);

// --- Tab Navigator ---
const Tab = createBottomTabNavigator<MainTabsParamList>();
function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="History" component={HistoryScreen} />
    </Tab.Navigator>
  );
}

// --- Root Stack Navigator ---
const Stack = createNativeStackNavigator<RootStackParamList>();
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }} />
        <Stack.Screen name="PlaceDetails" component={PlaceDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
} 