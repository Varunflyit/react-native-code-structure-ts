import {StyleSheet} from 'react-native';
import {appColors} from '../../../themes/appColor';
import {flexConstants} from '../../../themes/flexConstant';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: appColors.white,
    paddingHorizontal: 20,
    alignItems: flexConstants.flexCenter,
  },
});

export default styles;
