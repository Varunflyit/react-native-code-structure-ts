import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

const ReferEarnView = (props: any) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.nameText}>{props?.title}</Text>
      <Text style={styles.dateText}>{props?.desc}</Text>
    </View>
  );
};

export default ReferEarnView;
