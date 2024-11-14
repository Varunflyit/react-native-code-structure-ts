import {StyleSheet} from 'react-native';
import {appColors} from '../../../themes/appColor';
import {flexConstants} from '../../../themes/flexConstant';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {fontName, fontSize} from '../../../themes/appFonts';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: appColors.white,
  },
  centerHeader: {
    flexDirection: 'row',
  },
  topView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  locationIcon: {
    width: 28,
    height: 28,
  },
  searchIcon: {
    width: 16,
    height: 16,
  },
  downIcon: {
    width: 14,
    height: 10,
    marginHorizontal: 6,
  },
  rightIcon: {
    width: responsiveWidth(11),
    height: responsiveWidth(11),
  },
  leftIcon: {
    width: responsiveWidth(10),
    height: responsiveWidth(10),
    backgroundColor: appColors.white,
  },
  innerContainer: {
    width: '100%',
    flex: 1,
  },
  logoStyle: {
    height: responsiveHeight(24),
    width: responsiveWidth(26),
  },
  companyTextStyle: {
    fontSize: fontSize.f22,
    lineHeight: fontSize.f27,
    textAlign: flexConstants.flexCenter,
    fontFamily: fontName.medium,
    color: appColors.white,
  },
  bottomView: {
    flexDirection: flexConstants.flexRow,
    alignItems: flexConstants.flexCenter,
    alignSelf: flexConstants.flexCenter,
  },
  notHaveText: {
    fontSize: fontSize.f12,
    lineHeight: fontSize.f18,
    textAlign: flexConstants.flexLeft,
    fontFamily: fontName.regular,
    color: appColors.textFielplaceholderColor,
  },
  signUpText: {
    fontSize: fontSize.f12,
    lineHeight: fontSize.f18,
    textAlign: flexConstants.flexCenter,
    fontFamily: fontName.medium,
    color: appColors.textBlack,
  },
  services: {
    fontSize: fontSize.f16,
    lineHeight: fontSize.f20,
    textAlign: flexConstants.flexCenter,
    fontFamily: fontName.semiBold,
    color: appColors.textBlack,
  },
  seeAll: {
    fontSize: fontSize.f15,
    lineHeight: fontSize.f20,
    textAlign: flexConstants.flexCenter,
    fontFamily: fontName.regular,
    color: appColors.textBlack,
  },
  signUpView: {
    paddingHorizontal: 6,
    paddingVertical: 4,
  },
});

export default styles;
