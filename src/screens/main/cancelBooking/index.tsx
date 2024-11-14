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
import ReasonCard from './components/reasonCard';
import ConfirmationModal from '../../../components/confirmationModal';

const CancelBooking: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [successModal, setSuccessModal] = useState(false);

  const SpacingComponents = (width: number) => {
    const spacingComponent = useMemo(() => {
      return <Spacer width={responsiveWidth(width)} />;
    }, [width]);

    return spacingComponent;
  };

  const data = [
    {
      id: 1,
      description: 'Service Person is not responding the call',
    },
    {
      id: 2,
      description: 'Something urgent just came up',
    },
    {
      id: 3,
      description: 'Service Person is not available',
    },
    {
      id: 4,
      description: 'Others',
    },
  ];

  return (
    <View style={styles.mainContainer}>
      <Header
        leftIconPress={() => goBack()}
        leftIcon={AppImages.backBtn}
        title={AppStrings.cancelBooking.toUpperCase()}
      />
      <View style={styles.innerContainer}>
        <Text style={styles.notHaveText}>
          {AppStrings.selectReasonForCancelation}
        </Text>
        <View
          style={{
            marginVertical: responsiveHeight(4),
          }}>
          <FlatList
            keyExtractor={(item: any) => item?.id.toString()}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => SpacingComponents(2)}
            ListFooterComponent={() => SpacingComponents(2)}
            ListHeaderComponent={() => SpacingComponents(2)}
            data={data}
            renderItem={props => (
              <ReasonCard
                {...props}
                selectedIndex={selectedIndex}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
        </View>
        <Spacer flex={1} />
        <Button
          onPress={() => {
            setSuccessModal(true);
          }}
          title={AppStrings.done}
          style={{width: responsiveWidth(70)}}
        />
        <Spacer flex={0.5} />
      </View>
      <ConfirmationModal
        visible={successModal}
        customImageStyle={{
          width: responsiveWidth(16),
          height: responsiveWidth(16),
        }}
        logo={AppImages.canceled}
        heading={'Appointment Canceled'}
        title={`Your car wash appointment on 11:00AM at June 19 2024 has been canceled. A refund of ₹481 has been processed to your Wallet.`}
        onClose={() => {
          setSuccessModal(false);
        }}
        okText={AppStrings.backToHome}
        onSubmit={() => {
          setSuccessModal(false);
          navigate(AppRoutes.bottomTabRoutes);
        }}
      />
    </View>
  );
};

export default CancelBooking;
