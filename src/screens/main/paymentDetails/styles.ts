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
  successStyle: {
    width: responsiveWidth(23),
    height: responsiveWidth(23),
  },
  innerContainer: {
    alignItems: flexConstants.flexCenter,
    paddingHorizontal: 20,
    width: '100%',
    flex: 1,
  },
  bottomView: {
    flexDirection: flexConstants.flexRow,
    alignItems: flexConstants.flexCenter,
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  notHaveText: {
    fontSize: fontSize.f18,
    lineHeight: fontSize.f25,
    textAlign: flexConstants.flexCenter,
    fontFamily: fontName.medium,
    color: appColors.blue,
  },
  signUpText: {
    fontSize: fontSize.f15,
    lineHeight: fontSize.f22,
    textAlign: flexConstants.flexCenter,
    fontFamily: fontName.regular,
    color: appColors.textFielplaceholderColor,
  },
  outerContainer: {
    borderRadius: 16,
    borderWidth: 0.5,
    borderColor: appColors.blue,
    alignItems: flexConstants.flexStart,
    backgroundColor: appColors.lightBlue,
    overflow: 'hidden',
  },
  topView: {
    flexDirection: 'row',
    width: '100%',
    alignItems: flexConstants.flexCenter,
    paddingVertical: 18,
    paddingHorizontal: 20,
  },
  carWashStyle: {
    fontSize: fontSize.f12,
    lineHeight: fontSize.f18,
    fontFamily: fontName.medium,
    color: appColors.textBlack,
    flex: 1,
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
  receiptStyle: {
    fontSize: fontSize.f14,
    alignSelf: flexConstants.flexCenter,
    lineHeight: fontSize.f20,
    fontFamily: fontName.medium,
    color: appColors.blue,
    marginTop: 16,
  },
  cashStyle: {
    fontSize: fontSize.f14,
    lineHeight: fontSize.f16,
    textAlign: flexConstants.flexCenter,
    fontFamily: fontName.medium,
    color: appColors.textBlack,
  },
  dateStyle: {
    fontSize: fontSize.f10,
    lineHeight: fontSize.f12,
    alignSelf: flexConstants.flexCenter,
    fontFamily: fontName.regular,
    color: appColors.textBlack,
    marginTop: 10,
  },
  successView: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    backgroundColor: appColors.bgColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
