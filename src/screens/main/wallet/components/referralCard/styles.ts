import {StyleSheet} from 'react-native';
import {appColors} from '../../../../../themes/appColor';
import {flexConstants} from '../../../../../themes/flexConstant';
import {fontName, fontSize} from '../../../../../themes/appFonts';
import {responsiveWidth} from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  mainContainer: {
    borderRadius: 12,
    borderWidth: 0.5,
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderColor: appColors.textFielplaceholderColor,
    alignItems: flexConstants.flexCenter,
    width: '100%',
    backgroundColor: appColors.greyBg,
    flexDirection: flexConstants.flexRow,
  },
  profile: {
    width: responsiveWidth(10),
    height: responsiveWidth(10),
  },
  textContainer: {
    flexDirection: flexConstants.flexRow,
    justifyContent: flexConstants.flexSpaceBetween,
    alignItems: flexConstants.flexCenter,
    flex: 1,
  },
  nameText: {
    fontSize: fontSize.f14,
    lineHeight: fontSize.f20,
    textAlign: flexConstants.flexLeft,
    fontFamily: fontName.medium,
    color: appColors.textBlack,
    paddingLeft: 8,
    maxWidth: responsiveWidth(36),
  },
  dateText: {
    fontSize: fontSize.f12,
    lineHeight: fontSize.f18,
    textAlign: flexConstants.flexCenter,
    fontFamily: fontName.medium,
    color: appColors.textBlack,
    paddingHorizontal: 4,
  },
  statusText: {
    fontSize: fontSize.f12,
    lineHeight: fontSize.f18,
    textAlign: flexConstants.flexRight,
    fontFamily: fontName.medium,
    color: appColors.textBlack,
  },
});

export default styles;
