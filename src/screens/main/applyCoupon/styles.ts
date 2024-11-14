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
    fontSize: fontSize.f14,
    lineHeight: fontSize.f20,
    textAlign: flexConstants.flexRight,
    fontFamily: fontName.regular,
    color: appColors.inputLabel,
  },
  flatlistStyle: {
    flexGrow: 1,
  },
});

export default styles;
