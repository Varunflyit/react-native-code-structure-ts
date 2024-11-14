import {StyleSheet} from 'react-native';
import {appColors} from '../../../../../themes/appColor';
import {flexConstants} from '../../../../../themes/flexConstant';
import {fontName, fontSize} from '../../../../../themes/appFonts';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  mainContainer: {
    width: responsiveWidth(22),
    alignItems: flexConstants.flexCenter,
    justifyContent: flexConstants.flexStart,
  },
  carWashStyle: {
    fontSize: fontSize.f12,
    lineHeight: fontSize.f18,
    textAlign: flexConstants.flexCenter,
    fontFamily: fontName.medium,
    color: appColors.textBlack,
  },
  imageStyle: {
    width: responsiveWidth(20),
    height: responsiveHeight(13),
    borderRadius: responsiveHeight(11),
    marginBottom: 4,
  },
});

export default styles;
