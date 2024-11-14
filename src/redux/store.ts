import createSagaMiddleware from 'redux-saga';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {legacy_createStore as createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';

import rootReducer from './reducers';
import rootSaga from './sagas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// mount it on the Store
export const store = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware),
);

export let persistor = persistStore(store);

// then run the saga
sagaMiddleware.run(rootSaga);

// render the application
