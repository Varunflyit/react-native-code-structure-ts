import {StyleSheet} from 'react-native';
import {appColors} from '../../../../../themes/appColor';
import {flexConstants} from '../../../../../themes/flexConstant';
import {fontName, fontSize} from '../../../../../themes/appFonts';

const styles = StyleSheet.create({
  mainContainer: {
    borderRadius: 6,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginEnd: 10,
    borderWidth: 0.8,
    alignItems: flexConstants.flexCenter,
    justifyContent: flexConstants.flexCenter,
  },
  carWashStyle: {
    fontSize: fontSize.f16,
    lineHeight: fontSize.f19,
    textAlign: flexConstants.flexCenter,
    fontFamily: fontName.medium,
    color: appColors.textBlack,
  },
});

export default styles;
