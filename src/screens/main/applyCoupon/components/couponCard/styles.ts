import {StyleSheet} from 'react-native';
import {appColors} from '../../../../../themes/appColor';
import {flexConstants} from '../../../../../themes/flexConstant';
import {fontName, fontSize} from '../../../../../themes/appFonts';
import {responsiveWidth} from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  mainContainer: {
    borderRadius: 16,
    borderWidth: 0.5,
    flex: 1,
    borderColor: appColors.textFielplaceholderColor,
    alignItems: flexConstants.flexStart,
    backgroundColor: appColors.greyBg,
  },
  middleView: {
    flexDirection: 'row',
    marginHorizontal: 20,
    paddingVertical: 20,
  },
  topView: {
    flexDirection: 'row',
    width: '100%',
    alignItems: flexConstants.flexCenter,
    justifyContent: 'space-between',
    paddingVertical: 18,
    paddingHorizontal: 20,
  },
  carWashStyle: {
    fontSize: fontSize.f14,
    lineHeight: fontSize.f16,
    textAlign: flexConstants.flexLeft,
    fontFamily: fontName.medium,
    color: appColors.textBlack,
  },
  descStyle: {
    fontSize: fontSize.f12,
    lineHeight: fontSize.f22,
    textAlign: flexConstants.flexLeft,
    fontFamily: fontName.regular,
    color: appColors.textFielplaceholderColor,
  },
  titleStyle: {
    fontSize: fontSize.f14,
    lineHeight: fontSize.f18,
    fontFamily: fontName.regular,
    color: appColors.greenDark,
    paddingTop: 4,
  },
  profileImage: {
    borderRadius: responsiveWidth(7),
    width: responsiveWidth(13),
    height: responsiveWidth(13),
  },
  rowView: {
    flex: 1,
  },
  bottomRow: {
    marginHorizontal: 12,
    paddingHorizontal: 12,
    paddingVertical: 12,
    marginBottom: 16,
    backgroundColor: appColors.lightBlue,
    borderRadius: 8,
    width: '93.5%',
  },
  textStyle: {
    fontSize: fontSize.f12,
    lineHeight: fontSize.f18,
    fontFamily: fontName.medium,
  },
  btnStyle: {
    width: responsiveWidth(26),
    height: 36,
  },
  btnView: {
    flexDirection: 'row',
    flexBasis: 1,
    width: responsiveWidth(83.5),
    justifyContent: 'space-between',
    marginHorizontal: 12,
    marginBottom: 16,
  },
});

export default styles;
