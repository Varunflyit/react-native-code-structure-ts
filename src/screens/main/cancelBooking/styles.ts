import {StyleSheet} from 'react-native';
import {appColors} from '../../../themes/appColor';
import {flexConstants} from '../../../themes/flexConstant';
import {fontName, fontSize} from '../../../themes/appFonts';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: appColors.white,
  },
  innerContainer: {
    paddingHorizontal: 20,
    width: '100%',
    flex: 1,
  },
  notHaveText: {
    fontSize: fontSize.f15,
    lineHeight: fontSize.f22,
    textAlign: flexConstants.flexCenter,
    fontFamily: fontName.regular,
    color: appColors.textFielplaceholderColor,
  },
});

export default styles;
