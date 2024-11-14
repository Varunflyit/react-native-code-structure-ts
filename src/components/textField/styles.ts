import {Platform, StyleSheet} from 'react-native';
import {fontName, fontSize} from '../../themes/appFonts';
import {appColors} from '../../themes/appColor';
import {flexConstants} from '../../themes/flexConstant';

export const styles = StyleSheet.create({
  input: {
    fontSize: fontSize.f14,
    lineHeight: fontSize.f20,
    fontFamily: fontName.regular,
    color: appColors.textBlack,
    textAlignVertical: 'center',
  },
  container: {
    backgroundColor: appColors.textFieldBg,
    borderWidth: 0.4,
    borderColor: appColors.inputBorder,
    marginVertical: 5,
    borderRadius: 15,
  },
  textContainer: {
    flexDirection: 'row',
    backgroundColor: appColors.textFieldBg,
    paddingHorizontal: 16,
    paddingVertical: Platform.OS === 'ios' ? 12 : 0,
    borderRadius: 15,
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: flexConstants.flexCenter,
    justifyContent: flexConstants.flexSpaceBetween,
  },
  labelText: {
    fontSize: fontSize.f14,
    lineHeight: fontSize.f21,
    fontFamily: fontName.regular,
    color: appColors.textBlack,
  },
  leftContainer: {
    alignItems: flexConstants.flexStart,
    justifyContent: flexConstants.flexCenter,
    marginRight: 10,
  },
  centerContainer: {
    flex: 1,
  },
  rightContainer: {
    alignItems: flexConstants.flexEnd,
    justifyContent: flexConstants.flexCenter,
    marginLeft: 10,
    zIndex: 1,
  },
  charLimitText: {
    fontSize: fontSize.f14,
    lineHeight: fontSize.f21,
    fontFamily: fontName.light,
    color: appColors.whiteLight,
    textAlign: flexConstants.flexRight,
    marginRight: 12,
    marginBottom: 5,
  },
});
