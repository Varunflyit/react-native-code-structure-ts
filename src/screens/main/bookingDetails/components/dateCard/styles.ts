import {StyleSheet} from 'react-native';
import {appColors} from '../../../../../themes/appColor';
import {flexConstants} from '../../../../../themes/flexConstant';
import {fontName, fontSize} from '../../../../../themes/appFonts';

const styles = StyleSheet.create({
  mainContainer: {
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 16,
    alignItems: flexConstants.flexCenter,
    justifyContent: flexConstants.flexCenter,
  },
  carWashStyle: {
    fontSize: fontSize.f14,
    lineHeight: fontSize.f21,
    textAlign: flexConstants.flexCenter,
    fontFamily: fontName.medium,
    color: appColors.dateText,
  },
  dateText: {
    fontSize: fontSize.f20,
    lineHeight: fontSize.f24,
    textAlign: flexConstants.flexCenter,
    fontFamily: fontName.semiBold,
    color: appColors.black,
  },
});

export default styles;
