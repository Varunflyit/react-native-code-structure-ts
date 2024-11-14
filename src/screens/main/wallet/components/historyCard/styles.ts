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
    paddingHorizontal: 16,
    borderColor: appColors.textFielplaceholderColor,
    alignItems: flexConstants.flexStart,
    width: '100%',
    backgroundColor: appColors.greyBg,
    flexDirection: flexConstants.flexRow,
  },
  textContainer: {
    flex: 1,
  },
  nameText: {
    fontSize: fontSize.f16,
    lineHeight: fontSize.f24,
    textAlign: flexConstants.flexLeft,
    fontFamily: fontName.medium,
    color: appColors.textBlack,
    maxWidth: responsiveWidth(65),
  },
  dateText: {
    fontSize: fontSize.f12,
    lineHeight: fontSize.f18,
    fontFamily: fontName.medium,
    color: appColors.black2,
    marginTop: 4,
  },
  statusText: {
    fontSize: fontSize.f16,
    lineHeight: fontSize.f30,
    textAlign: flexConstants.flexRight,
    fontFamily: fontName.medium,
    color: appColors.greenDark,
  },
});

export default styles;
