import {StyleSheet} from 'react-native';
import {appColors} from '../../../themes/appColor';
import {flexConstants} from '../../../themes/flexConstant';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {fontName, fontSize} from '../../../themes/appFonts';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: appColors.white,
    justifyContent: 'flex-end',
  },

  outerView: {
    backgroundColor: 'green',
    position: 'absolute',
    top: 0,
  },
  imagesView: {
    flexGrow: 1,
    height: responsiveHeight(40),
  },
  iconContainer: {
    position: 'absolute',
    zIndex: 1,
    top: responsiveHeight(6),
    paddingStart: 20,
    paddingVertical: 8,
    alignSelf: flexConstants.flexStart,
    alignItems: flexConstants.flexStart,
    justifyContent: flexConstants.flexStart,
  },
  leftIcon: {
    height: 32,
    width: 32,
  },
  slider: {
    width: responsiveWidth(15),
    height: 4,
  },
  sliderView: {
    width: responsiveWidth(88),
    position: 'absolute',
    zIndex: 1,
    bottom: responsiveHeight(9),
    flexDirection: flexConstants.flexRow,
    justifyContent: flexConstants.flexSpaceBetween,
    alignItems: flexConstants.flexCenter,
    alignSelf: flexConstants.flexCenter,
  },
  imagesStyle: {
    width: responsiveWidth(100),
    height: responsiveHeight(40),
  },
  innerContainer: {
    paddingHorizontal: 20,
    borderRadius: 40,
    width: '100%',
    alignSelf: 'flex-end',
    height: responsiveHeight(67),
    backgroundColor: appColors.white,
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
    fontSize: fontSize.f18,
    lineHeight: fontSize.f24,
    fontFamily: fontName.medium,
    color: appColors.textBlack,
    marginVertical: 10,
  },

  descStyle: {
    fontSize: fontSize.f12,
    lineHeight: fontSize.f20,
    fontFamily: fontName.regular,
    color: appColors.textFielplaceholderColor,
    paddingTop: 4,
  },
  descStyle2: {
    fontSize: fontSize.f14,
    lineHeight: fontSize.f24,
    fontFamily: fontName.regular,
    color: appColors.textFielplaceholderColor,
  },
});

export default styles;
