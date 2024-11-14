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
    alignItems: flexConstants.flexCenter,
    width: '100%',
    flex: 1,
  },
  nameText: {
    fontSize: fontSize.f15,
    lineHeight: fontSize.f22,
    textAlign: flexConstants.flexCenter,
    fontFamily: fontName.medium,
    color: appColors.textBlack,
  },
  profileIcon: {
    width: responsiveWidth(26),
    height: responsiveWidth(26),
    borderRadius: responsiveWidth(20),
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
  codeText: {
    fontSize: fontSize.f14,
    lineHeight: fontSize.f20,
    fontFamily: fontName.regular,
    color: appColors.textBlack,
    paddingRight: 10,
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
});

export default styles;
