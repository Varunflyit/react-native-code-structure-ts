import {StyleSheet} from 'react-native';
import {appColors} from '../../../themes/appColor';
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: appColors.white,
  },
  innerContainer: {
    paddingTop: 16,
    width: '100%',
    flex: 1,
  },
});

export default styles;
