import Toast from 'react-native-toast-message';

export const showToast = (type: string, message: string, message2?: string) => {
  Toast.show({
    type: type,
    text1: message,
    text2: message2,
  });
};
