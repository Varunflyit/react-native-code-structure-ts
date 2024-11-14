/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import Spacer from '../../../../../components/spacer';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import {appColors} from '../../../../../themes/appColor';
import {AppStrings} from '../../../../../themes/appConstans';
import Button from '../../../../../components/button';

const CouponCard = ({item, setSuccessModal}: any) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.topView}>
        <View>
          <Text style={styles.carWashStyle}>{item?.title}</Text>
          <Text style={styles.titleStyle}>{item?.subTitle}</Text>
        </View>
        <Button
          onPress={setSuccessModal}
          title={AppStrings.apply}
          style={styles.btnStyle}
          textStyle={styles.textStyle}
        />
      </View>
      <Spacer
        height={0.5}
        width={responsiveWidth(100)}
        background={appColors.textFielplaceholderColor}
      />
      <View style={styles.middleView}>
        <Text style={styles.descStyle}>{item?.description}</Text>
      </View>
    </View>
  );
};

export default CouponCard;
