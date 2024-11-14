import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

const NotificationCard = ({item}: any) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.topView}>
        <Text style={styles.carWashStyle}>{item?.type}</Text>
        <View style={styles.dotView} />
        <Text style={styles.carWashStyle}>{item?.date}</Text>
      </View>
      <Text style={styles.titleStyle}>{item?.title}</Text>
      <Text style={styles.descStyle}>{item?.description}</Text>
    </View>
  );
};

export default NotificationCard;
