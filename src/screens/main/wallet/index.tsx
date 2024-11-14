import React, {useMemo} from 'react';
import {FlatList, ScrollView, Text, View} from 'react-native';
import styles from './styles';
import {AppStrings} from '../../../themes/appConstans';
import Header from '../../../components/header';
import Spacer from '../../../components/spacer';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import {AppImages} from '../../../themes/appImages';
import FastImage from 'react-native-fast-image';
import {appColors} from '../../../themes/appColor';
import ReferralCard from './components/referralCard';
import HistoryCard from './components/historyCard';

const Wallet: React.FC = () => {
  const data = [
    {
      id: 1,
      profile: AppImages.user1,
      name: 'Jackson David',
      date: '05 June, 2024',
      status: '100 Coins',
      isCompleted: true,
    },
    {
      id: 2,
      profile: AppImages.user2,
      name: 'Rehmem Khihal',
      date: '20 May, 2024',
      status: 'Pending',
      isCompleted: false,
    },
    {
      id: 3,
      profile: AppImages.user3,
      name: 'Fazur Nalim',
      date: '12 May, 2024',
      status: 'Pending',
      isCompleted: false,
    },
    {
      id: 4,
      profile: AppImages.user4,
      name: 'Amritesh Gupta',
      date: '05 May, 2024',
      status: 'Pending',
      isCompleted: false,
    },
    {
      id: 5,
      profile: AppImages.user5,
      name: 'Priyanka Kumari',
      date: '02 May, 2024',
      status: 'Pending',
      isCompleted: false,
    },
  ];

  const data1 = [
    {
      id: 1,
      title: 'Refund Added to Your Wallet',
      date: '15 JUNE, 2024',
      transaction: '+₹580',
    },
    {
      id: 2,
      title: `Invite Accepted! You've Earned Coins`,
      date: '02 JUNE, 2024',
      transaction: '100',
    },
  ];

  const SpacingComponents = (height: number) => {
    const spacingComponent = useMemo(() => {
      return <Spacer height={responsiveHeight(height)} />;
    }, [height]);

    return spacingComponent;
  };

  return (
    <View style={styles.mainContainer}>
      <Header
        // leftIconPress={() => goBack()}
        // leftIcon={AppImages.backBtn}
        title={AppStrings.wallet}
      />
      <ScrollView
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.innerContainer}>
        <FastImage
          style={styles.walletCard}
          resizeMode="stretch"
          source={AppImages.walletCard}
        />
        <Spacer height={responsiveHeight(5)} />
        <Text style={styles.walletBalance}>{AppStrings.walletBalance}</Text>
        <Text style={styles.balanceText}>{'₹580'}</Text>
        <Spacer height={responsiveHeight(13)} />
        <View style={styles.coinsContainer}>
          <FastImage
            resizeMode="contain"
            style={styles.coinsLogo}
            source={AppImages.coins}
          />
          <Text style={styles.walletCoins}>{AppStrings.walletCoins}</Text>
          <Text style={styles.walletCoins2}>{'100'}</Text>
        </View>
        <Spacer height={responsiveHeight(3)} />
        <Text style={styles.myRefferals}>
          {AppStrings.myRefferals}
          <Text style={{...styles.myRefferals, color: appColors.blue}}>
            {' (5)'}
          </Text>
        </Text>
        <FlatList
          keyExtractor={(item: any) => item?.id.toString()}
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={props => <ReferralCard {...props} />}
          ItemSeparatorComponent={() => SpacingComponents(1.2)}
          ListFooterComponent={() => SpacingComponents(3)}
          ListHeaderComponent={() => SpacingComponents(2)}
          contentContainerStyle={styles.flatlistStyle}
        />
        <Text style={styles.myRefferals}>{AppStrings.walletHistory}</Text>
        <FlatList
          keyExtractor={(item: any) => item?.id.toString()}
          showsVerticalScrollIndicator={false}
          data={data1}
          renderItem={props => <HistoryCard {...props} />}
          ItemSeparatorComponent={() => SpacingComponents(2)}
          ListFooterComponent={() => SpacingComponents(3)}
          ListHeaderComponent={() => SpacingComponents(2)}
          contentContainerStyle={styles.flatlistStyle}
        />
        <Spacer height={responsiveHeight(10)} />
      </ScrollView>
    </View>
  );
};

export default Wallet;
