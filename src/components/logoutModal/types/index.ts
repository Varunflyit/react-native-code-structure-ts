import {StyleProp, TextStyle, ViewStyle} from 'react-native';

export interface ConfirmationModalProps {
  visible?: boolean;
  backClose?: () => void;
  onClose?: () => void;
  onSubmit?: () => void;
  title?: string;
  subTitle?: string;
  cancelText?: string;
  okText?: string;
  customButtonStyle?: StyleProp<ViewStyle>;
  customButtonTextStyle?: StyleProp<TextStyle>;
  customWhiteContainerStyle?: StyleProp<ViewStyle>;
  customTitleStyle?: StyleProp<TextStyle>;
  customSubTitleStyle?: StyleProp<TextStyle>;
}
