import {StyleSheet} from 'react-native';
import {appColors} from '../../../../../themes/appColor';
import {flexConstants} from '../../../../../themes/flexConstant';
import {fontName, fontSize} from '../../../../../themes/appFonts';

const styles = StyleSheet.create({
  mainContainer: {
    borderRadius: 16,
    borderWidth: 0.5,
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderColor: appColors.textFielplaceholderColor,
    alignItems: flexConstants.flexStart,
    width: '100%',
    backgroundColor: appColors.greyBg,
  },
  dotView: {
    width: 4,
    height: 4,
    borderRadius: 2,
    marginHorizontal: 6,
    backgroundColor: appColors.textFielplaceholderColor,
  },
  topView: {
    flexDirection: 'row',
    alignItems: flexConstants.flexCenter,
  },
  carWashStyle: {
    fontSize: fontSize.f12,
    lineHeight: fontSize.f18,
    textAlign: flexConstants.flexCenter,
    fontFamily: fontName.regular,
    color: appColors.textFielplaceholderColor,
  },
  titleStyle: {
    fontSize: fontSize.f14,
    lineHeight: fontSize.f21,
    textAlign: flexConstants.flexCenter,
    fontFamily: fontName.medium,
    color: appColors.textBlack,
    paddingVertical: 8,
  },
  descStyle: {
    fontSize: fontSize.f13,
    lineHeight: fontSize.f20,
    fontFamily: fontName.regular,
    color: appColors.textBlack,
  },
});

export default styles;
