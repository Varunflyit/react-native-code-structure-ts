import {StyleSheet} from 'react-native';
import {appColors} from '../../../../../themes/appColor';
import {flexConstants} from '../../../../../themes/flexConstant';
import {fontName, fontSize} from '../../../../../themes/appFonts';

const styles = StyleSheet.create({
  mainContainer: {
    marginVertical: 20,
    borderRadius: 10,
    paddingVertical: 2,
    paddingHorizontal: 8,
    alignItems: flexConstants.flexCenter,
    justifyContent: flexConstants.flexCenter,
    backgroundColor: appColors.white,
    shadowColor: appColors.textBlack,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  carWashStyle: {
    fontSize: fontSize.f13,
    lineHeight: fontSize.f18,
    textAlign: flexConstants.flexCenter,
    fontFamily: fontName.regular,
    color: appColors.drawerText,
  },
});

export default styles;
