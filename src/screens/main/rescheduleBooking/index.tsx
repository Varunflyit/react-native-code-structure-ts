import React, {useMemo, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
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
import DateCard from './components/dateCard';
import TimeCard from './components/timeCard';
import {appColors} from '../../../themes/appColor';
import ConfirmationModal from '../../../components/confirmationModal';

const RescheduleBooking: React.FC = () => {
  const [successModal, setSuccessModal] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedTimeIndex, setSelectedTimeIndex] = useState(0);
  function generateDaysArray(daysCount: number) {
    const daysArray = [];
    const today = new Date();

    for (let i = 0; i < daysCount; i++) {
      const currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      const dayName = currentDate.toLocaleDateString('en-US', {
        weekday: 'long',
      });
      const formattedDate = currentDate.toISOString().split('T')[0]; // YYYY-MM-DD format

      daysArray.push({
        day: dayName,
        date: formattedDate,
      });
    }

    return daysArray;
  }

  function generateTimeArray(intervalHours: any) {
    const timeArray = [];

    for (let hour = 0; hour < 24; hour += intervalHours) {
      let period = hour < 12 ? 'AM' : 'PM';
      let hour12 = hour % 12;
      if (hour12 === 0) {
        hour12 = 12;
      }
      const timeString = `${hour12.toString().padStart(2, '0')}:00 ${period}`;
      timeArray.push(timeString);
    }

    return timeArray;
  }
  const timeArray = generateTimeArray(2);
  const daysArray = generateDaysArray(31); // Generates array for the next 7 days

  const SpacingComponents = (width: number) => {
    const spacingComponent = useMemo(() => {
      return <Spacer width={responsiveWidth(width)} />;
    }, [width]);

    return spacingComponent;
  };

  return (
    <View style={styles.mainContainer}>
      <Header
        leftIconPress={() => goBack()}
        leftIcon={AppImages.backBtn}
        title={AppStrings.rescheduleBooking.toUpperCase()}
      />
      <View style={styles.innerContainer}>
        <View
          style={{
            marginVertical: responsiveHeight(3),
          }}>
          <Text style={styles.notHaveText}>{AppStrings.selectDateAndDay}</Text>
          <FlatList
            horizontal
            keyExtractor={(item: any) => item?.date.toString()}
            showsHorizontalScrollIndicator={false}
            // ItemSeparatorComponent={() => SpacingComponents(2)}
            ListFooterComponent={() => SpacingComponents(5)}
            data={daysArray}
            renderItem={props => (
              <DateCard
                {...props}
                selectedIndex={selectedIndex}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
        </View>
        <View>
          <Text style={styles.notHaveText}>{AppStrings.selectTimeSlot}</Text>
          <FlatList
            horizontal
            keyExtractor={(item: any) => item?.toString()}
            showsHorizontalScrollIndicator={false}
            // ItemSeparatorComponent={() => SpacingComponents(2)}
            ListFooterComponent={() => SpacingComponents(5)}
            data={timeArray}
            renderItem={props => (
              <TimeCard
                {...props}
                selectedIndex={selectedTimeIndex}
                setSelectedIndex={setSelectedTimeIndex}
              />
            )}
          />
        </View>
        <Spacer height={responsiveHeight(4)} />
        <Text style={styles.notHaveText}>{AppStrings.yourLocation}</Text>
        <Text style={styles.addressText}>
          {'2972 Westheimer Rd. Santa Ana, Illinois 85486'}
        </Text>
        <Spacer height={0.5} background={appColors.blue} marginVertical={6} />
        <Spacer flex={1} />
        <Button
          onPress={() => {
            setSuccessModal(true);
          }}
          title={AppStrings.reschedule.toUpperCase()}
          style={{width: responsiveWidth(70)}}
        />
        <Spacer flex={1} />
      </View>
      <ConfirmationModal
        visible={successModal}
        customImageStyle={{
          width: responsiveWidth(16),
          height: responsiveWidth(16),
        }}
        logo={AppImages.reschedule}
        heading={'Booking Rescheduled!'}
        title={`Your car wash appointment has been rescheduled to 11:00AM June 19 2024 at Mohali Tower. See you then! `}
        onClose={() => {
          setSuccessModal(false);
        }}
        okText={'BACK TO HOME'}
        onSubmit={() => navigate(AppRoutes.bottomTabRoutes)}
      />
    </View>
  );
};

export default RescheduleBooking;
