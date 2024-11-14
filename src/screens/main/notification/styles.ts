import {StyleSheet} from 'react-native';
import {appColors} from '../../../themes/appColor';
import {flexConstants} from '../../../themes/flexConstant';
import {fontName, fontSize} from '../../../themes/appFonts';
import {responsiveWidth} from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: appColors.white,
  },
  noNotification: {
    width: responsiveWidth(18),
    height: responsiveWidth(16),
  },
  noNotificationStyle: {
    fontSize: fontSize.f18,
    lineHeight: fontSize.f27,
    textAlign: flexConstants.flexCenter,
    fontFamily: fontName.semiBold,
    color: appColors.blue,
  },
  weWillStyle: {
    fontSize: fontSize.f16,
    lineHeight: fontSize.f22,
    textAlign: flexConstants.flexCenter,
    fontFamily: fontName.regular,
    color: appColors.textFielplaceholderColor,
  },
  emptyContainer: {
    flex: 1,
    alignItems: flexConstants.flexCenter,
    justifyContent: flexConstants.flexCenter,
  },
  flatlistStyle: {
    flexGrow: 1,
    marginHorizontal: 20,
  },
});

export default styles;
