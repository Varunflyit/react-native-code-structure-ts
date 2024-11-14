import {StyleSheet} from 'react-native';
import {flexConstants} from '../../themes/flexConstant';
import {appColors} from '../../themes/appColor';
import {fontName, fontSize} from '../../themes/appFonts';

const styles = StyleSheet.create({
  innerContainer: {
    alignSelf: flexConstants.flexCenter,
    height: 54,
    borderRadius: 27,
    width: '100%',
    justifyContent: flexConstants.flexCenter,
    alignItems: flexConstants.flexCenter,
    overflow: 'hidden',
  },
  disabledInnerContainer: {
    alignSelf: flexConstants.flexCenter,
    height: 54,
    borderRadius: 27,
    width: '100%',
    justifyContent: flexConstants.flexCenter,
    overflow: 'hidden',
  },
  textStyle: {
    color: appColors.white,
    fontFamily: fontName.semiBold,
    fontSize: fontSize.f18,
    lineHeight: fontSize.f27,
    textAlign: flexConstants.flexCenter,
    textAlignVertical: flexConstants.flexCenter,
    includeFontPadding: false,
  },
  disbaledTextStyle: {
    color: appColors.white,
    fontFamily: fontName.semiBold,
    fontSize: fontSize.f18,
    lineHeight: fontSize.f27,
    textAlign: flexConstants.flexCenter,
    textAlignVertical: flexConstants.flexCenter,
    includeFontPadding: false,
  },
  touchableView: {
    flex: 1,
    justifyContent: flexConstants.flexCenter,
    alignItems: flexConstants.flexCenter,
    overflow: 'hidden',
  },
  innerView: {
    width: '98%',
    height: '94%',
    borderRadius: 27,
  },
});

export default styles;
