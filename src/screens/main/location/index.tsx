/* eslint-disable react-native/no-inline-styles */
import React, {useMemo} from 'react';
import {FlatList, ImageBackground, Text, View} from 'react-native';
import styles from './styles';
import {AppRoutes, AppStrings} from '../../../themes/appConstans';
import Header from '../../../components/header';
import Spacer from '../../../components/spacer';
import {AppImages} from '../../../themes/appImages';
import {goBack, navigate} from '../../../routes/navigationServices';
import FastImage from 'react-native-fast-image';
import {appColors} from '../../../themes/appColor';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import LocationView from './components/locationView';
import Button from '../../../components/button';

const Location: React.FC = () => {
  const data = [
    {
      id: 1,
      name: 'University of Washington',
    },
    {
      id: 2,
      name: 'Woodland Park',
    },
    {
      id: 3,
      name: 'Husky Stadium',
    },
  ];

  const SpacingComponents = (width: number) => {
    const spacingComponent = useMemo(() => {
      return <Spacer width={responsiveWidth(width)} />;
    }, [width]);

    return spacingComponent;
  };

  return (
    <ImageBackground source={AppImages.map} style={styles.mainContainer}>
      <Header
        leftIconPress={() => goBack()}
        leftIcon={AppImages.backBtn}
        title={AppStrings.location.toUpperCase()}
      />
      <View style={styles.innerContainer}>
        <View style={styles.topLine} />
        <Spacer height={8} />
        <View style={styles.middleView}>
          <FastImage
            resizeMode="stretch"
            style={styles.iconStyle}
            source={AppImages.pickup}
          />
          <View style={{marginStart: 12}}>
            <Text style={styles.notHaveText}>{AppStrings.pickup}</Text>
            <Text style={styles.locationText}>
              {AppStrings.myCurrentLocation}
            </Text>
          </View>
        </View>
        <Spacer
          height={0.5}
          background={appColors.greyLight}
          marginVertical={10}
        />
        <View style={styles.middleView}>
          <FastImage
            resizeMode="stretch"
            style={styles.iconStyle}
            source={AppImages.dropoff}
          />
          <View style={{marginStart: 12}}>
            <Text style={styles.notHaveText}>{AppStrings.dropoff}</Text>
            <Text style={styles.locationText}>
              {'105 William St, Chicago, US'}
            </Text>
          </View>
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
            ListFooterComponent={() => SpacingComponents(4)}
            ListHeaderComponent={() => SpacingComponents(4)}
            data={data}
            renderItem={props => <LocationView {...props} />}
          />
          <Button
            onPress={() => {
              navigate(AppRoutes.addAVehicle);
            }}
            title={AppStrings.done}
            style={{width: responsiveWidth(36), height: 40}}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default Location;
