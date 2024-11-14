/* eslint-disable react-native/no-inline-styles */
import React, {useMemo, useRef, useState} from 'react';
import {DeviceEventEmitter, ScrollView, Text, View} from 'react-native';
import styles from './styles';
import {AppRoutes, AppStrings} from '../../../themes/appConstans';
import Header from '../../../components/header';
import Spacer from '../../../components/spacer';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {AppImages} from '../../../themes/appImages';
import FastImage from 'react-native-fast-image';
import TextField from '../../../components/textField';
import Button from '../../../components/button';
import {navigate} from '../../../routes/navigationServices';

const EditProfile: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [number, setNumber] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const inputRef: any = useRef<any>([]);

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
      <Header title={AppStrings.editProfile} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.innerContainer}>
        <FastImage source={AppImages.profileIcon} style={styles.profileIcon} />
        <Spacer height={responsiveHeight(1)} />
        <Text style={styles.nameText}>{AppStrings.changePicture}</Text>
        <View style={{width: '100%'}}>
          <Spacer height={responsiveHeight(2)} />
          <TextField
            inputRef={(ref: any) => (inputRef[0] = ref)}
            maxLength={40}
            value={name}
            onChangeText={(text: string) => {
              setName(text.trimStart());
            }}
            label={AppStrings.name}
            placeholder={AppStrings.enterYourName}
            ReturnKeyType={'next'}
            nextField={async () => {
              inputRef[1].focus();
            }}
          />
          <Spacer height={responsiveHeight(2)} />
          <TextField
            inputRef={(ref: any) => (inputRef[1] = ref)}
            maxLength={10}
            keyboardType="number-pad"
            label={AppStrings.mobileNumber}
            placeholder={'XXXXXXXXXX'}
            value={number}
            onChangeText={(text: string) => {
              setNumber(text.trimStart());
            }}
            LeftComp={LeftComponent}
            ReturnKeyType={'done'}
          />
          <Spacer height={responsiveHeight(2)} />
          <TextField
            inputRef={(ref: any) => (inputRef[2] = ref)}
            label={AppStrings.password}
            placeholder={AppStrings.enterPassword}
            value={password}
            maxLength={20}
            secureTextEntry={true}
            onChangeText={(text: string) => {
              setPassword(text.trimStart());
            }}
            ReturnKeyType={'next'}
            nextField={async () => {
              inputRef[3].focus();
            }}
          />
          <Spacer height={responsiveHeight(2)} />
          <TextField
            inputRef={(ref: any) => (inputRef[3] = ref)}
            label={AppStrings.confirmPassword}
            placeholder={AppStrings.reEnterYourPassword}
            value={confirmPassword}
            maxLength={20}
            secureTextEntry={true}
            onChangeText={(text: string) => {
              setConfirmPassword(text.trimStart());
            }}
            ReturnKeyType={'next'}
            nextField={async () => {
              inputRef[4].focus();
            }}
          />
          <Spacer height={responsiveHeight(2)} />
          <TextField
            inputRef={(ref: any) => (inputRef[4] = ref)}
            keyboardType="email-address"
            autoCapitalize={'none'}
            maxLength={60}
            label={AppStrings.email2}
            placeholder={AppStrings.enterYourEmail}
            value={email}
            onChangeText={(text: string) => {
              setEmail(text.trimStart());
            }}
            ReturnKeyType={'next'}
            nextField={async () => {
              inputRef[5].focus();
            }}
          />
          <Spacer height={responsiveHeight(2)} />
          <TextField
            inputRef={(ref: any) => (inputRef[5] = ref)}
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
            ReturnKeyType={'done'}
          />
        </View>
        <Spacer height={responsiveHeight(3)} />
        <Button
          onPress={() => {
            navigate(AppRoutes.bottomTabRoutes, {
              screen: AppRoutes.profile,
            });
            DeviceEventEmitter.emit('setBottomIndex', 4);
          }}
          title={AppStrings.update}
          style={{width: responsiveWidth(70)}}
        />

        <Spacer height={responsiveHeight(6)} />
      </ScrollView>
    </View>
  );
};

export default EditProfile;
