/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {FlatList, ScrollView, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import Spacer from '../../../components/spacer';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import {AppImages} from '../../../themes/appImages';
import FastImage from 'react-native-fast-image';
import {appColors} from '../../../themes/appColor';
import ButtonView from './components/buttonView';
import BottomView from './components/bottomView';
import TopView from './components/topView';
import {goBack} from '../../../routes/navigationServices';

const ServiceDetails: React.FC = () => {
  const data = [
    {id: 1, image: AppImages.dummy1},
    {id: 2, image: AppImages.dummy1},
    {id: 3, image: AppImages.dummy1},
    {id: 4, image: AppImages.dummy1},
    {id: 5, image: AppImages.dummy1},
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const onViewableItemsChanged = ({viewableItems}: any) => {
    if (viewableItems?.length > 0) {
      setActiveIndex(viewableItems[0].index);
    }
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.outerView}>
        <TouchableOpacity
          onPress={() => {
            goBack();
          }}
          style={styles.iconContainer}>
          <FastImage
            source={AppImages.backBtn}
            style={styles.leftIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <View style={styles.sliderView}>
          {data?.map((item, index) => {
            return (
              <View
                key={Math.random().toString()}
                style={[
                  styles.slider,
                  {
                    backgroundColor:
                      activeIndex === index
                        ? appColors.white
                        : appColors.white60,
                  },
                ]}
              />
            );
          })}
        </View>
        <FlatList
          horizontal
          pagingEnabled
          viewabilityConfig={{
            itemVisiblePercentThreshold: 100,
          }}
          onViewableItemsChanged={onViewableItemsChanged}
          keyExtractor={(item: any) => item?.id.toString()}
          showsHorizontalScrollIndicator={false}
          data={data}
          renderItem={({item}) => (
            <FastImage
              resizeMode="stretch"
              source={item?.image}
              style={styles.imagesStyle}
            />
          )}
          contentContainerStyle={styles.imagesView}
        />
      </View>

      <View style={styles.innerContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}>
          <Spacer height={responsiveHeight(3)} />
          <TopView />
          <Spacer
            backgroundColor={appColors.textFielplaceholderColor}
            height={0.5}
            marginVertical={16}
          />
          <BottomView />
          <ButtonView />
          <Spacer height={responsiveHeight(8)} />
        </ScrollView>
      </View>
    </View>
  );
};

export default ServiceDetails;
