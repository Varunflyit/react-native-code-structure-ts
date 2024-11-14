import {StyleSheet} from 'react-native';
import {appColors} from '../../../../../themes/appColor';
import {flexConstants} from '../../../../../themes/flexConstant';
import {fontName, fontSize} from '../../../../../themes/appFonts';

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
  },
  nameText: {
    fontSize: fontSize.f18,
    lineHeight: fontSize.f27,
    textAlign: flexConstants.flexLeft,
    fontFamily: fontName.medium,
    color: appColors.textBlack,
  },
  dateText: {
    fontSize: fontSize.f16,
    lineHeight: fontSize.f24,
    fontFamily: fontName.regular,
    color: appColors.textBlack,
    marginTop: 6,
  },
});

export default styles;
