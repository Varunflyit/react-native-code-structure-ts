import {ReactElement} from 'react';
import {StyleProp, TextStyle, ViewStyle} from 'react-native';
import {ImageStyle, Source} from 'react-native-fast-image';

export interface HeaderProps {
  leftIcon?: Source;
  leftIconPress?: () => void;
  leftIconStyle?: StyleProp<ImageStyle>;
  title?: string;
  tilePress?: () => void;
  titleStyle?: StyleProp<TextStyle>;
  rightIcon?: Source;
  rightIconPress?: () => void;
  rightIconStyle?: StyleProp<ImageStyle>;
  leftIconColor?: string;
  RightIconComp?: () => ReactElement;
  LeftIconComp?: () => ReactElement;
  customeContainerStyle?: StyleProp<ViewStyle>;
  centerContainerStyle?: StyleProp<ViewStyle>;
  rightStyle?: StyleProp<ViewStyle>;
  leftViewStyle?: StyleProp<ViewStyle>;
  CenterComp?: () => ReactElement;
}
