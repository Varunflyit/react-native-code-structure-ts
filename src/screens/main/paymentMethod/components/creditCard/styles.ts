import {StyleSheet} from 'react-native';
import {appColors} from '../../../../../themes/appColor';
import {flexConstants} from '../../../../../themes/flexConstant';
import {fontName, fontSize} from '../../../../../themes/appFonts';

const styles = StyleSheet.create({
  mainContainer: {
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: flexConstants.flexCenter,
    flexDirection: 'row',
    borderWidth: 1,
  },
  carWashStyle: {
    fontSize: fontSize.f14,
    lineHeight: fontSize.f20,
    fontFamily: fontName.regular,
    color: appColors.textBlack3,
    marginBottom: 4,
  },
  numberStyle: {
    fontSize: fontSize.f12,
    lineHeight: fontSize.f16,
    fontFamily: fontName.regular,
    color: appColors.textBlack2,
  },
  imageStyle: {
    width: 12,
    height: 12,
  },
});

export default styles;
