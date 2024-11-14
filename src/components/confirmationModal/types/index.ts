import {StyleProp, TextStyle, ViewStyle} from 'react-native';
import {ImageStyle, Source} from 'react-native-fast-image';

export interface ConfirmationModalProps {
  visible?: boolean;
  backClose?: () => void;
  onClose?: () => void;
  onSubmit?: () => void;
  topRightIconPress?: () => void;
  title0?: string;
  title?: string;
  title1?: string;
  subTitle?: string;
  cancelText?: string;
  okText?: string;
  heading?: string;
  customButtonStyle?: StyleProp<ViewStyle>;
  customButtonTextStyle?: StyleProp<TextStyle>;
  customCrossStyle?: StyleProp<ViewStyle>;
  customWhiteContainerStyle?: StyleProp<ViewStyle>;
  customTopRightIconStyle?: StyleProp<ImageStyle>;
  customImageStyle?: StyleProp<ImageStyle>;
  customTitleStyle?: StyleProp<TextStyle>;
  customHeadingStyle?: StyleProp<TextStyle>;
  topRightIcon?: Source;
  customSubTitleStyle?: StyleProp<TextStyle>;
  logo?: Source;
}
