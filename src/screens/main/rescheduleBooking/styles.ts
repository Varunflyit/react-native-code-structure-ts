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
  innerContainer: {
    paddingHorizontal: 20,
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
    fontSize: fontSize.f18,
    lineHeight: fontSize.f27,
    fontFamily: fontName.medium,
    color: appColors.textBlack,
    marginBottom: 20,
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
  addressText: {
    fontSize: fontSize.f12,
    lineHeight: fontSize.f18,
    fontFamily: fontName.regular,
    color: appColors.textBlack,
  },
});

export default styles;
