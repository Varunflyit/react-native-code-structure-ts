/* eslint-disable react-native/no-inline-styles */
import React, {useMemo, useState} from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import {AppStrings} from '../../../themes/appConstans';
import Header from '../../../components/header';
import Spacer from '../../../components/spacer';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import {AppImages} from '../../../themes/appImages';
import FastImage from 'react-native-fast-image';
import TextField from '../../../components/textField';

const Profile: React.FC = () => {
  const [name, setName] = useState<string>('Larry Davis');
  const [number, setNumber] = useState<string>('8452759521');
  const [email, setEmail] = useState<string>('LarryDavis@gmail.com');
  const [address, setAddress] = useState<string>('Mohali Tower, Punjab 140308');

  const LeftComponent = () => {
    const leftComponent = useMemo(() => {
      return (
        <View>
          <View style={styles.lineStyle} />
          <Text style={styles.codeText}>+91</Text>
        </View>
      );
    }, []);

    return leftComponent;
  };

  return (
    <View style={styles.mainContainer}>
      <Header title={AppStrings.profile} />
      <View style={styles.innerContainer}>
        <FastImage source={AppImages.profileIcon} style={styles.profileIcon} />
        <Spacer height={responsiveHeight(0.5)} />
        <Text style={styles.nameText}>{'Larry Davis'}</Text>
        <View style={{width: '100%'}}>
          <Spacer height={responsiveHeight(2)} />
          <TextField
            editable={false}
            maxLength={40}
            value={name}
            onChangeText={(text: string) => {
              setName(text.trimStart());
            }}
            label={AppStrings.name}
            placeholder={AppStrings.enterYourName}
            ReturnKeyType={'next'}
          />
          <Spacer height={responsiveHeight(2)} />
          <TextField
            editable={false}
            maxLength={10}
            label={AppStrings.mobileNumber}
            placeholder={'XXXXXXXXXX'}
            value={number}
            onChangeText={(text: string) => {
              setNumber(text.trimStart());
            }}
            LeftComp={LeftComponent}
            ReturnKeyType={'next'}
          />
          <Spacer height={responsiveHeight(2)} />
          <TextField
            editable={false}
            keyboardType="email-address"
            autoCapitalize={'none'}
            maxLength={60}
            label={AppStrings.email2}
            placeholder={AppStrings.enterYourEmail}
            value={email}
            onChangeText={(text: string) => {
              setEmail(text.trimStart());
            }}
            ReturnKeyType={'done'}
          />
          <Spacer height={responsiveHeight(2)} />
          <TextField
            editable={false}
            maxLength={1000}
            multiline={true}
            label={AppStrings.address}
            placeholder={AppStrings.address}
            value={address}
            onChangeText={(text: string) => {
              setAddress(text.trimStart());
            }}
            inputStyle={styles.inputStyle}
            textContainerStyle={styles.textContainerStyle}
          />
        </View>
      </View>
    </View>
  );
};

export default Profile;
