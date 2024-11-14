import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AppRoutes} from '../../themes/appConstans';
import Wallet from '../../screens/main/wallet';
import MyBookingsTab from '../../screens/main/myBookingsTab';
import Notifications from '../../screens/main/notification';
import Profile from '../../screens/main/profile';
import BottomTabBar from './bottomTabBar';
import DrawerTabRoutes from '../DrawerRoutes';

const Tab = createBottomTabNavigator();

const BottomTabRoutes = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
      tabBar={() => <BottomTabBar />}>
      <Tab.Screen
        name={AppRoutes.drawerTabRoutes}
        component={DrawerTabRoutes}
      />
      <Tab.Screen name={AppRoutes.wallet} component={Wallet} />
      <Tab.Screen name={AppRoutes.myBookingsTab} component={MyBookingsTab} />
      <Tab.Screen name={AppRoutes.notification} component={Notifications} />
      <Tab.Screen name={AppRoutes.profile} component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomTabRoutes;
