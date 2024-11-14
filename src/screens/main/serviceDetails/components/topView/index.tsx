import React from 'react';
import {Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {AppImages} from '../../../../../themes/appImages';
import styles from './styles';

const TopView = () => {
  return (
    <>
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
        <Text style={styles.carWashStyle}>{'(130 Reviews)'}</Text>
      </View>
      <Text style={styles.titleStyle}>
        {'Hybrid Ceramic & Interior with Underbody'}
      </Text>
      <Text style={styles.descStyle2}>{'Time Duration: 2 hrs'}</Text>
      <Text style={styles.descStyle}>
        {
          'Hybrid Ceramic spray along with Exterior & Interior cleaning plus Underbody. This service has covered from all sides and more, what else does car need!'
        }
      </Text>
    </>
  );
};

export default TopView;
