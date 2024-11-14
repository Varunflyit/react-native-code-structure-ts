import {
  KeyboardTypeOptions,
  ReturnKeyTypeOptions,
  StyleProp,
  TextInput,
  TextStyle,
  ViewStyle,
} from 'react-native';

export interface TextFieldProps {
  label: string;
  rightLabel?: string;
  rightLabelPress?: () => void;
  enter?: boolean;
  multiline?: boolean;
  editable?: boolean;
  search?: () => void;
  inputRef?: (value: TextInput | null) => void;
  onTouchEnd?: () => void;
  showCharLimit?: boolean;
  charLimitStyle?: StyleProp<TextStyle>;
  textContainerStyle?: StyleProp<ViewStyle>;
  autoFocus?: boolean;
  ReturnKeyType?: ReturnKeyTypeOptions;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  keyboardType?: KeyboardTypeOptions | undefined;
  maxLetters?: number;
  maxLength?: number;
  value?: string | undefined;
  placeholder?: string;
  secureTextEntry?: boolean;
  onChangeText: (text: string) => void;
  rightLabelStyle?: StyleProp<TextStyle>;
  nextField?: () => void;
  labelStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  labelContainerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  textContentType?:
    | 'none'
    | 'URL'
    | 'addressCity'
    | 'addressCityAndState'
    | 'addressState'
    | 'countryName'
    | 'creditCardNumber'
    | 'creditCardExpiration'
    | 'creditCardExpirationMonth'
    | 'creditCardExpirationYear'
    | 'creditCardSecurityCode'
    | 'creditCardType'
    | 'creditCardName'
    | 'creditCardGivenName'
    | 'creditCardMiddleName'
    | 'creditCardFamilyName'
    | 'emailAddress'
    | 'familyName'
    | 'fullStreetAddress'
    | 'givenName'
    | 'jobTitle'
    | 'location'
    | 'middleName'
    | 'name'
    | 'namePrefix'
    | 'nameSuffix'
    | 'nickname'
    | 'organizationName'
    | 'postalCode'
    | 'streetAddressLine1'
    | 'streetAddressLine2'
    | 'sublocality'
    | 'telephoneNumber'
    | 'username'
    | 'password'
    | 'newPassword'
    | 'oneTimeCode'
    | 'birthdate'
    | 'birthdateDay'
    | 'birthdateMonth'
    | 'birthdateYear'
    | undefined;
}
