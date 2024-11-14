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
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  middleView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  iconStyle: {
    width: 16,
    height: 16,
  },
  topLine: {
    alignSelf: 'center',
    marginVertical: 6,
    width: responsiveWidth(16),
    borderRadius: 6,
    height: 6,
    backgroundColor: appColors.textFielplaceholderColor,
  },
  innerContainer: {
    position: 'absolute',
    bottom: 0,
    height: responsiveHeight(33.5),
    width: responsiveWidth(98),
    backgroundColor: appColors.white,
    shadowColor: appColors.textBlack,
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    borderTopEndRadius: 16,
    borderTopStartRadius: 16,
  },
  notHaveText: {
    fontSize: fontSize.f13,
    lineHeight: fontSize.f20,
    fontFamily: fontName.regular,
    color: appColors.greyLight,
  },
  locationText: {
    fontSize: fontSize.f17,
    lineHeight: fontSize.f25,
    textAlign: flexConstants.flexCenter,
    fontFamily: fontName.regular,
    color: appColors.drawerText,
  },
});

export default styles;
