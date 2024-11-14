import React, {useMemo, useState} from 'react';
import {FlatList, View} from 'react-native';
import styles from './styles';
import Spacer from '../../../components/spacer';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {AppImages} from '../../../themes/appImages';
import UpcomingCard from './components/upcomingCard';
import ConfirmationModal from '../../../components/confirmationModal';
import {navigate} from '../../../routes/navigationServices';
import {AppRoutes, AppStrings} from '../../../themes/appConstans';

const UpcomingBookings: React.FC = () => {
  const [successModal, setSuccessModal] = useState(false);
  const data: any = [
    {
      id: 1,
      profile: AppImages.dummy,
      title: 'Hybrid Ceramic & Interior with Underbody',
      dayAndDate: 'Wed, 19 June',
      timing: '11:00 AM',
      servicePerson: 'Vikram Singh',
      otp: '2458',
    },
    {
      id: 2,
      profile: AppImages.dummy,
      title: 'Hybrid Ceramic & Interior with Underbody',
      dayAndDate: 'Wed, 19 June',
      timing: '11:00 AM',
      servicePerson: 'Vikram Singh',
      otp: '2458',
    },
    {
      id: 3,
      profile: AppImages.dummy,
      title: 'Hybrid Ceramic & Interior with Underbody',
      dayAndDate: 'Wed, 19 June',
      timing: '11:00 AM',
      servicePerson: 'Vikram Singh',
      otp: '2458',
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
      <View style={styles.innerContainer}>
        <Spacer height={responsiveHeight(1)} />
        <FlatList
          keyExtractor={(item: any) => item?.id.toString()}
          // ListEmptyComponent={EmptyComponent}
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={props => (
            <UpcomingCard
              {...props}
              setSuccessModal={(value: any) => setSuccessModal(value)}
            />
          )}
          ItemSeparatorComponent={() => SpacingComponents(4)}
          ListFooterComponent={() => SpacingComponents(10)}
          ListHeaderComponent={() => SpacingComponents(2)}
          contentContainerStyle={styles.flatlistStyle}
        />
      </View>
      <ConfirmationModal
        visible={successModal}
        customImageStyle={{
          width: responsiveWidth(16),
          height: responsiveWidth(16),
        }}
        logo={AppImages.cancelAppointment}
        heading={'Cancel Appointment'}
        title={`Are you sure you want to cancel this service with Vikram at 11:00AM June 19 2024.`}
        onClose={() => {
          setSuccessModal(false);
        }}
        okText={AppStrings.confirm.toUpperCase()}
        onSubmit={() => {
          setSuccessModal(false);
          navigate(AppRoutes.cancelBooking);
        }}
      />
    </View>
  );
};

export default UpcomingBookings;
