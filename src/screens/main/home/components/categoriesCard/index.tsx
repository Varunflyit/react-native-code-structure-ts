import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import FastImage from 'react-native-fast-image';

const CategoriesCard = (props: any) => {
  const {item} = props;

  return (
    <TouchableOpacity
      onPress={() => {}}
      activeOpacity={0.7}
      style={{
        ...styles.mainContainer,
      }}>
      <FastImage
        resizeMode="stretch"
        source={item?.image}
        style={styles.imageStyle}
      />
      <View style={styles.bottomView}>
        <Text
          style={{
            ...styles.carWashStyle,
          }}>
          {item?.name}
        </Text>
        <Text
          style={{
            ...styles.descriptionStyle,
          }}>
          {item?.description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoriesCard;
