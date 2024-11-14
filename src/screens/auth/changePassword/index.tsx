import React, {useState} from 'react';
import {View} from 'react-native';
import styles from './styles';
import {AppStrings} from '../../../themes/appConstans';
import Header from '../../../components/header';
import TextField from '../../../components/textField';
import Spacer from '../../../components/spacer';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import Button from '../../../components/button';
import {AppImages} from '../../../themes/appImages';
import {goBack} from '../../../routes/navigationServices';
import {ValidationConstants} from '../../../themes/validationConstants';
import {validatePassword} from '../../../utils/validator';
import {showToast} from '../../../helpers/showToast';
import {useRoute} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {changePasswordAction} from '../../../redux/actions/auth';

const ChangePassword: React.FC = () => {
  const route = useRoute();
  const dispatch = useDispatch();
  const {mobile_number} = route.params;
  const [password, setPassword] = useState<string>('');

  const onSubmitPress = () => {
    let showErrorMessage = '';
    if (password === '' || password.trim().length === 0) {
      showErrorMessage = ValidationConstants.emptyPassword;
    } else if (password.length < 8) {
      showErrorMessage = ValidationConstants.shortPassword;
    } else if (!validatePassword(password.trim())) {
      showErrorMessage = ValidationConstants.invalidPasswordNew;
    }
    if (showErrorMessage) {
      showToast('error', showErrorMessage);
      return;
    }
    dispatch(
      changePasswordAction({
        mobile_number,
        password,
      }),
    );
  };

  return (
    <View style={styles.mainContainer}>
      <Header
        leftIconPress={() => goBack()}
        leftIcon={AppImages.backBtn}
        title={AppStrings.changePassword}
      />
      <View style={styles.innerContainer}>
        <Spacer height={responsiveHeight(1)} />
        <TextField
          autoCapitalize={'none'}
          maxLength={60}
          secureTextEntry
          label={AppStrings.password}
          placeholder={AppStrings.enterPassword}
          value={password}
          onChangeText={(text: string) => {
            setPassword(text.trimStart());
          }}
          ReturnKeyType={'done'}
        />
        <Spacer height={responsiveHeight(9)} />
        <Button onPress={onSubmitPress} title={AppStrings.submit} />
        <Spacer height={responsiveHeight(5)} />
        <Spacer flex={1} />
      </View>
    </View>
  );
};

export default ChangePassword;
