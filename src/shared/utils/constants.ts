import { Platform } from 'react-native';

export const IS_IOS = Platform.OS === 'ios';
export const IS_ANDROID = Platform.OS === 'android';

export const PLATFORM = {
  HEADER_HEIGHT: IS_IOS ? 44 : 56,
  STATUS_BAR_HEIGHT: IS_IOS ? 44 : 24,
} as const; 