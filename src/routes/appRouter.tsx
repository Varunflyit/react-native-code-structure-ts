import 'react-native-gesture-handler';
import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import AuthStack from './authStack';
import MainStack from './mainStack';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/reducers';

const AppRouter = () => {
  const token = useSelector((state: RootState) => state.userReducer.token);
  return (
    <View style={style.main}>{token ? <MainStack /> : <AuthStack />}</View>
  );
};

const style = StyleSheet.create({
  main: {
    flex: 1,
  },
});

export default AppRouter;
