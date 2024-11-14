import {StyleSheet} from 'react-native';
import {appColors} from '../../../themes/appColor';
import {flexConstants} from '../../../themes/flexConstant';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import {fontName, fontSize} from '../../../themes/appFonts';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: appColors.white,
  },
  innerContainer: {
    paddingHorizontal: 20,
    width: '100%',
    flex: 1,
  },
  forgotView: {
    padding: 4,
    marginTop: 8,
    alignItems: flexConstants.flexEnd,
    alignSelf: flexConstants.flexEnd,
  },
  forgotText: {
    fontSize: fontSize.f14,
    lineHeight: fontSize.f20,
    textAlign: flexConstants.flexCenter,
    fontFamily: fontName.regular,
    color: appColors.blue,
  },
  socialTextStyle: {
    fontSize: fontSize.f15,
    lineHeight: fontSize.f21,
    textAlign: flexConstants.flexCenter,
    fontFamily: fontName.regular,
    color: appColors.textBlack,
  },
  bottomView: {
    flexDirection: flexConstants.flexRow,
    alignItems: flexConstants.flexCenter,
    alignSelf: flexConstants.flexCenter,
  },
  notHaveText: {
    fontSize: fontSize.f15,
    lineHeight: fontSize.f22,
    textAlign: flexConstants.flexCenter,
    fontFamily: fontName.medium,
    color: appColors.textFielplaceholderColor,
  },
  signUpText: {
    fontSize: fontSize.f15,
    lineHeight: fontSize.f22,
    textAlign: flexConstants.flexCenter,
    fontFamily: fontName.medium,
    color: appColors.blue,
  },
  signUpView: {
    paddingHorizontal: 6,
    paddingVertical: 4,
  },
  socialIcon: {
    width: responsiveWidth(16),
    height: responsiveWidth(16),
  },
  appleIcon: {
    width: responsiveWidth(14.4),
    height: responsiveWidth(14.4),
  },
  socialView: {
    flexDirection: flexConstants.flexRow,
    justifyContent: flexConstants.flexCenter,
    alignItems: flexConstants.flexCenter,
  },
});

export default styles;
