import React from 'react'
import { StyleSheet, View } from 'react-native'
import { AppLoading, Asset, Font, Icon } from 'expo'
import { Provider } from 'react-redux'
import StatusBar from './src/components/StatusBar'
import AppNavigator from './src/navigation/AppNavigator'

import './src/utilities/logger'
import './src/theme'
import configureStore from './src/redux/store'

// Turn off Remote Debugger running in background warning
console.ignoredYellowBox = ['Remote debugger']

const { store } = configureStore();

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  }

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    }
      return (
        <View style={styles.container}>
          <StatusBar />
          <Provider store={store}>
            <AppNavigator />
          </Provider>
        </View>
      );

  }

  _loadResourcesAsync = async () => Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
        'proxima-soft-regular': require('./assets/fonts/Proxima-Soft-Regular.ttf'),
        'proxima-soft-bold': require('./assets/fonts/Proxima-Soft-Bold.ttf'),
        'proxima-soft-semi-bold': require('./assets/fonts/Proxima-Soft-Semibold.ttf'),
        'proxima-soft-extra-bold': require('./assets/fonts/Proxima-Soft-Extrabold.ttf'),
        'proxima-soft-boldest': require('./assets/fonts/Proxima-Soft-Black.ttf')
      }),
    ]);

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
