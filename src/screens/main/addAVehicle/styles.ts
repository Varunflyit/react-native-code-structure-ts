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
    flexGrow: 1,
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
    fontSize: fontSize.f14,
    lineHeight: fontSize.f21,
    textAlign: flexConstants.flexCenter,
    fontFamily: fontName.regular,
    color: appColors.textBlack,
  },
  signUpText: {
    fontSize: fontSize.f14,
    lineHeight: fontSize.f20,
    textAlign: flexConstants.flexLeft,
    fontFamily: fontName.regular,
    color: appColors.textBlack,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  signUpView: {
    paddingHorizontal: 6,
    paddingVertical: 4,
  },
  downArrow: {
    width: 16,
    height: 16,
  },
  imagesStyle: {
    width: responsiveWidth(100),
    height: responsiveHeight(40),
  },
  dropsView: {
    borderBottomWidth: 0.4,
    borderLeftWidth: 0.4,
    borderRightWidth: 0.4,
    borderColor: appColors.textFielplaceholderColor,
    height: responsiveHeight(16),
    overflow: 'hidden',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  dropView: {
    borderBottomWidth: 0.4,
    borderColor: appColors.textFielplaceholderColor,
  },
  labelText: {
    fontSize: fontSize.f14,
    lineHeight: fontSize.f21,
    fontFamily: fontName.regular,
    color: appColors.textBlack,
  },
  colorView: {
    flexDirection: 'row',
    marginVertical: 16,
  },
  colorStyle: {
    borderWidth: 0.5,
    borderColor: appColors.textFielplaceholderColor,
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 12,
  },
});

export default styles;
