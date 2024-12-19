import { combineReducers, configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './reducers/favoritesSlice';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  favorites: favoritesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware:() => []
});

export const persistor = persistStore(store);

export default store;