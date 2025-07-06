import { StyleSheet, Platform } from 'react-native';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    paddingHorizontal: 16,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backButton: {
    minWidth: 44,
    height: 44,
    justifyContent: 'center',
    marginLeft: Platform.OS === 'ios' ? -8 : -12,
  },
  backButtonPlaceholder: {
    minWidth: 44,
  },
  backText: {
    ...typography.body,
    color: 'white',
    fontSize: 17,
  },
  backIcon: {
    color: 'white',
    fontSize: 32,
    marginTop: -2,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
    flex: 1,
  },
  titleWithBack: {
    marginHorizontal: Platform.OS === 'ios' ? 0 : 16,
  },
}); 