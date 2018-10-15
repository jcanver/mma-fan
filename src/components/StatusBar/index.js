import React from 'react'
import { View, Platform, StyleSheet, StatusBar } from 'react-native'
import { isIphone10 } from 'src/utilities/globals'
import theme from 'src/theme'

const STATUSBAR_HEIGHT = Platform.OS === 'ios'
  ? (isIphone10 ? 0 : 22)
  : StatusBar.currentHeight

class StatusBarComponent extends React.PureComponent {

  render() {
    return (
      <View style={styles.statusBar}>
        <StatusBar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT,
    backgroundColor: theme.offWhite,
    opacity: 1,
    zIndex: 150,
    borderBottomWidth: 1,
    borderColor: theme.border
  }
})

export default StatusBarComponent
