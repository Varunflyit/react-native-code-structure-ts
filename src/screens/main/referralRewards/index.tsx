import React, {useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import styles from './styles';
import {AppStrings} from '../../../themes/appConstans';
import Header from '../../../components/header';
import Spacer from '../../../components/spacer';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import {AppImages} from '../../../themes/appImages';
import {goBack} from '../../../routes/navigationServices';
import FastImage from 'react-native-fast-image';
import Button from '../../../components/button';
import ReferEarnView from './components/referEarnView';
import ConfirmationModal from '../../../components/confirmationModal';

const ReferralRewards: React.FC = () => {
  const [successModal, setSuccessModal] = useState(false);

  return (
    <View style={styles.mainContainer}>
      <Header
        leftIconPress={() => goBack()}
        leftIcon={AppImages.backBtn}
        title={AppStrings.referralRewards}
      />
      <ScrollView
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.innerContainer}>
        <Spacer height={responsiveHeight(5)} />
        <View style={styles.topView}>
          <Text style={styles.referFriends}>{AppStrings.referFriends}</Text>
          <FastImage
            resizeMode="stretch"
            style={styles.referralRewards}
            source={AppImages.referralRewards}
          />
        </View>
        <Spacer height={responsiveHeight(6)} />
        <View style={styles.coinsContainer}>
          <View style={styles.coinsMidView}>
            <Text style={styles.walletCoins}>{'Carwashshare00'}</Text>
            <Text style={styles.walletCoins}>{'Copy'}</Text>
          </View>
          <Button
            onPress={() => {
              setSuccessModal(true);
            }}
            title={AppStrings.add}
            style={styles.btnStyle}
            textStyle={styles.textStyle}
          />
        </View>
        <Spacer height={responsiveHeight(3)} />
        <Text style={styles.myRefferals}>{AppStrings.howRefer}</Text>
        <Spacer height={responsiveHeight(3)} />
        <ReferEarnView
          title={'Login'}
          desc={'Login and we will assign a unique referral code to you.'}
        />
        <Spacer height={responsiveHeight(3)} />
        <ReferEarnView
          title={'Invite'}
          desc={
            'Invite friends to join the Car Wash app using a unique referral code. '
          }
        />
        <Spacer height={responsiveHeight(3)} />
        <ReferEarnView
          title={'Earn'}
          desc={'Earn coins when friends sign up or make their first purchase.'}
        />
        <Spacer height={responsiveHeight(5)} />
      </ScrollView>
      <ConfirmationModal
        visible={successModal}
        logo={AppImages.artwork}
        heading={'🎉 Invite Accepted!'}
        title={`Your friend has accepted your invite.`}
        title1={` You've earned 100 coins!`}
        onClose={() => {
          setSuccessModal(false);
        }}
      />
    </View>
  );
};

export default ReferralRewards;
