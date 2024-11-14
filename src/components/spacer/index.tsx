import React, {memo} from 'react';
import {View, StyleProp, ViewStyle} from 'react-native';

const Spacer = (props: StyleProp<ViewStyle>) => {
  return <View style={props} />;
};

export default memo(Spacer);
