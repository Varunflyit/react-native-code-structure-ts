/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import {AppRoutes, AppStrings} from '../../../themes/appConstans';
import Header from '../../../components/header';
import Spacer from '../../../components/spacer';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Button from '../../../components/button';
import {AppImages} from '../../../themes/appImages';
import {goBack, navigate} from '../../../routes/navigationServices';
import FastImage from 'react-native-fast-image';
import {appColors} from '../../../themes/appColor';

const PaymentDetails: React.FC = () => {
  return (
    <View style={styles.mainContainer}>
      <Header title={AppStrings.paymentDetails.toUpperCase()} />
      <View style={styles.innerContainer}>
        <Spacer height={responsiveHeight(2)} />
        <FastImage
          resizeMode="contain"
          source={AppImages.success}
          style={styles.successStyle}
        />
        <Spacer height={responsiveHeight(2)} />
        <Text style={styles.notHaveText}>{AppStrings.paymentReceived}</Text>
        <Spacer height={responsiveHeight(1)} />
        <Text style={styles.signUpText}>{AppStrings.congratulations}</Text>
        <Spacer height={responsiveHeight(5)} />
        <View style={styles.outerContainer}>
          <Text style={styles.receiptStyle}>{AppStrings.paymentReceipt}</Text>
          <Text style={styles.dateStyle}>{'1 June, 2024'}</Text>
          <View style={styles.topView}>
            <Text style={styles.carWashStyle}>{'Total Amount Paid'}</Text>
            <Text style={styles.titleStyle}>{'₹481'}</Text>
          </View>
          <Spacer
            height={0.5}
            width={responsiveWidth(88)}
            background={appColors.textFielplaceholderColor}
          />
          <Spacer height={responsiveHeight(2)} />
          <View style={styles.bottomView}>
            <Text style={styles.descStyle}>
              {'Hybrid Ceramic & Interior with Underbody'}
            </Text>
            <Text style={styles.cashStyle}>{'₹450'}</Text>
          </View>
          <View style={styles.bottomView}>
            <Text style={styles.descStyle}>{'Coupon Applied (FLATDEAL)'}</Text>
            <Text style={{...styles.cashStyle, color: appColors.greenDark}}>
              {'-₹50'}
            </Text>
          </View>
          <View style={styles.bottomView}>
            <Text style={styles.descStyle}>{'GST 18%'}</Text>
            <Text style={styles.cashStyle}>{'₹81'}</Text>
          </View>
          <View style={styles.bottomView}>
            <Text style={styles.descStyle}>{'Payment Status'}</Text>
            <View style={styles.successView}>
              <Text
                style={{
                  ...styles.dateStyle,
                  marginTop: 0,
                  color: appColors.greenDark,
                }}>
                {'Success'}
              </Text>
            </View>
          </View>
        </View>
        <Spacer flex={1} />
        <Button
          onPress={() => {
            navigate(AppRoutes.bottomTabRoutes);
          }}
          title={AppStrings.backToHome}
          style={{width: responsiveWidth(70)}}
        />
        <Spacer flex={1} />
      </View>
    </View>
  );
};

export default PaymentDetails;
