import React, {useMemo} from 'react';
import {FlatList, Text, View} from 'react-native';
import styles from './styles';
import {AppStrings} from '../../../themes/appConstans';
import Header from '../../../components/header';
import Spacer from '../../../components/spacer';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import {AppImages} from '../../../themes/appImages';
import NotificationCard from './components/notificationCard';
import FastImage from 'react-native-fast-image';

const Notifications: React.FC = () => {
  const SpacingComponents = (height: number) => {
    const spacingComponent = useMemo(() => {
      return <Spacer height={responsiveHeight(height)} />;
    }, [height]);

    return spacingComponent;
  };

  const EmptyComponent = () => {
    const emptyComponent = useMemo(() => {
      return (
        <View style={styles.emptyContainer}>
          <FastImage
            style={styles.noNotification}
            source={AppImages.noNotificationIcon}
            resizeMode="contain"
          />
          <Spacer height={responsiveHeight(4)} />
          <Text style={styles.noNotificationStyle}>
            {AppStrings.noNotifications}
          </Text>
          <Spacer height={responsiveHeight(2)} />
          <Text style={styles.weWillStyle}>{AppStrings.weWillLet}</Text>
          <Spacer height={responsiveHeight(24)} />
        </View>
      );
    }, []);

    return emptyComponent;
  };

  const data1: any = [];
  console.log('data1', data1);

  const data: any = [
    {
      id: 1,
      type: 'Confirmation',
      title: '❌ Appointment Canceled',
      description:
        'Your car wash appointment on 19-06-2024 at 11 AM has been canceled. A refund of ₹481  has been processed to your Wallet.',
      date: 'now',
    },
    {
      id: 2,
      type: 'Confirmation',
      title: '🚗✨ Booking Confirmed!',
      description:
        'Your car wash appointment is confirmed for 19-06-2014 at 11 AM at Mohali Tower, Punjab 140308. Thank you for choosing Car Wash! ',
      date: '19-06-2024',
    },
    {
      id: 3,
      type: 'Wallet',
      title: '💰 Funds Added to Your Wallet.',
      description:
        'We are pleased to inform you that ₹500 has been successfully fund to your wallet.',
      date: '05-05-2024 ',
    },
    {
      id: 4,
      type: 'Earn',
      title: '🎁 Refer a Friend!',
      description:
        'Share the love! Refer a friend to Car Wash and both of you will earn rewards. Tap to invite now!',
      date: '21-04-2024 ',
    },
    {
      id: 5,
      type: 'Account',
      title: '🎉 Account Created!',
      description:
        'Welcome to Car Wash, Larry Davis! Your account has been created successfully. Explore and enjoy our services!',
      date: '11-04-2024',
    },
  ];

  return (
    <View style={styles.mainContainer}>
      <Header
        // leftIconPress={() => goBack()}
        // leftIcon={AppImages.backBtn}
        title={AppStrings.notification}
      />
      <FlatList
        keyExtractor={(item: any) => item?.id.toString()}
        ListEmptyComponent={EmptyComponent}
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={props => <NotificationCard {...props} />}
        ItemSeparatorComponent={() => SpacingComponents(4)}
        ListFooterComponent={() => SpacingComponents(15)}
        ListHeaderComponent={() => SpacingComponents(2)}
        contentContainerStyle={styles.flatlistStyle}
      />
    </View>
  );
};

export default Notifications;
