import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {AppStrings} from '../../../../../themes/appConstans';
import FastImage from 'react-native-fast-image';
import {AppImages} from '../../../../../themes/appImages';
import styles from './styles';

const BottomView = () => {
  const data1 = [
    {id: 1, title: 'Door step'},
    {id: 2, title: 'Own power Source'},
    {id: 3, title: 'Hybrid Ceramic Coat'},
    {id: 4, title: 'High Pressure Wash'},
    {id: 5, title: 'Shampoo Cleaning'},
    {id: 6, title: 'Under Body Cleaning'},
    {id: 7, title: 'Vacuum Cleaning'},
    {id: 8, title: 'Dashboard Polish'},
    {id: 9, title: '4 Paper Mats'},
    {id: 10, title: 'Tyre Polish'},
  ];
  return (
    <>
      <Text style={styles.title2}>{AppStrings.includedServices}</Text>
      <FlatList
        scrollEnabled={false}
        keyExtractor={(item: any) => item?.id.toString()}
        showsHorizontalScrollIndicator={false}
        data={data1}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapperStyle}
        renderItem={({item}) => (
          <View style={styles.servicesItem}>
            <FastImage
              resizeMode="stretch"
              source={AppImages.tickCircle}
              style={styles.starStyle}
            />
            <Text numberOfLines={2} style={styles.title3}>
              {item?.title}
            </Text>
          </View>
        )}
        contentContainerStyle={styles.imagesView1}
      />
    </>
  );
};

export default BottomView;
