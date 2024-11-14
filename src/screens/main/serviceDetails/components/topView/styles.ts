import {StyleSheet} from 'react-native';
import {appColors} from '../../../../../themes/appColor';
import {flexConstants} from '../../../../../themes/flexConstant';
import {fontName, fontSize} from '../../../../../themes/appFonts';

const styles = StyleSheet.create({
  topView: {
    flexDirection: flexConstants.flexRow,
    alignItems: flexConstants.flexCenter,
  },
  starStyle: {
    width: 20,
    height: 20,
  },
  carWashStyle: {
    fontSize: fontSize.f12,
    textAlign: flexConstants.flexCenter,
    fontFamily: fontName.regular,
    color: appColors.black3,
    paddingTop: 2,
    paddingHorizontal: 8,
  },
  titleStyle: {
    fontSize: fontSize.f18,
    lineHeight: fontSize.f24,
    fontFamily: fontName.medium,
    color: appColors.textBlack,
    marginVertical: 10,
  },

  descStyle: {
    fontSize: fontSize.f12,
    lineHeight: fontSize.f20,
    fontFamily: fontName.regular,
    color: appColors.textFielplaceholderColor,
    paddingTop: 4,
  },
  descStyle2: {
    fontSize: fontSize.f14,
    lineHeight: fontSize.f24,
    fontFamily: fontName.regular,
    color: appColors.textFielplaceholderColor,
  },
});

export default styles;
