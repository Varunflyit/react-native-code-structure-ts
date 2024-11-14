import {StyleSheet} from 'react-native';
import {fontName} from '../../../../../themes/appFonts';
import {flexConstants} from '../../../../../themes/flexConstant';

const styles = StyleSheet.create({
  contentContainerStyle: {
    flexDirection: flexConstants.flexRow,
    height: 41,
    paddingHorizontal: 8,
  },
  titleText: {
    textAlign: flexConstants.flexCenter,
    textAlignVertical: 'center',
    fontFamily: fontName.medium,
    paddingHorizontal: 24,
  },
  touchStyle: {
    flex: 1,
    height: '100%',
    borderRadius: 22,
    alignItems: flexConstants.flexCenter,
    justifyContent: 'center',
  },
});

export default styles;
