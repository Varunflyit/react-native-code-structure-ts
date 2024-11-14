import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import FastImage from 'react-native-fast-image';
import {AppImages} from '../../../../../themes/appImages';
import Button from '../../../../../components/button';
import {AppRoutes, AppStrings} from '../../../../../themes/appConstans';
import {navigate} from '../../../../../routes/navigationServices';

const ServiceCard = ({item}: any) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => navigate(AppRoutes.serviceDetails)}
      style={styles.mainContainer}>
      <FastImage
        resizeMode="stretch"
        source={AppImages.dummy}
        style={styles.imageStyle}
      />
      <View style={styles.bottomView}>
        <View style={styles.topView}>
          <FastImage
            resizeMode="stretch"
            source={AppImages.star}
            style={styles.starStyle}
          />
          <FastImage
            resizeMode="stretch"
            source={AppImages.star}
            style={styles.starStyle}
          />
          <FastImage
            resizeMode="stretch"
            source={AppImages.star}
            style={styles.starStyle}
          />
          <FastImage
            resizeMode="stretch"
            source={AppImages.star}
            style={styles.starStyle}
          />
          <FastImage
            resizeMode="stretch"
            source={AppImages.star}
            style={styles.starStyle}
          />
          <Text style={styles.carWashStyle}>{item?.reviews}</Text>
        </View>
        <Text style={styles.titleStyle}>{item?.description}</Text>
        <Text style={styles.descStyle2}>
          <Text style={styles.descStyle}>{item?.originalPrice}</Text>{' '}
          {item?.discountedPrice}
        </Text>
        <Button
          onPress={() => {}}
          title={AppStrings.add}
          style={styles.btnStyle}
          textStyle={styles.textStyle}
        />
      </View>
    </TouchableOpacity>
  );
};

export default ServiceCard;
