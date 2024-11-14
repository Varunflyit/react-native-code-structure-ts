import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

const HistoryCard = ({item}: any) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.textContainer}>
        <Text numberOfLines={2} style={styles.nameText}>
          {item?.title}
        </Text>
        <Text style={styles.dateText}>{item?.date}</Text>
      </View>
      <Text style={styles.statusText}>{item?.transaction}</Text>
    </View>
  );
};

export default HistoryCard;
