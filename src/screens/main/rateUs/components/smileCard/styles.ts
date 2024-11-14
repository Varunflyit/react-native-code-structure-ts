import {StyleSheet} from 'react-native';
import {appColors} from '../../../../../themes/appColor';
import {flexConstants} from '../../../../../themes/flexConstant';
import {fontName, fontSize} from '../../../../../themes/appFonts';
import {responsiveWidth} from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  mainContainer: {
    paddingVertical: 5,
    paddingHorizontal: 5,
    alignItems: flexConstants.flexCenter,
    justifyContent: flexConstants.flexStart,
  },
  carWashStyle: {
    fontSize: fontSize.f12,
    lineHeight: fontSize.f18,
    textAlign: flexConstants.flexCenter,
    fontFamily: fontName.medium,
    color: appColors.white,
    width: responsiveWidth(14),
  },
  imageStyle: {
    width: responsiveWidth(10),
    height: responsiveWidth(10),
    marginBottom: 4,
  },
});

export default styles;
