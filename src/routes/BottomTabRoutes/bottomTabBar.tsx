import {
  DeviceEventEmitter,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {navigate} from '../navigationServices';
import {AppRoutes} from '../../themes/appConstans';
import styles from './styles';
import {tabArray} from './tabRoutes';
import {appColors} from '../../themes/appColor';

const BottomTabBar = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  useEffect(() => {
    const subscribe = DeviceEventEmitter.addListener('setBottomIndex', data => {
      setSelectedIndex(data);
    });
    return () => {
      subscribe.remove();
    };
  }, []);

  const onTabChangeNavigate = (index: number) => {
    switch (index) {
      case 0:
        navigate(AppRoutes.home);
        break;
      case 1:
        navigate(AppRoutes.wallet);
        break;
      case 2:
        navigate(AppRoutes.myBookingsTab);
        break;
      case 3:
        navigate(AppRoutes.notification);
        break;
      case 4:
        navigate(AppRoutes.profile);
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.bottomTabBarContainer}>
      <FlatList
        contentContainerStyle={{backgroundColor: appColors.tabBarBg}}
        bounces={false}
        numColumns={5}
        data={tabArray}
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
                  tintColor={
                    selectedIndex === index ? appColors.blue : undefined
                  }
                />
                <Text style={[styles.tabItemLabel]}>
                  {selectedIndex === index ? item.name : ''}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default BottomTabBar;
