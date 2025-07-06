import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import { CustomHeader } from '../../shared/components';
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

// --- Placeholder Screens with CustomHeader ---
const SearchScreen = () => (
  <View style={styles.container}>
    <CustomHeader title="Search Places" showBack={false} />
    <View style={styles.content}>
      <Text style={styles.text}>Search Screen</Text>
    </View>
  </View>
);

const MapScreen = () => (
  <View style={styles.container}>
    <CustomHeader title="Map View" showBack={false} />
    <View style={styles.content}>
      <Text style={styles.text}>Map Screen</Text>
    </View>
  </View>
);

const HistoryScreen = () => (
  <View style={styles.container}>
    <CustomHeader title="Search History" showBack={false} />
    <View style={styles.content}>
      <Text style={styles.text}>History Screen</Text>
    </View>
  </View>
);

const PlaceDetailsScreen = ({ route }: NativeStackScreenProps<RootStackParamList, 'PlaceDetails'>) => (
  <View style={styles.container}>
    <CustomHeader title="Place Details" showBack={true} />
    <View style={styles.content}>
      <Text style={styles.text}>Place Details for {route.params.placeId}</Text>
    </View>
  </View>
);

// --- Tab Navigator ---
const Tab = createBottomTabNavigator<MainTabsParamList>();
function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false, // Hide default headers since we're using CustomHeader
      }}
    >
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
      <Stack.Navigator
        screenOptions={{
          headerShown: false, // Hide default headers since we're using CustomHeader
        }}
      >
        <Stack.Screen name="MainTabs" component={MainTabs} />
        <Stack.Screen name="PlaceDetails" component={PlaceDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
} 