/* eslint-disable react-native/no-inline-styles */
import React, {useMemo, useState} from 'react';
import {FlatList, Platform, Text, View} from 'react-native';
import styles from './styles';
import {AppStrings} from '../../../themes/appConstans';
import Header from '../../../components/header';
import TextField from '../../../components/textField';
import Spacer from '../../../components/spacer';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {AppImages} from '../../../themes/appImages';
import {goBack} from '../../../routes/navigationServices';
import CouponCard from './components/couponCard';
import ConfirmationModal from '../../../components/confirmationModal';

const ApplyCoupon: React.FC = () => {
  const [coupon, setCoupon] = useState<string>('');
  const [successModal, setSuccessModal] = useState(false);

  const RightComponent = () => {
    const rightComponent = useMemo(() => {
      return <Text style={styles.notHaveText}>{AppStrings.apply}</Text>;
    }, []);

    return rightComponent;
  };

  const SpacingComponents = (height: number) => {
    const spacingComponent = useMemo(() => {
      return <Spacer height={responsiveHeight(height)} />;
    }, [height]);

    return spacingComponent;
  };

  const data: any = [
    {
      id: 1,
      title: AppStrings.flatdeal,
      subTitle: 'Save ₹50 on this Service',
      description: 'Use code FLATDEAL & get FLAT ₹50 Off on ordersabove ₹350',
    },
    {
      id: 2,
      title: AppStrings.flatdeal,
      subTitle: 'Save ₹50 on this Service',
      description: 'Use code FLATDEAL & get FLAT ₹50 Off on ordersabove ₹350',
    },
    {
      id: 3,
      title: AppStrings.flatdeal,
      subTitle: 'Save ₹50 on this Service',
      description: 'Use code FLATDEAL & get FLAT ₹50 Off on orders above ₹350',
    },
  ];

  return (
    <View style={styles.mainContainer}>
      <Header
        leftIconPress={() => goBack()}
        leftIcon={AppImages.backBtn}
        title={AppStrings.applyCoupon.toUpperCase()}
      />
      <View style={styles.innerContainer}>
        <Spacer height={responsiveHeight(1)} />
        <TextField
          placeholder={AppStrings.enterCouponCode}
          value={coupon}
          onChangeText={(text: string) => {
            setCoupon(text.trimStart());
          }}
          autoCapitalize={'none'}
          ReturnKeyType={'done'}
          maxLength={20}
          RightComp={RightComponent}
          inputStyle={{height: Platform.OS === 'ios' ? 32 : 50}}
        />
        <Spacer height={responsiveHeight(1)} />
        <FlatList
          keyExtractor={(item: any) => item?.id.toString()}
          // ListEmptyComponent={EmptyComponent}
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={props => (
            <CouponCard
              {...props}
              setSuccessModal={() => setSuccessModal(true)}
            />
          )}
          ItemSeparatorComponent={() => SpacingComponents(4)}
          ListFooterComponent={() => SpacingComponents(10)}
          ListHeaderComponent={() => SpacingComponents(2)}
          contentContainerStyle={styles.flatlistStyle}
        />
        <ConfirmationModal
          visible={successModal}
          logo={AppImages.gift}
          customImageStyle={{
            width: responsiveWidth(30),
            height: responsiveHeight(14),
            marginBottom: responsiveHeight(5),
          }}
          customWhiteContainerStyle={{paddingVertical: responsiveHeight(7)}}
          heading={'‘FLATDEAL’ applied'}
          title0={'₹50 '}
          title={`savings with this coupon`}
          onClose={() => {
            setSuccessModal(false);
          }}
        />
      </View>
    </View>
  );
};

export default ApplyCoupon;
