import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import {AppRoutes, AppStrings} from '../../../../../themes/appConstans';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import Spacer from '../../../../../components/spacer';
import Button from '../../../../../components/button';
import {replace} from '../../../../../routes/navigationServices';
import {BlurView} from '@react-native-community/blur';
import {useDispatch} from 'react-redux';
import {firstTimeAppOpenedAction} from '../../../../../redux/actions/auth';

const BottomCard: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <View style={styles.mainContainer}>
      <BlurView
        style={styles.absolute}
        blurType="dark"
        blurAmount={8}
        reducedTransparencyFallbackColor="white"
      />
      <Text style={styles.carWashStyle}>{AppStrings.carWash}</Text>
      <Text style={styles.textStyle}>{AppStrings.carWashDesc}</Text>
      <Spacer height={responsiveHeight(2.5)} />
      <Button
        onPress={() => {
          dispatch(firstTimeAppOpenedAction());
          replace(AppRoutes.login);
        }}
        title={AppStrings.getStarted}
      />
    </View>
  );
};

export default BottomCard;
