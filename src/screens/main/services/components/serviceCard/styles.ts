import {StyleSheet} from 'react-native';
import {appColors} from '../../../../../themes/appColor';
import {flexConstants} from '../../../../../themes/flexConstant';
import {fontName, fontSize} from '../../../../../themes/appFonts';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  mainContainer: {
    borderRadius: 10,
    alignItems: flexConstants.flexStart,
    width: '100%',
    backgroundColor: appColors.white,
    overflow: 'hidden',
  },
  topView: {
    flexDirection: 'row',
    alignItems: flexConstants.flexCenter,
  },
  carWashStyle: {
    fontSize: fontSize.f12,
    textAlign: flexConstants.flexCenter,
    fontFamily: fontName.regular,
    color: appColors.black3,
    paddingTop: 2,
    paddingHorizontal: 8,
  },
  titleStyle: {
    fontSize: fontSize.f14,
    lineHeight: fontSize.f24,
    textAlign: flexConstants.flexCenter,
    fontFamily: fontName.medium,
    color: appColors.textBlack,
    marginVertical: 4,
  },
  descStyle: {
    fontSize: fontSize.f16,
    lineHeight: fontSize.f24,
    fontFamily: fontName.medium,
    color: appColors.textFielplaceholderColor,
    textDecorationLine: 'line-through',
  },
  descStyle2: {
    fontSize: fontSize.f18,
    lineHeight: fontSize.f24,
    fontFamily: fontName.regular,
    color: appColors.black3,
    textDecorationLine: 'none',
  },
  imageStyle: {
    width: '100%',
    height: responsiveHeight(17),
  },
  starStyle: {
    width: 20,
    height: 20,
  },
  textStyle: {
    fontSize: fontSize.f15,
    lineHeight: fontSize.f22,
  },
  btnStyle: {
    width: responsiveWidth(22),
    height: 40,
    alignSelf: flexConstants.flexStart,
    marginTop: 8,
  },
  bottomView: {
    width: '100%',
    alignItems: flexConstants.flexStart,
    paddingHorizontal: 12,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    borderColor: appColors.lightGrey,
    paddingVertical: 12,
  },
});

export default styles;
