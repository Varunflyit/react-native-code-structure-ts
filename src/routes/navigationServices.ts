import * as React from 'react';
//NAVIGATION ACTION
import {CommonActions, StackActions} from '@react-navigation/native';

export const navigationRef = React.createRef<any>();

export const swipperRef = React.createRef();

export const navigate = (path: string, params?: any) => {
  navigationRef.current.navigate(path, params);
};

export const push = (path: string, params?: any) => {
  navigationRef.current.dispatch(StackActions.push(path, params));
};

export const goBack = () => {
  navigationRef.current.goBack();
};

export const replace = (path: string, params?: any) => {
  navigationRef.current.dispatch(StackActions.replace(path, params));
};

export const reset = (name: string, index: number) => {
  navigationRef.current.dispatch(
    CommonActions.reset({
      index: index,
      routes: [
        {
          name: name,
        },
      ],
    }),
  );
};

export const getCurrentRoute = () => {
  const route = navigationRef.current?.getCurrentRoute();
  return route?.name;
};
