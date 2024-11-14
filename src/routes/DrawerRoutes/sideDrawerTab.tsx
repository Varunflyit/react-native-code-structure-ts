/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {AppImages} from '../../themes/appImages';
import styles from './styles';
import {
  DeviceEventEmitter,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  FlatList,
  View,
  Platform,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {AppRoutes, AppStrings} from '../../themes/appConstans';
import {navigate, reset} from '../navigationServices';
import {DrawerArray} from './drawerRoutes';
import LogoutModal from '../../components/logoutModal';
import {useDispatch} from 'react-redux';
import {logoutAction} from '../../redux/actions/auth';

export function CustomDrawerContent(props: any) {
  const dispatch = useDispatch();
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [showModal, setShowModal] = React.useState(false);
  console.log(selectedIndex, 'selectedIndex');

  const onTabChangeNavigate = (index: number) => {
    switch (index) {
      case 0:
        navigate(AppRoutes.home);
        break;
      case 1:
        navigate(AppRoutes.wallet);
        DeviceEventEmitter.emit('setBottomIndex', 1);
        break;
      case 2:
        navigate(AppRoutes.referralRewards);
        break;
      case 3:
        navigate(AppRoutes.home);
        break;
      case 4:
        navigate(AppRoutes.home);
        break;
      case 5:
        navigate(AppRoutes.home);
        break;
      case 6:
        navigate(AppRoutes.home);
        break;
      case 7:
        setShowModal(true);
        break;
      default:
        break;
    }
  };

  return (
    <View {...props} style={{flex: 1}}>
      <ImageBackground
        resizeMode="stretch"
        style={styles.imageBackground}
        source={AppImages.drawerBg}>
        <View style={{alignSelf: 'flex-start'}}>
          <FastImage
            resizeMode="stretch"
            style={styles.profileStyle}
            source={AppImages.profile2}
          />
          <TouchableOpacity
            onPress={() => navigate(AppRoutes.editProfile)}
            activeOpacity={0.7}
            style={styles.editProfileView}>
            <FastImage
              resizeMode="stretch"
              style={styles.pencilStyle}
              source={AppImages.pencil}
            />
            <Text style={styles.editText}>{AppStrings.editProfile}</Text>
          </TouchableOpacity>
        </View>
        <Text style={[styles.nameStyle]}>{'Larry Davis'}</Text>
      </ImageBackground>
      <FlatList
        contentContainerStyle={{
          marginVertical: Platform.OS === 'ios' ? 30 : 10,
          flexGrow: 1,
        }}
        data={DrawerArray}
        keyExtractor={item => item.name}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                setSelectedIndex(index);
                onTabChangeNavigate(index);
              }}
              activeOpacity={1}
              style={styles.tabItemContainer}>
              <View style={styles.tabItem}>
                <Image
                  source={item.icon}
                  style={[styles.tabItemImage]}
                  resizeMode="contain"
                />
                <Text style={[styles.tabItemLabel]}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
      <LogoutModal
        visible={showModal}
        title={AppStrings.logout2}
        subTitle={AppStrings.areYouSure}
        cancelText={AppStrings.cancel.toUpperCase()}
        okText={AppStrings.logout2.toUpperCase()}
        onClose={() => setShowModal(false)}
        onSubmit={() => {
          dispatch(logoutAction());
          setShowModal(false);
          reset(AppRoutes.login, 0);
        }}
      />
    </View>
  );
}
