import {StyleSheet} from 'react-native';
import {appColors} from '../../../themes/appColor';
import {flexConstants} from '../../../themes/flexConstant';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import {fontName, fontSize} from '../../../themes/appFonts';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: appColors.white,
  },
  slider: {
    width: '100%',
  },
  innerContainer: {
    paddingHorizontal: 20,
    width: '100%',
    flex: 1,
  },
  topView: {
    flexDirection: flexConstants.flexRow,
    alignItems: flexConstants.flexCenter,
    marginTop: responsiveHeight(2),
  },
  starStyle: {
    width: 32,
    height: 32,
    marginEnd: 8,
  },
  notHaveText: {
    fontSize: fontSize.f18,
    lineHeight: fontSize.f25,
    textAlign: flexConstants.flexLeft,
    fontFamily: fontName.regular,
    color: appColors.textBlack,
  },
  inputStyle: {
    color: appColors.whiteLight,
    fontFamily: fontName.regular,
    height: responsiveHeight(10),
    textAlignVertical: 'top',
    includeFontPadding: false,
    paddingHorizontal: 16,
    paddingVertical: -6,
  },
  textContainerStyle: {paddingVertical: 8, paddingHorizontal: 0},
  containerStyle: {
    marginTop: 16,
  },
});

export default styles;
