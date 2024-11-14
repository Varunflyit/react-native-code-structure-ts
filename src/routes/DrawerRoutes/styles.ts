import {StyleSheet, Dimensions} from 'react-native';
import {appColors} from '../../themes/appColor';
import {flexConstants} from '../../themes/flexConstant';
import {fontName, fontSize} from '../../themes/appFonts';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

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
    flexDirection: 'row',
  },
  editProfileView: {
    flexDirection: 'row',
    position: 'absolute',
    right: -responsiveWidth(24),
    bottom: responsiveWidth(6),
    alignItems: 'center',
  },
  imageBackground: {
    width: '100%',
    height: responsiveHeight(32),
    justifyContent: flexConstants.flexCenter,
  },
  profileStyle: {
    marginStart: 16,
    width: responsiveWidth(28),
    height: responsiveWidth(28),
  },
  pencilStyle: {
    width: responsiveWidth(7),
    height: responsiveWidth(7),
  },
  tabItemContainer: {
    alignItems: flexConstants.flexStart,
    justifyContent: flexConstants.flexCenter,
    marginBottom: 28,
    paddingHorizontal: 24,
  },
  tabItemImage: {
    height: 30,
    width: 32,
  },
  tabItemLabel: {
    color: appColors.drawerText,
    fontSize: fontSize.f18,
    lineHeight: fontSize.f22,
    fontFamily: fontName.regular,
    textAlign: flexConstants.flexCenter,
    textTransform: 'capitalize',
    paddingStart: 12,
  },
  nameStyle: {
    marginTop: -10,
    color: appColors.white,
    fontSize: fontSize.f20,
    lineHeight: fontSize.f30,
    fontFamily: fontName.regular,
    textTransform: 'capitalize',
    marginStart: 28,
  },
  editText: {
    color: appColors.white,
    fontSize: fontSize.f15,
    lineHeight: fontSize.f22,
    fontFamily: fontName.medium,
    textTransform: 'capitalize',
    paddingHorizontal: 10,
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
