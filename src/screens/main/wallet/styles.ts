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
  },
  innerContainer: {
    paddingHorizontal: 20,
    width: '100%',
    flexGrow: 1,
  },
  walletCard: {
    position: 'absolute',
    height: responsiveHeight(36),
    width: responsiveWidth(100),
    top: -responsiveHeight(2),
    zIndex: -1,
  },
  coinsLogo: {
    height: 32,
    width: 32,
  },
  companyTextStyle: {
    fontSize: fontSize.f22,
    lineHeight: fontSize.f27,
    textAlign: flexConstants.flexCenter,
    fontFamily: fontName.medium,
    color: appColors.white,
  },
  bottomView: {
    flexDirection: flexConstants.flexRow,
    alignItems: flexConstants.flexCenter,
    alignSelf: flexConstants.flexCenter,
  },
  notHaveText: {
    fontSize: fontSize.f15,
    lineHeight: fontSize.f22,
    textAlign: flexConstants.flexCenter,
    fontFamily: fontName.medium,
    color: appColors.inputLabel,
  },
  walletBalance: {
    fontSize: fontSize.f20,
    lineHeight: fontSize.f30,
    fontFamily: fontName.medium,
    color: appColors.white,
    paddingHorizontal: 24,
  },
  balanceText: {
    fontSize: fontSize.f48,
    lineHeight: fontSize.f70,
    fontFamily: fontName.medium,
    color: appColors.white,
    paddingHorizontal: 24,
  },
  walletCoins: {
    fontSize: fontSize.f18,
    lineHeight: fontSize.f27,
    fontFamily: fontName.medium,
    color: appColors.textBlack,
    paddingHorizontal: 10,
    flex: 1,
  },
  walletCoins2: {
    fontSize: fontSize.f18,
    lineHeight: fontSize.f27,
    fontFamily: fontName.bold,
    color: appColors.greenDark,
  },
  myRefferals: {
    fontSize: fontSize.f18,
    lineHeight: fontSize.f27,
    fontFamily: fontName.semiBold,
    color: appColors.textBlack,
  },
  signUpView: {
    paddingHorizontal: 6,
    paddingVertical: 4,
  },
  coinsContainer: {
    backgroundColor: appColors.lightBlue,
    flexDirection: flexConstants.flexRow,
    alignItems: flexConstants.flexCenter,
    width: '100%',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  flatlistStyle: {
    // flexGrow: 1,
    // height: responsiveHeight(50),
  },
});

export default styles;
