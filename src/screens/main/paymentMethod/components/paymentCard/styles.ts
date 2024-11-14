import {StyleSheet} from 'react-native';
import {appColors} from '../../../../../themes/appColor';
import {flexConstants} from '../../../../../themes/flexConstant';
import {fontName, fontSize} from '../../../../../themes/appFonts';
import {responsiveHeight} from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  mainContainer: {
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: flexConstants.flexCenter,
    flexDirection: 'row',
    borderWidth: 1,
    height: responsiveHeight(7),
  },
  carWashStyle: {
    fontSize: fontSize.f14,
    lineHeight: fontSize.f20,
    fontFamily: fontName.medium,
    color: appColors.textFielplaceholderColor,
    marginBottom: 4,
  },
  numberStyle: {
    fontSize: fontSize.f12,
    lineHeight: fontSize.f16,
    fontFamily: fontName.regular,
    color: appColors.textFielplaceholderColor,
  },
  cashStyle: {
    fontSize: fontSize.f12,
    lineHeight: fontSize.f16,
    fontFamily: fontName.semiBold,
    color: appColors.greenDark,
  },
});

export default styles;
