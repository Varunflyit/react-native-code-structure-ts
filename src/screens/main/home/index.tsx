/* eslint-disable react-native/no-inline-styles */
import React, {useMemo, useState} from 'react';
import {DeviceEventEmitter, FlatList, Text, View} from 'react-native';
import styles from './styles';
import {AppRoutes, AppStrings} from '../../../themes/appConstans';
import Header from '../../../components/header';
import TextField from '../../../components/textField';
import Spacer from '../../../components/spacer';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {AppImages} from '../../../themes/appImages';
import {navigate} from '../../../routes/navigationServices';
import FastImage from 'react-native-fast-image';
import {appColors} from '../../../themes/appColor';
import {fontName, fontSize} from '../../../themes/appFonts';
import ServicesCard from './components/servicesCard';
import CategoriesCard from './components/categoriesCard';
import {useNavigation} from '@react-navigation/native';

const Home: React.FC = () => {
  const [services, setServices] = useState<string>('');
  const navigation = useNavigation();

  const data = [
    {
      id: 1,
      image: AppImages.dummy3,
      name: 'Pressure Car wash',
    },
    {
      id: 2,
      image: AppImages.dummy4,
      name: 'Underbody',
    },
    {
      id: 3,
      image: AppImages.dummy5,
      name: 'Waterless Cleaning',
    },
    {
      id: 4,
      image: AppImages.dummy6,
      name: 'Car deep Clean',
    },
    {
      id: 5,
      image: AppImages.dummy1,
      name: 'Pressure Car wash',
    },
    {
      id: 6,
      image: AppImages.dummy4,
      name: 'Underbody',
    },
  ];

  const data1 = [
    {
      id: 1,
      image: AppImages.dummy3,
      name: 'Car cleaning',
      description: 'Cleaning',
    },
    {
      id: 2,
      image: AppImages.dummy3,
      name: 'Car cleaning',
      description: 'Cleaning',
    },
    {
      id: 3,
      image: AppImages.dummy3,
      name: 'Car cleaning',
      description: 'Cleaning',
    },
    {
      id: 4,
      image: AppImages.dummy3,
      name: 'Car cleaning',
      description: 'Cleaning',
    },
    {
      id: 5,
      image: AppImages.dummy3,
      name: 'Car cleaning',
      description: 'Cleaning',
    },
    {
      id: 6,
      image: AppImages.dummy3,
      name: 'Car cleaning',
      description: 'Cleaning',
    },
  ];

  const SpacingComponents = (width: number) => {
    const spacingComponent = useMemo(() => {
      return <Spacer width={responsiveWidth(width)} />;
    }, [width]);

    return spacingComponent;
  };

  const CenterComponent = () => {
    const centerComponent = useMemo(() => {
      return (
        <View style={styles.centerHeader}>
          <FastImage
            source={AppImages.location}
            style={styles.locationIcon}
            resizeMode="stretch"
          />
          <View style={{paddingHorizontal: 6}}>
            <Text style={styles.notHaveText}>{AppStrings.myLocation}</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.signUpText}>
                {'Mohali Tower, Punjab 140308'}
              </Text>
              <FastImage
                source={AppImages.downArrow}
                style={styles.downIcon}
                resizeMode="stretch"
              />
            </View>
          </View>
        </View>
      );
    }, []);

    return centerComponent;
  };
  const LeftComponent = () => {
    const leftComponent = useMemo(() => {
      return (
        <FastImage
          source={AppImages.search}
          style={styles.searchIcon}
          resizeMode="contain"
        />
      );
    }, []);

    return leftComponent;
  };

  return (
    <View style={styles.mainContainer}>
      <Header
        leftIconPress={() => navigation.toggleDrawer()}
        rightIconPress={() => {
          navigate(AppRoutes.bottomTabRoutes, {screen: AppRoutes.profile});
          DeviceEventEmitter.emit('setBottomIndex', 4);
        }}
        leftIcon={AppImages.drawer}
        rightIcon={AppImages.profile}
        rightIconStyle={styles.rightIcon}
        leftIconStyle={styles.leftIcon}
        CenterComp={CenterComponent}
      />
      <View style={styles.innerContainer}>
        <TextField
          placeholder={AppStrings.searchServices}
          value={services}
          onChangeText={(text: string) => {
            setServices(text.trimStart());
          }}
          autoCapitalize={'none'}
          ReturnKeyType={'done'}
          maxLength={60}
          containerStyle={{
            marginHorizontal: 20,
            backgroundColor: appColors.greyBg,
            borderWidth: 0,
          }}
          inputStyle={{
            fontSize: fontSize.f12,
            lineHeight: fontSize.f17,
            fontFamily: fontName.medium,
            color: appColors.textFielplaceholderColor,
          }}
          LeftComp={LeftComponent}
        />
        <Spacer height={responsiveHeight(1.5)} />
        <View style={styles.topView}>
          <Text style={styles.services}>{AppStrings.services}</Text>
          <Text suppressHighlighting onPress={() => {}} style={styles.seeAll}>
            {AppStrings.seeAll}
          </Text>
        </View>
        <View
          style={{
            marginVertical: responsiveHeight(2),
          }}>
          <FlatList
            horizontal
            keyExtractor={(item: any) => item?.id.toString()}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => SpacingComponents(2)}
            ListFooterComponent={() => SpacingComponents(5)}
            ListHeaderComponent={() => SpacingComponents(5)}
            data={data}
            renderItem={props => <ServicesCard {...props} />}
          />
        </View>
        <Spacer height={responsiveHeight(3)} />
        <View style={styles.topView}>
          <Text style={styles.services}>{AppStrings.categories}</Text>
          <Text suppressHighlighting onPress={() => {}} style={styles.seeAll}>
            {AppStrings.seeAll}
          </Text>
        </View>
        <View
          style={{
            marginVertical: responsiveHeight(2),
          }}>
          <FlatList
            horizontal
            keyExtractor={(item: any) => item?.id.toString()}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => SpacingComponents(2)}
            ListFooterComponent={() => SpacingComponents(5)}
            ListHeaderComponent={() => SpacingComponents(5)}
            data={data1}
            renderItem={props => <CategoriesCard {...props} />}
          />
        </View>
        <Spacer height={responsiveHeight(5)} />
      </View>
    </View>
  );
};

export default Home;
