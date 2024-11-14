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
    height: 13,
    width: 13,
  },
  lineStyle: {
    width: 1,
    height: 28,
    position: 'absolute',
    backgroundColor: appColors.lineColor,
    zIndex: 1,
    left: responsiveWidth(8.4),
    top: -5,
  },
  companyTextStyle: {
    fontSize: fontSize.f22,
    lineHeight: fontSize.f27,
    textAlign: flexConstants.flexCenter,
    fontFamily: fontName.medium,
    color: appColors.white,
  },
  codeText: {
    fontSize: fontSize.f14,
    lineHeight: fontSize.f20,
    fontFamily: fontName.regular,
    color: appColors.textFielplaceholderColor,
    paddingRight: 10,
  },
  forgotView: {
    padding: 4,
    marginTop: 8,
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
  },
  forgotText: {
    fontSize: fontSize.f12,
    lineHeight: fontSize.f20,
    textAlign: flexConstants.flexLeft,
    fontFamily: fontName.regular,
    color: appColors.textFielplaceholderColor,
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
    color: appColors.inputLabel,
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
  inputStyle: {
    color: appColors.whiteLight,
    fontFamily: fontName.regular,
    height: responsiveHeight(7),
    textAlignVertical: 'top',
    includeFontPadding: false,
    paddingHorizontal: 16,
    paddingVertical: -6,
  },
  textContainerStyle: {paddingVertical: 8, paddingHorizontal: 0},
  termsText: {
    fontSize: fontSize.f14,
    lineHeight: fontSize.f20,
    textAlign: flexConstants.flexLeft,
    textDecorationLine: 'underline',
    fontFamily: fontName.regular,
    color: appColors.blue,
  },
  termsText2: {
    fontSize: fontSize.f12,
    lineHeight: fontSize.f20,
    textAlign: flexConstants.flexLeft,
    fontFamily: fontName.regular,
    color: appColors.textFielplaceholderColor,
    marginTop: 8,
    marginRight: 20,
  },
  boxStyle: {
    width: 22,
    height: 22,
    borderWidth: 1,
    borderRadius: 4,
    marginRight: 8,
    borderColor: appColors.textFielplaceholderColor,
    justifyContent: flexConstants.flexCenter,
    alignItems: flexConstants.flexCenter,
  },
  termsView: {flexDirection: 'row', alignItems: 'center'},
});

export default styles;
