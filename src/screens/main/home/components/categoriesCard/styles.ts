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
    width: responsiveWidth(54),
    borderRadius: 24,
    alignItems: flexConstants.flexCenter,
    justifyContent: flexConstants.flexStart,
    backgroundColor: appColors.greyDark,
  },
  carWashStyle: {
    fontSize: fontSize.f14,
    lineHeight: fontSize.f18,
    fontFamily: fontName.bold,
    color: appColors.textBlack,
  },
  descriptionStyle: {
    fontSize: fontSize.f14,
    lineHeight: fontSize.f18,
    fontFamily: fontName.medium,
    color: appColors.textFielplaceholderColor,
  },
  imageStyle: {
    width: responsiveWidth(53),
    marginTop: 1,
    height: responsiveHeight(25.5),
    borderRadius: 24,
    marginBottom: 4,
  },
  bottomView: {
    backgroundColor: appColors.white,
    justifyContent: flexConstants.flexStart,
    width: responsiveWidth(48),
    marginBottom: 12,
    marginTop: 4,
    borderRadius: 24,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
});

export default styles;
