import React from 'react';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../theme/colors';
import { IS_IOS, PLATFORM } from '../../utils/constants';
import { CustomHeaderProps } from './CustomHeader.types';
import styles from './CustomHeader.styles';

const CustomHeader: React.FC<CustomHeaderProps> = ({ title, showBack }) => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  const getHeaderStyle = () => ({
    paddingTop: IS_IOS ? insets.top : 16,
    height: IS_IOS ? PLATFORM.HEADER_HEIGHT + insets.top : PLATFORM.HEADER_HEIGHT,
  });

  return (
    <>
      <StatusBar
        backgroundColor={colors.primary}
        barStyle="light-content"
        translucent={false}
      />
      <View style={[styles.container, getHeaderStyle()]}>
        <View style={styles.content}>
          {showBack && (
            <TouchableOpacity
              onPress={handleBack}
              style={styles.backButton}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              <Text style={styles.backIcon}>‹</Text>
            </TouchableOpacity>
          )}
          <Text
            style={[styles.title, showBack && styles.titleWithBack]}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {title}
          </Text>
          {showBack && <View style={styles.backButtonPlaceholder} />}
        </View>
      </View>
    </>
  );
};

export default CustomHeader;
