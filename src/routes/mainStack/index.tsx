import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import AddAVehicle from '../../screens/main/addAVehicle';
import BottomTabRoutes from '../BottomTabRoutes';
import EditProfile from '../../screens/main/editProfile';
import Services from '../../screens/main/services';
import ServiceDetails from '../../screens/main/serviceDetails';
import Location from '../../screens/main/location';
import BookingDetails from '../../screens/main/bookingDetails';
import PaymentMethod from '../../screens/main/paymentMethod';
import ApplyCoupon from '../../screens/main/applyCoupon';
import PaymentDetails from '../../screens/main/paymentDetails';
import RescheduleBooking from '../../screens/main/rescheduleBooking';
import CancelBooking from '../../screens/main/cancelBooking';
import RateUs from '../../screens/main/rateUs';
import ReferralRewards from '../../screens/main/referralRewards';

import {navigationRef} from '../navigationServices';
import {AppNavigationOptions, AppRoutes} from '../../themes/appConstans';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const MainStack = () => {
  try {
    return (
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator
          initialRouteName={AppRoutes.addAVehicle}
          screenOptions={AppNavigationOptions}>
          <Stack.Screen name={AppRoutes.addAVehicle} component={AddAVehicle} />
          <Stack.Screen
            name={AppRoutes.bottomTabRoutes}
            component={BottomTabRoutes}
          />
          <Stack.Screen name={AppRoutes.editProfile} component={EditProfile} />
          <Stack.Screen name={AppRoutes.services} component={Services} />
          <Stack.Screen
            name={AppRoutes.serviceDetails}
            component={ServiceDetails}
          />
          <Stack.Screen name={AppRoutes.location} component={Location} />
          <Stack.Screen
            name={AppRoutes.bookingDetails}
            component={BookingDetails}
          />
          <Stack.Screen
            name={AppRoutes.paymentMethod}
            component={PaymentMethod}
          />
          <Stack.Screen name={AppRoutes.applyCoupon} component={ApplyCoupon} />
          <Stack.Screen
            name={AppRoutes.paymentDetails}
            component={PaymentDetails}
          />
          <Stack.Screen
            name={AppRoutes.reschedule}
            component={RescheduleBooking}
          />
          <Stack.Screen
            name={AppRoutes.cancelBooking}
            component={CancelBooking}
          />
          <Stack.Screen name={AppRoutes.rateUs} component={RateUs} />
          <Stack.Screen
            name={AppRoutes.referralRewards}
            component={ReferralRewards}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } catch (error) {
    console.error('An error occurred:', error);
  }
};

export default MainStack;
