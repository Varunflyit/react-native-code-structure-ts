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
  starStyle: {
    width: 16,
    height: 16,
  },
  middleView: {
    flexDirection: 'row',
    marginHorizontal: 12,
    paddingVertical: 16,
  },
  topView: {
    flexDirection: 'row',
    alignItems: flexConstants.flexCenter,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  topView1: {
    flexDirection: flexConstants.flexRow,
    alignItems: flexConstants.flexCenter,
    marginTop: 6,
  },
  carWashStyle: {
    fontSize: fontSize.f14,
    lineHeight: fontSize.f16,
    textAlign: flexConstants.flexLeft,
    fontFamily: fontName.medium,
    color: appColors.textBlack,
  },
  titleStyle: {
    fontSize: fontSize.f12,
    lineHeight: fontSize.f18,
    textAlign: flexConstants.flexLeft,
    fontFamily: fontName.medium,
    color: appColors.textFielplaceholderColor,
  },
  descStyle: {
    fontSize: fontSize.f14,
    lineHeight: fontSize.f18,
    fontFamily: fontName.semiBold,
    color: appColors.textBlack,
    paddingTop: 4,
  },
  profileImage: {
    borderRadius: responsiveWidth(7),
    width: responsiveWidth(13),
    height: responsiveWidth(13),
  },
  tickCircle: {
    width: responsiveWidth(6.5),
    height: responsiveWidth(6.5),
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
    alignSelf: 'flex-start',
    width: responsiveWidth(20),
    height: 28,
    marginTop: 4,
  },
});

export default styles;
