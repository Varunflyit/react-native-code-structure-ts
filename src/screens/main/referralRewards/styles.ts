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
  textStyle: {
    fontSize: fontSize.f15,
    lineHeight: fontSize.f22,
  },
  btnStyle: {
    width: responsiveWidth(22),
    height: 40,
    marginStart: 12,
    marginVertical: 3,
  },
  topView: {
    flexDirection: 'row',
  },
  referralRewards: {
    position: 'absolute',
    height: responsiveWidth(48),
    width: responsiveWidth(44),
    top: -responsiveHeight(7),
    right: -responsiveWidth(4),
  },
  referFriends: {
    fontSize: fontSize.f26,
    lineHeight: fontSize.f38,
    fontFamily: fontName.semiBold,
    color: appColors.black,
    width: responsiveWidth(50),
  },
  walletCoins: {
    fontSize: fontSize.f14,
    lineHeight: fontSize.f21,
    fontFamily: fontName.regular,
    color: appColors.textBlack,
    paddingHorizontal: 10,
  },
  myRefferals: {
    fontSize: fontSize.f18,
    lineHeight: fontSize.f27,
    fontFamily: fontName.semiBold,
    color: appColors.textBlack,
    textAlign: 'center',
  },
  coinsContainer: {
    flexDirection: flexConstants.flexRow,
    alignItems: flexConstants.flexCenter,
    width: '100%',
  },
  coinsMidView: {
    backgroundColor: appColors.lightBlue,
    flexDirection: flexConstants.flexRow,
    alignItems: flexConstants.flexCenter,
    justifyContent: flexConstants.flexSpaceBetween,
    borderRadius: 40,
    paddingHorizontal: 16,
    paddingVertical: 12,
    flex: 1,
  },
});

export default styles;
