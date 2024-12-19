import { StyleSheet } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import FavoritesComponent from './src/components/FavoritesComponent'
import store, { persistor } from './src/reduxStore/store'

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <FavoritesComponent />
      </PersistGate>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})