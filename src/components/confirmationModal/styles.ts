import {StyleSheet} from 'react-native';
import {appColors} from '../../themes/appColor';
import {flexConstants} from '../../themes/flexConstant';
import {fontName, fontSize} from '../../themes/appFonts';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: appColors.modalBg,
    alignItems: flexConstants.flexCenter,
    justifyContent: flexConstants.flexCenter,
  },
  container: {
    borderRadius: 32,
    padding: 16,
    width: '90%',
    alignItems: flexConstants.flexCenter,
    backgroundColor: appColors.white,
  },
  image: {
    height: responsiveWidth(48),
    width: responsiveWidth(55),
    marginVertical: responsiveHeight(1),
  },
  closeView: {
    position: 'absolute',
    right: 16,
    top: 16,
    zIndex: 1,
  },
  closeIcon: {
    height: 36,
    width: 36,
  },
  title: {
    marginVertical: 24,
    fontSize: fontSize.f18,
    lineHeight: fontSize.f27,
    textAlign: flexConstants.flexCenter,
    fontFamily: fontName.medium,
    color: appColors.textFielplaceholderColor,
    paddingHorizontal: 20,
  },
  subTitle: {
    fontSize: fontSize.f12,
    lineHeight: fontSize.f18,
    textAlign: flexConstants.flexCenter,
    fontFamily: fontName.regular,
    color: appColors.textFielplaceholderColor,
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: flexConstants.flexCenter,
    justifyContent: flexConstants.flexSpaceBetween,
  },
  button: {
    width: responsiveWidth(50),
    height: 50,
    marginVertical: responsiveHeight(2),
  },
  buttonText: {
    fontSize: fontSize.f18,
    lineHeight: fontSize.f27,
    textAlign: flexConstants.flexCenter,
    fontFamily: fontName.medium,
    color: appColors.white,
  },
  heading: {
    fontSize: fontSize.f22,
    lineHeight: fontSize.f30,
    textAlign: flexConstants.flexCenter,
    fontFamily: fontName.semiBold,
    color: appColors.blue,
    marginVertical: 8,
  },
  topRightContainer: {
    position: 'absolute',
    right: 7,
    top: 7,
    padding: 8,
  },
});

export default styles;
