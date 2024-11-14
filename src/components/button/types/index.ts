import {StyleProp, TextStyle, ViewStyle} from 'react-native';

export interface buttonProps {
  onPress?: () => void;
  disabled?: boolean;
  title: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  loading?: boolean;
  indicatorColor?: string;
  outerContainer?: object;
  noGradient?: boolean;
  innerStyle?: StyleProp<ViewStyle>;
}
