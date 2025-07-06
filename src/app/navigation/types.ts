// Navigation types for scalable navigation structure

export type RootStackParamList = {
  MainTabs: undefined;
  PlaceDetails: { placeId: string };
};

export type MainTabsParamList = {
  Search: undefined;
  Map: undefined;
  History: undefined;
}; 