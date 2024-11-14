import {StyleSheet} from 'react-native';
import {appColors} from '../../../../../themes/appColor';
import {flexConstants} from '../../../../../themes/flexConstant';
import {fontName, fontSize} from '../../../../../themes/appFonts';

const styles = StyleSheet.create({
  priceStyle: {
    fontSize: fontSize.f16,
    lineHeight: fontSize.f24,
    fontFamily: fontName.light,
    color: appColors.black3,
    marginBottom: 4,
  },
  priceStyle1: {
    fontSize: fontSize.f20,
    lineHeight: fontSize.f24,
    fontFamily: fontName.medium,
    color: appColors.textBlack,
  },
  btnContainer: {
    flexDirection: flexConstants.flexRow,
    alignItems: flexConstants.flexCenter,
    justifyContent: flexConstants.flexSpaceBetween,
    paddingHorizontal: 16,
    marginVertical: 10,
  },
});

export default styles;
