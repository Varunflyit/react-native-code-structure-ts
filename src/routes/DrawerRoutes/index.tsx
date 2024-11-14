/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {AppRoutes} from '../../themes/appConstans';
import Home from '../../screens/main/home';
import Wallet from '../../screens/main/wallet';
import {CustomDrawerContent} from './sideDrawerTab';

const Drawer = createDrawerNavigator();

const DrawerTabRoutes = () => {
  return (
    <Drawer.Navigator
      defaultStatus="closed"
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerType: 'back',
        headerShown: false,
        drawerStyle: {width: '70%'},
        overlayColor: '#00000030',
      }}>
      <Drawer.Screen name={AppRoutes.home} component={Home} />
      <Drawer.Screen name={AppRoutes.wallet} component={Wallet} />
      <Drawer.Screen name={AppRoutes.inviteFriends} component={Home} />
      <Drawer.Screen name={AppRoutes.about} component={Home} />
      <Drawer.Screen name={AppRoutes.support} component={Home} />
      <Drawer.Screen name={AppRoutes.termsAndConditions} component={Home} />
      <Drawer.Screen name={AppRoutes.privacy} component={Home} />
    </Drawer.Navigator>
  );
};

export default DrawerTabRoutes;
