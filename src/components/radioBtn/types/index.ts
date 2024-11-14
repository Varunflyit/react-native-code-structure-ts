import {StyleProp, ViewStyle} from 'react-native';

export interface RadioBtnProps {
  onBtnPress: () => void;
  activeRadio?: boolean;
  customOuterStyle?: StyleProp<ViewStyle>;
  radioBorderStyle?: StyleProp<ViewStyle>;
  disabledColor?: string;
  disabled?: boolean;
}
