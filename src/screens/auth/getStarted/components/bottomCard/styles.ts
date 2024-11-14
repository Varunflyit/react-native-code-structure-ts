import {StyleSheet} from 'react-native';
import {appColors} from '../../../../../themes/appColor';
import {flexConstants} from '../../../../../themes/flexConstant';
import {fontName, fontSize} from '../../../../../themes/appFonts';
import {responsiveWidth} from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  mainContainer: {
    borderRadius: 25,
    borderWidth: 0.9,
    paddingVertical: 28,
    paddingHorizontal: 28,
    borderColor: appColors.borderColorWhite30,
    alignItems: flexConstants.flexCenter,
    width: '100%',
    backgroundColor: appColors.borderColorWhite30,
    overflow: 'hidden',
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  carWashStyle: {
    fontSize: fontSize.f20,
    lineHeight: fontSize.f25,
    textAlign: flexConstants.flexCenter,
    fontFamily: fontName.medium,
    color: appColors.white,
  },
  textStyle: {
    fontSize: fontSize.f12,
    lineHeight: fontSize.f18,
    textAlign: flexConstants.flexCenter,
    fontFamily: fontName.regular,
    color: appColors.white70,
    paddingHorizontal: responsiveWidth(8),
    paddingVertical: 8,
  },
});

export default styles;
