/* eslint-disable react-native/no-inline-styles */
import React, {useMemo, useState} from 'react';
import {FlatList, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {AppRoutes, AppStrings} from '../../../themes/appConstans';
import Header from '../../../components/header';
import TextField from '../../../components/textField';
import Spacer from '../../../components/spacer';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Button from '../../../components/button';
import {AppImages} from '../../../themes/appImages';
import {goBack, navigate} from '../../../routes/navigationServices';
import CarCard from './components/carCard';
import FastImage from 'react-native-fast-image';

const AddAVehicle: React.FC = () => {
  const [brandName, setBrandName] = useState<string>('');
  const [modelName, setModelName] = useState<string>('');
  const [plateNumber, setPlateNumber] = useState<string>('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showBrand, setShowBrand] = useState(false);
  const [showModel, setShowModel] = useState(false);

  const data = [
    {
      id: 1,
      image: AppImages.carSuv,
      name: 'SUV',
    },
    {
      id: 2,
      image: AppImages.carSedan,
      name: 'Sedan',
    },
    {
      id: 3,
      image: AppImages.carHatchback,
      name: 'Hatchback',
    },
    {
      id: 4,
      image: AppImages.carSuv,
      name: 'SUV',
    },
    {
      id: 5,
      image: AppImages.carSedan,
      name: 'Sedan',
    },
    {
      id: 6,
      image: AppImages.carHatchback,
      name: 'Hatchback',
    },
  ];

  const carBrands = [
    {id: 1, brandName: 'Toyota'},
    {id: 2, brandName: 'Honda'},
    {id: 3, brandName: 'Ford'},
    {id: 4, brandName: 'Chevrolet'},
    {id: 5, brandName: 'BMW'},
    {id: 6, brandName: 'Mercedes-Benz'},
    {id: 7, brandName: 'Audi'},
    {id: 8, brandName: 'Volkswagen'},
    {id: 9, brandName: 'Hyundai'},
    {id: 10, brandName: 'Nissan'},
  ];

  const bmwModels = [
    {id: 1, modelName: 'BMW 1 Series'},
    {id: 2, modelName: 'BMW 2 Series'},
    {id: 3, modelName: 'BMW 3 Series'},
    {id: 4, modelName: 'BMW 4 Series'},
    {id: 5, modelName: 'BMW 5 Series'},
    {id: 6, modelName: 'BMW 6 Series'},
    {id: 7, modelName: 'BMW 7 Series'},
    {id: 8, modelName: 'BMW 8 Series'},
    {id: 9, modelName: 'BMW X1'},
    {id: 10, modelName: 'BMW X2'},
    {id: 11, modelName: 'BMW X3'},
    {id: 12, modelName: 'BMW X4'},
    {id: 13, modelName: 'BMW X5'},
    {id: 14, modelName: 'BMW X6'},
    {id: 15, modelName: 'BMW X7'},
    {id: 16, modelName: 'BMW Z4'},
    {id: 17, modelName: 'BMW i3'},
    {id: 18, modelName: 'BMW i4'},
    {id: 19, modelName: 'BMW i8'},
    {id: 20, modelName: 'BMW iX'},
  ];

  const carColors = [
    {id: 1, colorName: 'black'},
    {id: 2, colorName: 'white'},
    {id: 3, colorName: 'silver'},
    {id: 4, colorName: 'gray'},
    {id: 5, colorName: 'blue'},
    {id: 6, colorName: 'red'},
    {id: 7, colorName: 'green'},
    {id: 8, colorName: 'yellow'},
    {id: 9, colorName: 'orange'},
    {id: 10, colorName: 'brown'},
    {id: 11, colorName: 'purple'},
    {id: 12, colorName: 'pink'},
    {id: 13, colorName: 'gold'},
    {id: 14, colorName: 'beige'},
    {id: 15, colorName: 'maroon'},
  ];

  const SpacingComponents = (width: number) => {
    const spacingComponent = useMemo(() => {
      return <Spacer width={responsiveWidth(width)} />;
    }, [width]);

    return spacingComponent;
  };

  const RightComponent = () => {
    const rightComponent = useMemo(() => {
      return (
        <FastImage
          resizeMode="contain"
          source={AppImages.downArrow}
          style={styles.downArrow}
        />
      );
    }, []);

    return rightComponent;
  };

  return (
    <View style={styles.mainContainer}>
      <Header
        leftIconPress={() => goBack()}
        leftIcon={AppImages.backBtn}
        title={AppStrings.addAVehicle}
      />
      <Text style={styles.notHaveText}>{AppStrings.selectYourVehicle}</Text>
      <View
        style={{
          marginVertical: responsiveHeight(4),
        }}>
        <FlatList
          horizontal
          keyExtractor={(item: any) => item?.id.toString()}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => SpacingComponents(2)}
          ListFooterComponent={() => SpacingComponents(5)}
          ListHeaderComponent={() => SpacingComponents(5)}
          data={data}
          renderItem={props => (
            <CarCard
              {...props}
              selectedIndex={selectedIndex}
              setSelectedIndex={setSelectedIndex}
            />
          )}
        />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.innerContainer}>
        <TextField
          editable={false}
          label={AppStrings.brand}
          placeholder={AppStrings.selectBrand}
          value={brandName}
          onChangeText={(text: string) => {
            setBrandName(text.trimStart());
          }}
          keyboardType="email-address"
          autoCapitalize={'none'}
          ReturnKeyType={'done'}
          maxLength={60}
          RightComp={RightComponent}
          onTouchEnd={() => {
            setShowBrand(!showBrand);
          }}
          containerStyle={{
            borderBottomLeftRadius: showBrand ? 0 : 16,
            borderBottomRightRadius: showBrand ? 0 : 16,
            marginVertical: 0,
            marginTop: 5,
          }}
        />
        {showBrand && (
          <View style={styles.dropsView}>
            <ScrollView showsVerticalScrollIndicator={false}>
              {carBrands?.map(item => (
                <TouchableOpacity
                  onPress={() => {
                    setBrandName(item?.brandName);
                    setShowBrand(false);
                  }}
                  activeOpacity={0.7}
                  style={styles.dropView}>
                  <Text style={styles.signUpText}>{item?.brandName}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        )}
        <Spacer height={responsiveHeight(2)} />
        <TextField
          editable={false}
          label={AppStrings.model}
          placeholder={AppStrings.selectModel}
          value={modelName}
          onChangeText={(text: string) => {
            setModelName(text.trimStart());
            setShowModel(false);
          }}
          autoCapitalize={'none'}
          maxLength={60}
          RightComp={RightComponent}
          onTouchEnd={() => {
            setShowModel(!showModel);
          }}
          containerStyle={{
            borderBottomLeftRadius: showModel ? 0 : 16,
            borderBottomRightRadius: showModel ? 0 : 16,
            marginVertical: 0,
            marginTop: 5,
          }}
        />
        {showModel && (
          <View style={styles.dropsView}>
            <ScrollView showsVerticalScrollIndicator={false}>
              {bmwModels?.map(item => (
                <TouchableOpacity
                  onPress={() => {
                    setModelName(item?.modelName);
                    setShowModel(false);
                  }}
                  activeOpacity={0.7}
                  style={styles.dropView}>
                  <Text style={styles.signUpText}>{item?.modelName}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        )}
        <Spacer height={responsiveHeight(2)} />
        <TextField
          label={AppStrings.plateNumber}
          placeholder={AppStrings.enterVehicleNumber}
          value={plateNumber}
          onChangeText={(text: string) => {
            setPlateNumber(text.trimStart());
          }}
          autoCapitalize={'none'}
          ReturnKeyType={'done'}
          maxLength={15}
        />
        <Spacer height={responsiveHeight(2)} />
        <Text style={styles.labelText}>{AppStrings.selectColor}</Text>
        <View>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal
            contentContainerStyle={styles.colorView}>
            {carColors.map(item => (
              <TouchableOpacity
                activeOpacity={0.7}
                style={[
                  styles.colorStyle,
                  {
                    backgroundColor: item.colorName,
                  },
                ]}
              />
            ))}
          </ScrollView>
        </View>
        <Spacer flex={0.5} />
        <Button
          onPress={() => {
            navigate(AppRoutes.bottomTabRoutes);
          }}
          title={AppStrings.saveVehicle}
          style={{width: responsiveWidth(70)}}
        />
        <Spacer flex={1} />
      </ScrollView>
    </View>
  );
};

export default AddAVehicle;
