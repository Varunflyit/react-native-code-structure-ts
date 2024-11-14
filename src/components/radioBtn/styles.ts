import {Platform, StyleSheet} from 'react-native';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import {appColors} from '../../themes/appColor';

export const styles = StyleSheet.create({
  outerView: {
    flexDirection: 'row',
    maxWidth: responsiveWidth(28),
  },
  radioBorder: {
    width: Platform.OS === 'ios' ? 18 : 20,
    height: Platform.OS === 'ios' ? 18 : 20,
    borderRadius: Platform.OS === 'ios' ? 18 : 20,
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioDot: {
    backgroundColor: appColors.blue,
    width: Platform.OS === 'ios' ? 16 : 18,
    height: Platform.OS === 'ios' ? 16 : 18,
    borderRadius: Platform.OS === 'ios' ? 8 : 9,
  },
});
