import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import {AppRoutes, AppStrings} from '../../../themes/appConstans';
import Spacer from '../../../components/spacer';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Button from '../../../components/button';
import {AppImages} from '../../../themes/appImages';
import FastImage from 'react-native-fast-image';
import {navigate} from '../../../routes/navigationServices';

const RegisteredSuccess: React.FC = () => {
  return (
    <View style={styles.mainContainer}>
      <Spacer flex={0.6} />
      <FastImage
        style={styles.fastImage}
        source={AppImages.successIcon}
        resizeMode="contain"
      />
      <Spacer height={responsiveHeight(2)} />
      <Text style={styles.registeredText}>{AppStrings.youAreRegistered}</Text>
      <Spacer height={responsiveHeight(3)} />
      <Text style={styles.weHaveSent}>{AppStrings.wehaveSentPassword}</Text>
      <Spacer flex={1} />
      <Button
        onPress={() => {
          navigate(AppRoutes.login);
        }}
        title={AppStrings.ok}
        style={{width: responsiveWidth(70)}}
      />
      <Spacer height={responsiveHeight(10.5)} />
    </View>
  );
};

export default RegisteredSuccess;
