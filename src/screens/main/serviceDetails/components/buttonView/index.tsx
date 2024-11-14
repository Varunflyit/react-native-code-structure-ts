import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import Button from '../../../../../components/button';
import {AppRoutes, AppStrings} from '../../../../../themes/appConstans';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import {navigate} from '../../../../../routes/navigationServices';

const ButtonView = () => {
  return (
    <View style={styles.btnContainer}>
      <View>
        <Text numberOfLines={2} style={styles.priceStyle}>
          {'Price'}
        </Text>
        <Text numberOfLines={2} style={styles.priceStyle1}>
          {'₹450'}
        </Text>
      </View>
      <Button
        onPress={() => {
          navigate(AppRoutes.bookingDetails);
        }}
        title={AppStrings.bookService}
        style={{width: responsiveWidth(46)}}
      />
    </View>
  );
};

export default ButtonView;
