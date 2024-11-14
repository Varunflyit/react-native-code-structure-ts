import {StyleSheet, Dimensions, Platform} from 'react-native';
import {appColors} from '../../themes/appColor';
import {flexConstants} from '../../themes/flexConstant';
import {fontName, fontSize} from '../../themes/appFonts';
import {responsiveWidth} from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  bottomTabBarContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: appColors.white,
  },
  tabItem: {
    alignItems: flexConstants.flexCenter,
    justifyContent: flexConstants.flexCenter,
  },
  tabItemContainer: {
    alignItems: flexConstants.flexCenter,
    justifyContent: flexConstants.flexStart,
    width: Dimensions.get('screen').width / 5,
    height: Platform.OS === 'ios' ? 80 : 68,
    paddingTop: 8,
  },
  tabItemImage: {
    height: 30,
    width: 28,
  },
  tabItemLabel: {
    marginTop: 5,
    color: appColors.blue,
    fontSize: fontSize.f11,
    lineHeight: fontSize.f15,
    fontFamily: fontName.regular,
    textAlign: flexConstants.flexCenter,
    textTransform: 'capitalize',
  },

  dotContainer: {
    height: 28,
    width: 26,
    justifyContent: flexConstants.flexCenter,
    alignItems: flexConstants.flexCenter,
  },
  dot: {
    backgroundColor: appColors.white,
    height: responsiveWidth(1.5),
    width: responsiveWidth(1.5),
    borderRadius: responsiveWidth(1),
  },
  countView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: responsiveWidth(5.5),
    height: responsiveWidth(5.5),
    borderRadius: responsiveWidth(6),
    backgroundColor: appColors.red,
    position: 'absolute',
    zIndex: 10,
    top: 2,
    right: responsiveWidth(3),
  },
  alertView: {
    width: responsiveWidth(5),
    height: responsiveWidth(5),
    position: 'absolute',
    zIndex: 10,
    top: 2,
    right: responsiveWidth(3),
  },
  countText: {
    fontSize: fontSize.f12,
    lineHeight: fontSize.f18,
    textAlignVertical: flexConstants.flexCenter,
    color: appColors.white,
    fontFamily: fontName.medium,
  },
});
export default styles;
