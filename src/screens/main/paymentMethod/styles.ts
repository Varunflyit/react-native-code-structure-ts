import {StyleSheet} from 'react-native';
import {appColors} from '../../../themes/appColor';
import {flexConstants} from '../../../themes/flexConstant';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import {fontName, fontSize} from '../../../themes/appFonts';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: appColors.white,
  },
  services: {
    fontSize: fontSize.f14,
    lineHeight: fontSize.f20,
    fontFamily: fontName.medium,
    color: appColors.textBlack,
  },
  offers: {
    fontSize: fontSize.f16,
    lineHeight: fontSize.f20,
    fontFamily: fontName.medium,
    color: appColors.textBlack,
  },
  creditText: {
    fontSize: fontSize.f12,
    lineHeight: fontSize.f15,
    fontFamily: fontName.bold,
    color: appColors.textBlack2,
    paddingHorizontal: 8,
  },
  newCardText: {
    fontSize: fontSize.f12,
    lineHeight: fontSize.f18,
    fontFamily: fontName.semiBold,
    color: appColors.blue,
    textAlign: 'center',
  },
  dotStyle: {
    width: 18,
    height: 18,
    backgroundColor: appColors.blue,
    alignItems: flexConstants.flexCenter,
    justifyContent: flexConstants.flexCenter,
    borderRadius: 10,
  },
  innerDot: {
    width: 7,
    height: 7,
    backgroundColor: appColors.white,
    borderRadius: 7,
  },
  innerContainer: {
    paddingHorizontal: 20,
    width: '100%',
    flexGrow: 1,
  },
  cardView: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginVertical: 16,
    borderWidth: 0.5,
    borderRadius: 16,
    borderColor: appColors.borderColor,
  },
  rightArrow: {
    width: 20,
    height: 20,
  },
  topView: {
    flexDirection: 'row',
    width: '100%',
    alignItems: flexConstants.flexCenter,
    justifyContent: 'space-between',
    paddingVertical: 18,
    paddingHorizontal: 20,
  },
  bottomView: {
    flexDirection: 'row',
    width: '100%',
    alignItems: flexConstants.flexCenter,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 12,
  },
  carWashStyle: {
    fontSize: fontSize.f12,
    lineHeight: fontSize.f18,
    textAlign: flexConstants.flexLeft,
    fontFamily: fontName.medium,
    color: appColors.textBlack,
  },
  descStyle: {
    fontSize: fontSize.f12,
    lineHeight: fontSize.f22,
    textAlign: flexConstants.flexLeft,
    fontFamily: fontName.regular,
    color: appColors.textFielplaceholderColor,
    width: responsiveWidth(50),
  },
  titleStyle: {
    fontSize: fontSize.f18,
    lineHeight: fontSize.f20,
    fontFamily: fontName.medium,
    color: appColors.textBlack,
  },
  outerContainer: {
    borderRadius: 16,
    borderWidth: 0.5,
    flex: 1,
    borderColor: appColors.textFielplaceholderColor,
    alignItems: flexConstants.flexStart,
    backgroundColor: appColors.greyBg,
    overflow: 'hidden',
  },
  cashStyle: {
    fontSize: fontSize.f14,
    lineHeight: fontSize.f16,
    textAlign: flexConstants.flexCenter,
    fontFamily: fontName.medium,
    color: appColors.textBlack,
  },
});

export default styles;
