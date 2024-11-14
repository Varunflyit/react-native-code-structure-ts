import {StyleSheet} from 'react-native';
import {flexConstants} from '../../themes/flexConstant';
import {getStatusBarHeight} from '../../helpers/statusBarHeight';
import {fontName, fontSize} from '../../themes/appFonts';
import {appColors} from '../../themes/appColor';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 10,
    flexDirection: 'row',
    marginTop: getStatusBarHeight(),
  },
  leftContainer: {
    flex: 1,
    alignItems: flexConstants.flexStart,
    justifyContent: flexConstants.flexCenter,
  },
  centerContainer: {
    flex: 4,
    alignItems: flexConstants.flexCenter,
    justifyContent: flexConstants.flexCenter,
  },
  rightContainer: {
    flex: 1,
    alignItems: flexConstants.flexEnd,
    justifyContent: flexConstants.flexCenter,
  },
  iconContainer: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    alignItems: flexConstants.flexCenter,
    justifyContent: flexConstants.flexCenter,
  },
  leftIcon: {
    height: 32,
    width: 32,
  },
  rightIcon: {
    height: 24,
    width: 24,
  },
  titleStyle: {
    fontSize: fontSize.f22,
    lineHeight: fontSize.f27,
    textAlign: flexConstants.flexCenter,
    fontFamily: fontName.medium,
    color: appColors.blue,
  },
});

export default styles;
