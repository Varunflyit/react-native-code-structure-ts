/* eslint-disable react-native/no-inline-styles */
import React, {useMemo, useState} from 'react';
import {FlatList, Platform, ScrollView, Text, View} from 'react-native';
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
import CreditCard from './components/creditCard';
import PaymentCard from './components/paymentCard';
import TextField from '../../../components/textField';
import FastImage from 'react-native-fast-image';
import {appColors} from '../../../themes/appColor';

const PaymentMethod: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedIndex1, setSelectedIndex1] = useState(0);
  const data = [
    {
      id: 1,
      name: AppStrings.mastercard,
      number: 'xxxx xxxx xxxx 1234',
    },
    {
      id: 2,
      name: AppStrings.visa,
      number: 'xxxx xxxx xxxx 1234',
    },
  ];

  const data1 = [
    {
      id: 1,
      name: 'Wallet',
      type: '',
      image: AppImages.wallet,
    },
    {
      id: 2,
      name: 'Google Pay',
      type: 'UPI',
      image: AppImages.googlePay,
    },
    {
      id: 3,
      name: 'PhonePe',
      type: 'UPI',
      image: AppImages.phonepe,
    },
    {
      id: 4,
      name: 'Paytm',
      type: 'UPI',
      image: AppImages.paytm,
    },
  ];

  const SpacingComponents = (height: number) => {
    const spacingComponent = useMemo(() => {
      return <Spacer height={responsiveWidth(height)} />;
    }, [height]);

    return spacingComponent;
  };

  const RightComponent = () => {
    const rightComponent = useMemo(() => {
      return (
        <FastImage
          resizeMode="stretch"
          source={AppImages.rightArrow}
          style={styles.rightArrow}
        />
      );
    }, []);

    return rightComponent;
  };

  return (
    <View style={styles.mainContainer}>
      <Header
        leftIconPress={() => goBack()}
        leftIcon={AppImages.backBtn}
        title={AppStrings.paymentMethod}
      />
      <ScrollView contentContainerStyle={styles.innerContainer}>
        <Text style={styles.services}>{AppStrings.choosePaymentMethod}</Text>
        <View style={styles.cardView}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={styles.dotStyle}>
              <View style={styles.innerDot} />
            </View>
            <Text style={styles.creditText}>{AppStrings.creditCard}</Text>
          </View>
          <View>
            <FlatList
              bounces={false}
              keyExtractor={(item: any) => item?.id.toString()}
              showsVerticalScrollIndicator={false}
              ItemSeparatorComponent={() => SpacingComponents(2)}
              ListFooterComponent={() => SpacingComponents(3)}
              ListHeaderComponent={() => SpacingComponents(4)}
              data={data}
              renderItem={props => (
                <CreditCard
                  {...props}
                  selectedIndex={selectedIndex}
                  setSelectedIndex={setSelectedIndex}
                />
              )}
            />
          </View>
          <Text style={styles.newCardText}>+ {AppStrings.addNewCard}</Text>
        </View>
        <View>
          <FlatList
            bounces={false}
            keyExtractor={(item: any) => item?.id.toString()}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => SpacingComponents(3)}
            ListFooterComponent={() => SpacingComponents(3)}
            ListHeaderComponent={() => SpacingComponents(1)}
            data={data1}
            renderItem={props => (
              <PaymentCard
                {...props}
                selectedIndex={selectedIndex1}
                setSelectedIndex={setSelectedIndex1}
              />
            )}
          />
        </View>
        <Spacer height={responsiveHeight(1)} />
        <TextField
          label={AppStrings.offers}
          labelStyle={styles.offers}
          placeholder={AppStrings.enterEmail2}
          value={'Apply Coupon'}
          keyboardType="email-address"
          autoCapitalize={'none'}
          ReturnKeyType={'done'}
          maxLength={60}
          editable={false}
          onTouchEnd={() => {
            navigate(AppRoutes.applyCoupon);
          }}
          RightComp={RightComponent}
          inputStyle={{height: Platform.OS === 'ios' ? 32 : 50}}
        />
        <Spacer height={responsiveHeight(4)} />
        <View style={styles.outerContainer}>
          <View style={styles.topView}>
            <View>
              <Text style={styles.carWashStyle}>{'Total Amount Paid'}</Text>
            </View>
            <Text style={styles.titleStyle}>{'₹481'}</Text>
          </View>
          <Spacer
            height={0.5}
            width={responsiveWidth(92)}
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
            <Text style={styles.cashStyle}>{'-₹50'}</Text>
          </View>
          <View style={styles.bottomView}>
            <Text style={styles.descStyle}>{'GST 18%'}</Text>
            <Text style={styles.cashStyle}>{'₹81'}</Text>
          </View>
        </View>

        <Spacer height={responsiveHeight(8)} />
        <Button
          onPress={() => {
            navigate(AppRoutes.paymentDetails);
          }}
          title={AppStrings.proceedToPay}
          style={{width: responsiveWidth(70)}}
        />
        <Spacer height={responsiveHeight(8)} />
      </ScrollView>
    </View>
  );
};

export default PaymentMethod;
