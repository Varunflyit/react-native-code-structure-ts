import AsyncStorage from '@react-native-async-storage/async-storage';

export const token = async () => await AsyncStorage.getItem('token');
export const setToken = async (data: string) =>
  await AsyncStorage.setItem('token', data);
