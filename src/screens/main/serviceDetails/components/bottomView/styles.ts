import {StyleSheet} from 'react-native';
import {appColors} from '../../../../../themes/appColor';
import {flexConstants} from '../../../../../themes/flexConstant';
import {fontName, fontSize} from '../../../../../themes/appFonts';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  title2: {
    fontSize: fontSize.f16,
    lineHeight: fontSize.f20,
    fontFamily: fontName.regular,
    color: appColors.textBlack,
  },
  columnWrapperStyle: {
    justifyContent: flexConstants.flexSpaceBetween,
    marginBottom: 16,
  },
  starStyle: {
    width: 20,
    height: 20,
  },
  servicesItem: {
    width: responsiveWidth(45),
    flexDirection: flexConstants.flexRow,
  },
  title3: {
    fontSize: fontSize.f14,
    lineHeight: fontSize.f20,
    fontFamily: fontName.regular,
    color: appColors.textFielplaceholderColor,
    paddingStart: 8,
    paddingEnd: 4,
    flexShrink: 1,
  },
  imagesView1: {
    marginVertical: 16,
  },
});

export default styles;
