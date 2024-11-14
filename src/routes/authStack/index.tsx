import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {navigationRef} from '../navigationServices';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppNavigationOptions, AppRoutes} from '../../themes/appConstans';
import GetStarted from '../../screens/auth/getStarted';
import ForgotPassword from '../../screens/auth/forgotPassword';
import Login from '../../screens/auth/login';
import OTPVerification from '../../screens/auth/otpVerification';
import Register from '../../screens/auth/register';
import ForgotPasswordOTP from '../../screens/auth/forgotPasswordOTP';
import RegisteredSuccess from '../../screens/auth/registeredSuccess';
import {appColors} from '../../themes/appColor';
import ChangePassword from '../../screens/auth/changePassword';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: appColors.lightBlue,
    },
  };

  try {
    return (
      <NavigationContainer theme={MyTheme} ref={navigationRef}>
        <Stack.Navigator
          initialRouteName={AppRoutes.getStarted}
          screenOptions={AppNavigationOptions}>
          <Stack.Screen name={AppRoutes.getStarted} component={GetStarted} />
          <Stack.Screen
            name={AppRoutes.forgotPassword}
            component={ForgotPassword}
          />
          <Stack.Screen
            name={AppRoutes.forgotPasswordOTP}
            component={ForgotPasswordOTP}
          />
          <Stack.Screen name={AppRoutes.login} component={Login} />
          <Stack.Screen
            name={AppRoutes.otpVerification}
            component={OTPVerification}
          />
          <Stack.Screen name={AppRoutes.register} component={Register} />
          <Stack.Screen
            name={AppRoutes.registerSuccess}
            component={RegisteredSuccess}
          />
          <Stack.Screen
            name={AppRoutes.changePassword}
            component={ChangePassword}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } catch (error) {
    console.error('An error occurred:', error);
  }
};

export default AuthStack;
