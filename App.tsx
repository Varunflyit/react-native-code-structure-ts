import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {Platform, StatusBar, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import KeyboardManager from 'react-native-keyboard-manager';
import AppRouter from './src/routes/appRouter';
import Toast from 'react-native-toast-message';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Loader from './src/components/loader';
import {persistor, store} from './src/redux/store';
import {LogBox} from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

function App(): React.JSX.Element {
  useEffect(() => {
    if (Platform.OS === 'ios') {
      KeyboardManager.setEnable(true);
      KeyboardManager.setKeyboardDistanceFromTextField(0);
    }
    setTimeout(() => {
      SplashScreen.hide();
    }, 1500);
  }, []);

  return (
    <View style={{flex: 1}}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StatusBar
            barStyle="light-content"
            backgroundColor="transparent"
            translucent={true}
          />
          <AppRouter />
          <Toast />
          <Loader />
        </PersistGate>
      </Provider>
    </View>
  );
}

export default App;
