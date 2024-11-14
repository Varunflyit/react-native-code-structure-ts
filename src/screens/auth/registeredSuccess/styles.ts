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
    alignItems: 'center',
  },
  fastImage: {width: responsiveWidth(23), height: responsiveWidth(23)},
  innerContainer: {
    paddingHorizontal: 20,
    width: '100%',
    flex: 1,
  },
  logoStyle: {
    height: responsiveHeight(24),
    width: responsiveWidth(26),
  },
  weHaveSent: {
    fontSize: fontSize.f14,
    lineHeight: fontSize.f21,
    textAlign: flexConstants.flexCenter,
    fontFamily: fontName.regular,
    color: appColors.textBlack,
    marginHorizontal: 32,
  },
  bottomView: {
    flexDirection: flexConstants.flexRow,
    alignItems: flexConstants.flexCenter,
    alignSelf: flexConstants.flexEnd,
  },
  registeredText: {
    fontSize: fontSize.f22,
    lineHeight: fontSize.f33,
    textAlign: flexConstants.flexCenter,
    fontFamily: fontName.medium,
    color: appColors.blue,
    marginHorizontal: 24,
  },
  signUpText: {
    fontSize: fontSize.f15,
    lineHeight: fontSize.f22,
    textAlign: flexConstants.flexCenter,
    fontFamily: fontName.medium,
    color: appColors.blue,
  },
  signUpView: {
    paddingHorizontal: 6,
    paddingVertical: 4,
  },
});

export default styles;
