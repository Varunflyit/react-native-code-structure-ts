import {StyleSheet} from 'react-native';
import {appColors} from '../../../../../themes/appColor';
import {flexConstants} from '../../../../../themes/flexConstant';
import {fontName, fontSize} from '../../../../../themes/appFonts';
import {responsiveHeight} from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: flexConstants.flexRow,
    borderColor: appColors.lineColor,
    height: responsiveHeight(9),
    paddingVertical: 10,
    alignItems: flexConstants.flexCenter,
    justifyContent: flexConstants.flexStart,
  },
  radioView: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: appColors.blue,
    marginHorizontal: 8,
  },
  carWashStyle: {
    fontSize: fontSize.f16,
    lineHeight: fontSize.f24,
    textAlign: flexConstants.flexLeft,
    textAlignVertical: flexConstants.flexCenter,
    fontFamily: fontName.regular,
    color: appColors.textBlack,
    paddingHorizontal: 8,
    flex: 1,
  },
});

export default styles;
