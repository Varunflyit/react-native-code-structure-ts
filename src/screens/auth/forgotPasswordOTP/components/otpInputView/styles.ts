import {StyleSheet} from 'react-native';
import {appColors} from '../../../../../themes/appColor';
import {fontName, fontSize} from '../../../../../themes/appFonts';
import {flexConstants} from '../../../../../themes/flexConstant';
import {responsiveWidth} from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  subContainer: {
    justifyContent: 'flex-start',
  },
  focusStick: {
    backgroundColor: appColors.blue,
    width: 1,
    height: responsiveWidth(6),
  },
  codeInputHighlightStyle: {
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: appColors.blue,
    height: responsiveWidth(13),
    width: responsiveWidth(13),
  },
  codeInputStyle: {
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: appColors.inputBorder,
    height: responsiveWidth(13),
    width: responsiveWidth(13),
  },
  codeInputFieldStyle: {
    color: appColors.textFielplaceholderColor,
    fontSize: fontSize.f20,
    lineHeight: fontSize.f28,
    textAlignVertical: flexConstants.flexCenter,
    textAlign: flexConstants.flexCenter,
    fontFamily: fontName.regular,
  },
  otpText: {
    fontSize: fontSize.f15,
    lineHeight: fontSize.f21,
    textAlign: flexConstants.flexCenter,
    fontFamily: fontName.regular,
    color: appColors.textBlack,
  },
  timerText: {
    fontSize: fontSize.f18,
    lineHeight: fontSize.f27,
    textAlign: flexConstants.flexCenter,
    fontFamily: fontName.semiBold,
    color: appColors.blue,
  },
  pinCodeContainer: {
    backgroundColor: 'green',
    height: responsiveWidth(13),
    width: responsiveWidth(13),
  },
});

export default styles;
